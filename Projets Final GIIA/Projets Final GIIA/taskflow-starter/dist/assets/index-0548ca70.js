(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},ms=[],en=()=>{},Ap=()=>!1,ba=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Yc=t=>t.startsWith("onUpdate:"),et=Object.assign,Jc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qy=Object.prototype.hasOwnProperty,Pe=(t,e)=>qy.call(t,e),oe=Array.isArray,gs=t=>Ki(t)==="[object Map]",Ra=t=>Ki(t)==="[object Set]",nd=t=>Ki(t)==="[object Date]",fe=t=>typeof t=="function",Ye=t=>typeof t=="string",_n=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",bp=t=>(Oe(t)||fe(t))&&fe(t.then)&&fe(t.catch),Rp=Object.prototype.toString,Ki=t=>Rp.call(t),Hy=t=>Ki(t).slice(8,-1),Sp=t=>Ki(t)==="[object Object]",Sa=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fi=Qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ca=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wy=/-\w/g,zt=Ca(t=>t.replace(Wy,e=>e.slice(1).toUpperCase())),Gy=/\B([A-Z])/g,Xr=Ca(t=>t.replace(Gy,"-$1").toLowerCase()),Pa=Ca(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cl=Ca(t=>t?`on${Pa(t)}`:""),dr=(t,e)=>!Object.is(t,e),Lo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Cp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ka=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ky=t=>{const e=Ye(t)?Number(t):NaN;return isNaN(e)?t:e};let rd;const Da=()=>rd||(rd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ct(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ye(r)?Jy(r):Ct(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ye(t)||Oe(t))return t}const zy=/;(?![^(]*\))/g,Qy=/:([^]+)/,Yy=/\/\*[^]*?\*\//g;function Jy(t){const e={};return t.replace(Yy,"").split(zy).forEach(n=>{if(n){const r=n.split(Qy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Na(t){let e="";if(Ye(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=Na(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Xy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zy=Qc(Xy);function Pp(t){return!!t||t===""}function ev(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Oa(t[r],e[r]);return n}function Oa(t,e){if(t===e)return!0;let n=nd(t),r=nd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=_n(t),r=_n(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?ev(t,e):!1;if(n=Oe(t),r=Oe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Oa(t[o],e[o]))return!1}}return String(t)===String(e)}function tv(t,e){return t.findIndex(n=>Oa(n,e))}const kp=t=>!!(t&&t.__v_isRef===!0),Ue=t=>Ye(t)?t:t==null?"":oe(t)||Oe(t)&&(t.toString===Rp||!fe(t.toString))?kp(t)?Ue(t.value):JSON.stringify(t,Dp,2):String(t),Dp=(t,e)=>kp(e)?Dp(t,e.value):gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Pl(r,i)+" =>"]=s,n),{})}:Ra(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pl(n))}:_n(e)?Pl(e):Oe(e)&&!oe(e)&&!Sp(e)?String(e):e,Pl=(t,e="")=>{var n;return _n(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class Np{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){++this._on===1&&(this.prevScope=yt,yt=this)}off(){this._on>0&&--this._on===0&&(yt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Op(t){return new Np(t)}function Vp(){return yt}function nv(t,e=!1){yt&&yt.cleanups.push(t)}let Me;const kl=new WeakSet;class xp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,kl.has(this)&&(kl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sd(this),Fp(this);const e=Me,n=tn;Me=this,tn=!0;try{return this.fn()}finally{Up(this),Me=e,tn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)eu(e);this.deps=this.depsTail=void 0,sd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?kl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){oc(this)&&this.run()}get dirty(){return oc(this)}}let Mp=0,pi,mi;function Lp(t,e=!1){if(t.flags|=8,e){t.next=mi,mi=t;return}t.next=pi,pi=t}function Xc(){Mp++}function Zc(){if(--Mp>0)return;if(mi){let e=mi;for(mi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;pi;){let e=pi;for(pi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Fp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Up(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),eu(r),rv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function oc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function jp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ci)||(t.globalVersion=Ci,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!oc(t))))return;t.flags|=2;const e=t.dep,n=Me,r=tn;Me=t,tn=!0;try{Fp(t);const s=t.fn(t._value);(e.version===0||dr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,tn=r,Up(t),t.flags&=-3}}function eu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)eu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function rv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let tn=!0;const Bp=[];function Un(){Bp.push(tn),tn=!1}function jn(){const t=Bp.pop();tn=t===void 0?!0:t}function sd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let Ci=0;class sv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Me||!tn||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new sv(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,$p(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,Ci++,this.notify(e)}notify(e){Xc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zc()}}}function $p(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)$p(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Xo=new WeakMap,$r=Symbol(""),ac=Symbol(""),Pi=Symbol("");function Et(t,e,n){if(tn&&Me){let r=Xo.get(t);r||Xo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new tu),s.map=r,s.key=n),s.track()}}function Sn(t,e,n,r,s,i){const o=Xo.get(t);if(!o){Ci++;return}const l=c=>{c&&c.trigger()};if(Xc(),e==="clear")o.forEach(l);else{const c=oe(t),u=c&&Sa(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Pi||!_n(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Pi)),e){case"add":c?u&&l(o.get("length")):(l(o.get($r)),gs(t)&&l(o.get(ac)));break;case"delete":c||(l(o.get($r)),gs(t)&&l(o.get(ac)));break;case"set":gs(t)&&l(o.get($r));break}}Zc()}function iv(t,e){const n=Xo.get(t);return n&&n.get(e)}function as(t){const e=Ae(t);return e===t?e:(Et(e,"iterate",Pi),$t(t)?e:e.map(sn))}function Va(t){return Et(t=Ae(t),"iterate",Pi),t}function sr(t,e){return Bn(t)?On(t)?ws(sn(e)):ws(e):sn(e)}const ov={__proto__:null,[Symbol.iterator](){return Dl(this,Symbol.iterator,t=>sr(this,t))},concat(...t){return as(this).concat(...t.map(e=>oe(e)?as(e):e))},entries(){return Dl(this,"entries",t=>(t[1]=sr(this,t[1]),t))},every(t,e){return Tn(this,"every",t,e,void 0,arguments)},filter(t,e){return Tn(this,"filter",t,e,n=>n.map(r=>sr(this,r)),arguments)},find(t,e){return Tn(this,"find",t,e,n=>sr(this,n),arguments)},findIndex(t,e){return Tn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tn(this,"findLast",t,e,n=>sr(this,n),arguments)},findLastIndex(t,e){return Tn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Nl(this,"includes",t)},indexOf(...t){return Nl(this,"indexOf",t)},join(t){return as(this).join(t)},lastIndexOf(...t){return Nl(this,"lastIndexOf",t)},map(t,e){return Tn(this,"map",t,e,void 0,arguments)},pop(){return Zs(this,"pop")},push(...t){return Zs(this,"push",t)},reduce(t,...e){return id(this,"reduce",t,e)},reduceRight(t,...e){return id(this,"reduceRight",t,e)},shift(){return Zs(this,"shift")},some(t,e){return Tn(this,"some",t,e,void 0,arguments)},splice(...t){return Zs(this,"splice",t)},toReversed(){return as(this).toReversed()},toSorted(t){return as(this).toSorted(t)},toSpliced(...t){return as(this).toSpliced(...t)},unshift(...t){return Zs(this,"unshift",t)},values(){return Dl(this,"values",t=>sr(this,t))}};function Dl(t,e,n){const r=Va(t),s=r[e]();return r!==t&&!$t(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const av=Array.prototype;function Tn(t,e,n,r,s,i){const o=Va(t),l=o!==t&&!$t(t),c=o[e];if(c!==av[e]){const p=c.apply(t,i);return l?sn(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,sr(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function id(t,e,n,r){const s=Va(t);let i=n;return s!==t&&($t(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,sr(t,l),c,t)}),s[e](i,...r)}function Nl(t,e,n){const r=Ae(t);Et(r,"iterate",Pi);const s=r[e](...n);return(s===-1||s===!1)&&xa(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Zs(t,e,n=[]){Un(),Xc();const r=Ae(t)[e].apply(t,n);return Zc(),jn(),r}const lv=Qc("__proto__,__v_isRef,__isVue"),qp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_n));function cv(t){_n(t)||(t=String(t));const e=Ae(this);return Et(e,"has",t),e.hasOwnProperty(t)}class Hp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?vv:zp:i?Kp:Gp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let c;if(o&&(c=ov[n]))return c;if(n==="hasOwnProperty")return cv}const l=Reflect.get(e,n,Ke(e)?e:r);if((_n(n)?qp.has(n):lv(n))||(s||Et(e,"get",n),i))return l;if(Ke(l)){const c=o&&Sa(n)?l:l.value;return s&&Oe(c)?cc(c):c}return Oe(l)?s?cc(l):zi(l):l}}class Wp extends Hp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=oe(e)&&Sa(n);if(!this._isShallow){const u=Bn(i);if(!$t(r)&&!Bn(r)&&(i=Ae(i),r=Ae(r)),!o&&Ke(i)&&!Ke(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:Pe(e,n),c=Reflect.set(e,n,r,Ke(e)?e:s);return e===Ae(s)&&(l?dr(r,i)&&Sn(e,"set",n,r):Sn(e,"add",n,r)),c}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Sn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!_n(n)||!qp.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",oe(e)?"length":$r),Reflect.ownKeys(e)}}class uv extends Hp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const hv=new Wp,dv=new uv,fv=new Wp(!0);const lc=t=>t,Co=t=>Reflect.getPrototypeOf(t);function pv(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=gs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?lc:e?ws:sn;return!e&&Et(i,"iterate",c?ac:$r),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Po(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function mv(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);t||(dr(s,l)&&Et(o,"get",s),Et(o,"get",l));const{has:c}=Co(o),u=e?lc:t?ws:sn;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Ae(s),"iterate",$r),s.size},has(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);return t||(dr(s,l)&&Et(o,"has",s),Et(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ae(l),u=e?lc:t?ws:sn;return!t&&Et(c,"iterate",$r),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return et(n,t?{add:Po("add"),set:Po("set"),delete:Po("delete"),clear:Po("clear")}:{add(s){!e&&!$t(s)&&!Bn(s)&&(s=Ae(s));const i=Ae(this);return Co(i).has.call(i,s)||(i.add(s),Sn(i,"add",s,s)),this},set(s,i){!e&&!$t(i)&&!Bn(i)&&(i=Ae(i));const o=Ae(this),{has:l,get:c}=Co(o);let u=l.call(o,s);u||(s=Ae(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?dr(i,d)&&Sn(o,"set",s,i):Sn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:l}=Co(i);let c=o.call(i,s);c||(s=Ae(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Sn(i,"delete",s,void 0),u},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&Sn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=pv(s,t,e)}),n}function nu(t,e){const n=mv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const gv={get:nu(!1,!1)},_v={get:nu(!1,!0)},yv={get:nu(!0,!1)};const Gp=new WeakMap,Kp=new WeakMap,zp=new WeakMap,vv=new WeakMap;function Ev(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tv(t){return t.__v_skip||!Object.isExtensible(t)?0:Ev(Hy(t))}function zi(t){return Bn(t)?t:ru(t,!1,hv,gv,Gp)}function Qp(t){return ru(t,!1,fv,_v,Kp)}function cc(t){return ru(t,!0,dv,yv,zp)}function ru(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Tv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function On(t){return Bn(t)?On(t.__v_raw):!!(t&&t.__v_isReactive)}function Bn(t){return!!(t&&t.__v_isReadonly)}function $t(t){return!!(t&&t.__v_isShallow)}function xa(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function su(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&Cp(t,"__v_skip",!0),t}const sn=t=>Oe(t)?zi(t):t,ws=t=>Oe(t)?cc(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function Le(t){return Yp(t,!1)}function Iv(t){return Yp(t,!0)}function Yp(t,e){return Ke(t)?t:new wv(t,e)}class wv{constructor(e,n){this.dep=new tu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:sn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||$t(e)||Bn(e);e=r?e:Ae(e),dr(e,n)&&(this._rawValue=e,this._value=r?e:sn(e),this.dep.trigger())}}function wt(t){return Ke(t)?t.value:t}const Av={get:(t,e,n)=>e==="__v_raw"?t:wt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Jp(t){return On(t)?t:new Proxy(t,Av)}function bv(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=Sv(t,n);return e}class Rv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=Ae(e);let s=!0,i=e;if(!oe(e)||!Sa(String(n)))do s=!xa(i)||$t(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=wt(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ke(this._raw[this._key])){const n=this._object[this._key];if(Ke(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return iv(this._raw,this._key)}}function Sv(t,e,n){return new Rv(t,e,n)}class Cv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new tu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ci-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Lp(this,!0),!0}get value(){const e=this.dep.track();return jp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Pv(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new Cv(r,s,n)}const ko={},Zo=new WeakMap;let Vr;function kv(t,e=!1,n=Vr){if(n){let r=Zo.get(n);r||Zo.set(n,r=[]),r.push(t)}}function Dv(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=B=>s?B:$t(B)||s===!1||s===0?Cn(B,1):Cn(B);let d,p,m,v,S=!1,P=!1;if(Ke(t)?(p=()=>t.value,S=$t(t)):On(t)?(p=()=>u(t),S=!0):oe(t)?(P=!0,S=t.some(B=>On(B)||$t(B)),p=()=>t.map(B=>{if(Ke(B))return B.value;if(On(B))return u(B);if(fe(B))return c?c(B,2):B()})):fe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Un();try{m()}finally{jn()}}const B=Vr;Vr=d;try{return c?c(t,3,[v]):t(v)}finally{Vr=B}}:p=en,e&&s){const B=p,J=s===!0?1/0:s;p=()=>Cn(B(),J)}const O=Vp(),x=()=>{d.stop(),O&&O.active&&Jc(O.effects,d)};if(i&&e){const B=e;e=(...J)=>{B(...J),x()}}let V=P?new Array(t.length).fill(ko):ko;const M=B=>{if(!(!(d.flags&1)||!d.dirty&&!B))if(e){const J=d.run();if(s||S||(P?J.some((te,b)=>dr(te,V[b])):dr(J,V))){m&&m();const te=Vr;Vr=d;try{const b=[J,V===ko?void 0:P&&V[0]===ko?[]:V,v];V=J,c?c(e,3,b):e(...b)}finally{Vr=te}}}else d.run()};return l&&l(M),d=new xp(p),d.scheduler=o?()=>o(M,!1):M,v=B=>kv(B,!1,d),m=d.onStop=()=>{const B=Zo.get(d);if(B){if(c)c(B,4);else for(const J of B)J();Zo.delete(d)}},e?r?M(!0):V=d.run():o?o(M.bind(null,!0),!0):d.run(),x.pause=d.pause.bind(d),x.resume=d.resume.bind(d),x.stop=x,x}function Cn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ke(t))Cn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)Cn(t[r],e,n);else if(Ra(t)||gs(t))t.forEach(r=>{Cn(r,e,n)});else if(Sp(t)){for(const r in t)Cn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Cn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qi(t,e,n,r){try{return r?t(...r):t()}catch(s){Ma(s,e,n)}}function on(t,e,n,r){if(fe(t)){const s=Qi(t,e,n,r);return s&&bp(s)&&s.catch(i=>{Ma(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(on(t[i],e,n,r));return s}}function Ma(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Un(),Qi(i,null,10,[t,c,u]),jn();return}}Nv(t,n,s,r,o)}function Nv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Pt=[];let un=-1;const _s=[];let ir=null,us=0;const Xp=Promise.resolve();let ea=null;function La(t){const e=ea||Xp;return t?e.then(this?t.bind(this):t):e}function Ov(t){let e=un+1,n=Pt.length;for(;e<n;){const r=e+n>>>1,s=Pt[r],i=ki(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function iu(t){if(!(t.flags&1)){const e=ki(t),n=Pt[Pt.length-1];!n||!(t.flags&2)&&e>=ki(n)?Pt.push(t):Pt.splice(Ov(e),0,t),t.flags|=1,Zp()}}function Zp(){ea||(ea=Xp.then(tm))}function Vv(t){oe(t)?_s.push(...t):ir&&t.id===-1?ir.splice(us+1,0,t):t.flags&1||(_s.push(t),t.flags|=1),Zp()}function od(t,e,n=un+1){for(;n<Pt.length;n++){const r=Pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function em(t){if(_s.length){const e=[...new Set(_s)].sort((n,r)=>ki(n)-ki(r));if(_s.length=0,ir){ir.push(...e);return}for(ir=e,us=0;us<ir.length;us++){const n=ir[us];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ir=null,us=0}}const ki=t=>t.id==null?t.flags&2?-1:1/0:t.id;function tm(t){const e=en;try{for(un=0;un<Pt.length;un++){const n=Pt[un];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Qi(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;un<Pt.length;un++){const n=Pt[un];n&&(n.flags&=-2)}un=-1,Pt.length=0,em(),ea=null,(Pt.length||_s.length)&&tm()}}let Ut=null,nm=null;function ta(t){const e=Ut;return Ut=t,nm=t&&t.type.__scopeId||null,e}function Vn(t,e=Ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&sa(-1);const i=ta(e);let o;try{o=t(...s)}finally{ta(i),r._d&&sa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dn(t,e){if(Ut===null)return t;const n=Ha(Ut),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=xe]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Cn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function kr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Un(),on(c,n,8,[t.el,l,t,e]),jn())}}function Fo(t,e){if(It){let n=It.provides;const r=It.parent&&It.parent.provides;r===n&&(n=It.provides=Object.create(r)),n[t]=e}}function Kt(t,e,n=!1){const r=uu();if(r||qr){let s=qr?qr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function xv(){return!!(uu()||qr)}const Mv=Symbol.for("v-scx"),Lv=()=>Kt(Mv);function xn(t,e,n){return rm(t,e,n)}function rm(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,l=et({},n),c=e&&r||!e&&i!=="post";let u;if(Oi){if(i==="sync"){const v=Lv();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=en,v.resume=en,v.pause=en,v}}const d=It;l.call=(v,S,P)=>on(v,d,S,P);let p=!1;i==="post"?l.scheduler=v=>{Ft(v,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,S)=>{S?v():iu(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const m=Dv(t,e,l);return Oi&&(u?u.push(m):c&&m()),m}function Fv(t,e,n){const r=this.proxy,s=Ye(t)?t.includes(".")?sm(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Yi(this),l=rm(s,i.bind(r),n);return o(),l}function sm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Uv=Symbol("_vte"),im=t=>t.__isTeleport,Rn=Symbol("_leaveCb"),Do=Symbol("_enterCb");function jv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ja(()=>{t.isMounted=!0}),pm(()=>{t.isUnmounting=!0}),t}const Wt=[Function,Array],om={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Wt,onEnter:Wt,onAfterEnter:Wt,onEnterCancelled:Wt,onBeforeLeave:Wt,onLeave:Wt,onAfterLeave:Wt,onLeaveCancelled:Wt,onBeforeAppear:Wt,onAppear:Wt,onAfterAppear:Wt,onAppearCancelled:Wt},am=t=>{const e=t.subTree;return e.component?am(e.component):e},Bv={name:"BaseTransition",props:om,setup(t,{slots:e}){const n=uu(),r=jv();return()=>{const s=e.default&&um(e.default(),!0);if(!s||!s.length)return;const i=lm(s),o=Ae(t),{mode:l}=o;if(r.isLeaving)return Ol(i);const c=ad(i);if(!c)return Ol(i);let u=uc(c,o,r,n,p=>u=p);c.type!==kt&&Di(c,u);let d=n.subTree&&ad(n.subTree);if(d&&d.type!==kt&&!Mr(d,c)&&am(n).type!==kt){let p=uc(d,o,r,n);if(Di(d,p),l==="out-in"&&c.type!==kt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},Ol(i);l==="in-out"&&c.type!==kt?p.delayLeave=(m,v,S)=>{const P=cm(r,d);P[String(d.key)]=d,m[Rn]=()=>{v(),m[Rn]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function lm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==kt){e=n;break}}return e}const $v=Bv;function cm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function uc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:v,onAfterLeave:S,onLeaveCancelled:P,onBeforeAppear:O,onAppear:x,onAfterAppear:V,onAppearCancelled:M}=e,B=String(t.key),J=cm(n,t),te=(_,I)=>{_&&on(_,r,9,I)},b=(_,I)=>{const R=I[1];te(_,I),oe(_)?_.every(w=>w.length<=1)&&R():_.length<=1&&R()},y={mode:o,persisted:l,beforeEnter(_){let I=c;if(!n.isMounted)if(i)I=O||c;else return;_[Rn]&&_[Rn](!0);const R=J[B];R&&Mr(t,R)&&R.el[Rn]&&R.el[Rn](),te(I,[_])},enter(_){let I=u,R=d,w=p;if(!n.isMounted)if(i)I=x||u,R=V||d,w=M||p;else return;let T=!1;const Se=_[Do]=ze=>{T||(T=!0,ze?te(w,[_]):te(R,[_]),y.delayedLeave&&y.delayedLeave(),_[Do]=void 0)};I?b(I,[_,Se]):Se()},leave(_,I){const R=String(t.key);if(_[Do]&&_[Do](!0),n.isUnmounting)return I();te(m,[_]);let w=!1;const T=_[Rn]=Se=>{w||(w=!0,I(),Se?te(P,[_]):te(S,[_]),_[Rn]=void 0,J[R]===t&&delete J[R])};J[R]=t,v?b(v,[_,T]):T()},clone(_){const I=uc(_,e,n,r,s);return s&&s(I),I}};return y}function Ol(t){if(Fa(t))return t=yr(t),t.children=null,t}function ad(t){if(!Fa(t))return im(t.type)&&t.children?lm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function Di(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Di(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function um(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===at?(o.patchFlag&128&&s++,r=r.concat(um(o.children,e,l))):(e||o.type!==kt)&&r.push(l!=null?yr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function hm(t,e){return fe(t)?(()=>et({name:t.name},e,{setup:t}))():t}function dm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const na=new WeakMap;function gi(t,e,n,r,s=!1){if(oe(t)){t.forEach((S,P)=>gi(S,e&&(oe(e)?e[P]:e),n,r,s));return}if(_i(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&gi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ha(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===xe?l.refs={}:l.refs,p=l.setupState,m=Ae(p),v=p===xe?Ap:S=>Pe(m,S);if(u!=null&&u!==c){if(ld(e),Ye(u))d[u]=null,v(u)&&(p[u]=null);else if(Ke(u)){u.value=null;const S=e;S.k&&(d[S.k]=null)}}if(fe(c))Qi(c,l,12,[o,d]);else{const S=Ye(c),P=Ke(c);if(S||P){const O=()=>{if(t.f){const x=S?v(c)?p[c]:d[c]:c.value;if(s)oe(x)&&Jc(x,i);else if(oe(x))x.includes(i)||x.push(i);else if(S)d[c]=[i],v(c)&&(p[c]=d[c]);else{const V=[i];c.value=V,t.k&&(d[t.k]=V)}}else S?(d[c]=o,v(c)&&(p[c]=o)):P&&(c.value=o,t.k&&(d[t.k]=o))};if(o){const x=()=>{O(),na.delete(t)};x.id=-1,na.set(t,x),Ft(x,n)}else ld(t),O()}}}function ld(t){const e=na.get(t);e&&(e.flags|=8,na.delete(t))}Da().requestIdleCallback;Da().cancelIdleCallback;const _i=t=>!!t.type.__asyncLoader,Fa=t=>t.type.__isKeepAlive;function qv(t,e){fm(t,"a",e)}function Hv(t,e){fm(t,"da",e)}function fm(t,e,n=It){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ua(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Fa(s.parent.vnode)&&Wv(r,e,n,s),s=s.parent}}function Wv(t,e,n,r){const s=Ua(e,t,r,!0);Ba(()=>{Jc(r[e],s)},n)}function Ua(t,e,n=It,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Un();const l=Yi(n),c=on(e,n,t,o);return l(),jn(),c});return r?s.unshift(i):s.push(i),i}}const Gn=t=>(e,n=It)=>{(!Oi||t==="sp")&&Ua(t,(...r)=>e(...r),n)},Gv=Gn("bm"),ja=Gn("m"),Kv=Gn("bu"),zv=Gn("u"),pm=Gn("bum"),Ba=Gn("um"),Qv=Gn("sp"),Yv=Gn("rtg"),Jv=Gn("rtc");function Xv(t,e=It){Ua("ec",t,e)}const mm="components";function Zv(t,e){return tE(mm,t,!0,e)||t}const eE=Symbol.for("v-ndc");function tE(t,e,n=!0,r=!1){const s=Ut||It;if(s){const i=s.type;if(t===mm){const l=UE(i,!1);if(l&&(l===e||l===zt(e)||l===Pa(zt(e))))return i}const o=cd(s[t]||i[t],e)||cd(s.appContext[t],e);return!o&&r?i:o}}function cd(t,e){return t&&(t[e]||t[zt(e)]||t[Pa(zt(e))])}function yi(t,e,n,r){let s;const i=n&&n[r],o=oe(t);if(o||Ye(t)){const l=o&&On(t);let c=!1,u=!1;l&&(c=!$t(t),u=Bn(t),t=Va(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?u?ws(sn(t[d])):sn(t[d]):t[d],d,void 0,i&&i[d])}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i&&i[l])}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i&&i[c]));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}const hc=t=>t?Vm(t)?Ha(t):hc(t.parent):null,vi=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hc(t.parent),$root:t=>hc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ou(t),$forceUpdate:t=>t.f||(t.f=()=>{iu(t.update)}),$nextTick:t=>t.n||(t.n=La.bind(t.proxy)),$watch:t=>Fv.bind(t)}),Vl=(t,e)=>t!==xe&&!t.__isScriptSetup&&Pe(t,e),nE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Vl(r,e))return o[e]=1,r[e];if(s!==xe&&Pe(s,e))return o[e]=2,s[e];if(Pe(i,e))return o[e]=3,i[e];if(n!==xe&&Pe(n,e))return o[e]=4,n[e];dc&&(o[e]=0)}}const u=vi[e];let d,p;if(u)return e==="$attrs"&&Et(t.attrs,"get",""),u(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==xe&&Pe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Pe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Vl(s,e)?(s[e]=n,!0):r!==xe&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==xe&&l[0]!=="$"&&Pe(t,l)||Vl(e,l)||Pe(i,l)||Pe(r,l)||Pe(vi,l)||Pe(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ud(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dc=!0;function rE(t){const e=ou(t),n=t.proxy,r=t.ctx;dc=!1,e.beforeCreate&&hd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:v,updated:S,activated:P,deactivated:O,beforeDestroy:x,beforeUnmount:V,destroyed:M,unmounted:B,render:J,renderTracked:te,renderTriggered:b,errorCaptured:y,serverPrefetch:_,expose:I,inheritAttrs:R,components:w,directives:T,filters:Se}=e;if(u&&sE(u,r,null),o)for(const ue in o){const ye=o[ue];fe(ye)&&(r[ue]=ye.bind(n))}if(s){const ue=s.call(n,n);Oe(ue)&&(t.data=zi(ue))}if(dc=!0,i)for(const ue in i){const ye=i[ue],Vt=fe(ye)?ye.bind(n,n):fe(ye.get)?ye.get.bind(n,n):en,Yt=!fe(ye)&&fe(ye.set)?ye.set.bind(n):en,qt=Xe({get:Vt,set:Yt});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>qt.value,set:Be=>qt.value=Be})}if(l)for(const ue in l)gm(l[ue],r,n,ue);if(c){const ue=fe(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(ye=>{Fo(ye,ue[ye])})}d&&hd(d,t,"c");function ke(ue,ye){oe(ye)?ye.forEach(Vt=>ue(Vt.bind(n))):ye&&ue(ye.bind(n))}if(ke(Gv,p),ke(ja,m),ke(Kv,v),ke(zv,S),ke(qv,P),ke(Hv,O),ke(Xv,y),ke(Jv,te),ke(Yv,b),ke(pm,V),ke(Ba,B),ke(Qv,_),oe(I))if(I.length){const ue=t.exposed||(t.exposed={});I.forEach(ye=>{Object.defineProperty(ue,ye,{get:()=>n[ye],set:Vt=>n[ye]=Vt,enumerable:!0})})}else t.exposed||(t.exposed={});J&&t.render===en&&(t.render=J),R!=null&&(t.inheritAttrs=R),w&&(t.components=w),T&&(t.directives=T),_&&dm(t)}function sE(t,e,n=en){oe(t)&&(t=fc(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=Kt(s.from||r,s.default,!0):i=Kt(s.from||r):i=Kt(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function hd(t,e,n){on(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function gm(t,e,n,r){let s=r.includes(".")?sm(n,r):()=>n[r];if(Ye(t)){const i=e[t];fe(i)&&xn(s,i)}else if(fe(t))xn(s,t.bind(n));else if(Oe(t))if(oe(t))t.forEach(i=>gm(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&xn(s,i,t)}}function ou(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ra(c,u,o,!0)),ra(c,e,o)),Oe(e)&&i.set(e,c),c}function ra(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ra(t,i,n,!0),s&&s.forEach(o=>ra(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=iE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const iE={data:dd,props:fd,emits:fd,methods:ii,computed:ii,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:ii,directives:ii,watch:aE,provide:dd,inject:oE};function dd(t,e){return e?t?function(){return et(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function oE(t,e){return ii(fc(t),fc(e))}function fc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function ii(t,e){return t?et(Object.create(null),t,e):e}function fd(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:et(Object.create(null),ud(t),ud(e??{})):e}function aE(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function _m(){return{app:null,config:{isNativeTag:Ap,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lE=0;function cE(t,e){return function(r,s=null){fe(r)||(r=et({},r)),s!=null&&!Oe(s)&&(s=null);const i=_m(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:lE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:BE,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&fe(d.install)?(o.add(d),d.install(u,...p)):fe(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const v=u._ceVNode||qe(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(v,d):t(v,d,m),c=!0,u._container=d,d.__vue_app__=u,Ha(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(on(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=qr;qr=u;try{return d()}finally{qr=p}}};return u}}let qr=null;const uE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zt(e)}Modifiers`]||t[`${Xr(e)}Modifiers`];function hE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&uE(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ye(d)?d.trim():d)),o.number&&(s=n.map(ka)));let l,c=r[l=Cl(e)]||r[l=Cl(zt(e))];!c&&i&&(c=r[l=Cl(Xr(e))]),c&&on(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,on(u,t,6,s)}}const dE=new WeakMap;function ym(t,e,n=!1){const r=n?dE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!fe(t)){const c=u=>{const d=ym(u,e,!0);d&&(l=!0,et(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Oe(t)&&r.set(t,null),null):(oe(i)?i.forEach(c=>o[c]=null):et(o,i),Oe(t)&&r.set(t,o),o)}function $a(t,e){return!t||!ba(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,Xr(e))||Pe(t,e))}function xl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:v,ctx:S,inheritAttrs:P}=t,O=ta(t);let x,V;try{if(n.shapeFlag&4){const B=s||r,J=B;x=hn(u.call(J,B,d,p,v,m,S)),V=l}else{const B=e;x=hn(B.length>1?B(p,{attrs:l,slots:o,emit:c}):B(p,null)),V=e.props?l:fE(l)}}catch(B){Ei.length=0,Ma(B,t,1),x=qe(kt)}let M=x;if(V&&P!==!1){const B=Object.keys(V),{shapeFlag:J}=M;B.length&&J&7&&(i&&B.some(Yc)&&(V=pE(V,i)),M=yr(M,V,!1,!0))}return n.dirs&&(M=yr(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Di(M,n.transition),x=M,ta(O),x}const fE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ba(n))&&((e||(e={}))[n]=t[n]);return e},pE=(t,e)=>{const n={};for(const r in t)(!Yc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function mE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?pd(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!$a(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?pd(r,o,u):!0:!!o;return!1}function pd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!$a(n,i))return!0}return!1}function gE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const vm={},Em=()=>Object.create(vm),Tm=t=>Object.getPrototypeOf(t)===vm;function _E(t,e,n,r=!1){const s={},i=Em();t.propsDefaults=Object.create(null),Im(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Qp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function yE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ae(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if($a(t.emitsOptions,m))continue;const v=e[m];if(c)if(Pe(i,m))v!==i[m]&&(i[m]=v,u=!0);else{const S=zt(m);s[S]=pc(c,l,S,v,t,!1)}else v!==i[m]&&(i[m]=v,u=!0)}}}else{Im(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Pe(e,p)&&((d=Xr(p))===p||!Pe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=pc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Pe(e,p))&&(delete i[p],u=!0)}u&&Sn(t.attrs,"set","")}function Im(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(fi(c))continue;const u=e[c];let d;s&&Pe(s,d=zt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:$a(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ae(n),u=l||xe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=pc(s,c,p,u[p],t,!Pe(u,p))}}return o}function pc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Pe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Yi(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Xr(n))&&(r=!0))}return r}const vE=new WeakMap;function wm(t,e,n=!1){const r=n?vE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!fe(t)){const d=p=>{c=!0;const[m,v]=wm(p,e,!0);et(o,m),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Oe(t)&&r.set(t,ms),ms;if(oe(i))for(let d=0;d<i.length;d++){const p=zt(i[d]);md(p)&&(o[p]=xe)}else if(i)for(const d in i){const p=zt(d);if(md(p)){const m=i[d],v=o[p]=oe(m)||fe(m)?{type:m}:et({},m),S=v.type;let P=!1,O=!0;if(oe(S))for(let x=0;x<S.length;++x){const V=S[x],M=fe(V)&&V.name;if(M==="Boolean"){P=!0;break}else M==="String"&&(O=!1)}else P=fe(S)&&S.name==="Boolean";v[0]=P,v[1]=O,(P||Pe(v,"default"))&&l.push(p)}}const u=[o,l];return Oe(t)&&r.set(t,u),u}function md(t){return t[0]!=="$"&&!fi(t)}const au=t=>t==="_"||t==="_ctx"||t==="$stable",lu=t=>oe(t)?t.map(hn):[hn(t)],EE=(t,e,n)=>{if(e._n)return e;const r=Vn((...s)=>lu(e(...s)),n);return r._c=!1,r},Am=(t,e,n)=>{const r=t._ctx;for(const s in t){if(au(s))continue;const i=t[s];if(fe(i))e[s]=EE(s,i,r);else if(i!=null){const o=lu(i);e[s]=()=>o}}},bm=(t,e)=>{const n=lu(e);t.slots.default=()=>n},Rm=(t,e,n)=>{for(const r in e)(n||!au(r))&&(t[r]=e[r])},TE=(t,e,n)=>{const r=t.slots=Em();if(t.vnode.shapeFlag&32){const s=e._;s?(Rm(r,e,n),n&&Cp(r,"_",s,!0)):Am(e,r)}else e&&bm(t,e)},IE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Rm(s,e,n):(i=!e.$stable,Am(e,s)),o=e}else e&&(bm(t,e),o={default:1});if(i)for(const l in s)!au(l)&&o[l]==null&&delete s[l]},Ft=SE;function wE(t){return AE(t)}function AE(t,e){const n=Da();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:v=en,insertStaticContent:S}=t,P=(E,A,k,j=null,L=null,$=null,z=void 0,G=null,W=!!A.dynamicChildren)=>{if(E===A)return;E&&!Mr(E,A)&&(j=F(E),Be(E,L,$,!0),E=null),A.patchFlag===-2&&(W=!1,A.dynamicChildren=null);const{type:q,ref:ie,shapeFlag:Y}=A;switch(q){case qa:O(E,A,k,j);break;case kt:x(E,A,k,j);break;case Uo:E==null&&V(A,k,j,z);break;case at:w(E,A,k,j,L,$,z,G,W);break;default:Y&1?J(E,A,k,j,L,$,z,G,W):Y&6?T(E,A,k,j,L,$,z,G,W):(Y&64||Y&128)&&q.process(E,A,k,j,L,$,z,G,W,re)}ie!=null&&L?gi(ie,E&&E.ref,$,A||E,!A):ie==null&&E&&E.ref!=null&&gi(E.ref,null,$,E,!0)},O=(E,A,k,j)=>{if(E==null)r(A.el=l(A.children),k,j);else{const L=A.el=E.el;A.children!==E.children&&u(L,A.children)}},x=(E,A,k,j)=>{E==null?r(A.el=c(A.children||""),k,j):A.el=E.el},V=(E,A,k,j)=>{[E.el,E.anchor]=S(E.children,A,k,j,E.el,E.anchor)},M=({el:E,anchor:A},k,j)=>{let L;for(;E&&E!==A;)L=m(E),r(E,k,j),E=L;r(A,k,j)},B=({el:E,anchor:A})=>{let k;for(;E&&E!==A;)k=m(E),s(E),E=k;s(A)},J=(E,A,k,j,L,$,z,G,W)=>{if(A.type==="svg"?z="svg":A.type==="math"&&(z="mathml"),E==null)te(A,k,j,L,$,z,G,W);else{const q=E.el&&E.el._isVueCE?E.el:null;try{q&&q._beginPatch(),_(E,A,L,$,z,G,W)}finally{q&&q._endPatch()}}},te=(E,A,k,j,L,$,z,G)=>{let W,q;const{props:ie,shapeFlag:Y,transition:ne,dirs:le}=E;if(W=E.el=o(E.type,$,ie&&ie.is,ie),Y&8?d(W,E.children):Y&16&&y(E.children,W,null,j,L,Ml(E,$),z,G),le&&kr(E,null,j,"created"),b(W,E,E.scopeId,z,j),ie){for(const _e in ie)_e!=="value"&&!fi(_e)&&i(W,_e,null,ie[_e],$,j);"value"in ie&&i(W,"value",null,ie.value,$),(q=ie.onVnodeBeforeMount)&&cn(q,j,E)}le&&kr(E,null,j,"beforeMount");const ae=bE(L,ne);ae&&ne.beforeEnter(W),r(W,A,k),((q=ie&&ie.onVnodeMounted)||ae||le)&&Ft(()=>{q&&cn(q,j,E),ae&&ne.enter(W),le&&kr(E,null,j,"mounted")},L)},b=(E,A,k,j,L)=>{if(k&&v(E,k),j)for(let $=0;$<j.length;$++)v(E,j[$]);if(L){let $=L.subTree;if(A===$||km($.type)&&($.ssContent===A||$.ssFallback===A)){const z=L.vnode;b(E,z,z.scopeId,z.slotScopeIds,L.parent)}}},y=(E,A,k,j,L,$,z,G,W=0)=>{for(let q=W;q<E.length;q++){const ie=E[q]=G?or(E[q]):hn(E[q]);P(null,ie,A,k,j,L,$,z,G)}},_=(E,A,k,j,L,$,z)=>{const G=A.el=E.el;let{patchFlag:W,dynamicChildren:q,dirs:ie}=A;W|=E.patchFlag&16;const Y=E.props||xe,ne=A.props||xe;let le;if(k&&Dr(k,!1),(le=ne.onVnodeBeforeUpdate)&&cn(le,k,A,E),ie&&kr(A,E,k,"beforeUpdate"),k&&Dr(k,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&d(G,""),q?I(E.dynamicChildren,q,G,k,j,Ml(A,L),$):z||ye(E,A,G,null,k,j,Ml(A,L),$,!1),W>0){if(W&16)R(G,Y,ne,k,L);else if(W&2&&Y.class!==ne.class&&i(G,"class",null,ne.class,L),W&4&&i(G,"style",Y.style,ne.style,L),W&8){const ae=A.dynamicProps;for(let _e=0;_e<ae.length;_e++){const Te=ae[_e],lt=Y[Te],tt=ne[Te];(tt!==lt||Te==="value")&&i(G,Te,lt,tt,L,k)}}W&1&&E.children!==A.children&&d(G,A.children)}else!z&&q==null&&R(G,Y,ne,k,L);((le=ne.onVnodeUpdated)||ie)&&Ft(()=>{le&&cn(le,k,A,E),ie&&kr(A,E,k,"updated")},j)},I=(E,A,k,j,L,$,z)=>{for(let G=0;G<A.length;G++){const W=E[G],q=A[G],ie=W.el&&(W.type===at||!Mr(W,q)||W.shapeFlag&198)?p(W.el):k;P(W,q,ie,null,j,L,$,z,!0)}},R=(E,A,k,j,L)=>{if(A!==k){if(A!==xe)for(const $ in A)!fi($)&&!($ in k)&&i(E,$,A[$],null,L,j);for(const $ in k){if(fi($))continue;const z=k[$],G=A[$];z!==G&&$!=="value"&&i(E,$,G,z,L,j)}"value"in k&&i(E,"value",A.value,k.value,L)}},w=(E,A,k,j,L,$,z,G,W)=>{const q=A.el=E?E.el:l(""),ie=A.anchor=E?E.anchor:l("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:le}=A;le&&(G=G?G.concat(le):le),E==null?(r(q,k,j),r(ie,k,j),y(A.children||[],k,ie,L,$,z,G,W)):Y>0&&Y&64&&ne&&E.dynamicChildren&&E.dynamicChildren.length===ne.length?(I(E.dynamicChildren,ne,k,L,$,z,G),(A.key!=null||L&&A===L.subTree)&&Sm(E,A,!0)):ye(E,A,k,ie,L,$,z,G,W)},T=(E,A,k,j,L,$,z,G,W)=>{A.slotScopeIds=G,E==null?A.shapeFlag&512?L.ctx.activate(A,k,j,z,W):Se(A,k,j,L,$,z,W):ze(E,A,W)},Se=(E,A,k,j,L,$,z)=>{const G=E.component=VE(E,j,L);if(Fa(E)&&(G.ctx.renderer=re),xE(G,!1,z),G.asyncDep){if(L&&L.registerDep(G,ke,z),!E.el){const W=G.subTree=qe(kt);x(null,W,A,k),E.placeholder=W.el}}else ke(G,E,A,k,L,$,z)},ze=(E,A,k)=>{const j=A.component=E.component;if(mE(E,A,k))if(j.asyncDep&&!j.asyncResolved){ue(j,A,k);return}else j.next=A,j.update();else A.el=E.el,j.vnode=A},ke=(E,A,k,j,L,$,z)=>{const G=()=>{if(E.isMounted){let{next:Y,bu:ne,u:le,parent:ae,vnode:_e}=E;{const nt=Cm(E);if(nt){Y&&(Y.el=_e.el,ue(E,Y,z)),nt.asyncDep.then(()=>{E.isUnmounted||G()});return}}let Te=Y,lt;Dr(E,!1),Y?(Y.el=_e.el,ue(E,Y,z)):Y=_e,ne&&Lo(ne),(lt=Y.props&&Y.props.onVnodeBeforeUpdate)&&cn(lt,ae,Y,_e),Dr(E,!0);const tt=xl(E),Mt=E.subTree;E.subTree=tt,P(Mt,tt,p(Mt.el),F(Mt),E,L,$),Y.el=tt.el,Te===null&&gE(E,tt.el),le&&Ft(le,L),(lt=Y.props&&Y.props.onVnodeUpdated)&&Ft(()=>cn(lt,ae,Y,_e),L)}else{let Y;const{el:ne,props:le}=A,{bm:ae,m:_e,parent:Te,root:lt,type:tt}=E,Mt=_i(A);if(Dr(E,!1),ae&&Lo(ae),!Mt&&(Y=le&&le.onVnodeBeforeMount)&&cn(Y,Te,A),Dr(E,!0),ne&&Ne){const nt=()=>{E.subTree=xl(E),Ne(ne,E.subTree,E,L,null)};Mt&&tt.__asyncHydrate?tt.__asyncHydrate(ne,E,nt):nt()}else{lt.ce&&lt.ce._def.shadowRoot!==!1&&lt.ce._injectChildStyle(tt);const nt=E.subTree=xl(E);P(null,nt,k,j,E,L,$),A.el=nt.el}if(_e&&Ft(_e,L),!Mt&&(Y=le&&le.onVnodeMounted)){const nt=A;Ft(()=>cn(Y,Te,nt),L)}(A.shapeFlag&256||Te&&_i(Te.vnode)&&Te.vnode.shapeFlag&256)&&E.a&&Ft(E.a,L),E.isMounted=!0,A=k=j=null}};E.scope.on();const W=E.effect=new xp(G);E.scope.off();const q=E.update=W.run.bind(W),ie=E.job=W.runIfDirty.bind(W);ie.i=E,ie.id=E.uid,W.scheduler=()=>iu(ie),Dr(E,!0),q()},ue=(E,A,k)=>{A.component=E;const j=E.vnode.props;E.vnode=A,E.next=null,yE(E,A.props,j,k),IE(E,A.children,k),Un(),od(E),jn()},ye=(E,A,k,j,L,$,z,G,W=!1)=>{const q=E&&E.children,ie=E?E.shapeFlag:0,Y=A.children,{patchFlag:ne,shapeFlag:le}=A;if(ne>0){if(ne&128){Yt(q,Y,k,j,L,$,z,G,W);return}else if(ne&256){Vt(q,Y,k,j,L,$,z,G,W);return}}le&8?(ie&16&&Dt(q,L,$),Y!==q&&d(k,Y)):ie&16?le&16?Yt(q,Y,k,j,L,$,z,G,W):Dt(q,L,$,!0):(ie&8&&d(k,""),le&16&&y(Y,k,j,L,$,z,G,W))},Vt=(E,A,k,j,L,$,z,G,W)=>{E=E||ms,A=A||ms;const q=E.length,ie=A.length,Y=Math.min(q,ie);let ne;for(ne=0;ne<Y;ne++){const le=A[ne]=W?or(A[ne]):hn(A[ne]);P(E[ne],le,k,null,L,$,z,G,W)}q>ie?Dt(E,L,$,!0,!1,Y):y(A,k,j,L,$,z,G,W,Y)},Yt=(E,A,k,j,L,$,z,G,W)=>{let q=0;const ie=A.length;let Y=E.length-1,ne=ie-1;for(;q<=Y&&q<=ne;){const le=E[q],ae=A[q]=W?or(A[q]):hn(A[q]);if(Mr(le,ae))P(le,ae,k,null,L,$,z,G,W);else break;q++}for(;q<=Y&&q<=ne;){const le=E[Y],ae=A[ne]=W?or(A[ne]):hn(A[ne]);if(Mr(le,ae))P(le,ae,k,null,L,$,z,G,W);else break;Y--,ne--}if(q>Y){if(q<=ne){const le=ne+1,ae=le<ie?A[le].el:j;for(;q<=ne;)P(null,A[q]=W?or(A[q]):hn(A[q]),k,ae,L,$,z,G,W),q++}}else if(q>ne)for(;q<=Y;)Be(E[q],L,$,!0),q++;else{const le=q,ae=q,_e=new Map;for(q=ae;q<=ne;q++){const ct=A[q]=W?or(A[q]):hn(A[q]);ct.key!=null&&_e.set(ct.key,q)}let Te,lt=0;const tt=ne-ae+1;let Mt=!1,nt=0;const Yn=new Array(tt);for(q=0;q<tt;q++)Yn[q]=0;for(q=le;q<=Y;q++){const ct=E[q];if(lt>=tt){Be(ct,L,$,!0);continue}let Ht;if(ct.key!=null)Ht=_e.get(ct.key);else for(Te=ae;Te<=ne;Te++)if(Yn[Te-ae]===0&&Mr(ct,A[Te])){Ht=Te;break}Ht===void 0?Be(ct,L,$,!0):(Yn[Ht-ae]=q+1,Ht>=nt?nt=Ht:Mt=!0,P(ct,A[Ht],k,null,L,$,z,G,W),lt++)}const js=Mt?RE(Yn):ms;for(Te=js.length-1,q=tt-1;q>=0;q--){const ct=ae+q,Ht=A[ct],ho=A[ct+1],ns=ct+1<ie?ho.el||Pm(ho):j;Yn[q]===0?P(null,Ht,k,ns,L,$,z,G,W):Mt&&(Te<0||q!==js[Te]?qt(Ht,k,ns,2):Te--)}}},qt=(E,A,k,j,L=null)=>{const{el:$,type:z,transition:G,children:W,shapeFlag:q}=E;if(q&6){qt(E.component.subTree,A,k,j);return}if(q&128){E.suspense.move(A,k,j);return}if(q&64){z.move(E,A,k,re);return}if(z===at){r($,A,k);for(let Y=0;Y<W.length;Y++)qt(W[Y],A,k,j);r(E.anchor,A,k);return}if(z===Uo){M(E,A,k);return}if(j!==2&&q&1&&G)if(j===0)G.beforeEnter($),r($,A,k),Ft(()=>G.enter($),L);else{const{leave:Y,delayLeave:ne,afterLeave:le}=G,ae=()=>{E.ctx.isUnmounted?s($):r($,A,k)},_e=()=>{$._isLeaving&&$[Rn](!0),Y($,()=>{ae(),le&&le()})};ne?ne($,ae,_e):_e()}else r($,A,k)},Be=(E,A,k,j=!1,L=!1)=>{const{type:$,props:z,ref:G,children:W,dynamicChildren:q,shapeFlag:ie,patchFlag:Y,dirs:ne,cacheIndex:le}=E;if(Y===-2&&(L=!1),G!=null&&(Un(),gi(G,null,k,E,!0),jn()),le!=null&&(A.renderCache[le]=void 0),ie&256){A.ctx.deactivate(E);return}const ae=ie&1&&ne,_e=!_i(E);let Te;if(_e&&(Te=z&&z.onVnodeBeforeUnmount)&&cn(Te,A,E),ie&6)xt(E.component,k,j);else{if(ie&128){E.suspense.unmount(k,j);return}ae&&kr(E,null,A,"beforeUnmount"),ie&64?E.type.remove(E,A,k,re,j):q&&!q.hasOnce&&($!==at||Y>0&&Y&64)?Dt(q,A,k,!1,!0):($===at&&Y&384||!L&&ie&16)&&Dt(W,A,k),j&&$e(E)}(_e&&(Te=z&&z.onVnodeUnmounted)||ae)&&Ft(()=>{Te&&cn(Te,A,E),ae&&kr(E,null,A,"unmounted")},k)},$e=E=>{const{type:A,el:k,anchor:j,transition:L}=E;if(A===at){Qn(k,j);return}if(A===Uo){B(E);return}const $=()=>{s(k),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:z,delayLeave:G}=L,W=()=>z(k,$);G?G(E.el,$,W):W()}else $()},Qn=(E,A)=>{let k;for(;E!==A;)k=m(E),s(E),E=k;s(A)},xt=(E,A,k)=>{const{bum:j,scope:L,job:$,subTree:z,um:G,m:W,a:q}=E;gd(W),gd(q),j&&Lo(j),L.stop(),$&&($.flags|=8,Be(z,E,A,k)),G&&Ft(G,A),Ft(()=>{E.isUnmounted=!0},A)},Dt=(E,A,k,j=!1,L=!1,$=0)=>{for(let z=$;z<E.length;z++)Be(E[z],A,k,j,L)},F=E=>{if(E.shapeFlag&6)return F(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const A=m(E.anchor||E.el),k=A&&A[Uv];return k?m(k):A};let X=!1;const Q=(E,A,k)=>{let j;E==null?A._vnode&&(Be(A._vnode,null,null,!0),j=A._vnode.component):P(A._vnode||null,E,A,null,null,null,k),A._vnode=E,X||(X=!0,od(j),em(),X=!1)},re={p:P,um:Be,m:qt,r:$e,mt:Se,mc:y,pc:ye,pbc:I,n:F,o:t};let ge,Ne;return e&&([ge,Ne]=e(re)),{render:Q,hydrate:ge,createApp:cE(Q,ge)}}function Ml({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function bE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Sm(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=or(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Sm(o,l)),l.type===qa&&(l.patchFlag!==-1?l.el=o.el:l.__elIndex=i+(t.type===at?1:0)),l.type===kt&&!l.el&&(l.el=o.el)}}function RE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Cm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Cm(e)}function gd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Pm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Pm(e.subTree):null}const km=t=>t.__isSuspense;function SE(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Vv(t)}const at=Symbol.for("v-fgt"),qa=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),Uo=Symbol.for("v-stc"),Ei=[];let jt=null;function me(t=!1){Ei.push(jt=t?null:[])}function CE(){Ei.pop(),jt=Ei[Ei.length-1]||null}let Ni=1;function sa(t,e=!1){Ni+=t,t<0&&jt&&e&&(jt.hasOnce=!0)}function Dm(t){return t.dynamicChildren=Ni>0?jt||ms:null,CE(),Ni>0&&jt&&jt.push(t),t}function we(t,e,n,r,s,i){return Dm(N(t,e,n,r,s,i,!0))}function Mn(t,e,n,r,s){return Dm(qe(t,e,n,r,s,!0))}function ia(t){return t?t.__v_isVNode===!0:!1}function Mr(t,e){return t.type===e.type&&t.key===e.key}const Nm=({key:t})=>t??null,jo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||Ke(t)||fe(t)?{i:Ut,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,r=0,s=null,i=t===at?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Nm(e),ref:e&&jo(e),scopeId:nm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ut};return l?(cu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ye(n)?8:16),Ni>0&&!o&&jt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&jt.push(c),c}const qe=PE;function PE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===eE)&&(t=kt),ia(t)){const l=yr(t,e,!0);return n&&cu(l,n),Ni>0&&!i&&jt&&(l.shapeFlag&6?jt[jt.indexOf(t)]=l:jt.push(l)),l.patchFlag=-2,l}if(jE(t)&&(t=t.__vccOpts),e){e=kE(e);let{class:l,style:c}=e;l&&!Ye(l)&&(e.class=Na(l)),Oe(c)&&(xa(c)&&!oe(c)&&(c=et({},c)),e.style=Ct(c))}const o=Ye(t)?1:km(t)?128:im(t)?64:Oe(t)?4:fe(t)?2:0;return N(t,e,n,r,s,o,i,!0)}function kE(t){return t?xa(t)||Tm(t)?et({},t):t:null}function yr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?DE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Nm(u),ref:e&&e.ref?n&&i?oe(i)?i.concat(jo(e)):[i,jo(e)]:jo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yr(t.ssContent),ssFallback:t.ssFallback&&yr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Di(d,c.clone(d)),d}function Xt(t=" ",e=0){return qe(qa,null,t,e)}function Om(t,e){const n=qe(Uo,null,t);return n.staticCount=e,n}function Gt(t="",e=!1){return e?(me(),Mn(kt,null,t)):qe(kt,null,t)}function hn(t){return t==null||typeof t=="boolean"?qe(kt):oe(t)?qe(at,null,t.slice()):ia(t)?or(t):qe(qa,null,String(t))}function or(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yr(t)}function cu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),cu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Tm(e)?e._ctx=Ut:s===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Ut},n=32):(e=String(e),r&64?(n=16,e=[Xt(e)]):n=8);t.children=e,t.shapeFlag|=n}function DE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Na([e.class,r.class]));else if(s==="style")e.style=Ct([e.style,r.style]);else if(ba(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function cn(t,e,n,r=null){on(t,e,7,[n,r])}const NE=_m();let OE=0;function VE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||NE,i={uid:OE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Np(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wm(r,s),emitsOptions:ym(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=hE.bind(null,i),t.ce&&t.ce(i),i}let It=null;const uu=()=>It||Ut;let oa,mc;{const t=Da(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};oa=e("__VUE_INSTANCE_SETTERS__",n=>It=n),mc=e("__VUE_SSR_SETTERS__",n=>Oi=n)}const Yi=t=>{const e=It;return oa(t),t.scope.on(),()=>{t.scope.off(),oa(e)}},_d=()=>{It&&It.scope.off(),oa(null)};function Vm(t){return t.vnode.shapeFlag&4}let Oi=!1;function xE(t,e=!1,n=!1){e&&mc(e);const{props:r,children:s}=t.vnode,i=Vm(t);_E(t,r,i,e),TE(t,s,n||e);const o=i?ME(t,e):void 0;return e&&mc(!1),o}function ME(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,nE);const{setup:r}=n;if(r){Un();const s=t.setupContext=r.length>1?FE(t):null,i=Yi(t),o=Qi(r,t,0,[t.props,s]),l=bp(o);if(jn(),i(),(l||t.sp)&&!_i(t)&&dm(t),l){if(o.then(_d,_d),e)return o.then(c=>{yd(t,c,e)}).catch(c=>{Ma(c,t,0)});t.asyncDep=o}else yd(t,o,e)}else xm(t,e)}function yd(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=Jp(e)),xm(t,n)}let vd;function xm(t,e,n){const r=t.type;if(!t.render){if(!e&&vd&&!r.render){const s=r.template||ou(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,u=et(et({isCustomElement:i,delimiters:l},o),c);r.render=vd(s,u)}}t.render=r.render||en}{const s=Yi(t);Un();try{rE(t)}finally{jn(),s()}}}const LE={get(t,e){return Et(t,"get",""),t[e]}};function FE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,LE),slots:t.slots,emit:t.emit,expose:e}}function Ha(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Jp(su(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vi)return vi[n](t)},has(e,n){return n in e||n in vi}})):t.proxy}function UE(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function jE(t){return fe(t)&&"__vccOpts"in t}const Xe=(t,e)=>Pv(t,e,Oi);function hu(t,e,n){try{sa(-1);const r=arguments.length;return r===2?Oe(e)&&!oe(e)?ia(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ia(n)&&(n=[n]),qe(t,e,n))}finally{sa(1)}}const BE="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gc;const Ed=typeof window<"u"&&window.trustedTypes;if(Ed)try{gc=Ed.createPolicy("vue",{createHTML:t=>t})}catch{}const Mm=gc?t=>gc.createHTML(t):t=>t,$E="http://www.w3.org/2000/svg",qE="http://www.w3.org/1998/Math/MathML",bn=typeof document<"u"?document:null,Td=bn&&bn.createElement("template"),HE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?bn.createElementNS($E,t):e==="mathml"?bn.createElementNS(qE,t):n?bn.createElement(t,{is:n}):bn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bn.createTextNode(t),createComment:t=>bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Td.innerHTML=Mm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Td.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},er="transition",ei="animation",Vi=Symbol("_vtc"),Lm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},WE=et({},om,Lm),GE=t=>(t.displayName="Transition",t.props=WE,t),Fm=GE((t,{slots:e})=>hu($v,KE(t),e)),Nr=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Id=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function KE(t){const e={};for(const w in t)w in Lm||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,S=zE(s),P=S&&S[0],O=S&&S[1],{onBeforeEnter:x,onEnter:V,onEnterCancelled:M,onLeave:B,onLeaveCancelled:J,onBeforeAppear:te=x,onAppear:b=V,onAppearCancelled:y=M}=e,_=(w,T,Se,ze)=>{w._enterCancelled=ze,Or(w,T?d:l),Or(w,T?u:o),Se&&Se()},I=(w,T)=>{w._isLeaving=!1,Or(w,p),Or(w,v),Or(w,m),T&&T()},R=w=>(T,Se)=>{const ze=w?b:V,ke=()=>_(T,w,Se);Nr(ze,[T,ke]),wd(()=>{Or(T,w?c:i),In(T,w?d:l),Id(ze)||Ad(T,r,P,ke)})};return et(e,{onBeforeEnter(w){Nr(x,[w]),In(w,i),In(w,o)},onBeforeAppear(w){Nr(te,[w]),In(w,c),In(w,u)},onEnter:R(!1),onAppear:R(!0),onLeave(w,T){w._isLeaving=!0;const Se=()=>I(w,T);In(w,p),w._enterCancelled?(In(w,m),Sd(w)):(Sd(w),In(w,m)),wd(()=>{w._isLeaving&&(Or(w,p),In(w,v),Id(B)||Ad(w,r,O,Se))}),Nr(B,[w,Se])},onEnterCancelled(w){_(w,!1,void 0,!0),Nr(M,[w])},onAppearCancelled(w){_(w,!0,void 0,!0),Nr(y,[w])},onLeaveCancelled(w){I(w),Nr(J,[w])}})}function zE(t){if(t==null)return null;if(Oe(t))return[Ll(t.enter),Ll(t.leave)];{const e=Ll(t);return[e,e]}}function Ll(t){return Ky(t)}function In(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Vi]||(t[Vi]=new Set)).add(e)}function Or(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Vi];n&&(n.delete(e),n.size||(t[Vi]=void 0))}function wd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let QE=0;function Ad(t,e,n,r){const s=t._endId=++QE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=YE(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,m),i()},m=v=>{v.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,m)}function YE(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${er}Delay`),i=r(`${er}Duration`),o=bd(s,i),l=r(`${ei}Delay`),c=r(`${ei}Duration`),u=bd(l,c);let d=null,p=0,m=0;e===er?o>0&&(d=er,p=o,m=i.length):e===ei?u>0&&(d=ei,p=u,m=c.length):(p=Math.max(o,u),d=p>0?o>u?er:ei:null,m=d?d===er?i.length:c.length:0);const v=d===er&&/\b(?:transform|all)(?:,|$)/.test(r(`${er}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:v}}function bd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Rd(n)+Rd(t[r])))}function Rd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Sd(t){return(t?t.ownerDocument:document).body.offsetHeight}function JE(t,e,n){const r=t[Vi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Cd=Symbol("_vod"),XE=Symbol("_vsh"),ZE=Symbol(""),eT=/(?:^|;)\s*display\s*:/;function tT(t,e,n){const r=t.style,s=Ye(n);let i=!1;if(n&&!s){if(e)if(Ye(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Bo(r,l,"")}else for(const o in e)n[o]==null&&Bo(r,o,"");for(const o in n)o==="display"&&(i=!0),Bo(r,o,n[o])}else if(s){if(e!==n){const o=r[ZE];o&&(n+=";"+o),r.cssText=n,i=eT.test(n)}}else e&&t.removeAttribute("style");Cd in t&&(t[Cd]=i?r.display:"",t[XE]&&(r.display="none"))}const Pd=/\s*!important$/;function Bo(t,e,n){if(oe(n))n.forEach(r=>Bo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=nT(t,e);Pd.test(n)?t.setProperty(Xr(r),n.replace(Pd,""),"important"):t[r]=n}}const kd=["Webkit","Moz","ms"],Fl={};function nT(t,e){const n=Fl[e];if(n)return n;let r=zt(e);if(r!=="filter"&&r in t)return Fl[e]=r;r=Pa(r);for(let s=0;s<kd.length;s++){const i=kd[s]+r;if(i in t)return Fl[e]=i}return e}const Dd="http://www.w3.org/1999/xlink";function Nd(t,e,n,r,s,i=Zy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Dd,e.slice(6,e.length)):t.setAttributeNS(Dd,e,n):n==null||i&&!Pp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":_n(n)?String(n):n)}function Od(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Mm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Pp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Lr(t,e,n,r){t.addEventListener(e,n,r)}function rT(t,e,n,r){t.removeEventListener(e,n,r)}const Vd=Symbol("_vei");function sT(t,e,n,r,s=null){const i=t[Vd]||(t[Vd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=iT(e);if(r){const u=i[e]=lT(r,s);Lr(t,l,u,c)}else o&&(rT(t,l,o,c),i[e]=void 0)}}const xd=/(?:Once|Passive|Capture)$/;function iT(t){let e;if(xd.test(t)){e={};let r;for(;r=t.match(xd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xr(t.slice(2)),e]}let Ul=0;const oT=Promise.resolve(),aT=()=>Ul||(oT.then(()=>Ul=0),Ul=Date.now());function lT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;on(cT(r,n.value),e,5,[r])};return n.value=t,n.attached=aT(),n}function cT(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Md=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,uT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?JE(t,r,o):e==="style"?tT(t,n,r):ba(e)?Yc(e)||sT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hT(t,e,r,o))?(Od(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ye(r))?Od(t,zt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Nd(t,e,r,o))};function hT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Md(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Md(e)&&Ye(n)?!1:e in t}const aa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>Lo(e,n):e};function dT(t){t.target.composing=!0}function Ld(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ys=Symbol("_assign");function Fd(t,e,n){return e&&(t=t.trim()),n&&(t=ka(t)),t}const Ln={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ys]=aa(s);const i=r||s.props&&s.props.type==="number";Lr(t,e?"change":"input",o=>{o.target.composing||t[ys](Fd(t.value,n,i))}),(n||i)&&Lr(t,"change",()=>{t.value=Fd(t.value,n,i)}),e||(Lr(t,"compositionstart",dT),Lr(t,"compositionend",Ld),Lr(t,"change",Ld))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ys]=aa(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ka(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},fT={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ra(e);Lr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ka(la(o)):la(o));t[ys](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,La(()=>{t._assigning=!1})}),t[ys]=aa(r)},mounted(t,{value:e}){Ud(t,e)},beforeUpdate(t,e,n){t[ys]=aa(n)},updated(t,{value:e}){t._assigning||Ud(t,e)}};function Ud(t,e){const n=t.multiple,r=oe(e);if(!(n&&!r&&!Ra(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=la(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=tv(e,l)>-1}else o.selected=e.has(l);else if(Oa(la(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function la(t){return"_value"in t?t._value:t.value}const pT=["ctrl","shift","alt","meta"],mT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>pT.some(n=>t[`${n}Key`]&&!e.includes(n))},xi=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=mT[e[o]];if(l&&l(s,e))return}return t(s,...i)})},gT=et({patchProp:uT},HE);let jd;function _T(){return jd||(jd=wE(gT))}const yT=(...t)=>{const e=_T().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ET(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,vT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function vT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ET(t){return Ye(t)?document.querySelector(t):t}var TT=!1;/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Um;const Wa=t=>Um=t,jm=Symbol();function _c(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ti;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ti||(Ti={}));function IT(){const t=Op(!0),e=t.run(()=>Le({}));let n=[],r=[];const s=su({install(i){Wa(s),s._a=i,i.provide(jm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!TT?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Bm=()=>{};function Bd(t,e,n,r=Bm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Vp()&&nv(s),s}function ls(t,...e){t.slice().forEach(n=>{n(...e)})}const wT=t=>t(),$d=Symbol(),jl=Symbol();function yc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];_c(s)&&_c(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!On(r)?t[n]=yc(s,r):t[n]=r}return t}const AT=Symbol();function bT(t){return!_c(t)||!t.hasOwnProperty(AT)}const{assign:rr}=Object;function RT(t){return!!(Ke(t)&&t.effect)}function ST(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const d=bv(n.state.value[t]);return rr(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=su(Xe(()=>{Wa(n);const v=n._s.get(t);return o[m].call(v,v)})),p),{}))}return c=$m(t,u,e,n,r,!0),c}function $m(t,e,n={},r,s,i){let o;const l=rr({actions:{}},n),c={deep:!0};let u,d,p=[],m=[],v;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),Le({});let P;function O(y){let _;u=d=!1,typeof y=="function"?(y(r.state.value[t]),_={type:Ti.patchFunction,storeId:t,events:v}):(yc(r.state.value[t],y),_={type:Ti.patchObject,payload:y,storeId:t,events:v});const I=P=Symbol();La().then(()=>{P===I&&(u=!0)}),d=!0,ls(p,_,r.state.value[t])}const x=i?function(){const{state:_}=n,I=_?_():{};this.$patch(R=>{rr(R,I)})}:Bm;function V(){o.stop(),p=[],m=[],r._s.delete(t)}const M=(y,_="")=>{if($d in y)return y[jl]=_,y;const I=function(){Wa(r);const R=Array.from(arguments),w=[],T=[];function Se(ue){w.push(ue)}function ze(ue){T.push(ue)}ls(m,{args:R,name:I[jl],store:J,after:Se,onError:ze});let ke;try{ke=y.apply(this&&this.$id===t?this:J,R)}catch(ue){throw ls(T,ue),ue}return ke instanceof Promise?ke.then(ue=>(ls(w,ue),ue)).catch(ue=>(ls(T,ue),Promise.reject(ue))):(ls(w,ke),ke)};return I[$d]=!0,I[jl]=_,I},B={_p:r,$id:t,$onAction:Bd.bind(null,m),$patch:O,$reset:x,$subscribe(y,_={}){const I=Bd(p,y,_.detached,()=>R()),R=o.run(()=>xn(()=>r.state.value[t],w=>{(_.flush==="sync"?d:u)&&y({storeId:t,type:Ti.direct,events:v},w)},rr({},c,_)));return I},$dispose:V},J=zi(B);r._s.set(t,J);const b=(r._a&&r._a.runWithContext||wT)(()=>r._e.run(()=>(o=Op()).run(()=>e({action:M}))));for(const y in b){const _=b[y];if(Ke(_)&&!RT(_)||On(_))i||(S&&bT(_)&&(Ke(_)?_.value=S[y]:yc(_,S[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const I=M(_,y);b[y]=I,l.actions[y]=_}}return rr(J,b),rr(Ae(J),b),Object.defineProperty(J,"$state",{get:()=>r.state.value[t],set:y=>{O(_=>{rr(_,y)})}}),r._p.forEach(y=>{rr(J,o.run(()=>y({store:J,app:r._a,pinia:r,options:l})))}),S&&i&&n.hydrate&&n.hydrate(J.$state,S),u=!0,d=!0,J}/*! #__NO_SIDE_EFFECTS__ */function qm(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const u=xv();return l=l||(u?Kt(jm,null):null),l&&Wa(l),l=Um,l._s.has(r)||(i?$m(r,e,s,l):ST(r,s,l)),l._s.get(r)}return o.$id=r,o}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const hs=typeof document<"u";function Hm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function CT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Hm(t.default)}const Ce=Object.assign;function Bl(t,e){const n={};for(const r in e){const s=e[r];n[r]=an(s)?s.map(t):t(s)}return n}const Ii=()=>{},an=Array.isArray;function qd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Wm=/#/g,PT=/&/g,kT=/\//g,DT=/=/g,NT=/\?/g,Gm=/\+/g,OT=/%5B/g,VT=/%5D/g,Km=/%5E/g,xT=/%60/g,zm=/%7B/g,MT=/%7C/g,Qm=/%7D/g,LT=/%20/g;function du(t){return t==null?"":encodeURI(""+t).replace(MT,"|").replace(OT,"[").replace(VT,"]")}function FT(t){return du(t).replace(zm,"{").replace(Qm,"}").replace(Km,"^")}function vc(t){return du(t).replace(Gm,"%2B").replace(LT,"+").replace(Wm,"%23").replace(PT,"%26").replace(xT,"`").replace(zm,"{").replace(Qm,"}").replace(Km,"^")}function UT(t){return vc(t).replace(DT,"%3D")}function jT(t){return du(t).replace(Wm,"%23").replace(NT,"%3F")}function BT(t){return jT(t).replace(kT,"%2F")}function Mi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const $T=/\/$/,qT=t=>t.replace($T,"");function $l(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=KT(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Mi(o)}}function HT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function WT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&As(e.matched[r],n.matched[s])&&Ym(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function As(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ym(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!GT(t[n],e[n]))return!1;return!0}function GT(t,e){return an(t)?Wd(t,e):an(e)?Wd(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Wd(t,e){return an(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function KT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const tr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ec=function(t){return t.pop="pop",t.push="push",t}({}),ql=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function zT(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qT(t)}const QT=/^[^#]+#/;function YT(t,e){return t.replace(QT,"#")+e}function JT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ga=()=>({left:window.scrollX,top:window.scrollY});function XT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=JT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Gd(t,e){return(history.state?history.state.position-e:-1)+t}const Tc=new Map;function ZT(t,e){Tc.set(t,e)}function eI(t){const e=Tc.get(t);return Tc.delete(t),e}function tI(t){return typeof t=="string"||t&&typeof t=="object"}function Jm(t){return typeof t=="string"||typeof t=="symbol"}let Ge=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Xm=Symbol("");Ge.MATCHER_NOT_FOUND+"",Ge.NAVIGATION_GUARD_REDIRECT+"",Ge.NAVIGATION_ABORTED+"",Ge.NAVIGATION_CANCELLED+"",Ge.NAVIGATION_DUPLICATED+"";function bs(t,e){return Ce(new Error,{type:t,[Xm]:!0},e)}function wn(t,e){return t instanceof Error&&Xm in t&&(e==null||!!(t.type&e))}const nI=["params","query","hash"];function rI(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of nI)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function sI(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Gm," "),i=s.indexOf("="),o=Mi(i<0?s:s.slice(0,i)),l=i<0?null:Mi(s.slice(i+1));if(o in e){let c=e[o];an(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Kd(t){let e="";for(let n in t){const r=t[n];if(n=UT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(an(r)?r.map(s=>s&&vc(s)):[r&&vc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function iI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=an(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const oI=Symbol(""),zd=Symbol(""),Ka=Symbol(""),fu=Symbol(""),Ic=Symbol("");function ti(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ar(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(bs(Ge.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):tI(m)?c(bs(Ge.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Hl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Hm(c)){const u=(c.__vccOpts||c)[e];u&&i.push(ar(u,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=CT(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&ar(m,n,r,o,l,s)()}))}}return i}function aI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>As(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>As(u,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let lI=()=>location.protocol+"//"+location.host;function Zm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),Hd(l,"")}return Hd(n,t)+r+s}function cI(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const v=Zm(t,location),S=n.value,P=e.value;let O=0;if(m){if(n.value=v,e.value=m,o&&o===S){o=null;return}O=P?m.position-P.position:0}else r(v);s.forEach(x=>{x(n.value,S,{delta:O,type:Ec.pop,direction:O?O>0?ql.forward:ql.back:ql.unknown})})};function c(){o=n.value}function u(m){s.push(m);const v=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(v),v}function d(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Ce({},m.state,{scroll:Ga()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:u,destroy:p}}function Qd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ga():null}}function uI(t){const{history:e,location:n}=window,r={value:Zm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:lI()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(v){console.error(v),n[d?"replace":"assign"](m)}}function o(c,u){i(c,Ce({},e.state,Qd(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=c}function l(c,u){const d=Ce({},s.value,e.state,{forward:c,scroll:Ga()});i(d.current,d,!0),i(c,Ce({},Qd(r.value,c,null),{position:d.position+1},u),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function hI(t){t=zT(t);const e=uI(t),n=cI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ce({location:"",base:t,go:r,createHref:YT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Ur=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var rt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(rt||{});const dI={type:Ur.Static,value:""},fI=/[a-zA-Z0-9_]/;function pI(t){if(!t)return[[]];if(t==="/")return[[dI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=rt.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===rt.Static?i.push({type:Ur.Static,value:u}):n===rt.Param||n===rt.ParamRegExp||n===rt.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Ur.Param,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==rt.ParamRegExp){r=n,n=rt.EscapeNext;continue}switch(n){case rt.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=rt.Param):m();break;case rt.EscapeNext:m(),n=r;break;case rt.Param:c==="("?n=rt.ParamRegExp:fI.test(c)?m():(p(),n=rt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case rt.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=rt.ParamRegExpEnd:d+=c;break;case rt.ParamRegExpEnd:p(),n=rt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===rt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const Yd="[^/]+?",mI={sensitive:!1,strict:!1,start:!0,end:!0};var St=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(St||{});const gI=/[.+*?^${}()[\]/\\]/g;function _I(t,e){const n=Ce({},mI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[St.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let v=St.Segment+(n.sensitive?St.BonusCaseSensitive:0);if(m.type===Ur.Static)p||(s+="/"),s+=m.value.replace(gI,"\\$&"),v+=St.Static;else if(m.type===Ur.Param){const{value:S,repeatable:P,optional:O,regexp:x}=m;i.push({name:S,repeatable:P,optional:O});const V=x||Yd;if(V!==Yd){v+=St.BonusCustomRegExp;try{`${V}`}catch(B){throw new Error(`Invalid custom RegExp for param "${S}" (${V}): `+B.message)}}let M=P?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;p||(M=O&&u.length<2?`(?:/${M})`:"/"+M),O&&(M+="?"),s+=M,v+=St.Dynamic,O&&(v+=St.BonusOptional),P&&(v+=St.BonusRepeatable),V===".*"&&(v+=St.BonusWildcard)}d.push(v)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=St.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const v=d[m]||"",S=i[m-1];p[S.name]=v&&S.repeatable?v.split("/"):v}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of m)if(v.type===Ur.Static)d+=v.value;else if(v.type===Ur.Param){const{value:S,repeatable:P,optional:O}=v,x=S in u?u[S]:"";if(an(x)&&!P)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const V=an(x)?x.join("/"):x;if(!V)if(O)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);d+=V}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function yI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===St.Static+St.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===St.Static+St.Segment?1:-1:0}function eg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=yI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Jd(r))return 1;if(Jd(s))return-1}return s.length-r.length}function Jd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const vI={strict:!1,end:!0,sensitive:!1};function EI(t,e,n){const r=_I(pI(t.path),n),s=Ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function TI(t,e){const n=[],r=new Map;e=qd(vI,e);function s(p){return r.get(p)}function i(p,m,v){const S=!v,P=Zd(p);P.aliasOf=v&&v.record;const O=qd(e,p),x=[P];if("alias"in p){const B=typeof p.alias=="string"?[p.alias]:p.alias;for(const J of B)x.push(Zd(Ce({},P,{components:v?v.record.components:P.components,path:J,aliasOf:v?v.record:P})))}let V,M;for(const B of x){const{path:J}=B;if(m&&J[0]!=="/"){const te=m.record.path,b=te[te.length-1]==="/"?"":"/";B.path=m.record.path+(J&&b+J)}if(V=EI(B,m,O),v?v.alias.push(V):(M=M||V,M!==V&&M.alias.push(V),S&&p.name&&!ef(V)&&o(p.name)),tg(V)&&c(V),P.children){const te=P.children;for(let b=0;b<te.length;b++)i(te[b],V,v&&v.children[b])}v=v||V}return M?()=>{o(M)}:Ii}function o(p){if(Jm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=AI(p,n);n.splice(m,0,p),p.record.name&&!ef(p)&&r.set(p.record.name,p)}function u(p,m){let v,S={},P,O;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw bs(Ge.MATCHER_NOT_FOUND,{location:p});O=v.record.name,S=Ce(Xd(m.params,v.keys.filter(M=>!M.optional).concat(v.parent?v.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),p.params&&Xd(p.params,v.keys.map(M=>M.name))),P=v.stringify(S)}else if(p.path!=null)P=p.path,v=n.find(M=>M.re.test(P)),v&&(S=v.parse(P),O=v.record.name);else{if(v=m.name?r.get(m.name):n.find(M=>M.re.test(m.path)),!v)throw bs(Ge.MATCHER_NOT_FOUND,{location:p,currentLocation:m});O=v.record.name,S=Ce({},m.params,p.params),P=v.stringify(S)}const x=[];let V=v;for(;V;)x.unshift(V.record),V=V.parent;return{name:O,path:P,params:S,matched:x,meta:wI(x)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Xd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Zd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:II(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function II(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ef(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function wI(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function AI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;eg(t,e[i])<0?r=i:n=i+1}const s=bI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function bI(t){let e=t;for(;e=e.parent;)if(tg(e)&&eg(t,e)===0)return e}function tg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function tf(t){const e=Kt(Ka),n=Kt(fu),r=Xe(()=>{const c=wt(t.to);return e.resolve(c)}),s=Xe(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(As.bind(null,d));if(m>-1)return m;const v=nf(c[u-2]);return u>1&&nf(d)===v&&p[p.length-1].path!==v?p.findIndex(As.bind(null,c[u-2])):m}),i=Xe(()=>s.value>-1&&PI(n.params,r.value.params)),o=Xe(()=>s.value>-1&&s.value===n.matched.length-1&&Ym(n.params,r.value.params));function l(c={}){if(CI(c)){const u=e[wt(t.replace)?"replace":"push"](wt(t.to)).catch(Ii);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Xe(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function RI(t){return t.length===1?t[0]:t}const SI=hm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:tf,setup(t,{slots:e}){const n=zi(tf(t)),{options:r}=Kt(Ka),s=Xe(()=>({[rf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[rf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&RI(e.default(n));return t.custom?i:hu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$o=SI;function CI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function PI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!an(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function nf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const rf=(t,e,n)=>t??e??n,kI=hm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Kt(Ic),s=Xe(()=>t.route||r.value),i=Kt(zd,0),o=Xe(()=>{let u=wt(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Xe(()=>s.value.matched[o.value]);Fo(zd,Xe(()=>o.value+1)),Fo(oI,l),Fo(Ic,s);const c=Le();return xn(()=>[c.value,l.value,t.name],([u,d,p],[m,v,S])=>{d&&(d.instances[p]=u,v&&v!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!As(d,v)||!m)&&(d.enterCallbacks[p]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return sf(n.default,{Component:m,route:u});const v=p.props[d],S=v?v===!0?u.params:typeof v=="function"?v(u):v:null,O=hu(m,Ce({},S,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return sf(n.default,{Component:O,route:u})||O}}});function sf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ng=kI;function DI(t){const e=TI(t.routes,t),n=t.parseQuery||sI,r=t.stringifyQuery||Kd,s=t.history,i=ti(),o=ti(),l=ti(),c=Iv(tr);let u=tr;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Bl.bind(null,F=>""+F),p=Bl.bind(null,BT),m=Bl.bind(null,Mi);function v(F,X){let Q,re;return Jm(F)?(Q=e.getRecordMatcher(F),re=X):re=F,e.addRoute(re,Q)}function S(F){const X=e.getRecordMatcher(F);X&&e.removeRoute(X)}function P(){return e.getRoutes().map(F=>F.record)}function O(F){return!!e.getRecordMatcher(F)}function x(F,X){if(X=Ce({},X||c.value),typeof F=="string"){const A=$l(n,F,X.path),k=e.resolve({path:A.path},X),j=s.createHref(A.fullPath);return Ce(A,k,{params:m(k.params),hash:Mi(A.hash),redirectedFrom:void 0,href:j})}let Q;if(F.path!=null)Q=Ce({},F,{path:$l(n,F.path,X.path).path});else{const A=Ce({},F.params);for(const k in A)A[k]==null&&delete A[k];Q=Ce({},F,{params:p(A)}),X.params=p(X.params)}const re=e.resolve(Q,X),ge=F.hash||"";re.params=d(m(re.params));const Ne=HT(r,Ce({},F,{hash:FT(ge),path:re.path})),E=s.createHref(Ne);return Ce({fullPath:Ne,hash:ge,query:r===Kd?iI(F.query):F.query||{}},re,{redirectedFrom:void 0,href:E})}function V(F){return typeof F=="string"?$l(n,F,c.value.path):Ce({},F)}function M(F,X){if(u!==F)return bs(Ge.NAVIGATION_CANCELLED,{from:X,to:F})}function B(F){return b(F)}function J(F){return B(Ce(V(F),{replace:!0}))}function te(F,X){const Q=F.matched[F.matched.length-1];if(Q&&Q.redirect){const{redirect:re}=Q;let ge=typeof re=="function"?re(F,X):re;return typeof ge=="string"&&(ge=ge.includes("?")||ge.includes("#")?ge=V(ge):{path:ge},ge.params={}),Ce({query:F.query,hash:F.hash,params:ge.path!=null?{}:F.params},ge)}}function b(F,X){const Q=u=x(F),re=c.value,ge=F.state,Ne=F.force,E=F.replace===!0,A=te(Q,re);if(A)return b(Ce(V(A),{state:typeof A=="object"?Ce({},ge,A.state):ge,force:Ne,replace:E}),X||Q);const k=Q;k.redirectedFrom=X;let j;return!Ne&&WT(r,re,Q)&&(j=bs(Ge.NAVIGATION_DUPLICATED,{to:k,from:re}),qt(re,re,!0,!1)),(j?Promise.resolve(j):I(k,re)).catch(L=>wn(L)?wn(L,Ge.NAVIGATION_GUARD_REDIRECT)?L:Yt(L):ye(L,k,re)).then(L=>{if(L){if(wn(L,Ge.NAVIGATION_GUARD_REDIRECT))return b(Ce({replace:E},V(L.to),{state:typeof L.to=="object"?Ce({},ge,L.to.state):ge,force:Ne}),X||k)}else L=w(k,re,!0,E,ge);return R(k,re,L),L})}function y(F,X){const Q=M(F,X);return Q?Promise.reject(Q):Promise.resolve()}function _(F){const X=Qn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(F):F()}function I(F,X){let Q;const[re,ge,Ne]=aI(F,X);Q=Hl(re.reverse(),"beforeRouteLeave",F,X);for(const A of re)A.leaveGuards.forEach(k=>{Q.push(ar(k,F,X))});const E=y.bind(null,F,X);return Q.push(E),Dt(Q).then(()=>{Q=[];for(const A of i.list())Q.push(ar(A,F,X));return Q.push(E),Dt(Q)}).then(()=>{Q=Hl(ge,"beforeRouteUpdate",F,X);for(const A of ge)A.updateGuards.forEach(k=>{Q.push(ar(k,F,X))});return Q.push(E),Dt(Q)}).then(()=>{Q=[];for(const A of Ne)if(A.beforeEnter)if(an(A.beforeEnter))for(const k of A.beforeEnter)Q.push(ar(k,F,X));else Q.push(ar(A.beforeEnter,F,X));return Q.push(E),Dt(Q)}).then(()=>(F.matched.forEach(A=>A.enterCallbacks={}),Q=Hl(Ne,"beforeRouteEnter",F,X,_),Q.push(E),Dt(Q))).then(()=>{Q=[];for(const A of o.list())Q.push(ar(A,F,X));return Q.push(E),Dt(Q)}).catch(A=>wn(A,Ge.NAVIGATION_CANCELLED)?A:Promise.reject(A))}function R(F,X,Q){l.list().forEach(re=>_(()=>re(F,X,Q)))}function w(F,X,Q,re,ge){const Ne=M(F,X);if(Ne)return Ne;const E=X===tr,A=hs?history.state:{};Q&&(re||E?s.replace(F.fullPath,Ce({scroll:E&&A&&A.scroll},ge)):s.push(F.fullPath,ge)),c.value=F,qt(F,X,Q,E),Yt()}let T;function Se(){T||(T=s.listen((F,X,Q)=>{if(!xt.listening)return;const re=x(F),ge=te(re,xt.currentRoute.value);if(ge){b(Ce(ge,{replace:!0,force:!0}),re).catch(Ii);return}u=re;const Ne=c.value;hs&&ZT(Gd(Ne.fullPath,Q.delta),Ga()),I(re,Ne).catch(E=>wn(E,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_CANCELLED)?E:wn(E,Ge.NAVIGATION_GUARD_REDIRECT)?(b(Ce(V(E.to),{force:!0}),re).then(A=>{wn(A,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_DUPLICATED)&&!Q.delta&&Q.type===Ec.pop&&s.go(-1,!1)}).catch(Ii),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ye(E,re,Ne))).then(E=>{E=E||w(re,Ne,!1),E&&(Q.delta&&!wn(E,Ge.NAVIGATION_CANCELLED)?s.go(-Q.delta,!1):Q.type===Ec.pop&&wn(E,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),R(re,Ne,E)}).catch(Ii)}))}let ze=ti(),ke=ti(),ue;function ye(F,X,Q){Yt(F);const re=ke.list();return re.length?re.forEach(ge=>ge(F,X,Q)):console.error(F),Promise.reject(F)}function Vt(){return ue&&c.value!==tr?Promise.resolve():new Promise((F,X)=>{ze.add([F,X])})}function Yt(F){return ue||(ue=!F,Se(),ze.list().forEach(([X,Q])=>F?Q(F):X()),ze.reset()),F}function qt(F,X,Q,re){const{scrollBehavior:ge}=t;if(!hs||!ge)return Promise.resolve();const Ne=!Q&&eI(Gd(F.fullPath,0))||(re||!Q)&&history.state&&history.state.scroll||null;return La().then(()=>ge(F,X,Ne)).then(E=>E&&XT(E)).catch(E=>ye(E,F,X))}const Be=F=>s.go(F);let $e;const Qn=new Set,xt={currentRoute:c,listening:!0,addRoute:v,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:P,resolve:x,options:t,push:B,replace:J,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ke.add,isReady:Vt,install(F){F.component("RouterLink",$o),F.component("RouterView",ng),F.config.globalProperties.$router=xt,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>wt(c)}),hs&&!$e&&c.value===tr&&($e=!0,B(s.location).catch(re=>{}));const X={};for(const re in tr)Object.defineProperty(X,re,{get:()=>c.value[re],enumerable:!0});F.provide(Ka,xt),F.provide(fu,Qp(X)),F.provide(Ic,c);const Q=F.unmount;Qn.add(F),F.unmount=function(){Qn.delete(F),Qn.size<1&&(u=tr,T&&T(),T=null,c.value=tr,$e=!1,ue=!1),Q()}}};function Dt(F){return F.reduce((X,Q)=>X.then(()=>_(Q)),Promise.resolve())}return xt}function za(){return Kt(Ka)}function NI(t){return Kt(fu)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},OI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new VI;const m=i<<2|l>>4;if(r.push(m),u!==64){const v=l<<4&240|u>>2;if(r.push(v),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xI=function(t){const e=rg(t);return sg.encodeByteArray(e,!0)},ca=function(t){return xI(t).replace(/\./g,"")},ig=function(t){try{return sg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=()=>MI().__FIREBASE_DEFAULTS__,FI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ig(t[1]);return e&&JSON.parse(e)},Qa=()=>{try{return LI()||FI()||UI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},og=t=>{var e,n;return(n=(e=Qa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jI=t=>{const e=og(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ag=()=>{var t;return(t=Qa())===null||t===void 0?void 0:t.config},lg=t=>{var e;return(e=Qa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ca(JSON.stringify(n)),ca(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function HI(){var t;const e=(t=Qa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zI(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QI(){return!HI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YI(){try{return typeof indexedDB=="object"}catch{return!1}}function JI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="FirebaseError";class Kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XI,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ZI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Kn(s,l,r)}}function ZI(t,e){return t.replace(ew,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ew=/\{\$([^}]+)}/g;function tw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ua(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(of(i)&&of(o)){if(!ua(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function of(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ai(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nw(t,e){const n=new rw(t,e);return n.subscribe.bind(n)}class rw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wl),s.error===void 0&&(s.error=Wl),s.complete===void 0&&(s.complete=Wl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return t&&t._delegate?t._delegate:t}class Wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new BI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aw(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ow(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ow(t){return t===xr?void 0:t}function aw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const cw={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},uw=Ee.INFO,hw={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},dw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pu{constructor(e){this.name=e,this._logLevel=uw,this._logHandler=dw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const fw=(t,e)=>e.some(n=>t instanceof n);let af,lf;function pw(){return af||(af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mw(){return lf||(lf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cg=new WeakMap,wc=new WeakMap,ug=new WeakMap,Gl=new WeakMap,mu=new WeakMap;function gw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(fr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cg.set(n,t)}).catch(()=>{}),mu.set(e,t),e}function _w(t){if(wc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});wc.set(t,e)}let Ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ug.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yw(t){Ac=t(Ac)}function vw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kl(this),e,...n);return ug.set(r,e.sort?e.sort():[e]),fr(r)}:mw().includes(t)?function(...e){return t.apply(Kl(this),e),fr(cg.get(this))}:function(...e){return fr(t.apply(Kl(this),e))}}function Ew(t){return typeof t=="function"?vw(t):(t instanceof IDBTransaction&&_w(t),fw(t,pw())?new Proxy(t,Ac):t)}function fr(t){if(t instanceof IDBRequest)return gw(t);if(Gl.has(t))return Gl.get(t);const e=Ew(t);return e!==t&&(Gl.set(t,e),mu.set(e,t)),e}const Kl=t=>mu.get(t);function Tw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=fr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(fr(o.result),c.oldVersion,c.newVersion,fr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Iw=["get","getKey","getAll","getAllKeys","count"],ww=["put","add","delete","clear"],zl=new Map;function cf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zl.get(e))return zl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ww.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Iw.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return zl.set(e,i),i}yw(t=>({...t,get:(e,n,r)=>cf(e,n)||t.get(e,n,r),has:(e,n)=>!!cf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bc="@firebase/app",uf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new pu("@firebase/app"),Rw="@firebase/app-compat",Sw="@firebase/analytics-compat",Cw="@firebase/analytics",Pw="@firebase/app-check-compat",kw="@firebase/app-check",Dw="@firebase/auth",Nw="@firebase/auth-compat",Ow="@firebase/database",Vw="@firebase/data-connect",xw="@firebase/database-compat",Mw="@firebase/functions",Lw="@firebase/functions-compat",Fw="@firebase/installations",Uw="@firebase/installations-compat",jw="@firebase/messaging",Bw="@firebase/messaging-compat",$w="@firebase/performance",qw="@firebase/performance-compat",Hw="@firebase/remote-config",Ww="@firebase/remote-config-compat",Gw="@firebase/storage",Kw="@firebase/storage-compat",zw="@firebase/firestore",Qw="@firebase/vertexai-preview",Yw="@firebase/firestore-compat",Jw="firebase",Xw="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="[DEFAULT]",Zw={[bc]:"fire-core",[Rw]:"fire-core-compat",[Cw]:"fire-analytics",[Sw]:"fire-analytics-compat",[kw]:"fire-app-check",[Pw]:"fire-app-check-compat",[Dw]:"fire-auth",[Nw]:"fire-auth-compat",[Ow]:"fire-rtdb",[Vw]:"fire-data-connect",[xw]:"fire-rtdb-compat",[Mw]:"fire-fn",[Lw]:"fire-fn-compat",[Fw]:"fire-iid",[Uw]:"fire-iid-compat",[jw]:"fire-fcm",[Bw]:"fire-fcm-compat",[$w]:"fire-perf",[qw]:"fire-perf-compat",[Hw]:"fire-rc",[Ww]:"fire-rc-compat",[Gw]:"fire-gcs",[Kw]:"fire-gcs-compat",[zw]:"fire-fst",[Yw]:"fire-fst-compat",[Qw]:"fire-vertex","fire-js":"fire-js",[Jw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new Map,eA=new Map,Sc=new Map;function hf(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rs(t){const e=t.name;if(Sc.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;Sc.set(e,t);for(const n of ha.values())hf(n,t);for(const n of eA.values())hf(n,t);return!0}function gu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pr=new Ji("app","Firebase",tA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=Xw;function hg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw pr.create("bad-app-name",{appName:String(s)});if(n||(n=ag()),!n)throw pr.create("no-options");const i=ha.get(s);if(i){if(ua(n,i.options)&&ua(r,i.config))return i;throw pr.create("duplicate-app",{appName:s})}const o=new lw(s);for(const c of Sc.values())o.addComponent(c);const l=new nA(n,r,o);return ha.set(s,l),l}function dg(t=Rc){const e=ha.get(t);if(!e&&t===Rc&&ag())return hg();if(!e)throw pr.create("no-app",{appName:t});return e}function mr(t,e,n){var r;let s=(r=Zw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(l.join(" "));return}Rs(new Wr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA="firebase-heartbeat-database",sA=1,Li="firebase-heartbeat-store";let Ql=null;function fg(){return Ql||(Ql=Tw(rA,sA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Li)}catch(n){console.warn(n)}}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),Ql}async function iA(t){try{const n=(await fg()).transaction(Li),r=await n.objectStore(Li).get(pg(t));return await n.done,r}catch(e){if(e instanceof Kn)$n.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function df(t,e){try{const r=(await fg()).transaction(Li,"readwrite");await r.objectStore(Li).put(e,pg(t)),await r.done}catch(n){if(n instanceof Kn)$n.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function pg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=1024,aA=30*24*60*60*1e3;class lA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ff();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=aA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ff(),{heartbeatsToSend:r,unsentEntries:s}=cA(this._heartbeatsCache.heartbeats),i=ca(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return $n.warn(n),""}}}function ff(){return new Date().toISOString().substring(0,10)}function cA(t,e=oA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YI()?JI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return df(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return df(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pf(t){return ca(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(t){Rs(new Wr("platform-logger",e=>new Aw(e),"PRIVATE")),Rs(new Wr("heartbeat",e=>new lA(e),"PRIVATE")),mr(bc,uf,t),mr(bc,uf,"esm2017"),mr("fire-js","")}hA("");var dA="firebase",fA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mr(dA,fA,"app");function _u(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function mg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pA=mg,gg=new Ji("auth","Firebase",mg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new pu("@firebase/auth");function mA(t,...e){da.logLevel<=Ee.WARN&&da.warn(`Auth (${Vs}): ${t}`,...e)}function qo(t,...e){da.logLevel<=Ee.ERROR&&da.error(`Auth (${Vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw vu(t,...e)}function nn(t,...e){return vu(t,...e)}function yu(t,e,n){const r=Object.assign(Object.assign({},pA()),{[e]:n});return new Ji("auth","Firebase",r).create(e,{appName:t.name})}function Fn(t){return yu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Qt(t,"argument-error"),yu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gg.create(t,...e)}function ce(t,e,...n){if(!t)throw vu(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qo(e),new Error(e)}function qn(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _A(){return mf()==="http:"||mf()==="https:"}function mf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_A()||GI()||"connection"in navigator)?navigator.onLine:!0}function vA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=qI()||KI()}get(){return yA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=new Zi(3e4,6e4);function Ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wr(t,e,n,r,s={}){return yg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Xi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return WI()||(u.referrerPolicy="no-referrer"),_g.fetch()(vg(t,t.config.apiHost,n,l),u)})}async function yg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},EA),e);try{const s=new wA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw No(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw No(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw No(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw No(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yu(t,d,u);Qt(t,d)}}catch(s){if(s instanceof Kn)throw s;Qt(t,"network-request-failed",{message:String(s)})}}async function eo(t,e,n,r,s={}){const i=await wr(t,e,n,r,s);return"mfaPendingCredential"in i&&Qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Eu(t.config,s):`${t.config.apiScheme}://${s}`}function IA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),TA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function No(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nn(t,e,r);return s.customData._tokenResponse=n,s}function gf(t){return t!==void 0&&t.enterprise!==void 0}class AA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return IA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function bA(t,e){return wr(t,"GET","/v2/recaptchaConfig",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(t,e){return wr(t,"POST","/v1/accounts:delete",e)}async function Eg(t,e){return wr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SA(t,e=!1){const n=it(t),r=await n.getIdToken(e),s=Tu(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wi(Yl(s.auth_time)),issuedAtTime:wi(Yl(s.iat)),expirationTime:wi(Yl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yl(t){return Number(t)*1e3}function Tu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qo("JWT malformed, contained fewer than 3 sections"),null;try{const s=ig(n);return s?JSON.parse(s):(qo("Failed to decode base64 JWT payload"),null)}catch(s){return qo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _f(t){const e=Tu(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kn&&CA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Fi(t,Eg(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Tg(i.providerUserInfo):[],l=DA(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Pc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function kA(t){const e=it(t);await fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Tg(t){return t.map(e=>{var{providerId:n}=e,r=_u(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(t,e){const n=await yg(t,{},async()=>{const r=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=vg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",_g.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OA(t,e){return wr(t,"POST","/v2/accounts:revokeToken",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_f(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=_f(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await NA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vs;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vs,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=_u(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fi(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SA(this,e)}reload(){return kA(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(Fn(this.auth));const e=await this.getIdToken();return await Fi(this,RA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,V=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:M,emailVerified:B,isAnonymous:J,providerData:te,stsTokenManager:b}=n;ce(M&&b,e,"internal-error");const y=vs.fromJSON(this.name,b);ce(typeof M=="string",e,"internal-error"),nr(p,e.name),nr(m,e.name),ce(typeof B=="boolean",e,"internal-error"),ce(typeof J=="boolean",e,"internal-error"),nr(v,e.name),nr(S,e.name),nr(P,e.name),nr(O,e.name),nr(x,e.name),nr(V,e.name);const _=new Dn({uid:M,auth:e,email:m,emailVerified:B,displayName:p,isAnonymous:J,photoURL:S,phoneNumber:v,tenantId:P,stsTokenManager:y,createdAt:x,lastLoginAt:V});return te&&Array.isArray(te)&&(_.providerData=te.map(I=>Object.assign({},I))),O&&(_._redirectEventId=O),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new vs;s.updateFromServerResponse(n);const i=new Dn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Tg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new vs;l.updateFromIdToken(r);const c=new Dn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Pc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=new Map;function Nn(t){qn(t instanceof Function,"Expected a class definition");let e=yf.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ig.type="NONE";const vf=Ig;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ho(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ho("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Es(Nn(vf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Nn(vf);const o=Ho(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Dn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Es(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Es(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cg(e))return"Blackberry";if(Pg(e))return"Webos";if(Ag(e))return"Safari";if((e.includes("chrome/")||bg(e))&&!e.includes("edge/"))return"Chrome";if(Sg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wg(t=At()){return/firefox\//i.test(t)}function Ag(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bg(t=At()){return/crios\//i.test(t)}function Rg(t=At()){return/iemobile/i.test(t)}function Sg(t=At()){return/android/i.test(t)}function Cg(t=At()){return/blackberry/i.test(t)}function Pg(t=At()){return/webos/i.test(t)}function Iu(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VA(t=At()){var e;return Iu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xA(){return zI()&&document.documentMode===10}function kg(t=At()){return Iu(t)||Sg(t)||Pg(t)||Cg(t)||/windows phone/i.test(t)||Rg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t,e=[]){let n;switch(t){case"Browser":n=Ef(At());break;case"Worker":n=`${Ef(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(t,e={}){return wr(t,"GET","/v2/passwordPolicy",Ir(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=6;class UA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tf(this),this.idTokenSubscription=new Tf(this),this.beforeStateQueue=new MA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Eg(this,{idToken:e}),r=await Dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(Fn(this));const n=e?it(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LA(this),n=new UA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ar(t){return it(t)}class Tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=nw(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BA(t){Ya=t}function Ng(t){return Ya.loadJS(t)}function $A(){return Ya.recaptchaEnterpriseScript}function qA(){return Ya.gapiScript}function HA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const WA="recaptcha-enterprise",GA="NO_RECAPTCHA";class KA{constructor(e){this.type=WA,this.auth=Ar(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{bA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new AA(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;gf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(GA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&gf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=$A();c.length!==0&&(c+=l),Ng(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function If(t,e,n,r=!1){const s=new KA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function kc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await If(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await If(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t,e){const n=gu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ua(i,e??{}))return s;Qt(s,"already-initialized")}return n.initialize({options:e})}function QA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YA(t,e,n){const r=Ar(t);ce(r._canInitEmulator,r,"emulator-config-failed"),ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Og(e),{host:o,port:l}=JA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||XA()}function Og(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JA(t){const e=Og(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:wf(o)}}}function wf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}async function ZA(t,e){return wr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(t,e){return eo(t,"POST","/v1/accounts:signInWithPassword",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(t,e){return eo(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}async function n0(t,e){return eo(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends wu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ui(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ui(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kc(e,n,"signInWithPassword",e0);case"emailLink":return t0(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kc(e,r,"signUpPassword",ZA);case"emailLink":return n0(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(t,e){return eo(t,"POST","/v1/accounts:signInWithIdp",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="http://localhost";class Gr extends wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=_u(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Gr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ts(e,n)}buildRequest(){const e={requestUri:r0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function i0(t){const e=oi(ai(t)).link,n=e?oi(ai(e)).deep_link_id:null,r=oi(ai(t)).deep_link_id;return(r?oi(ai(r)).link:null)||r||n||e||t}class Au{constructor(e){var n,r,s,i,o,l;const c=oi(ai(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=s0((s=c.mode)!==null&&s!==void 0?s:null);ce(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=i0(e);try{return new Au(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.providerId=xs.PROVIDER_ID}static credential(e,n){return Ui._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Au.parseLink(n);return ce(r,"argument-error"),Ui._fromEmailAndCode(e,r.code,r.tenantId)}}xs.PROVIDER_ID="password";xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends bu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends to{constructor(){super("facebook.com")}static credential(e){return Gr._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends to{constructor(){super("github.com")}static credential(e){return Gr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends to{constructor(){super("twitter.com")}static credential(e,n){return Gr._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(t,e){return eo(t,"POST","/v1/accounts:signUp",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Dn._fromIdTokenResponse(e,r,s),o=Af(r);return new Kr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Af(r);return new Kr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Af(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends Kn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new pa(e,n,r,s)}}function Vg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pa._fromErrorAndOperation(t,i,e,r):i})}async function a0(t,e,n=!1){const r=await Fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(t,e,n=!1){const{auth:r}=t;if(Zt(r.app))return Promise.reject(Fn(r));const s="reauthenticate";try{const i=await Fi(t,Vg(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=Tu(i.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),Kr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(t,e,n=!1){if(Zt(t.app))return Promise.reject(Fn(t));const r="signIn",s=await Vg(t,r,e),i=await Kr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function c0(t,e){return xg(Ar(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg(t){const e=Ar(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function u0(t,e,n){if(Zt(t.app))return Promise.reject(Fn(t));const r=Ar(t),o=await kc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",o0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Mg(t),c}),l=await Kr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function h0(t,e,n){return Zt(t.app)?Promise.reject(Fn(t)):c0(it(t),xs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Mg(t),r})}function d0(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function f0(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function Lg(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}function p0(t){return it(t).signOut()}const ma="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ma,"1"),this.storage.removeItem(ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=1e3,g0=10;class Ug extends Fg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);xA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,g0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},m0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ug.type="LOCAL";const _0=Ug;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg extends Fg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jg.type="SESSION";const Bg=jg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ja(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await y0(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ja.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Ru("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return window}function E0(t){fn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function T0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function I0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function w0(){return $g()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="firebaseLocalStorageDb",A0=1,ga="firebaseLocalStorage",Hg="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xa(t,e){return t.transaction([ga],e?"readwrite":"readonly").objectStore(ga)}function b0(){const t=indexedDB.deleteDatabase(qg);return new no(t).toPromise()}function Dc(){const t=indexedDB.open(qg,A0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ga,{keyPath:Hg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ga)?e(r):(r.close(),await b0(),e(await Dc()))})})}async function bf(t,e,n){const r=Xa(t,!0).put({[Hg]:e,value:n});return new no(r).toPromise()}async function R0(t,e){const n=Xa(t,!1).get(e),r=await new no(n).toPromise();return r===void 0?null:r.value}function Rf(t,e){const n=Xa(t,!0).delete(e);return new no(n).toPromise()}const S0=800,C0=3;class Wg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>C0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $g()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ja._getInstance(w0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await T0(),!this.activeServiceWorker)return;this.sender=new v0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||I0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dc();return await bf(e,ma,"1"),await Rf(e,ma),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>R0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xa(s,!1).getAll();return new no(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wg.type="LOCAL";const P0=Wg;new Zi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t,e){return e?Nn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends wu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function k0(t){return xg(t.auth,new Su(t),t.bypassAuthState)}function D0(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),l0(n,new Su(t),t.bypassAuthState)}async function N0(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),a0(n,new Su(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return k0;case"linkViaPopup":case"linkViaRedirect":return N0;case"reauthViaPopup":case"reauthViaRedirect":return D0;default:Qt(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=new Zi(2e3,1e4);async function V0(t,e,n){if(Zt(t.app))return Promise.reject(nn(t,"operation-not-supported-in-this-environment"));const r=Ar(t);gA(t,e,bu);const s=Gg(r,n);return new jr(r,"signInViaPopup",e,s).executeNotNull()}class jr extends Kg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=Ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,O0.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="pendingRedirect",Wo=new Map;class M0 extends Kg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wo.get(this.auth._key());if(!e){try{const r=await L0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wo.set(this.auth._key(),e)}return this.bypassAuthState||Wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L0(t,e){const n=j0(e),r=U0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function F0(t,e){Wo.set(t._key(),e)}function U0(t){return Nn(t._redirectPersistence)}function j0(t){return Ho(x0,t.config.apiKey,t.name)}async function B0(t,e,n=!1){if(Zt(t.app))return Promise.reject(Fn(t));const r=Ar(t),s=Gg(r,e),o=await new M0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=10*60*1e3;class q0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sf(e))}saveEventToCache(e){this.cachedEventUids.add(Sf(e)),this.lastProcessedEventTime=Date.now()}}function Sf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W0(t,e={}){return wr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,K0=/^https?/;async function z0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await W0(t);for(const n of e)try{if(Q0(n))return}catch{}Qt(t,"unauthorized-domain")}function Q0(t){const e=Cc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!K0.test(n))return!1;if(G0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=new Zi(3e4,6e4);function Cf(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function J0(t){return new Promise((e,n)=>{var r,s,i;function o(){Cf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cf(),n(nn(t,"network-request-failed"))},timeout:Y0.get()})}if(!((s=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=fn().gapi)===null||i===void 0)&&i.load)o();else{const l=HA("iframefcb");return fn()[l]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},Ng(`${qA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Go=null,e})}let Go=null;function X0(t){return Go=Go||J0(t),Go}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=new Zi(5e3,15e3),eb="__/auth/iframe",tb="emulator/auth/iframe",nb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sb(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eu(e,tb):`https://${t.config.authDomain}/${eb}`,r={apiKey:e.apiKey,appName:t.name,v:Vs},s=rb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Xi(r).slice(1)}`}async function ib(t){const e=await X0(t),n=fn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:sb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),l=fn().setTimeout(()=>{i(o)},Z0.get());function c(){fn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ab=500,lb=600,cb="_blank",ub="http://localhost";class Pf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hb(t,e,n,r=ab,s=lb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},ob),{width:r.toString(),height:s.toString(),top:i,left:o}),u=At().toLowerCase();n&&(l=bg(u)?cb:n),wg(u)&&(e=e||ub,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[v,S])=>`${m}${v}=${S},`,"");if(VA(u)&&l!=="_self")return db(e||"",l),new Pf(null);const p=window.open(e||"",l,d);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Pf(p)}function db(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="__/auth/handler",pb="emulator/auth/handler",mb=encodeURIComponent("fac");async function kf(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vs,eventId:s};if(e instanceof bu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries(i||{}))o[d]=p}if(e instanceof to){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${mb}=${encodeURIComponent(c)}`:"";return`${gb(t)}?${Xi(l).slice(1)}${u}`}function gb({config:t}){return t.emulator?Eu(t,pb):`https://${t.authDomain}/${fb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="webStorageSupport";class _b{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bg,this._completeRedirectFn=B0,this._overrideRedirectResult=F0}async _openPopup(e,n,r,s){var i;qn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await kf(e,n,r,Cc(),s);return hb(e,o,Ru())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await kf(e,n,r,Cc(),s);return E0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ib(e),r=new q0(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jl,{type:Jl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Jl];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=z0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kg()||Ag()||Iu()}}const yb=_b;var Df="@firebase/auth",Nf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Tb(t){Rs(new Wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dg(t)},u=new jA(r,s,i,c);return QA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rs(new Wr("auth-internal",e=>{const n=Ar(e.getProvider("auth").getImmediate());return(r=>new vb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mr(Df,Nf,Eb(t)),mr(Df,Nf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=5*60,wb=lg("authIdTokenMaxAge")||Ib;let Of=null;const Ab=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wb)return;const s=n==null?void 0:n.token;Of!==s&&(Of=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bb(t=dg()){const e=gu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zA(t,{popupRedirectResolver:yb,persistence:[P0,_0,Bg]}),r=lg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Ab(i.toString());f0(n,o,()=>o(n.currentUser)),d0(n,l=>o(l))}}const s=og("auth");return s&&YA(n,`http://${s}`),n}function Rb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}BA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Rb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Tb("Browser");var Vf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,Qg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.D=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(I,R,w){for(var T=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)T[Se-2]=arguments[Se];return y.prototype[R].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,_){_||(_=0);var I=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)I[R]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(R=0;16>R;++R)I[R]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],R=b.g[2];var w=b.g[3],T=y+(w^_&(R^w))+I[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=w+(R^y&(_^R))+I[1]+3905402710&4294967295,w=y+(T<<12&4294967295|T>>>20),T=R+(_^w&(y^_))+I[2]+606105819&4294967295,R=w+(T<<17&4294967295|T>>>15),T=_+(y^R&(w^y))+I[3]+3250441966&4294967295,_=R+(T<<22&4294967295|T>>>10),T=y+(w^_&(R^w))+I[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=w+(R^y&(_^R))+I[5]+1200080426&4294967295,w=y+(T<<12&4294967295|T>>>20),T=R+(_^w&(y^_))+I[6]+2821735955&4294967295,R=w+(T<<17&4294967295|T>>>15),T=_+(y^R&(w^y))+I[7]+4249261313&4294967295,_=R+(T<<22&4294967295|T>>>10),T=y+(w^_&(R^w))+I[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=w+(R^y&(_^R))+I[9]+2336552879&4294967295,w=y+(T<<12&4294967295|T>>>20),T=R+(_^w&(y^_))+I[10]+4294925233&4294967295,R=w+(T<<17&4294967295|T>>>15),T=_+(y^R&(w^y))+I[11]+2304563134&4294967295,_=R+(T<<22&4294967295|T>>>10),T=y+(w^_&(R^w))+I[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=w+(R^y&(_^R))+I[13]+4254626195&4294967295,w=y+(T<<12&4294967295|T>>>20),T=R+(_^w&(y^_))+I[14]+2792965006&4294967295,R=w+(T<<17&4294967295|T>>>15),T=_+(y^R&(w^y))+I[15]+1236535329&4294967295,_=R+(T<<22&4294967295|T>>>10),T=y+(R^w&(_^R))+I[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=w+(_^R&(y^_))+I[6]+3225465664&4294967295,w=y+(T<<9&4294967295|T>>>23),T=R+(y^_&(w^y))+I[11]+643717713&4294967295,R=w+(T<<14&4294967295|T>>>18),T=_+(w^y&(R^w))+I[0]+3921069994&4294967295,_=R+(T<<20&4294967295|T>>>12),T=y+(R^w&(_^R))+I[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=w+(_^R&(y^_))+I[10]+38016083&4294967295,w=y+(T<<9&4294967295|T>>>23),T=R+(y^_&(w^y))+I[15]+3634488961&4294967295,R=w+(T<<14&4294967295|T>>>18),T=_+(w^y&(R^w))+I[4]+3889429448&4294967295,_=R+(T<<20&4294967295|T>>>12),T=y+(R^w&(_^R))+I[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=w+(_^R&(y^_))+I[14]+3275163606&4294967295,w=y+(T<<9&4294967295|T>>>23),T=R+(y^_&(w^y))+I[3]+4107603335&4294967295,R=w+(T<<14&4294967295|T>>>18),T=_+(w^y&(R^w))+I[8]+1163531501&4294967295,_=R+(T<<20&4294967295|T>>>12),T=y+(R^w&(_^R))+I[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=w+(_^R&(y^_))+I[2]+4243563512&4294967295,w=y+(T<<9&4294967295|T>>>23),T=R+(y^_&(w^y))+I[7]+1735328473&4294967295,R=w+(T<<14&4294967295|T>>>18),T=_+(w^y&(R^w))+I[12]+2368359562&4294967295,_=R+(T<<20&4294967295|T>>>12),T=y+(_^R^w)+I[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=w+(y^_^R)+I[8]+2272392833&4294967295,w=y+(T<<11&4294967295|T>>>21),T=R+(w^y^_)+I[11]+1839030562&4294967295,R=w+(T<<16&4294967295|T>>>16),T=_+(R^w^y)+I[14]+4259657740&4294967295,_=R+(T<<23&4294967295|T>>>9),T=y+(_^R^w)+I[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=w+(y^_^R)+I[4]+1272893353&4294967295,w=y+(T<<11&4294967295|T>>>21),T=R+(w^y^_)+I[7]+4139469664&4294967295,R=w+(T<<16&4294967295|T>>>16),T=_+(R^w^y)+I[10]+3200236656&4294967295,_=R+(T<<23&4294967295|T>>>9),T=y+(_^R^w)+I[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=w+(y^_^R)+I[0]+3936430074&4294967295,w=y+(T<<11&4294967295|T>>>21),T=R+(w^y^_)+I[3]+3572445317&4294967295,R=w+(T<<16&4294967295|T>>>16),T=_+(R^w^y)+I[6]+76029189&4294967295,_=R+(T<<23&4294967295|T>>>9),T=y+(_^R^w)+I[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=w+(y^_^R)+I[12]+3873151461&4294967295,w=y+(T<<11&4294967295|T>>>21),T=R+(w^y^_)+I[15]+530742520&4294967295,R=w+(T<<16&4294967295|T>>>16),T=_+(R^w^y)+I[2]+3299628645&4294967295,_=R+(T<<23&4294967295|T>>>9),T=y+(R^(_|~w))+I[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=w+(_^(y|~R))+I[7]+1126891415&4294967295,w=y+(T<<10&4294967295|T>>>22),T=R+(y^(w|~_))+I[14]+2878612391&4294967295,R=w+(T<<15&4294967295|T>>>17),T=_+(w^(R|~y))+I[5]+4237533241&4294967295,_=R+(T<<21&4294967295|T>>>11),T=y+(R^(_|~w))+I[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=w+(_^(y|~R))+I[3]+2399980690&4294967295,w=y+(T<<10&4294967295|T>>>22),T=R+(y^(w|~_))+I[10]+4293915773&4294967295,R=w+(T<<15&4294967295|T>>>17),T=_+(w^(R|~y))+I[1]+2240044497&4294967295,_=R+(T<<21&4294967295|T>>>11),T=y+(R^(_|~w))+I[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=w+(_^(y|~R))+I[15]+4264355552&4294967295,w=y+(T<<10&4294967295|T>>>22),T=R+(y^(w|~_))+I[6]+2734768916&4294967295,R=w+(T<<15&4294967295|T>>>17),T=_+(w^(R|~y))+I[13]+1309151649&4294967295,_=R+(T<<21&4294967295|T>>>11),T=y+(R^(_|~w))+I[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=w+(_^(y|~R))+I[11]+3174756917&4294967295,w=y+(T<<10&4294967295|T>>>22),T=R+(y^(w|~_))+I[2]+718787259&4294967295,R=w+(T<<15&4294967295|T>>>17),T=_+(w^(R|~y))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+w&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var _=y-this.blockSize,I=this.B,R=this.h,w=0;w<y;){if(R==0)for(;w<=_;)s(this,b,w),w+=this.blockSize;if(typeof b=="string"){for(;w<y;)if(I[R++]=b.charCodeAt(w++),R==this.blockSize){s(this,I),R=0;break}}else for(;w<y;)if(I[R++]=b[w++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var _=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=_&255,_/=256;for(this.u(b),b=Array(16),y=_=0;4>y;++y)for(var I=0;32>I;I+=8)b[_++]=this.g[y]>>>I&255;return b};function i(b,y){var _=l;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function o(b,y){this.h=y;for(var _=[],I=!0,R=b.length-1;0<=R;R--){var w=b[R]|0;I&&w==y||(_[R]=w,I=!1)}this.g=_}var l={};function c(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return O(u(-b));for(var y=[],_=1,I=0;b>=_;I++)y[I]=b/_|0,_*=4294967296;return new o(y,0)}function d(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return O(d(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),I=p,R=0;R<b.length;R+=8){var w=Math.min(8,b.length-R),T=parseInt(b.substring(R,R+w),y);8>w?(w=u(Math.pow(y,w)),I=I.j(w).add(u(T))):(I=I.j(_),I=I.add(u(T)))}return I}var p=c(0),m=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(P(this))return-O(this).m();for(var b=0,y=1,_=0;_<this.g.length;_++){var I=this.i(_);b+=(0<=I?I:4294967296+I)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if(P(this))return"-"+O(this).toString(b);for(var y=u(Math.pow(b,6)),_=this,I="";;){var R=B(_,y).g;_=x(_,R.j(y));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=R,S(_))return w+I;for(;6>w.length;)w="0"+w;I=w+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function P(b){return b.h==-1}t.l=function(b){return b=x(this,b),P(b)?-1:S(b)?0:1};function O(b){for(var y=b.g.length,_=[],I=0;I<y;I++)_[I]=~b.g[I];return new o(_,~b.h).add(m)}t.abs=function(){return P(this)?O(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],I=0,R=0;R<=y;R++){var w=I+(this.i(R)&65535)+(b.i(R)&65535),T=(w>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);I=T>>>16,w&=65535,T&=65535,_[R]=T<<16|w}return new o(_,_[_.length-1]&-2147483648?-1:0)};function x(b,y){return b.add(O(y))}t.j=function(b){if(S(this)||S(b))return p;if(P(this))return P(b)?O(this).j(O(b)):O(O(this).j(b));if(P(b))return O(this.j(O(b)));if(0>this.l(v)&&0>b.l(v))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,_=[],I=0;I<2*y;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<b.g.length;R++){var w=this.i(I)>>>16,T=this.i(I)&65535,Se=b.i(R)>>>16,ze=b.i(R)&65535;_[2*I+2*R]+=T*ze,V(_,2*I+2*R),_[2*I+2*R+1]+=w*ze,V(_,2*I+2*R+1),_[2*I+2*R+1]+=T*Se,V(_,2*I+2*R+1),_[2*I+2*R+2]+=w*Se,V(_,2*I+2*R+2)}for(I=0;I<y;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=y;I<2*y;I++)_[I]=0;return new o(_,0)};function V(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function M(b,y){this.g=b,this.h=y}function B(b,y){if(S(y))throw Error("division by zero");if(S(b))return new M(p,p);if(P(b))return y=B(O(b),y),new M(O(y.g),O(y.h));if(P(y))return y=B(b,O(y)),new M(O(y.g),y.h);if(30<b.g.length){if(P(b)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,I=y;0>=I.l(b);)_=J(_),I=J(I);var R=te(_,1),w=te(I,1);for(I=te(I,2),_=te(_,2);!S(I);){var T=w.add(I);0>=T.l(b)&&(R=R.add(_),w=T),I=te(I,1),_=te(_,1)}return y=x(b,R.j(y)),new M(R,y)}for(R=p;0<=b.l(y);){for(_=Math.max(1,Math.floor(b.m()/y.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),w=u(_),T=w.j(y);P(T)||0<T.l(b);)_-=I,w=u(_),T=w.j(y);S(w)&&(w=m),R=R.add(w),b=x(b,T)}return new M(R,b)}t.A=function(b){return B(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)&b.i(I);return new o(_,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)|b.i(I);return new o(_,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)^b.i(I);return new o(_,this.h^b.h)};function J(b){for(var y=b.g.length+1,_=[],I=0;I<y;I++)_[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(_,b.h)}function te(b,y){var _=y>>5;y%=32;for(var I=b.g.length-_,R=[],w=0;w<I;w++)R[w]=0<y?b.i(w+_)>>>y|b.i(w+_+1)<<32-y:b.i(w+_);return new o(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Qg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Hr=o}).apply(typeof Vf<"u"?Vf:typeof self<"u"?self:typeof window<"u"?window:{});var Oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yg,li,Jg,Ko,Nc,Xg,Zg,e_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oo=="object"&&Oo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break e;f=f[C]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,C={next:function(){if(!g&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function v(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,C,D){for(var K=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)K[Ve-2]=arguments[Ve];return h.prototype[C].apply(g,K)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function O(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const C=a.length||0,D=g.length||0;a.length=C+D;for(let K=0;K<D;K++)a[C+K]=g[K]}else a.push(g)}}class x{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function B(a){return B[" "](a),a}B[" "]=function(){};var J=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function te(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let D=0;D<_.length;D++)f=_[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function w(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Vt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Se{constructor(){this.h=this.g=null}add(h,f){const g=ze.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var ze=new x(()=>new ke,a=>a.reset());class ke{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ye=!1,Vt=new Se,Yt=()=>{const a=l.Promise.resolve(void 0);ue=()=>{a.then(qt)}};var qt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){w(f)}var h=ze;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ye=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Qn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function xt(a,h){if($e.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(J){e:{try{B(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Dt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&xt.aa.h.call(this)}}S(xt,$e);var Dt={2:"touch",3:"pen",4:"mouse"};xt.prototype.h=function(){xt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(a,h,f,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=C,this.key=++X,this.da=this.fa=!1}function re(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ge(a){this.src=a,this.g={},this.h=0}ge.prototype.add=function(a,h,f,g,C){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var K=E(a,h,g,C);return-1<K?(h=a[K],f||(h.fa=!1)):(h=new Q(h,this.src,D,!!g,C),h.fa=f,a.push(h)),h};function Ne(a,h){var f=h.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=C)&&Array.prototype.splice.call(g,C,1),D&&(re(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function E(a,h,f,g){for(var C=0;C<a.length;++C){var D=a[C];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return C}return-1}var A="closure_lm_"+(1e6*Math.random()|0),k={};function j(a,h,f,g,C){if(g&&g.once)return z(a,h,f,g,C);if(Array.isArray(h)){for(var D=0;D<h.length;D++)j(a,h[D],f,g,C);return null}return f=le(f),a&&a[F]?a.K(h,f,u(g)?!!g.capture:!!g,C):L(a,h,f,!1,g,C)}function L(a,h,f,g,C,D){if(!h)throw Error("Invalid event type");var K=u(C)?!!C.capture:!!C,Ve=Y(a);if(Ve||(a[A]=Ve=new ge(a)),f=Ve.add(h,f,g,K,D),f.proxy)return f;if(g=$(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Qn||(C=K),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(q(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $(){function a(f){return h.call(a.src,a.listener,f)}const h=ie;return a}function z(a,h,f,g,C){if(Array.isArray(h)){for(var D=0;D<h.length;D++)z(a,h[D],f,g,C);return null}return f=le(f),a&&a[F]?a.L(h,f,u(g)?!!g.capture:!!g,C):L(a,h,f,!0,g,C)}function G(a,h,f,g,C){if(Array.isArray(h))for(var D=0;D<h.length;D++)G(a,h[D],f,g,C);else g=u(g)?!!g.capture:!!g,f=le(f),a&&a[F]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=E(D,f,g,C),-1<f&&(re(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Y(a))&&(h=a.g[h.toString()],a=-1,h&&(a=E(h,f,g,C)),(f=-1<a?h[a]:null)&&W(f))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[F])Ne(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(q(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Y(h))?(Ne(f,a),f.h==0&&(f.src=null,h[A]=null)):re(a)}}}function q(a){return a in k?k[a]:k[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new xt(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&W(a),a=f.call(g,h)}return a}function Y(a){return a=a[A],a instanceof ge?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(h){return a.handleEvent(h)}),a[ne])}function ae(){Be.call(this),this.i=new ge(this),this.M=this,this.F=null}S(ae,Be),ae.prototype[F]=!0,ae.prototype.removeEventListener=function(a,h,f,g){G(this,a,h,f,g)};function _e(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new $e(h,a);else if(h instanceof $e)h.target=h.target||a;else{var C=h;h=new $e(g,a),I(h,C)}if(C=!0,f)for(var D=f.length-1;0<=D;D--){var K=h.g=f[D];C=Te(K,g,!0,h)&&C}if(K=h.g=a,C=Te(K,g,!0,h)&&C,C=Te(K,g,!1,h)&&C,f)for(D=0;D<f.length;D++)K=h.g=f[D],C=Te(K,g,!1,h)&&C}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)re(f[g]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ae.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Te(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,D=0;D<h.length;++D){var K=h[D];if(K&&!K.da&&K.capture==f){var Ve=K.listener,ut=K.ha||K.src;K.fa&&Ne(a.i,K),C=Ve.call(ut,g)!==!1&&C}}return C&&!g.defaultPrevented}function lt(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function tt(a){a.g=lt(()=>{a.g=null,a.i&&(a.i=!1,tt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Mt extends Be{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:tt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(a){Be.call(this),this.h=a,this.g={}}S(nt,Be);var Yn=[];function js(a){te(a.g,function(h,f){this.g.hasOwnProperty(f)&&W(h)},a),a.g={}}nt.prototype.N=function(){nt.aa.N.call(this),js(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ct=l.JSON.stringify,Ht=l.JSON.parse,ho=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ns(){}ns.prototype.h=null;function hh(a){return a.h||(a.h=a.i())}function dh(){}var Bs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pl(){$e.call(this,"d")}S(pl,$e);function ml(){$e.call(this,"c")}S(ml,$e);var Rr={},fh=null;function fo(){return fh=fh||new ae}Rr.La="serverreachability";function ph(a){$e.call(this,Rr.La,a)}S(ph,$e);function $s(a){const h=fo();_e(h,new ph(h))}Rr.STAT_EVENT="statevent";function mh(a,h){$e.call(this,Rr.STAT_EVENT,a),this.stat=h}S(mh,$e);function bt(a){const h=fo();_e(h,new mh(h,a))}Rr.Ma="timingevent";function gh(a,h){$e.call(this,Rr.Ma,a),this.size=h}S(gh,$e);function qs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Hs(){this.g=!0}Hs.prototype.xa=function(){this.g=!1};function Ey(a,h,f,g,C,D){a.info(function(){if(a.g)if(D)for(var K="",Ve=D.split("&"),ut=0;ut<Ve.length;ut++){var be=Ve[ut].split("=");if(1<be.length){var mt=be[0];be=be[1];var gt=mt.split("_");K=2<=gt.length&&gt[1]=="type"?K+(mt+"="+be+"&"):K+(mt+"=redacted&")}}else K=null;else K=D;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+f+`
`+K})}function Ty(a,h,f,g,C,D,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+f+`
`+D+" "+K})}function rs(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+wy(a,f)+(g?" "+g:"")})}function Iy(a,h){a.info(function(){return"TIMEOUT: "+h})}Hs.prototype.info=function(){};function wy(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var D=C[0];if(D!="noop"&&D!="stop"&&D!="close")for(var K=1;K<C.length;K++)C[K]=""}}}}return ct(f)}catch{return h}}var po={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_h={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gl;function mo(){}S(mo,ns),mo.prototype.g=function(){return new XMLHttpRequest},mo.prototype.i=function(){return{}},gl=new mo;function Jn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yh}function yh(){this.i=null,this.g="",this.h=!1}var vh={},_l={};function yl(a,h,f){a.L=1,a.v=vo(vn(h)),a.m=f,a.P=!0,Eh(a,null)}function Eh(a,h){a.F=Date.now(),go(a),a.A=vn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Vh(f.i,"t",g),a.C=0,f=a.j.J,a.h=new yh,a.g=Xh(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Mt(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Yn[0]=C.toString()),C=Yn);for(var D=0;D<C.length;D++){var K=j(f,C[D],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),$s(),Ey(a.i,a.u,a.A,a.l,a.R,a.m)}Jn.prototype.ca=function(a){a=a.target;const h=this.M;h&&En(a)==3?h.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const gt=En(this.g);var h=this.g.Ba();const os=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Bh(this.g)))){this.J||gt!=4||h==7||(h==8||0>=os?$s(3):$s(2)),vl(this);var f=this.g.Z();this.X=f;t:if(Th(this)){var g=Bh(this.g);a="";var C=g.length,D=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sr(this),Ws(this);var K="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==C-1)});g.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,Ty(this.i,this.u,this.A,this.l,this.R,gt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,ut=this.g;if((Ve=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Ve)){var be=Ve;break t}}be=null}if(f=be)rs(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,El(this,f);else{this.o=!1,this.s=3,bt(12),Sr(this),Ws(this);break e}}if(this.P){f=!0;let Jt;for(;!this.J&&this.C<K.length;)if(Jt=Ay(this,K),Jt==_l){gt==4&&(this.s=4,bt(14),f=!1),rs(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==vh){this.s=4,bt(15),rs(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else rs(this.i,this.l,Jt,null),El(this,Jt);if(Th(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||K.length!=0||this.h.h||(this.s=1,bt(16),f=!1),this.o=this.o&&f,!f)rs(this.i,this.l,K,"[Invalid Chunked Response]"),Sr(this),Ws(this);else if(0<K.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Rl(mt),mt.M=!0,bt(11))}}else rs(this.i,this.l,K,null),El(this,K);gt==4&&Sr(this),this.o&&!this.J&&(gt==4?zh(this.j,this):(this.o=!1,go(this)))}else By(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Sr(this),Ws(this)}}}catch{}finally{}};function Th(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ay(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?_l:(f=Number(h.substring(f,g)),isNaN(f)?vh:(g+=1,g+f>h.length?_l:(h=h.slice(g,g+f),a.C=g+f,h)))}Jn.prototype.cancel=function(){this.J=!0,Sr(this)};function go(a){a.S=Date.now()+a.I,Ih(a,a.I)}function Ih(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=qs(m(a.ba,a),h)}function vl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Iy(this.i,this.A),this.L!=2&&($s(),bt(17)),Sr(this),this.s=2,Ws(this)):Ih(this,this.S-a)};function Ws(a){a.j.G==0||a.J||zh(a.j,a)}function Sr(a){vl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,js(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function El(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Tl(f.h,a))){if(!a.K&&Tl(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)bo(f),wo(f);else break e;bl(f),bt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=qs(m(f.Za,f),6e3));if(1>=bh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Pr(f,11)}else if((a.K||f.g==a)&&bo(f),!V(h))for(C=f.Da.g.parse(h),h=0;h<C.length;h++){let be=C[h];if(f.T=be[0],be=be[1],f.G==2)if(be[0]=="c"){f.K=be[1],f.ia=be[2];const mt=be[3];mt!=null&&(f.la=mt,f.j.info("VER="+f.la));const gt=be[4];gt!=null&&(f.Aa=gt,f.j.info("SVER="+f.Aa));const os=be[5];os!=null&&typeof os=="number"&&0<os&&(g=1.5*os,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Jt=a.g;if(Jt){const So=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(So){var D=g.h;D.g||So.indexOf("spdy")==-1&&So.indexOf("quic")==-1&&So.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Il(D,D.h),D.h=null))}if(g.D){const Sl=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Sl&&(g.ya=Sl,Fe(g.I,g.D,Sl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var K=a;if(g.qa=Jh(g,g.J?g.ia:null,g.W),K.K){Rh(g.h,K);var Ve=K,ut=g.L;ut&&(Ve.I=ut),Ve.B&&(vl(Ve),go(Ve)),g.g=K}else Gh(g);0<f.i.length&&Ao(f)}else be[0]!="stop"&&be[0]!="close"||Pr(f,7);else f.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Pr(f,7):Al(f):be[0]!="noop"&&f.l&&f.l.ta(be),f.v=0)}}$s(4)}catch{}}var by=class{constructor(a,h){this.g=a,this.map=h}};function wh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ah(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function bh(a){return a.h?1:a.g?a.g.size:0}function Tl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Il(a,h){a.g?a.g.add(h):a.h=h}function Rh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}wh.prototype.cancel=function(){if(this.i=Sh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Sh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function Ry(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function Sy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Ch(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Sy(a),g=Ry(a),C=g.length,D=0;D<C;D++)h.call(void 0,g[D],f&&f[D],a)}var Ph=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cy(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),C=null;if(0<=g){var D=a[f].substring(0,g);C=a[f].substring(g+1)}else D=a[f];h(D,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Cr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Cr){this.h=a.h,_o(this,a.j),this.o=a.o,this.g=a.g,yo(this,a.s),this.l=a.l;var h=a.i,f=new zs;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),kh(this,f),this.m=a.m}else a&&(h=String(a).match(Ph))?(this.h=!1,_o(this,h[1]||"",!0),this.o=Gs(h[2]||""),this.g=Gs(h[3]||"",!0),yo(this,h[4]),this.l=Gs(h[5]||"",!0),kh(this,h[6]||"",!0),this.m=Gs(h[7]||"")):(this.h=!1,this.i=new zs(null,this.h))}Cr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ks(h,Dh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ks(h,Dh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ks(f,f.charAt(0)=="/"?Dy:ky,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ks(f,Oy)),a.join("")};function vn(a){return new Cr(a)}function _o(a,h,f){a.j=f?Gs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function yo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function kh(a,h,f){h instanceof zs?(a.i=h,Vy(a.i,a.h)):(f||(h=Ks(h,Ny)),a.i=new zs(h,a.h))}function Fe(a,h,f){a.i.set(h,f)}function vo(a){return Fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Gs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ks(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Py),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Py(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Dh=/[#\/\?@]/g,ky=/[#\?:]/g,Dy=/[#\?]/g,Ny=/[#\?@]/g,Oy=/#/g;function zs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&Cy(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=zs.prototype,t.add=function(a,h){Xn(this),this.i=null,a=ss(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Nh(a,h){Xn(a),h=ss(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Oh(a,h){return Xn(a),h=ss(a,h),a.g.has(h)}t.forEach=function(a,h){Xn(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(h,C,g,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const C=a[g];for(let D=0;D<C.length;D++)f.push(h[g])}return f},t.V=function(a){Xn(this);let h=[];if(typeof a=="string")Oh(this,a)&&(h=h.concat(this.g.get(ss(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Xn(this),this.i=null,a=ss(this,a),Oh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Vh(a,h,f){Nh(a,h),0<f.length&&(a.i=null,a.g.set(ss(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const D=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var C=D;K[g]!==""&&(C+="="+encodeURIComponent(String(K[g]))),a.push(C)}}return this.i=a.join("&")};function ss(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Vy(a,h){h&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Nh(this,g),Vh(this,C,f))},a)),a.j=h}function xy(a,h){const f=new Hs;if(l.Image){const g=new Image;g.onload=v(Zn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=v(Zn,f,"TestLoadImage: error",!1,h,g),g.onabort=v(Zn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=v(Zn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function My(a,h){const f=new Hs,g=new AbortController,C=setTimeout(()=>{g.abort(),Zn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(C),D.ok?Zn(f,"TestPingServer: ok",!0,h):Zn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Zn(f,"TestPingServer: error",!1,h)})}function Zn(a,h,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function Ly(){this.g=new ho}function Fy(a,h,f){const g=f||"";try{Ch(a,function(C,D){let K=C;u(C)&&(K=ct(C)),h.push(g+D+"="+encodeURIComponent(K))})}catch(C){throw h.push(g+"type="+encodeURIComponent("_badmap")),C}}function Eo(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Eo,ns),Eo.prototype.g=function(){return new To(this.l,this.j)},Eo.prototype.i=function(a){return function(){return a}}({});function To(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(To,ae),t=To.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ys(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ys(this)),this.g&&(this.readyState=3,Ys(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function xh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Qs(this):Ys(this),this.readyState==3&&xh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Qs(this))},t.Qa=function(a){this.g&&(this.response=a,Qs(this))},t.ga=function(){this.g&&Qs(this)};function Qs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ys(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ys(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(To.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Mh(a){let h="";return te(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function wl(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Mh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Fe(a,h,f))}function We(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(We,ae);var Uy=/^https?$/i,jy=["POST","PUT"];t=We.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gl.g(),this.v=this.o?hh(this.o):hh(gl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Lh(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jy,h,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,K]of f)this.g.setRequestHeader(D,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jh(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Lh(this,D)}};function Lh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Fh(a),Io(a)}function Fh(a){a.A||(a.A=!0,_e(a,"complete"),_e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_e(this,"complete"),_e(this,"abort"),Io(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Io(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Uh(this):this.bb())},t.bb=function(){Uh(this)};function Uh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||En(a)!=4||a.Z()!=2)){if(a.u&&En(a)==4)lt(a.Ea,0,a);else if(_e(a,"readystatechange"),En(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=K===0){var C=String(a.D).match(Ph)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!Uy.test(C?C.toLowerCase():"")}f=g}if(f)_e(a,"complete"),_e(a,"success");else{a.m=6;try{var D=2<En(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Fh(a)}}finally{Io(a)}}}}function Io(a,h){if(a.g){jh(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||_e(a,"ready");try{f.onreadystatechange=g}catch{}}}function jh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function En(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ht(h)}};function Bh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function By(a){const h={};a=(a.g&&2<=En(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(V(a[g]))continue;var f=R(a[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[C]||[];h[C]=D,D.push(f)}b(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Js(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function $h(a){this.Aa=0,this.i=[],this.j=new Hs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Js("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Js("baseRetryDelayMs",5e3,a),this.cb=Js("retryDelaySeedMs",1e4,a),this.Wa=Js("forwardChannelMaxRetries",2,a),this.wa=Js("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new wh(a&&a.concurrentRequestLimit),this.Da=new Ly,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=$h.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){bt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Jh(this,null,this.W),Ao(this)};function Al(a){if(qh(a),a.G==3){var h=a.U++,f=vn(a.I);if(Fe(f,"SID",a.K),Fe(f,"RID",h),Fe(f,"TYPE","terminate"),Xs(a,f),h=new Jn(a,a.j,h),h.L=2,h.v=vo(vn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Xh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),go(h)}Yh(a)}function wo(a){a.g&&(Rl(a),a.g.cancel(),a.g=null)}function qh(a){wo(a),a.u&&(l.clearTimeout(a.u),a.u=null),bo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ao(a){if(!Ah(a.h)&&!a.s){a.s=!0;var h=a.Ga;ue||Yt(),ye||(ue(),ye=!0),Vt.add(h,a),a.B=0}}function $y(a,h){return bh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=qs(m(a.Ga,a,h),Qh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Jn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(C.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Wh(this,C,h),f=vn(this.I),Fe(f,"RID",a),Fe(f,"CVER",22),this.D&&Fe(f,"X-HTTP-Session-Id",this.D),Xs(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(Mh(D)))+"&"+h:this.m&&wl(f,this.m,D)),Il(this.h,C),this.Ua&&Fe(f,"TYPE","init"),this.P?(Fe(f,"$req",h),Fe(f,"SID","null"),C.T=!0,yl(C,f,null)):yl(C,f,h),this.G=2}}else this.G==3&&(a?Hh(this,a):this.i.length==0||Ah(this.h)||Hh(this))};function Hh(a,h){var f;h?f=h.l:f=a.U++;const g=vn(a.I);Fe(g,"SID",a.K),Fe(g,"RID",f),Fe(g,"AID",a.T),Xs(a,g),a.m&&a.o&&wl(g,a.m,a.o),f=new Jn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Wh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Il(a.h,f),yl(f,g,h)}function Xs(a,h){a.H&&te(a.H,function(f,g){Fe(h,g,f)}),a.l&&Ch({},function(f,g){Fe(h,g,f)})}function Wh(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let D=-1;for(;;){const K=["count="+f];D==-1?0<f?(D=C[0].g,K.push("ofs="+D)):D=0:K.push("ofs="+D);let Ve=!0;for(let ut=0;ut<f;ut++){let be=C[ut].g;const mt=C[ut].map;if(be-=D,0>be)D=Math.max(0,C[ut].g-100),Ve=!1;else try{Fy(mt,K,"req"+be+"_")}catch{g&&g(mt)}}if(Ve){g=K.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Gh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ue||Yt(),ye||(ue(),ye=!0),Vt.add(h,a),a.v=0}}function bl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=qs(m(a.Fa,a),Qh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Kh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=qs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),wo(this),Kh(this))};function Rl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Kh(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=vn(a.qa);Fe(h,"RID","rpc"),Fe(h,"SID",a.K),Fe(h,"AID",a.T),Fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Fe(h,"TO",a.ja),Fe(h,"TYPE","xmlhttp"),Xs(a,h),a.m&&a.o&&wl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=vo(vn(h)),f.m=null,f.P=!0,Eh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,wo(this),bl(this),bt(19))};function bo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function zh(a,h){var f=null;if(a.g==h){bo(a),Rl(a),a.g=null;var g=2}else if(Tl(a.h,h))f=h.D,Rh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;g=fo(),_e(g,new gh(g,f)),Ao(a)}else Gh(a);else if(C=h.s,C==3||C==0&&0<h.X||!(g==1&&$y(a,h)||g==2&&bl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),C){case 1:Pr(a,5);break;case 4:Pr(a,10);break;case 3:Pr(a,6);break;default:Pr(a,2)}}}function Qh(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Pr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const C=!g;g=new Cr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||_o(g,"https"),vo(g),C?xy(g.toString(),f):My(g.toString(),f)}else bt(2);a.G=0,a.l&&a.l.sa(h),Yh(a),qh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Yh(a){if(a.G=0,a.ka=[],a.l){const h=Sh(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Jh(a,h,f){var g=f instanceof Cr?vn(f):new Cr(f);if(g.g!="")h&&(g.g=h+"."+g.g),yo(g,g.s);else{var C=l.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var D=new Cr(null);g&&_o(D,g),h&&(D.g=h),C&&yo(D,C),f&&(D.l=f),g=D}return f=a.D,h=a.ya,f&&h&&Fe(g,f,h),Fe(g,"VER",a.la),Xs(a,g),g}function Xh(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new We(new Eo({eb:f})):new We(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zh(){}t=Zh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ro(){}Ro.prototype.g=function(a,h){return new Lt(a,h)};function Lt(a,h){ae.call(this),this.g=new $h(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!V(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!V(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new is(this)}S(Lt,ae),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){Al(this.g)},Lt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ct(a),a=f);h.i.push(new by(h.Ya++,a)),h.G==3&&Ao(h)},Lt.prototype.N=function(){this.g.l=null,delete this.j,Al(this.g),delete this.g,Lt.aa.N.call(this)};function ed(a){pl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(ed,pl);function td(){ml.call(this),this.status=1}S(td,ml);function is(a){this.g=a}S(is,Zh),is.prototype.ua=function(){_e(this.g,"a")},is.prototype.ta=function(a){_e(this.g,new ed(a))},is.prototype.sa=function(a){_e(this.g,new td)},is.prototype.ra=function(){_e(this.g,"b")},Ro.prototype.createWebChannel=Ro.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,e_=function(){return new Ro},Zg=function(){return fo()},Xg=Rr,Nc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},po.NO_ERROR=0,po.TIMEOUT=8,po.HTTP_ERROR=6,Ko=po,_h.COMPLETE="complete",Jg=_h,dh.EventType=Bs,Bs.OPEN="a",Bs.CLOSE="b",Bs.ERROR="c",Bs.MESSAGE="d",ae.prototype.listen=ae.prototype.K,li=dh,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,Yg=We}).apply(typeof Oo<"u"?Oo:typeof self<"u"?self:typeof window<"u"?window:{});const xf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new pu("@firebase/firestore");function ni(){return zr.logLevel}function ee(t,...e){if(zr.logLevel<=Ee.DEBUG){const n=e.map(Cu);zr.debug(`Firestore (${Ms}): ${t}`,...n)}}function Hn(t,...e){if(zr.logLevel<=Ee.ERROR){const n=e.map(Cu);zr.error(`Firestore (${Ms}): ${t}`,...n)}}function Ss(t,...e){if(zr.logLevel<=Ee.WARN){const n=e.map(Cu);zr.warn(`Firestore (${Ms}): ${t}`,...n)}}function Cu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: `+t;throw Hn(e),new Error(e)}function De(t,e){t||he()}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class Cb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Pb{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new t_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new vt(e)}}class kb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Db{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ob{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){De(this.o===void 0);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.R=n.token,new Nb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Vb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function Cs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new st(0,0))}static max(){return new de(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ji.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ji?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends ji{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new je(n)}static emptyPath(){return new je([])}}const xb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends ji{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return xb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Z(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Z(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(je.fromString(e))}static fromName(e){return new se(je.fromString(e).popFirst(5))}static empty(){return new se(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new je(e.slice()))}}function Mb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new vr(s,se.empty(),e)}function Lb(t){return new vr(t.readTime,t.key,-1)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(de.min(),se.empty(),-1)}static max(){return new vr(de.max(),se.empty(),-1)}}function Fb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==Ub)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Bb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function so(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Pu.oe=-1;function Za(t){return t==null}function _a(t){return t===0&&1/t==-1/0}function $b(t){return typeof t=="number"&&Number.isInteger(t)&&!_a(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function r_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vo(this.root,e,this.comparator,!0)}}class Vo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=i??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ht(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lf(this.data.getIterator())}getIteratorFrom(e){return new Lf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class Lf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new ft(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new s_("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const qb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(De(!!t),typeof t=="string"){let e=0;const n=qb.exec(t);if(De(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qr(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Du(t){const e=t.mapValue.fields.__previous_value__;return ku(e)?Du(e):e}function Bi(t){const e=Er(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class $i{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $i("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $i&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ku(t)?4:Gb(t)?9007199254740991:Wb(t)?10:11:he()}function yn(t,e){if(t===e)return!0;const n=Yr(t);if(n!==Yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Bi(t).isEqual(Bi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Er(s.timestampValue),l=Er(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Qr(s.bytesValue).isEqual(Qr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Qe(s.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Qe(s.integerValue)===Qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Qe(s.doubleValue),l=Qe(i.doubleValue);return o===l?_a(o)===_a(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Cs(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Mf(o)!==Mf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!yn(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function qi(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function Ps(t,e){if(t===e)return 0;const n=Yr(t),r=Yr(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Qe(i.integerValue||i.doubleValue),c=Qe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Ff(t.timestampValue,e.timestampValue);case 4:return Ff(Bi(t),Bi(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Qr(i),c=Qr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Re(l[u],c[u]);if(d!==0)return d}return Re(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Re(Qe(i.latitude),Qe(o.latitude));return l!==0?l:Re(Qe(i.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Uf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=m.value)===null||c===void 0?void 0:c.arrayValue,P=Re(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:Uf(v,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===xo.mapValue&&o===xo.mapValue)return 0;if(i===xo.mapValue)return 1;if(o===xo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Re(c[p],d[p]);if(m!==0)return m;const v=Ps(l[c[p]],u[d[p]]);if(v!==0)return v}return Re(c.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function Ff(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=Er(t),r=Er(e),s=Re(n.seconds,r.seconds);return s!==0?s:Re(n.nanos,r.nanos)}function Uf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ps(n[s],r[s]);if(i)return i}return Re(n.length,r.length)}function ks(t){return Oc(t)}function Oc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Oc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Oc(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function jf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vc(t){return!!t&&"integerValue"in t}function Nu(t){return!!t&&"arrayValue"in t}function Bf(t){return!!t&&"nullValue"in t}function $f(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zo(t){return!!t&&"mapValue"in t}function Wb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ai(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ai(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ai(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Gb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ai(n)}setAll(e){let n=dt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ai(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());zo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];zo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Zr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Nt(Ai(this.value))}}function i_(t){const e=[];return Zr(t.fields,(n,r)=>{const s=new dt([n]);if(zo(r)){const i=i_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Tt(e,0,de.min(),de.min(),de.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,s){return new Tt(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new Tt(e,2,n,de.min(),de.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,de.min(),de.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n){this.position=e,this.inclusive=n}}function qf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=Ps(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n="asc"){this.field=e,this.dir=n}}function Kb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{}class Ze extends o_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Qb(e,n,r):n==="array-contains"?new Xb(e,r):n==="in"?new Zb(e,r):n==="not-in"?new eR(e,r):n==="array-contains-any"?new tR(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Yb(e,r):new Jb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ps(n,this.value)):n!==null&&Yr(this.value)===Yr(n)&&this.matchesComparison(Ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends o_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ln(e,n)}matches(e){return a_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function a_(t){return t.op==="and"}function l_(t){return zb(t)&&a_(t)}function zb(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function xc(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+ks(t.value);if(l_(t))return t.filters.map(e=>xc(e)).join(",");{const e=t.filters.map(n=>xc(n)).join(",");return`${t.op}(${e})`}}function c_(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(t,e):t instanceof ln?function(r,s){return s instanceof ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&c_(o,s.filters[l]),!0):!1}(t,e):void he()}function u_(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${ks(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(u_).join(" ,")+"}"}(t):"Filter"}class Qb extends Ze{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class Yb extends Ze{constructor(e,n){super(e,"in",n),this.keys=h_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Jb extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=h_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function h_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class Xb extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nu(n)&&qi(n.arrayValue,this.value)}}class Zb extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qi(this.value.arrayValue,n)}}class eR extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(qi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qi(this.value.arrayValue,n)}}class tR extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Wf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new nR(t,e,n,r,s,i,o)}function Ou(t){const e=pe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Za(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ks(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ks(r)).join(",")),e.ue=n}return e.ue}function Vu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Kb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!c_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hf(t.startAt,e.startAt)&&Hf(t.endAt,e.endAt)}function Mc(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rR(t,e,n,r,s,i,o,l){return new io(t,e,n,r,s,i,o,l)}function xu(t){return new io(t)}function Gf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function d_(t){return t.collectionGroup!==null}function bi(t){const e=pe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ft(dt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new va(i,r))}),n.has(dt.keyField().canonicalString())||e.ce.push(new va(dt.keyField(),r))}return e.ce}function pn(t){const e=pe(t);return e.le||(e.le=sR(e,bi(t))),e.le}function sR(t,e){if(t.limitType==="F")return Wf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new va(s.field,i)});const n=t.endAt?new ya(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ya(t.startAt.position,t.startAt.inclusive):null;return Wf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Lc(t,e){const n=t.filters.concat([e]);return new io(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Fc(t,e,n){return new io(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function el(t,e){return Vu(pn(t),pn(e))&&t.limitType===e.limitType}function f_(t){return`${Ou(pn(t))}|lt:${t.limitType}`}function ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>u_(s)).join(", ")}]`),Za(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ks(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ks(s)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function tl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of bi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=qf(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,bi(r),s)||r.endAt&&!function(o,l,c){const u=qf(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,bi(r),s))}(t,e)}function iR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function p_(t){return(e,n)=>{let r=!1;for(const s of bi(t)){const i=oR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function oR(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ps(c,u):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Zr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return r_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=new He(se.comparator);function Wn(){return aR}const m_=new He(se.comparator);function ci(...t){let e=m_;for(const n of t)e=e.insert(n.key,n);return e}function g_(t){let e=m_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Br(){return Ri()}function __(){return Ri()}function Ri(){return new Ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const lR=new He(se.comparator),cR=new ft(se.comparator);function ve(...t){let e=cR;for(const n of t)e=e.add(n);return e}const uR=new ft(Re);function hR(){return uR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_a(e)?"-0":e}}function y_(t){return{integerValue:""+t}}function dR(t,e){return $b(e)?y_(e):Mu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this._=void 0}}function fR(t,e,n){return t instanceof Hi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ku(i)&&(i=Du(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Wi?E_(t,e):t instanceof Gi?T_(t,e):function(s,i){const o=v_(s,i),l=Kf(o)+Kf(s.Pe);return Vc(o)&&Vc(s.Pe)?y_(l):Mu(s.serializer,l)}(t,e)}function pR(t,e,n){return t instanceof Wi?E_(t,e):t instanceof Gi?T_(t,e):n}function v_(t,e){return t instanceof Ea?function(r){return Vc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Hi extends nl{}class Wi extends nl{constructor(e){super(),this.elements=e}}function E_(t,e){const n=I_(e);for(const r of t.elements)n.some(s=>yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Gi extends nl{constructor(e){super(),this.elements=e}}function T_(t,e){let n=I_(e);for(const r of t.elements)n=n.filter(s=>!yn(s,r));return{arrayValue:{values:n}}}class Ea extends nl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Kf(t){return Qe(t.integerValue||t.doubleValue)}function I_(t){return Nu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n){this.field=e,this.transform=n}}function gR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Wi&&s instanceof Wi||r instanceof Gi&&s instanceof Gi?Cs(r.elements,s.elements,yn):r instanceof Ea&&s instanceof Ea?yn(r.Pe,s.Pe):r instanceof Hi&&s instanceof Hi}(t.transform,e.transform)}class _R{constructor(e,n){this.version=e,this.transformResults=n}}class rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rn}static exists(e){return new rn(void 0,e)}static updateTime(e){return new rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rl{}function w_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lu(t.key,rn.none()):new oo(t.key,t.data,rn.none());{const n=t.data,r=Nt.empty();let s=new ft(dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new br(t.key,r,new Bt(s.toArray()),rn.none())}}function yR(t,e,n){t instanceof oo?function(s,i,o){const l=s.value.clone(),c=Qf(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof br?function(s,i,o){if(!Qo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Qf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(A_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Si(t,e,n,r){return t instanceof oo?function(i,o,l,c){if(!Qo(i.precondition,o))return l;const u=i.value.clone(),d=Yf(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof br?function(i,o,l,c){if(!Qo(i.precondition,o))return l;const u=Yf(i.fieldTransforms,c,o),d=o.data;return d.setAll(A_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Qo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function vR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=v_(r.transform,s||null);i!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,i))}return n||null}function zf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Cs(r,s,(i,o)=>gR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oo extends rl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class br extends rl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function A_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Qf(t,e,n){const r=new Map;De(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,pR(o,l,n[s]))}return r}function Yf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,fR(i,o,e))}return r}class Lu extends rl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ER extends rl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&yR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Si(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Si(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=__();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=w_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Cs(this.mutations,e.mutations,(n,r)=>zf(n,r))&&Cs(this.baseMutations,e.baseMutations,(n,r)=>zf(n,r))}}class Fu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length);let s=function(){return lR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Fu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,Ie;function AR(t){switch(t){default:return he();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function b_(t){if(t===void 0)return Hn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Je.OK:return U.OK;case Je.CANCELLED:return U.CANCELLED;case Je.UNKNOWN:return U.UNKNOWN;case Je.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Je.INTERNAL:return U.INTERNAL;case Je.UNAVAILABLE:return U.UNAVAILABLE;case Je.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Je.NOT_FOUND:return U.NOT_FOUND;case Je.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Je.ABORTED:return U.ABORTED;case Je.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Je.DATA_LOSS:return U.DATA_LOSS;default:return he()}}(Ie=Je||(Je={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=new Hr([4294967295,4294967295],0);function Jf(t){const e=bR().encode(t),n=new Qg;return n.update(e),new Uint8Array(n.digest())}function Xf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([s,i],0)]}class Uu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ui(`Invalid padding: ${n}`);if(r<0)throw new ui(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ui(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ui(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Hr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Hr.fromNumber(r)));return s.compare(RR)===1&&(s=new Hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Jf(e),[r,s]=Xf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Uu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Jf(e),[r,s]=Xf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ui extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ao.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sl(de.min(),s,new He(Re),Wn(),ve())}}class ao{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ao(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class R_{constructor(e,n){this.targetId=e,this.me=n}}class S_{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Zf{constructor(){this.fe=0,this.ge=tp(),this.pe=pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new ao(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=tp()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,De(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class SR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Wn(),this.qe=ep(),this.Qe=new He(Re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Mc(i))if(r===0){const o=new se(i.path);this.Ue(n,o,Tt.newNoDocument(o,de.min()))}else De(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Qr(r).toUint8Array()}catch(c){if(c instanceof s_)return Ss("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Uu(o,s,i)}catch(c){return Ss(c instanceof ui?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Mc(l.target)){const c=new se(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Tt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ve();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new sl(e,n,this.Qe,this.ke,r);return this.ke=Wn(),this.qe=ep(),this.Qe=new He(Re),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Zf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ft(Re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Zf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ep(){return new He(se.comparator)}function tp(){return new He(se.comparator)}const CR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),PR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),kR=(()=>({and:"AND",or:"OR"}))();class DR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Uc(t,e){return t.useProto3Json||Za(e)?e:{value:e}}function Ta(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function C_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function NR(t,e){return Ta(t,e.toTimestamp())}function mn(t){return De(!!t),de.fromTimestamp(function(n){const r=Er(n);return new st(r.seconds,r.nanos)}(t))}function ju(t,e){return jc(t,e).canonicalString()}function jc(t,e){const n=function(s){return new je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function P_(t){const e=je.fromString(t);return De(V_(e)),e}function Bc(t,e){return ju(t.databaseId,e.path)}function Xl(t,e){const n=P_(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(D_(n))}function k_(t,e){return ju(t.databaseId,e)}function OR(t){const e=P_(t);return e.length===4?je.emptyPath():D_(e)}function $c(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function D_(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function np(t,e,n){return{name:Bc(t,e),fields:n.value.mapValue.fields}}function VR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(De(d===void 0||typeof d=="string"),pt.fromBase64String(d||"")):(De(d===void 0||d instanceof Buffer||d instanceof Uint8Array),pt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?U.UNKNOWN:b_(u.code);return new Z(d,u.message||"")}(o);n=new S_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Xl(t,r.document.name),i=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):de.min(),l=new Nt({mapValue:{fields:r.document.fields}}),c=Tt.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Yo(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Xl(t,r.document),i=r.readTime?mn(r.readTime):de.min(),o=Tt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Yo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Xl(t,r.document),i=r.removedTargetIds||[];n=new Yo([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new wR(s,i),l=r.targetId;n=new R_(l,o)}}return n}function xR(t,e){let n;if(e instanceof oo)n={update:np(t,e.key,e.value)};else if(e instanceof Lu)n={delete:Bc(t,e.key)};else if(e instanceof br)n={update:np(t,e.key,e.data),updateMask:HR(e.fieldMask)};else{if(!(e instanceof ER))return he();n={verify:Bc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Hi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Wi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Gi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ea)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:NR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function MR(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?mn(s.updateTime):mn(i);return o.isEqual(de.min())&&(o=mn(i)),new _R(o,s.transformResults||[])}(n,e))):[]}function LR(t,e){return{documents:[k_(t,e.path)]}}function FR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=k_(t,s);const i=function(u){if(u.length!==0)return O_(ln.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:fs(m.field),direction:BR(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Uc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function UR(t){let e=OR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=N_(p);return m instanceof ln&&l_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new va(ps(S.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Za(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,v=p.values||[];return new ya(v,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,v=p.values||[];return new ya(v,m)}(n.endAt)),rR(e,s,o,i,l,"F",c,u)}function jR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function N_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ps(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ps(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ps(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ps(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(ps(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>N_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function BR(t){return CR[t]}function $R(t){return PR[t]}function qR(t){return kR[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ps(t){return dt.fromServerFormat(t.fieldPath)}function O_(t){return t instanceof Ze?function(n){if(n.op==="=="){if($f(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NAN"}};if(Bf(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($f(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NAN"}};if(Bf(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(n.field),op:$R(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(s=>O_(s));return r.length===1?r[0]:{compositeFilter:{op:qR(n.op),filters:r}}}(t):he()}function HR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function V_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,r,s,i=de.min(),o=de.min(),l=pt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.ct=e}}function GR(t){const e=UR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this.un=new zR}addToCollectionParentIndex(e,n){return this.un.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(vr.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class zR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ft(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ft(je.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ds(0)}static kn(){return new Ds(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(){this.changes=new Ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Si(r.mutation,s,Bt.empty(),st.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=Br();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ci();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Wn();const o=Ri(),l=function(){return Ri()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof br)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Si(d.mutation,u,d.mutation.getFieldMask(),st.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new YR(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ri();let s=new He((o,l)=>o-l),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Bt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||ve()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=__();d.forEach(m=>{if(!i.has(m)){const v=w_(n.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):d_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(Br());let l=-1,c=i;return o.next(u=>H.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?H.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ve())).next(d=>({batchId:l,changes:g_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=ci();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ci();return this.indexManager.getCollectionParents(e,i).next(l=>H.forEach(l,c=>{const u=function(p,m){return new io(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Tt.newInvalidDocument(d)))});let l=ci();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Si(d.mutation,u,Bt.empty(),st.now()),tl(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return H.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:mn(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:GR(s.bundledQuery),readTime:mn(s.readTime)}}(n)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.overlays=new He(se.comparator),this.Ir=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Br();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=Br(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Br(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Br(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return H.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new IR(n,r));let i=this.Ir.get(n);i===void 0&&(i=ve(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(){this.Tr=new ft(ot.Er),this.dr=new ft(ot.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ot(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new se(new je([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new se(new je([])),r=new ot(n,e),s=new ot(n,e+1);let i=ve();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ot(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return se.comparator(e.key,n.key)||Re(e.wr,n.wr)}static Ar(e,n){return Re(e.wr,n.wr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ft(ot.Er)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(Re);return n.forEach(s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),H.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new ot(new se(i),0);let l=new ft(Re);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.wr)),!0)},o),H.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return H.forEach(n.mutations,s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ot(n,0),s=this.br.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.Mr=e,this.docs=function(){return new He(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=Wn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Tt.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Wn();const o=n.path,l=new se(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Fb(Lb(d),r)<=0||(s.has(d.key)||tl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}Or(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rS(this)}getSize(e){return H.resolve(this.size)}}class rS extends QR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.persistence=e,this.Nr=new Ls(n=>Ou(n),Vu),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Bu,this.targetCount=0,this.kr=Ds.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),H.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Kn(n),H.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Pu(0),this.Kr=!1,this.Kr=!0,this.$r=new eS,this.referenceDelegate=e(this),this.Ur=new sS(this),this.indexManager=new KR,this.remoteDocumentCache=function(s){return new nS(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new WR(n),this.Gr=new XR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ZR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new tS(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new oS(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return H.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class oS extends jb{constructor(e){super(),this.currentSequenceNumber=e}}class $u{constructor(e){this.persistence=e,this.Jr=new Bu,this.Yr=null}static Zr(e){return new $u(e)}get Xr(){if(this.Yr)return this.Yr;throw he()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),H.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,r=>{const s=se.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return H.or([()=>H.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return QI()?8:Bb(At())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new aS;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ni()<=Ee.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):(ni()<=Ee.DEBUG&&ee("QueryEngine","Query:",ds(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ni()<=Ee.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):H.resolve())}Yi(e,n){if(Gf(n))return H.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Fc(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,l);return this.ns(n,u,o,c.readTime)?this.Yi(e,Fc(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,s){return Gf(n)||s.isEqual(de.min())?H.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?H.resolve(null):(ni()<=Ee.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ds(n)),this.rs(e,o,n,Mb(s,-1)).next(l=>l))})}ts(e,n){let r=new ft(p_(e));return n.forEach((s,i)=>{tl(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ni()<=Ee.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",ds(n)),this.Ji.getDocumentsMatchingQuery(e,n,vr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new He(Re),this._s=new Ls(i=>Ou(i),Vu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function uS(t,e,n,r){return new cS(t,e,n,r)}async function x_(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ve();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:l}))})})}function hS(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let v=H.resolve();return m.forEach(S=>{v=v.next(()=>d.getEntry(c,S)).next(P=>{const O=u.docVersions.get(S);De(O!==null),P.version.compareTo(O)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),d.addEntry(P)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ve();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function M_(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function dS(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(pt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),function(P,O,x){return P.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,v,d)&&l.push(n.Ur.updateTargetData(i,v))});let c=Wn(),u=ve();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(fS(i,o,e.documentUpdates).next(d=>{c=d.Ps,u=d.Is})),!r.isEqual(de.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return H.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.os=s,i))}function fS(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Wn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ee("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function pS(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mS(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function qc(t,e,n){const r=pe(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!so(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function rp(t,e,n){const r=pe(t);let s=de.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=pe(c),m=p._s.get(d);return m!==void 0?H.resolve(p.os.get(m)):p.Ur.getTargetData(u,d)}(r,o,pn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:ve())).next(l=>(gS(r,iR(e),l),{documents:l,Ts:i})))}function gS(t,e,n){let r=t.us.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class sp{constructor(){this.activeTargetIds=hR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _S{constructor(){this.so=new sp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new sp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo=null;function Zl(){return Mo===null?Mo=function(){return 268435456+Math.round(2147483648*Math.random())}():Mo++,"0x"+Mo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class TS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Zl(),c=this.xo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,c,u,s).then(d=>(ee("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Ss("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=vS[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Zl();return new Promise((o,l)=>{const c=new Yg;c.setWithCredentials(!0),c.listenOnce(Jg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ko.NO_ERROR:const d=c.getResponseJson();ee(_t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Ko.TIMEOUT:ee(_t,`RPC '${e}' ${i} timed out`),l(new Z(U.DEADLINE_EXCEEDED,"Request time out"));break;case Ko.HTTP_ERROR:const p=c.getStatus();if(ee(_t,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const S=function(O){const x=O.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(x)>=0?x:U.UNKNOWN}(v.status);l(new Z(S,v.message))}else l(new Z(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Z(U.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{ee(_t,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ee(_t,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=Zl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=e_(),l=Zg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");ee(_t,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,v=!1;const S=new ES({Io:O=>{v?ee(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(ee(_t,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ee(_t,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},To:()=>p.close()}),P=(O,x,V)=>{O.listen(x,M=>{try{V(M)}catch(B){setTimeout(()=>{throw B},0)}})};return P(p,li.EventType.OPEN,()=>{v||(ee(_t,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),P(p,li.EventType.CLOSE,()=>{v||(v=!0,ee(_t,`RPC '${e}' stream ${s} transport closed`),S.So())}),P(p,li.EventType.ERROR,O=>{v||(v=!0,Ss(_t,`RPC '${e}' stream ${s} transport errored:`,O),S.So(new Z(U.UNAVAILABLE,"The operation could not be completed")))}),P(p,li.EventType.MESSAGE,O=>{var x;if(!v){const V=O.data[0];De(!!V);const M=V,B=M.error||((x=M[0])===null||x===void 0?void 0:x.error);if(B){ee(_t,`RPC '${e}' stream ${s} received error:`,B);const J=B.status;let te=function(_){const I=Je[_];if(I!==void 0)return b_(I)}(J),b=B.message;te===void 0&&(te=U.INTERNAL,b="Unknown error status: "+J+" with message "+B.message),v=!0,S.So(new Z(te,b)),p.close()}else ee(_t,`RPC '${e}' stream ${s} received:`,V),S.bo(V)}}),P(l,Xg.STAT_EVENT,O=>{O.stat===Nc.PROXY?ee(_t,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Nc.NOPROXY&&ee(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function ec(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t){return new DR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new L_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Z(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IS extends F_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=VR(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?mn(o.readTime):de.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=$c(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Mc(c)?{documents:LR(i,c)}:{query:FR(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=C_(i,o.resumeToken);const u=Uc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=Ta(i,o.snapshotVersion.toTimestamp());const u=Uc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=jR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=$c(this.serializer),n.removeTarget=e,this.a_(n)}}class wS extends F_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return De(!!e.streamToken),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=MR(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=$c(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>xR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,jc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(U.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,jc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(U.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class bS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Hn(n),this.D_=!1):ee("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{es(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=pe(c);u.L_.add(4),await lo(u),u.q_.set("Unknown"),u.L_.delete(4),await ol(u)}(this))})}),this.q_=new bS(r,s)}}async function ol(t){if(es(t))for(const e of t.B_)await e(!0)}async function lo(t){for(const e of t.B_)await e(!1)}function U_(t,e){const n=pe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Ku(n)?Gu(n):Fs(n).r_()&&Wu(n,e))}function Hu(t,e){const n=pe(t),r=Fs(n);n.N_.delete(e),r.r_()&&j_(n,e),n.N_.size===0&&(r.r_()?r.o_():es(n)&&n.q_.set("Unknown"))}function Wu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fs(t).A_(e)}function j_(t,e){t.Q_.xe(e),Fs(t).R_(e)}function Gu(t){t.Q_=new SR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Fs(t).start(),t.q_.v_()}function Ku(t){return es(t)&&!Fs(t).n_()&&t.N_.size>0}function es(t){return pe(t).L_.size===0}function B_(t){t.Q_=void 0}async function SS(t){t.q_.set("Online")}async function CS(t){t.N_.forEach((e,n)=>{Wu(t,e)})}async function PS(t,e){B_(t),Ku(t)?(t.q_.M_(e),Gu(t)):t.q_.set("Unknown")}async function kS(t,e,n){if(t.q_.set("Online"),e instanceof S_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ia(t,r)}else if(e instanceof Yo?t.Q_.Ke(e):e instanceof R_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(de.min()))try{const r=await M_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(pt.EMPTY_BYTE_STRING,d.snapshotVersion)),j_(i,c);const p=new hr(d.target,c,u,d.sequenceNumber);Wu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await Ia(t,r)}}async function Ia(t,e,n){if(!so(e))throw e;t.L_.add(1),await lo(t),t.q_.set("Offline"),n||(n=()=>M_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ol(t)})}function $_(t,e){return e().catch(n=>Ia(t,n,e))}async function al(t){const e=pe(t),n=Tr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;DS(e);)try{const s=await pS(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,NS(e,s)}catch(s){await Ia(e,s)}q_(e)&&H_(e)}function DS(t){return es(t)&&t.O_.length<10}function NS(t,e){t.O_.push(e);const n=Tr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function q_(t){return es(t)&&!Tr(t).n_()&&t.O_.length>0}function H_(t){Tr(t).start()}async function OS(t){Tr(t).p_()}async function VS(t){const e=Tr(t);for(const n of t.O_)e.m_(n.mutations)}async function xS(t,e,n){const r=t.O_.shift(),s=Fu.from(r,e,n);await $_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await al(t)}async function MS(t,e){e&&Tr(t).V_&&await async function(r,s){if(function(o){return AR(o)&&o!==U.ABORTED}(s.code)){const i=r.O_.shift();Tr(r).s_(),await $_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await al(r)}}(t,e),q_(t)&&H_(t)}async function op(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=es(n);n.L_.add(3),await lo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ol(n)}async function LS(t,e){const n=pe(t);e?(n.L_.delete(2),await ol(n)):e||(n.L_.add(2),await lo(n),n.q_.set("Unknown"))}function Fs(t){return t.K_||(t.K_=function(n,r,s){const i=pe(n);return i.w_(),new IS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:SS.bind(null,t),Ro:CS.bind(null,t),mo:PS.bind(null,t),d_:kS.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Ku(t)?Gu(t):t.q_.set("Unknown")):(await t.K_.stop(),B_(t))})),t.K_}function Tr(t){return t.U_||(t.U_=function(n,r,s){const i=pe(n);return i.w_(),new wS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:OS.bind(null,t),mo:MS.bind(null,t),f_:VS.bind(null,t),g_:xS.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await al(t)):(await t.U_.stop(),t.O_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new zu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qu(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),so(t))return new Z(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=ci(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new Is(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.W_=new He(se.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):he():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ns{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ns(e,n,Is.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&el(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class US{constructor(){this.queries=lp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=pe(n),i=s.queries;s.queries=lp(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new Z(U.ABORTED,"Firestore shutting down"))}}function lp(){return new Ls(t=>f_(t),el)}async function W_(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new FS,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Qu(o,`Initialization of query '${ds(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Yu(n)}async function G_(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jS(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Yu(n)}function BS(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Yu(t){t.Y_.forEach(e=>{e.next()})}var Hc,cp;(cp=Hc||(Hc={})).ea="default",cp.Cache="cache";class K_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Hc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.key=e}}class Q_{constructor(e){this.key=e}}class $S{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ve(),this.mutatedKeys=ve(),this.Aa=p_(e),this.Ra=new Is(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new ap,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),v=tl(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),P=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let O=!1;m&&v?m.data.isEqual(v.data)?S!==P&&(r.track({type:3,doc:v}),O=!0):this.ga(m,v)||(r.track({type:2,doc:v}),O=!0,(c&&this.Aa(v,c)>0||u&&this.Aa(v,u)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),O=!0):m&&!v&&(r.track({type:1,doc:m}),O=!0,(c||u)&&(l=!0)),O&&(v?(o=o.add(v),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(v,S){const P=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return P(v)-P(S)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new Ns(this.query,e.Ra,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ap,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ve(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Q_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new z_(r))}),n}ba(e){this.Ta=e.Ts,this.da=ve();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ns.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class qS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class HS{constructor(e){this.key=e,this.va=!1}}class WS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ls(l=>f_(l),el),this.Ma=new Map,this.xa=new Set,this.Oa=new He(se.comparator),this.Na=new Map,this.La=new Bu,this.Ba={},this.ka=new Map,this.qa=Ds.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function GS(t,e,n=!0){const r=ty(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Y_(r,e,n,!0),s}async function KS(t,e){const n=ty(t);await Y_(n,e,!0,!1)}async function Y_(t,e,n,r){const s=await mS(t.localStore,pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await zS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&U_(t.remoteStore,s),l}async function zS(t,e,n,r,s){t.Ka=(p,m,v)=>async function(P,O,x,V){let M=O.view.ma(x);M.ns&&(M=await rp(P.localStore,O.query,!1).then(({documents:b})=>O.view.ma(b,M)));const B=V&&V.targetChanges.get(O.targetId),J=V&&V.targetMismatches.get(O.targetId)!=null,te=O.view.applyChanges(M,P.isPrimaryClient,B,J);return hp(P,O.targetId,te.wa),te.snapshot}(t,p,m,v);const i=await rp(t.localStore,e,!0),o=new $S(e,i.Ts),l=o.ma(i.documents),c=ao.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);hp(t,n,u.wa);const d=new qS(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function QS(t,e,n){const r=pe(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!el(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await qc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Hu(r.remoteStore,s.targetId),Wc(r,s.targetId)}).catch(ro)):(Wc(r,s.targetId),await qc(r.localStore,s.targetId,!0))}async function YS(t,e){const n=pe(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hu(n.remoteStore,r.targetId))}async function JS(t,e,n){const r=sC(t);try{const s=await function(o,l){const c=pe(o),u=st.now(),d=l.reduce((v,S)=>v.add(S.key),ve());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let S=Wn(),P=ve();return c.cs.getEntries(v,d).next(O=>{S=O,S.forEach((x,V)=>{V.isValidDocument()||(P=P.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,S)).next(O=>{p=O;const x=[];for(const V of l){const M=vR(V,p.get(V.key).overlayedDocument);M!=null&&x.push(new br(V.key,M,i_(M.value.mapValue),rn.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,x,l)}).next(O=>{m=O;const x=O.applyToLocalDocumentSet(p,P);return c.documentOverlayCache.saveOverlays(v,O.batchId,x)})}).then(()=>({batchId:m.batchId,changes:g_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new He(Re)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await co(r,s.changes),await al(r.remoteStore)}catch(s){const i=Qu(s,"Failed to persist write");n.reject(i)}}async function J_(t,e){const n=pe(t);try{const r=await dS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?De(o.va):s.removedDocuments.size>0&&(De(o.va),o.va=!1))}),await co(n,r,e)}catch(r){await ro(r)}}function up(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=pe(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(u=!0)}),u&&Yu(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XS(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new He(se.comparator);o=o.insert(i,Tt.newNoDocument(i,de.min()));const l=ve().add(i),c=new sl(de.min(),new Map,new He(Re),o,l);await J_(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Ju(r)}else await qc(r.localStore,e,!1).then(()=>Wc(r,e,n)).catch(ro)}async function ZS(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await hS(n.localStore,e);Z_(n,r,null),X_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await co(n,s)}catch(s){await ro(s)}}async function eC(t,e,n){const r=pe(t);try{const s=await function(o,l){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(De(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Z_(r,e,n),X_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await co(r,s)}catch(s){await ro(s)}}function X_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Z_(t,e,n){const r=pe(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Wc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||ey(t,r)})}function ey(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Hu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Ju(t))}function hp(t,e,n){for(const r of n)r instanceof z_?(t.La.addReference(r.key,e),tC(t,r)):r instanceof Q_?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||ey(t,r.key)):he()}function tC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.xa.add(r),Ju(t))}function Ju(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new se(je.fromString(e)),r=t.qa.next();t.Na.set(r,new HS(n)),t.Oa=t.Oa.insert(n,r),U_(t.remoteStore,new hr(pn(xu(n.path)),r,"TargetPurposeLimboResolution",Pu.oe))}}async function co(t,e,n){const r=pe(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=qu.Wi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,u){const d=pe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>H.forEach(u,m=>H.forEach(m.$i,v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>H.forEach(m.Ui,v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!so(p))throw p;ee("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const v=d.os.get(m),S=v.snapshotVersion,P=v.withLastLimboFreeSnapshotVersion(S);d.os=d.os.insert(m,P)}}}(r.localStore,i))}async function nC(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await x_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new Z(U.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await co(n,r.hs)}}function rC(t,e){const n=pe(t),r=n.Na.get(e);if(r&&r.va)return ve().add(r.key);{let s=ve();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function ty(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=J_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XS.bind(null,e),e.Ca.d_=jS.bind(null,e.eventManager),e.Ca.$a=BS.bind(null,e.eventManager),e}function sC(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eC.bind(null,e),e}class wa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=il(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return uS(this.persistence,new lS,e.initialUser,this.serializer)}Ga(e){return new iS($u.Zr,this.serializer)}Wa(e){return new _S}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wa.provider={build:()=>new wa};class Gc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>up(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nC.bind(null,this.syncEngine),await LS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new US}()}createDatastore(e){const n=il(e.databaseInfo.databaseId),r=function(i){return new TS(i)}(e.databaseInfo);return function(i,o,l,c){return new AS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new RS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>up(this.syncEngine,n,0),function(){return ip.D()?new ip:new yS}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new WS(s,i,o,l,c,u);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=pe(s);ee("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await lo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Gc.provider={build:()=>new Gc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=n_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tc(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await x_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function dp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oC(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>op(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>op(e.remoteStore,s)),t._onlineComponents=e}async function oC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await tc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ss("Error using user provided cache. Falling back to memory cache: "+n),await tc(t,new wa)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await tc(t,new wa);return t._offlineComponents}async function ry(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await dp(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await dp(t,new Gc))),t._onlineComponents}function aC(t){return ry(t).then(e=>e.syncEngine)}async function Kc(t){const e=await ry(t),n=e.eventManager;return n.onListen=GS.bind(null,e.syncEngine),n.onUnlisten=QS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=KS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=YS.bind(null,e.syncEngine),n}function lC(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new ny({next:m=>{d.Za(),o.enqueueAndForget(()=>G_(i,p)),m.fromCache&&c.source==="server"?u.reject(new Z(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new K_(l,d,{includeMetadataChanges:!0,_a:!0});return W_(i,p)}(await Kc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t,e,n){if(!n)throw new Z(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cC(t,e,n,r){if(e===!0&&r===!0)throw new Z(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pp(t){if(!se.isDocumentKey(t))throw new Z(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mp(t){if(se.isDocumentKey(t))throw new Z(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ll(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ll(t);throw new Z(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Sb;switch(r.type){case"firstParty":return new Db(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=fp.get(n);r&&(ee("ComponentProvider","Removing Datastore"),fp.delete(n),r.terminate())}(this),Promise.resolve()}}function uC(t,e,n,r={}){var s;const i=(t=gn(t,cl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=vt.MOCK_USER;else{l=$I(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Z(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new vt(u)}t._authCredentials=new Cb(new t_(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ts(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class _r extends ts{constructor(e,n,r){super(e,n,xu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new se(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function ri(t,e,...n){if(t=it(t),iy("collection","path",e),t instanceof cl){const r=je.fromString(e,...n);return mp(r),new _r(t,null,r)}{if(!(t instanceof Ot||t instanceof _r))throw new Z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return mp(r),new _r(t.firestore,null,r)}}function hi(t,e,...n){if(t=it(t),arguments.length===1&&(e=n_.newId()),iy("doc","path",e),t instanceof cl){const r=je.fromString(e,...n);return pp(r),new Ot(t,null,new se(r))}{if(!(t instanceof Ot||t instanceof _r))throw new Z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return pp(r),new Ot(t.firestore,t instanceof _r?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new L_(this,"async_queue_retry"),this.Vu=()=>{const r=ec();r&&ee("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ec();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new gr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!so(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Hn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=zu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&he()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function yp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Jr extends cl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new _p,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _p(e),this._firestoreClient=void 0,await e}}}function hC(t,e){const n=typeof t=="object"?t:dg(),r=typeof t=="string"?t:e||"(default)",s=gu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jI("firestore");i&&uC(s,...i)}return s}function Xu(t){if(t._terminated)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||dC(t),t._firestoreClient}function dC(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new Hb(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,sy(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new iC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Os(pt.fromBase64String(e))}catch(n){throw new Z(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Os(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=/^__.*__$/;class pC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new br(e,this.data,this.fieldMask,n,this.fieldTransforms):new oo(e,this.data,n,this.fieldTransforms)}}class oy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new br(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ay(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class th{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new th(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Aa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ay(this.Cu)&&fC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class mC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||il(e)}Qu(e,n,r,s=!1){return new th({Cu:e,methodName:n,qu:r,path:dt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nh(t){const e=t._freezeSettings(),n=il(t._databaseId);return new mC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gC(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);sh("Data must be an object, but it was:",o,r);const l=ly(r,o);let c,u;if(i.merge)c=new Bt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=zc(e,p,n);if(!o.contains(m))throw new Z(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);uy(d,m)||d.push(m)}c=new Bt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new pC(new Nt(l),c,u)}class dl extends hl{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dl}}class rh extends hl{_toFieldTransform(e){return new mR(e.path,new Hi)}isEqual(e){return e instanceof rh}}function _C(t,e,n,r){const s=t.Qu(1,e,n);sh("Data must be an object, but it was:",s,r);const i=[],o=Nt.empty();Zr(r,(c,u)=>{const d=ih(e,c,n);u=it(u);const p=s.Nu(d);if(u instanceof dl)i.push(d);else{const m=uo(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Bt(i);return new oy(o,l,s.fieldTransforms)}function yC(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[zc(e,r,n)],c=[s];if(i.length%2!=0)throw new Z(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(zc(e,i[m])),c.push(i[m+1]);const u=[],d=Nt.empty();for(let m=l.length-1;m>=0;--m)if(!uy(u,l[m])){const v=l[m];let S=c[m];S=it(S);const P=o.Nu(v);if(S instanceof dl)u.push(v);else{const O=uo(S,P);O!=null&&(u.push(v),d.set(v,O))}}const p=new Bt(u);return new oy(d,p,o.fieldTransforms)}function vC(t,e,n,r=!1){return uo(n,t.Qu(r?4:3,e))}function uo(t,e){if(cy(t=it(t)))return sh("Unsupported field value:",e,t),ly(t,e);if(t instanceof hl)return function(r,s){if(!ay(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=uo(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=st.fromDate(r);return{timestampValue:Ta(s.serializer,i)}}if(r instanceof st){const i=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ta(s.serializer,i)}}if(r instanceof Zu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Os)return{bytesValue:C_(s.serializer,r._byteString)};if(r instanceof Ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ju(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof eh)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Mu(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ll(r)}`)}(t,e)}function ly(t,e){const n={};return r_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zr(t,(r,s)=>{const i=uo(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function cy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof Zu||t instanceof Os||t instanceof Ot||t instanceof hl||t instanceof eh)}function sh(t,e,n){if(!cy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ll(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function zc(t,e,n){if((e=it(e))instanceof ul)return e._internalPath;if(typeof e=="string")return ih(t,e);throw Aa("Field path arguments must be of type string or ",t,!1,void 0,n)}const EC=new RegExp("[~\\*/\\[\\]]");function ih(t,e,n){if(e.search(EC)>=0)throw Aa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ul(...e.split("."))._internalPath}catch{throw Aa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Aa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Z(U.INVALID_ARGUMENT,l+t+c)}function uy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(oh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TC extends hy{data(){return super.data()}}function oh(t,e){return typeof e=="string"?ih(t,e):e instanceof ul?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ah{}class IC extends ah{}function nc(t,e,...n){let r=[];e instanceof ah&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof lh).length,l=i.filter(c=>c instanceof fl).length;if(o>1||o>0&&l>0)throw new Z(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class fl extends IC{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fl(e,n,r)}_apply(e){const n=this._parse(e);return fy(e._query,n),new ts(e.firestore,e.converter,Lc(e._query,n))}_parse(e){const n=nh(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Z(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Ep(p,d);const v=[];for(const S of p)v.push(vp(c,i,S));m={arrayValue:{values:v}}}else m=vp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Ep(p,d),m=vC(l,o,p,d==="in"||d==="not-in");return Ze.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function rc(t,e,n){const r=e,s=oh("where",t);return fl._create(s,r,n)}class lh extends ah{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new lh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)fy(o,c),o=Lc(o,c)}(e._query,n),new ts(e.firestore,e.converter,Lc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function vp(t,e,n){if(typeof(n=it(n))=="string"){if(n==="")throw new Z(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!d_(e)&&n.indexOf("/")!==-1)throw new Z(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(je.fromString(n));if(!se.isDocumentKey(r))throw new Z(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jf(t,new se(r))}if(n instanceof Ot)return jf(t,n._key);throw new Z(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ll(n)}.`)}function Ep(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fy(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class wC{convertValue(e,n="none"){switch(Yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Qe(o.doubleValue));return new eh(i)}convertGeoPoint(e){return new Zu(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Du(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Bi(e));default:return null}}convertTimestamp(e){const n=Er(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);De(V_(r));const s=new $i(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class py extends hy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Jo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(oh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Jo extends py{data(e={}){return super.data(e)}}class my{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new di(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Jo(this._firestore,this._userDataWriter,r.key,r,new di(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Jo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new di(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Jo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new di(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:bC(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}class ch extends wC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function RC(t){t=gn(t,ts);const e=gn(t.firestore,Jr),n=Xu(e),r=new ch(e);return dy(t._query),lC(n,t._query).then(s=>new my(e,r,t,s))}function Tp(t,e,n,...r){t=gn(t,Ot);const s=gn(t.firestore,Jr),i=nh(s);let o;return o=typeof(e=it(e))=="string"||e instanceof ul?yC(i,"updateDoc",t._key,e,n,r):_C(i,"updateDoc",t._key,e),uh(s,[o.toMutation(t._key,rn.exists(!0))])}function sc(t){return uh(gn(t.firestore,Jr),[new Lu(t._key,rn.none())])}function Ip(t,e){const n=gn(t.firestore,Jr),r=hi(t),s=AC(t.converter,e);return uh(n,[gC(nh(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,rn.exists(!1))]).then(()=>r)}function wp(t,...e){var n,r,s;t=it(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||yp(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(yp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,d;if(t instanceof Ot)u=gn(t.firestore,Jr),d=xu(t._key.path),c={next:p=>{e[o]&&e[o](SC(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=gn(t,ts);u=gn(p.firestore,Jr),d=p._query;const m=new ch(u);c={next:v=>{e[o]&&e[o](new my(u,m,p,v))},error:e[o+1],complete:e[o+2]},dy(t._query)}return function(m,v,S,P){const O=new ny(P),x=new K_(v,O,S);return m.asyncQueue.enqueueAndForget(async()=>W_(await Kc(m),x)),()=>{O.Za(),m.asyncQueue.enqueueAndForget(async()=>G_(await Kc(m),x))}}(Xu(u),d,l,c)}function uh(t,e){return function(r,s){const i=new gr;return r.asyncQueue.enqueueAndForget(async()=>JS(await aC(r),s,i)),i.promise}(Xu(t),e)}function SC(t,e,n){const r=n.docs.get(e._key),s=new ch(t);return new py(t,s,e._key,r,new di(n.hasPendingWrites,n.fromCache),e.converter)}function cs(){return new rh("serverTimestamp")}(function(e,n=!0){(function(s){Ms=s})(Vs),Rs(new Wr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Jr(new Pb(r.getProvider("auth-internal")),new Ob(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $i(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),mr(xf,"4.7.3",e),mr(xf,"4.7.3","esm2017")})();const CC={apiKey:"AIzaSyDwm7sz-YCA4grvPDm9_fQwIX7i4snUeg4",authDomain:"taskflow-4372d.firebaseapp.com",projectId:"taskflow-4372d",storageBucket:"taskflow-4372d.firebasestorage.app",messagingSenderId:"298947298772",appId:"1:298947298772:web:ef81552d19d66612dc8241",measurementId:"G-PYFSQX85ZY"},gy=hg(CC),Fr=bb(gy),An=hC(gy),Us=qm("auth",()=>{const t=Le(null),e=Le(!0),n=Le(null);return{user:t,loading:e,error:n,initializeAuth:()=>{Lg(Fr,c=>{t.value=c,e.value=!1})},login:async(c,u)=>{try{n.value=null;const d=await h0(Fr,c,u);return t.value=d.user,{success:!0}}catch(d){return n.value=d.message,{success:!1,error:d.message}}},register:async(c,u)=>{try{n.value=null;const d=await u0(Fr,c,u);return t.value=d.user,{success:!0}}catch(d){return n.value=d.message,{success:!1,error:d.message}}},loginWithGoogle:async()=>{try{n.value=null;const c=new Pn,u=await V0(Fr,c);return t.value=u.user,{success:!0}}catch(c){return n.value=c.message,{success:!1,error:c.message}}},logout:async()=>{try{return await p0(Fr),t.value=null,{success:!0}}catch(c){return n.value=c.message,{success:!1,error:c.message}}}}});const zn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},PC={class:"navbar"},kC={class:"navbar-container"},DC={class:"navbar-brand"},NC={class:"navbar-menu"},OC={class:"user-menu"},VC=["title"],xC={class:"user-info"},MC={class:"user-email"},LC={__name:"Navbar",setup(t){const e=Us(),n=za(),r=Xe(()=>e.user),s=async()=>{(await e.logout()).success&&n.push("/")},i=()=>{var o;return(o=r.value)!=null&&o.email?r.value.email.charAt(0).toUpperCase():"?"};return(o,l)=>{const c=Zv("router-link");return me(),we("nav",PC,[N("div",kC,[N("div",DC,[qe(c,{to:"/",class:"brand-link"},{default:Vn(()=>[...l[0]||(l[0]=[N("span",{class:"brand-icon"},"📋",-1),N("span",{class:"brand-text"},"TaskFlow",-1)])]),_:1})]),N("div",NC,[r.value?(me(),we(at,{key:0},[qe(c,{to:"/dashboard",class:"nav-link"},{default:Vn(()=>[...l[1]||(l[1]=[Xt(" Mes Projets ",-1)])]),_:1}),N("div",OC,[N("div",{class:"user-avatar",title:r.value.email},Ue(i()),9,VC),N("div",xC,[N("span",MC,Ue(r.value.email),1),N("button",{onClick:s,class:"btn-logout"}," Déconnexion ")])])],64)):(me(),Mn(c,{key:1,to:"/auth",class:"btn btn-primary"},{default:Vn(()=>[...l[2]||(l[2]=[Xt(" Se connecter ",-1)])]),_:1}))])])])}}},FC=zn(LC,[["__scopeId","data-v-7507c0f0"]]),UC={class:"container"},jC={__name:"App",setup(t){return(e,n)=>(me(),we(at,null,[qe(FC),N("div",UC,[qe(wt(ng))])],64))}};const BC={class:"home-view"},$C={class:"hero-section"},qC={class:"hero-content"},HC={class:"hero-actions"},WC={class:"cta-section"},GC={class:"container"},KC={__name:"HomeView",setup(t){const e=Us(),n=Xe(()=>e.user!==null);return(r,s)=>(me(),we("div",BC,[N("div",$C,[N("div",qC,[s[2]||(s[2]=N("h1",{class:"hero-title"},[Xt(" Gérez vos projets avec "),N("span",{class:"highlight"},"TaskFlow")],-1)),s[3]||(s[3]=N("p",{class:"hero-subtitle"}," Une application de gestion de tâches simple et efficace avec un tableau Kanban intuitif ",-1)),N("div",HC,[n.value?(me(),Mn(wt($o),{key:1,to:"/dashboard",class:"btn btn-primary btn-lg"},{default:Vn(()=>[...s[1]||(s[1]=[Xt(" Accéder au tableau de bord ",-1)])]),_:1})):(me(),Mn(wt($o),{key:0,to:"/auth",class:"btn btn-primary btn-lg"},{default:Vn(()=>[...s[0]||(s[0]=[Xt(" Commencer maintenant ",-1)])]),_:1}))])])]),s[6]||(s[6]=Om('<div class="features-section" data-v-5ff36d9e><div class="container" data-v-5ff36d9e><h2 class="section-title" data-v-5ff36d9e>Fonctionnalités principales</h2><div class="features-grid" data-v-5ff36d9e><div class="feature-card" data-v-5ff36d9e><div class="feature-icon" data-v-5ff36d9e>📋</div><h3 data-v-5ff36d9e>Gestion de projets</h3><p data-v-5ff36d9e>Créez et organisez vos projets avec des couleurs distinctives</p></div><div class="feature-card" data-v-5ff36d9e><div class="feature-icon" data-v-5ff36d9e>✅</div><h3 data-v-5ff36d9e>Tableau Kanban</h3><p data-v-5ff36d9e>Visualisez vos tâches en colonnes : À faire, En cours, Terminé</p></div><div class="feature-card" data-v-5ff36d9e><div class="feature-icon" data-v-5ff36d9e>⚡</div><h3 data-v-5ff36d9e>Temps réel</h3><p data-v-5ff36d9e>Synchronisation instantanée sur tous vos appareils</p></div><div class="feature-card" data-v-5ff36d9e><div class="feature-icon" data-v-5ff36d9e>🔒</div><h3 data-v-5ff36d9e>Sécurisé</h3><p data-v-5ff36d9e>Authentification Firebase avec email ou Google</p></div></div></div></div>',1)),N("div",WC,[N("div",GC,[s[5]||(s[5]=N("h2",null,"Prêt à booster votre productivité ?",-1)),n.value?Gt("",!0):(me(),Mn(wt($o),{key:0,to:"/auth",class:"btn btn-primary btn-lg"},{default:Vn(()=>[...s[4]||(s[4]=[Xt(" Créer un compte gratuitement ",-1)])]),_:1}))])])]))}},zC=zn(KC,[["__scopeId","data-v-5ff36d9e"]]);const QC={class:"loading-container"},YC={key:0,class:"loading-message"},JC={__name:"LoadingSpinner",props:{size:{type:String,default:"medium"},message:{type:String,default:"Chargement..."}},setup(t){const e={small:"24px",medium:"48px",large:"72px"};return(n,r)=>(me(),we("div",QC,[N("div",{class:"spinner",style:Ct({width:e[t.size],height:e[t.size]})},null,4),t.message?(me(),we("p",YC,Ue(t.message),1)):Gt("",!0)]))}},_y=zn(JC,[["__scopeId","data-v-e00d68de"]]);const XC={class:"auth-view"},ZC={class:"auth-container"},eP={class:"auth-card"},tP={class:"auth-header"},nP={class:"form-group"},rP=["disabled"],sP={class:"form-group"},iP=["disabled"],oP={key:0,class:"form-group"},aP=["disabled"],lP={key:1,class:"error-message"},cP=["disabled"],uP=["disabled"],hP={class:"auth-footer"},dP=["disabled"],fP={__name:"AuthView",setup(t){const e=Us(),n=za(),r=Le(!0),s=Le(""),i=Le(""),o=Le(""),l=Le(""),c=Le(!1),u=()=>{r.value=!r.value,l.value="",s.value="",i.value="",o.value=""},d=()=>!s.value||!i.value?(l.value="Tous les champs sont requis",!1):/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.value)?i.value.length<6?(l.value="Le mot de passe doit contenir au moins 6 caractères",!1):!r.value&&i.value!==o.value?(l.value="Les mots de passe ne correspondent pas",!1):!0:(l.value="Email invalide",!1),p=async()=>{if(d()){c.value=!0,l.value="";try{let S;r.value?S=await e.login(s.value,i.value):S=await e.register(s.value,i.value),S.success?n.push("/dashboard"):l.value=S.error||"Une erreur est survenue"}catch(S){l.value=S.message||"Une erreur est survenue"}finally{c.value=!1}}},m=async()=>{c.value=!0,l.value="";try{const S=await e.loginWithGoogle();S.success?n.push("/dashboard"):l.value=S.error||"Erreur lors de la connexion avec Google"}catch(S){l.value=S.message||"Erreur lors de la connexion avec Google"}finally{c.value=!1}},v=Xe(()=>c.value?"Chargement...":r.value?"Se connecter":"S'inscrire");return(S,P)=>(me(),we("div",XC,[N("div",ZC,[N("div",eP,[N("div",tP,[N("h2",null,Ue(r.value?"Connexion":"Inscription"),1),N("p",null,Ue(r.value?"Bienvenue sur TaskFlow":"Créez votre compte TaskFlow"),1)]),N("form",{onSubmit:xi(p,["prevent"]),class:"auth-form"},[N("div",nP,[P[3]||(P[3]=N("label",{for:"email"},"Email",-1)),dn(N("input",{id:"email","onUpdate:modelValue":P[0]||(P[0]=O=>s.value=O),type:"email",placeholder:"votre.email@exemple.com",required:"",disabled:c.value},null,8,rP),[[Ln,s.value]])]),N("div",sP,[P[4]||(P[4]=N("label",{for:"password"},"Mot de passe",-1)),dn(N("input",{id:"password","onUpdate:modelValue":P[1]||(P[1]=O=>i.value=O),type:"password",placeholder:"Minimum 6 caractères",required:"",disabled:c.value},null,8,iP),[[Ln,i.value]])]),r.value?Gt("",!0):(me(),we("div",oP,[P[5]||(P[5]=N("label",{for:"confirmPassword"},"Confirmer le mot de passe",-1)),dn(N("input",{id:"confirmPassword","onUpdate:modelValue":P[2]||(P[2]=O=>o.value=O),type:"password",placeholder:"Répétez votre mot de passe",required:"",disabled:c.value},null,8,aP),[[Ln,o.value]])])),l.value?(me(),we("p",lP,Ue(l.value),1)):Gt("",!0),N("button",{type:"submit",class:"btn btn-primary btn-block",disabled:c.value},Ue(v.value),9,cP)],32),P[7]||(P[7]=N("div",{class:"divider"},[N("span",null,"OU")],-1)),N("button",{onClick:m,class:"btn btn-google btn-block",disabled:c.value},[...P[6]||(P[6]=[Om('<svg class="google-icon" viewBox="0 0 24 24" width="20" height="20" data-v-5b5be475><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" data-v-5b5be475></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" data-v-5b5be475></path><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" data-v-5b5be475></path><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" data-v-5b5be475></path></svg> Continuer avec Google ',2)])],8,uP),N("div",hP,[N("p",null,[Xt(Ue(r.value?"Vous n'avez pas de compte ?":"Vous avez déjà un compte ?")+" ",1),N("button",{onClick:u,class:"link-button",disabled:c.value},Ue(r.value?"S'inscrire":"Se connecter"),9,dP)])])])])]))}},pP=zn(fP,[["__scopeId","data-v-5b5be475"]]),yy=qm("project",()=>{const t=Le([]),e=Le(null),n=Le([]),r=Le(!1),s=Le(null);let i=null,o=null;return{projects:t,currentProject:e,tasks:n,loading:r,error:s,listenToProjects:x=>{if(!x)return;r.value=!0,s.value=null;const V=nc(ri(An,"projects"),rc("userId","==",x));i=wp(V,M=>{t.value=M.docs.map(B=>({id:B.id,...B.data()})).sort((B,J)=>{var y,_;const te=((y=B.createdAt)==null?void 0:y.seconds)||0;return(((_=J.createdAt)==null?void 0:_.seconds)||0)-te}),r.value=!1},M=>{console.error("Error listening to projects:",M),s.value=M.message,r.value=!1})},createProject:async(x,V)=>{try{return s.value=null,{success:!0,id:(await Ip(ri(An,"projects"),{...V,userId:x,createdAt:cs(),updatedAt:cs()})).id}}catch(M){return s.value=M.message,{success:!1,error:M.message}}},updateProject:async(x,V)=>{try{s.value=null;const M=hi(An,"projects",x);return await Tp(M,{...V,updatedAt:cs()}),{success:!0}}catch(M){return s.value=M.message,{success:!1,error:M.message}}},deleteProject:async x=>{try{s.value=null;const V=nc(ri(An,"tasks"),rc("projectId","==",x)),B=(await RC(V)).docs.map(te=>sc(te.ref));await Promise.all(B);const J=hi(An,"projects",x);return await sc(J),{success:!0}}catch(V){return s.value=V.message,{success:!1,error:V.message}}},listenToTasks:x=>{if(!x)return;r.value=!0,s.value=null;const V=nc(ri(An,"tasks"),rc("projectId","==",x));o=wp(V,M=>{n.value=M.docs.map(B=>({id:B.id,...B.data()})).sort((B,J)=>{var y,_;const te=((y=B.createdAt)==null?void 0:y.seconds)||0;return(((_=J.createdAt)==null?void 0:_.seconds)||0)-te}),r.value=!1},M=>{console.error("Error listening to tasks:",M),s.value=M.message,r.value=!1})},createTask:async(x,V)=>{try{return s.value=null,{success:!0,id:(await Ip(ri(An,"tasks"),{...V,projectId:x,status:V.status||"todo",createdAt:cs(),updatedAt:cs()})).id}}catch(M){return s.value=M.message,{success:!1,error:M.message}}},updateTask:async(x,V)=>{try{s.value=null;const M=hi(An,"tasks",x);return await Tp(M,{...V,updatedAt:cs()}),{success:!0}}catch(M){return s.value=M.message,{success:!1,error:M.message}}},deleteTask:async x=>{try{s.value=null;const V=hi(An,"tasks",x);return await sc(V),{success:!0}}catch(V){return s.value=V.message,{success:!1,error:V.message}}},getTasksByStatus:x=>n.value.filter(V=>V.status===x),cleanup:()=>{i&&(i(),i=null),o&&(o(),o=null),t.value=[],n.value=[],e.value=null}}});const mP={class:"modal-header"},gP={class:"form-group"},_P={class:"form-group"},yP={class:"form-group"},vP={class:"color-picker"},EP=["onClick"],TP={class:"modal-footer"},IP={type:"submit",class:"btn btn-primary"},wP={__name:"ProjectModal",props:{show:{type:Boolean,required:!0},project:{type:Object,default:null},mode:{type:String,default:"create"}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Le({name:"",description:"",color:"#3498db"});xn(()=>n.project,c=>{c&&n.mode==="edit"&&(s.value={name:c.name||"",description:c.description||"",color:c.color||"#3498db"})},{immediate:!0}),xn(()=>n.show,c=>{!c&&n.mode==="create"&&(s.value={name:"",description:"",color:"#3498db"})});const i=()=>{if(!s.value.name.trim()){alert("Le nom du projet est requis");return}r("save",{...s.value}),o()},o=()=>{r("close"),n.mode==="create"&&(s.value={name:"",description:"",color:"#3498db"})},l=["#3498db","#e74c3c","#2ecc71","#f39c12","#9b59b6","#1abc9c","#34495e","#e67e22"];return(c,u)=>(me(),Mn(Fm,{name:"modal"},{default:Vn(()=>[t.show?(me(),we("div",{key:0,class:"modal-overlay",onClick:o},[N("div",{class:"modal-container",onClick:u[3]||(u[3]=xi(()=>{},["stop"]))},[N("div",mP,[N("h3",null,Ue(t.mode==="create"?"Nouveau Projet":"Modifier le Projet"),1),N("button",{onClick:o,class:"close-btn"},"×")]),N("form",{onSubmit:xi(i,["prevent"]),class:"modal-body"},[N("div",gP,[u[4]||(u[4]=N("label",{for:"projectName"},"Nom du projet *",-1)),dn(N("input",{id:"projectName","onUpdate:modelValue":u[0]||(u[0]=d=>s.value.name=d),type:"text",placeholder:"Ex: Site web e-commerce",required:"",maxlength:"100"},null,512),[[Ln,s.value.name]])]),N("div",_P,[u[5]||(u[5]=N("label",{for:"projectDescription"},"Description",-1)),dn(N("textarea",{id:"projectDescription","onUpdate:modelValue":u[1]||(u[1]=d=>s.value.description=d),placeholder:"Décrivez votre projet...",rows:"4",maxlength:"500"},null,512),[[Ln,s.value.description]])]),N("div",yP,[u[6]||(u[6]=N("label",null,"Couleur distinctive",-1)),N("div",vP,[(me(),we(at,null,yi(l,d=>N("div",{key:d,class:Na(["color-option",{active:s.value.color===d}]),style:Ct({backgroundColor:d}),onClick:p=>s.value.color=d},null,14,EP)),64)),dn(N("input",{"onUpdate:modelValue":u[2]||(u[2]=d=>s.value.color=d),type:"color",class:"color-input",title:"Choisir une couleur personnalisée"},null,512),[[Ln,s.value.color]])])]),N("div",TP,[N("button",{type:"button",onClick:o,class:"btn btn-secondary"}," Annuler "),N("button",IP,Ue(t.mode==="create"?"Créer":"Enregistrer"),1)])],32)])])):Gt("",!0)]),_:1}))}},AP=zn(wP,[["__scopeId","data-v-6f74967d"]]);const bP={class:"dashboard"},RP={key:1,class:"empty-state"},SP={key:2,class:"projects-grid"},CP={class:"project-header"},PP={class:"project-actions"},kP=["onClick"],DP=["onClick"],NP={class:"project-name"},OP={key:0,class:"project-description"},VP={key:1,class:"project-description empty"},xP={class:"project-footer"},MP=["onClick"],LP={__name:"DashboardView",setup(t){const e=Us(),n=yy(),r=za(),s=Le(!1),i=Le(null),o=Le("create");ja(()=>{e.user&&n.listenToProjects(e.user.uid)}),Ba(()=>{n.cleanup()});const l=()=>{o.value="create",i.value=null,s.value=!0},c=v=>{o.value="edit",i.value=v,s.value=!0},u=async v=>{o.value==="create"?await n.createProject(e.user.uid,v):await n.updateProject(i.value.id,v),s.value=!1},d=async v=>{confirm("Êtes-vous sûr de vouloir supprimer ce projet et toutes ses tâches ?")&&await n.deleteProject(v)},p=v=>{r.push(`/project/${v}`)},m=v=>v.split(" ").map(S=>S[0]).join("").toUpperCase().substring(0,2);return(v,S)=>(me(),we("div",bP,[N("div",{class:"dashboard-header"},[S[1]||(S[1]=N("div",null,[N("h1",null,"Mes Projets"),N("p",{class:"subtitle"},"Gérez tous vos projets en un seul endroit")],-1)),N("button",{onClick:l,class:"btn btn-primary"}," ➕ Nouveau Projet ")]),wt(n).loading?(me(),Mn(_y,{key:0,message:"Chargement des projets..."})):wt(n).projects.length===0?(me(),we("div",RP,[S[2]||(S[2]=N("div",{class:"empty-icon"},"📋",-1)),S[3]||(S[3]=N("h2",null,"Aucun projet pour le moment",-1)),S[4]||(S[4]=N("p",null,"Créez votre premier projet pour commencer à organiser vos tâches",-1)),N("button",{onClick:l,class:"btn btn-primary"}," Créer mon premier projet ")])):(me(),we("div",SP,[(me(!0),we(at,null,yi(wt(n).projects,P=>(me(),we("div",{key:P.id,class:"project-card",style:Ct({borderTopColor:P.color})},[N("div",CP,[N("div",{class:"project-avatar",style:Ct({backgroundColor:P.color})},Ue(m(P.name)),5),N("div",PP,[N("button",{onClick:O=>c(P),class:"btn-icon",title:"Modifier"}," ✏️ ",8,kP),N("button",{onClick:O=>d(P.id),class:"btn-icon",title:"Supprimer"}," 🗑️ ",8,DP)])]),N("h3",NP,Ue(P.name),1),P.description?(me(),we("p",OP,Ue(P.description),1)):(me(),we("p",VP,"Aucune description")),N("div",xP,[N("button",{onClick:O=>p(P.id),class:"btn btn-secondary btn-block"}," Voir les tâches → ",8,MP)])],4))),128))])),qe(AP,{show:s.value,project:i.value,mode:o.value,onClose:S[0]||(S[0]=P=>s.value=!1),onSave:u},null,8,["show","project","mode"])]))}},FP=zn(LP,[["__scopeId","data-v-da7f82f8"]]);const UP={class:"task-header"},jP={class:"task-actions"},BP={key:0,class:"task-description"},$P={class:"task-footer"},qP={class:"task-deadline"},HP=["value"],WP={__name:"TaskCard",props:{task:{type:Object,required:!0}},emits:["delete","edit","statusChange"],setup(t,{emit:e}){const n=s=>s?new Date(s).toLocaleDateString("fr-FR"):"Pas de date limite",r=s=>({todo:"#3498db",doing:"#f39c12",done:"#27ae60"})[s]||"#95a5a6";return(s,i)=>(me(),we("div",{class:"task-card",style:Ct({borderLeftColor:r(t.task.status)})},[N("div",UP,[N("h4",null,Ue(t.task.title),1),N("div",jP,[N("button",{onClick:i[0]||(i[0]=o=>s.$emit("edit",t.task)),class:"btn-icon",title:"Modifier"}," ✏️ "),N("button",{onClick:i[1]||(i[1]=o=>s.$emit("delete",t.task.id)),class:"btn-icon",title:"Supprimer"}," 🗑️ ")])]),t.task.description?(me(),we("p",BP,Ue(t.task.description),1)):Gt("",!0),N("div",$P,[N("span",qP,"📅 "+Ue(n(t.task.deadline)),1),N("select",{value:t.task.status,onChange:i[2]||(i[2]=o=>s.$emit("statusChange",t.task.id,o.target.value)),class:"status-select"},[...i[3]||(i[3]=[N("option",{value:"todo"},"À faire",-1),N("option",{value:"doing"},"En cours",-1),N("option",{value:"done"},"Terminé",-1)])],40,HP)])],4))}},ic=zn(WP,[["__scopeId","data-v-cce197ef"]]);const GP={class:"modal-header"},KP={class:"form-group"},zP={class:"form-group"},QP={class:"form-group"},YP=["min"],JP={class:"form-group"},XP={class:"modal-footer"},ZP={type:"submit",class:"btn btn-primary"},ek={__name:"TaskModal",props:{show:{type:Boolean,required:!0},task:{type:Object,default:null},mode:{type:String,default:"create"}},emits:["close","save"],setup(t,{emit:e}){const n=t,r=e,s=Le({title:"",description:"",deadline:"",status:"todo"});xn(()=>n.task,c=>{c&&n.mode==="edit"&&(s.value={title:c.title||"",description:c.description||"",deadline:c.deadline||"",status:c.status||"todo"})},{immediate:!0}),xn(()=>n.show,c=>{!c&&n.mode==="create"&&(s.value={title:"",description:"",deadline:"",status:"todo"})});const i=()=>{if(!s.value.title.trim()){alert("Le titre de la tâche est requis");return}r("save",{...s.value}),o()},o=()=>{r("close"),n.mode==="create"&&(s.value={title:"",description:"",deadline:"",status:"todo"})},l=new Date().toISOString().split("T")[0];return(c,u)=>(me(),Mn(Fm,{name:"modal"},{default:Vn(()=>[t.show?(me(),we("div",{key:0,class:"modal-overlay",onClick:o},[N("div",{class:"modal-container",onClick:u[4]||(u[4]=xi(()=>{},["stop"]))},[N("div",GP,[N("h3",null,Ue(t.mode==="create"?"Nouvelle Tâche":"Modifier la Tâche"),1),N("button",{onClick:o,class:"close-btn"},"×")]),N("form",{onSubmit:xi(i,["prevent"]),class:"modal-body"},[N("div",KP,[u[5]||(u[5]=N("label",{for:"taskTitle"},"Titre *",-1)),dn(N("input",{id:"taskTitle","onUpdate:modelValue":u[0]||(u[0]=d=>s.value.title=d),type:"text",placeholder:"Ex: Créer la maquette de la page d'accueil",required:"",maxlength:"200"},null,512),[[Ln,s.value.title]])]),N("div",zP,[u[6]||(u[6]=N("label",{for:"taskDescription"},"Description",-1)),dn(N("textarea",{id:"taskDescription","onUpdate:modelValue":u[1]||(u[1]=d=>s.value.description=d),placeholder:"Décrivez la tâche en détail...",rows:"4",maxlength:"1000"},null,512),[[Ln,s.value.description]])]),N("div",QP,[u[7]||(u[7]=N("label",{for:"taskDeadline"},"Date limite",-1)),dn(N("input",{id:"taskDeadline","onUpdate:modelValue":u[2]||(u[2]=d=>s.value.deadline=d),type:"date",min:wt(l)},null,8,YP),[[Ln,s.value.deadline]])]),N("div",JP,[u[9]||(u[9]=N("label",{for:"taskStatus"},"Statut",-1)),dn(N("select",{id:"taskStatus","onUpdate:modelValue":u[3]||(u[3]=d=>s.value.status=d)},[...u[8]||(u[8]=[N("option",{value:"todo"},"À faire",-1),N("option",{value:"doing"},"En cours",-1),N("option",{value:"done"},"Terminé",-1)])],512),[[fT,s.value.status]])]),N("div",XP,[N("button",{type:"button",onClick:o,class:"btn btn-secondary"}," Annuler "),N("button",ZP,Ue(t.mode==="create"?"Créer":"Enregistrer"),1)])],32)])])):Gt("",!0)]),_:1}))}},tk=zn(ek,[["__scopeId","data-v-99e9175c"]]);const nk={class:"project-details"},rk={class:"project-header"},sk={key:0,class:"project-info"},ik={key:0,class:"project-desc"},ok={key:1,class:"kanban-board"},ak={class:"column-header"},lk={class:"task-count"},ck={class:"column-content"},uk=["onDragstart"],hk={key:0,class:"empty-column"},dk={class:"column-header"},fk={class:"task-count"},pk={class:"column-content"},mk=["onDragstart"],gk={key:0,class:"empty-column"},_k={class:"column-header"},yk={class:"task-count"},vk={class:"column-content"},Ek=["onDragstart"],Tk={key:0,class:"empty-column"},Ik={__name:"ProjectDetailsView",setup(t){const e=NI(),n=za(),r=Us(),s=yy(),i=Le(!1),o=Le(null),l=Le("create"),c=Le(null),u=Xe(()=>e.params.id),d=Xe(()=>s.projects.find(y=>y.id===u.value)),p=Xe(()=>s.getTasksByStatus("todo")),m=Xe(()=>s.getTasksByStatus("doing")),v=Xe(()=>s.getTasksByStatus("done"));ja(()=>{u.value&&(s.listenToTasks(u.value),s.projects.length===0&&r.user&&s.listenToProjects(r.user.uid))}),Ba(()=>{s.cleanup()});const S=()=>{l.value="create",o.value=null,i.value=!0},P=y=>{l.value="edit",o.value=y,i.value=!0},O=async y=>{l.value==="create"?await s.createTask(u.value,y):await s.updateTask(o.value.id,y),i.value=!1},x=async y=>{confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")&&await s.deleteTask(y)},V=async(y,_)=>{await s.updateTask(y,{status:_})},M=()=>{n.push("/dashboard")},B=y=>{c.value=y},J=y=>{y.preventDefault()},te=async y=>{c.value&&c.value.status!==y&&await s.updateTask(c.value.id,{status:y}),c.value=null},b=y=>({todo:"#3498db",doing:"#f39c12",done:"#27ae60"})[y]||"#95a5a6";return(y,_)=>(me(),we("div",nk,[N("div",rk,[N("button",{onClick:M,class:"btn-back"},"← Retour"),d.value?(me(),we("div",sk,[N("div",{class:"project-color-badge",style:Ct({backgroundColor:d.value.color})},null,4),N("div",null,[N("h1",null,Ue(d.value.name),1),d.value.description?(me(),we("p",ik,Ue(d.value.description),1)):Gt("",!0)])])):Gt("",!0),N("button",{onClick:S,class:"btn btn-primary"}," ➕ Nouvelle Tâche ")]),wt(s).loading?(me(),Mn(_y,{key:0,message:"Chargement des tâches..."})):(me(),we("div",ok,[N("div",{class:"kanban-column",style:Ct({borderTopColor:b("todo")}),onDragover:J,onDrop:_[0]||(_[0]=I=>te("todo"))},[N("div",ak,[N("h3",null,[N("span",{class:"status-dot",style:Ct({backgroundColor:b("todo")})},null,4),_[4]||(_[4]=Xt(" À faire ",-1))]),N("span",lk,Ue(p.value.length),1)]),N("div",ck,[(me(!0),we(at,null,yi(p.value,I=>(me(),we("div",{key:I.id,draggable:"true",onDragstart:R=>B(I)},[qe(ic,{task:I,onDelete:x,onEdit:P,onStatusChange:V},null,8,["task"])],40,uk))),128)),p.value.length===0?(me(),we("p",hk," Aucune tâche à faire ")):Gt("",!0)])],36),N("div",{class:"kanban-column",style:Ct({borderTopColor:b("doing")}),onDragover:J,onDrop:_[1]||(_[1]=I=>te("doing"))},[N("div",dk,[N("h3",null,[N("span",{class:"status-dot",style:Ct({backgroundColor:b("doing")})},null,4),_[5]||(_[5]=Xt(" En cours ",-1))]),N("span",fk,Ue(m.value.length),1)]),N("div",pk,[(me(!0),we(at,null,yi(m.value,I=>(me(),we("div",{key:I.id,draggable:"true",onDragstart:R=>B(I)},[qe(ic,{task:I,onDelete:x,onEdit:P,onStatusChange:V},null,8,["task"])],40,mk))),128)),m.value.length===0?(me(),we("p",gk," Aucune tâche en cours ")):Gt("",!0)])],36),N("div",{class:"kanban-column",style:Ct({borderTopColor:b("done")}),onDragover:J,onDrop:_[2]||(_[2]=I=>te("done"))},[N("div",_k,[N("h3",null,[N("span",{class:"status-dot",style:Ct({backgroundColor:b("done")})},null,4),_[6]||(_[6]=Xt(" Terminé ",-1))]),N("span",yk,Ue(v.value.length),1)]),N("div",vk,[(me(!0),we(at,null,yi(v.value,I=>(me(),we("div",{key:I.id,draggable:"true",onDragstart:R=>B(I)},[qe(ic,{task:I,onDelete:x,onEdit:P,onStatusChange:V},null,8,["task"])],40,Ek))),128)),v.value.length===0?(me(),we("p",Tk," Aucune tâche terminée ")):Gt("",!0)])],36)])),qe(tk,{show:i.value,task:o.value,mode:l.value,onClose:_[3]||(_[3]=I=>i.value=!1),onSave:O},null,8,["show","task","mode"])]))}},wk=zn(Ik,[["__scopeId","data-v-cfa8e064"]]),vy=DI({history:hI("/"),routes:[{path:"/",name:"Home",component:zC},{path:"/auth",name:"Auth",component:pP,meta:{requiresGuest:!0}},{path:"/login",redirect:"/auth"},{path:"/dashboard",name:"Dashboard",component:FP,meta:{requiresAuth:!0}},{path:"/project/:id",name:"ProjectDetails",component:wk,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",redirect:"/"}]});vy.beforeEach((t,e,n)=>{const r=t.matched.some(o=>o.meta.requiresAuth),s=t.matched.some(o=>o.meta.requiresGuest),i=Fr.currentUser;r&&!i?n("/auth"):s&&i?n("/dashboard"):n()});let si;Lg(Fr,()=>{if(!si){si=yT(jC);const t=IT();si.use(t),si.use(vy),si.mount("#app"),Us().initializeAuth()}});
