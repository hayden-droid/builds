(()=>{var bn=Object.create;var Oe=Object.defineProperty;var xn=Object.getOwnPropertyDescriptor;var Mn=Object.getOwnPropertyNames;var Pn=Object.getPrototypeOf,Sn=Object.prototype.hasOwnProperty;var kn=e=>Oe(e,"__esModule",{value:!0});var m=(e,t)=>()=>(e&&(t=e(e=0)),t);var V=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var En=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Mn(t))!Sn.call(e,i)&&i!=="default"&&Oe(e,i,{get:()=>t[i],enumerable:!(n=xn(t,i))||n.enumerable});return e},Z=e=>En(kn(Oe(e!=null?bn(Pn(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var T,de=m(()=>{r();T=webpackChunkdiscord_app.push([[Symbol()],{},e=>e]);webpackChunkdiscord_app.pop()});function Ae(e,t){let n=!1,i,[s,a]=q(e,!1);return s.then(u=>{n||(i=t(u))}),()=>{n=!0,a?.(),i?.()}}var lt=m(()=>{r();x()});var M,A,fe=m(()=>{r();M=new Map,A=new Map});function Ie(e,t,n,i,s,a){let u=M.get(n);if(!u)try{u=M.get(A.get(t))}catch{}if(!u)return a?Reflect.construct(t[e],i,s):t[e].apply(s,i);let c=u.hooks,l=i;for(let y of c.before.values()){let v=y.call(s,l);Array.isArray(v)&&(l=v)}let p,f=Array.from(c.instead.values()),b=(...y)=>a?Reflect.construct(u.originalFunction,y,s):u.originalFunction.apply(s,y);for(let y of f){let v=b;b=(...B)=>y.apply(s,[B,v])}p=b(...l);for(let y of c.after.values()){let v=y.call(s,l,p);typeof v!="undefined"&&(p=v)}return p}var ut=m(()=>{r();fe()});function je(e,t,n){let i=M.get(e);if(!i)return!1;let s=i.hooks;if(!s[n].has(t))return!1;s[n].delete(t);let a=A.get(i.functionParent);if(Object.keys(s).every(c=>s[c].size==0)){try{Object.defineProperty(i.functionParent,i.functionName,{value:i.originalFunction,writable:!0,configurable:!0})}catch{i.functionParent[i.functionName]=i.originalFunction}a.delete(i.functionName),M.delete(e)}return a.size==0&&A.delete(i.functionParent),!0}function pe(){for(let[e,t]of M.entries())for(let n in t.hooks){if(!M.has(e))continue;let i=M.get(e)?.hooks[n];for(let s of i.keys())je(e,s,n)}}var Le=m(()=>{r();fe()});var me,ct=m(()=>{r();ut();fe();Le();me=e=>(t,n,i,s=!1)=>{if(typeof n[t]!="function")throw new Error(`${t} is not a function in ${n.constructor.name}`);A.has(n)||A.set(n,new Map);let a=A.get(n);a.has(t)||a.set(t,Symbol("SPITROAST_PATCH_ID"));let u=a.get(t),c=()=>je(u,l,e);if(!M.has(u)){let p=n[t];M.set(u,{originalFunction:p,functionParent:n,functionName:t,hooks:{before:new Map,instead:new Map,after:new Map}});let f=new Proxy(p,{apply(b,y,v){let B=Ie(t,n,u,v,y,!1);return s&&c(),B},construct(b,y){let v=Ie(t,n,u,y,p,!0);return s&&c(),v},get(b,y){return y=="toString"?(...v)=>p.toString(...v):Reflect.get(...arguments)}});try{Object.defineProperty(n,t,{value:f,configurable:!0,writable:!0})}catch{n[t]=f}}let l=Symbol("SPITROAST_HOOK_ID");return M.get(u)?.hooks[e].set(l,i),c}});var oe,ie,P,dt=m(()=>{r();ct();Le();oe=me("before"),ie=me("instead"),P=me("after")});function I(e){let t=document.createElement("style");return t.className="CUMCORD_INJECTED_CSS",t.textContent=e,document.head.appendChild(t),n=>{typeof n=="undefined"?t.remove():t.textContent=n}}function ft(){for(let e of document.getElementsByClassName("CUMCORD_INJECTED_CSS"))e.remove()}var F=m(()=>{r();lt();dt()});function q(e,t=!0){let n=e();if(n!==void 0)return n=Promise.resolve(n),t?n:[n,()=>{}];let i=[];function s(){for(let u of i)u()}let a=new Promise(u=>{i.push(oe("push",window.webpackChunkdiscord_app,([[,c]])=>{for(let l in c)i.push(P(l,c,()=>{n===void 0&&(n=e(),n!==void 0&&(s(),u(n)))},!0))}))});return t?a:[a,s]}var pt=m(()=>{r();F()});function U(e,t,{walkable:n=null,ignore:i=[],limit:s=100}={}){let a=0;function u(c,l,{walkable:p=null,ignore:f=[]}={}){if(a+=1,a>s)return null;if(typeof l=="string"){if(c.hasOwnProperty(l))return c[l]}else if(l(c))return c;if(c){if(Array.isArray(c))for(let b of c){let y=u(b,l,{walkable:p,ignore:f});if(y)return y}else if(typeof c=="object")for(let b of Object.keys(c)){if(p!=null&&!p.includes(b)||f.includes(b))continue;let y;try{y=u(c[b],l,{walkable:p,ignore:f})}catch{continue}if(y)return y}}}return u(e,t,{walkable:n,ignore:i})}var ze=m(()=>{r()});function ge(e,t){return U(e,t,{walkable:["props","children","child","sibling"]})}var mt=m(()=>{r();ze()});function Fe(e,t,n){console[n]("%cCumcord%c",`background-color: ${t}; color: white; border-radius: 4px; padding: 0px 6px 0px 6px; font-weight: bold`,"",...e)}var Nn,C,gt=m(()=>{r();Nn={log:(...e)=>{Fe(e,"#7289da","log")},error:(...e)=>{Fe(e,"red","error")},warn:(...e)=>{Fe(e,"#debf18","warn")}},C=Nn});var yt=V((Yo,ht)=>{r();de();var Dn=Object.values(T.c).find(e=>e.exports?.useState).exports;ht.exports=Dn});var he=V(Ue=>{r();"use strict";Object.defineProperty(Ue,"__esModule",{value:!0});Ue.default=Object.freeze({GET:"GET",SET:"SET",DELETE:"DELETE",UPDATE:"UPDATE"})});var wt=V(re=>{r();"use strict";var _n=re&&re.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(re,"__esModule",{value:!0});var He=yt(),J=_n(he());function Bn(e,t=!1,n=()=>!0){let i=(0,He.useRef)(e.ghost),[,s]=(0,He.useReducer)(a=>~a,0);return(0,He.useEffect)(()=>{function a(u,c){n(u,c)&&s()}return e.on(J.default.UPDATE,a),t||(e.on(J.default.SET,a),e.on(J.default.DELETE,a)),()=>{e.off(J.default.UPDATE,a),t||(e.off(J.default.SET,a),e.off(J.default.DELETE,a))}},[]),e.ghost}re.default=Bn});var vt=V(W=>{r();"use strict";var Tn=W&&W.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(W,"__esModule",{value:!0});W.useNest=void 0;var On=wt();Object.defineProperty(W,"useNest",{enumerable:!0,get:function(){return Tn(On).default}})});var Ct,N,bt=m(()=>{r();Ct=Z(vt()),N=Ct.useNest});function H(e){window.DiscordNative?DiscordNative.clipboard.copy(e):navigator.clipboard.writeText(e).then(()=>{},()=>{let t=document.createElement("textarea");t.style.visibility="hidden",t.style.position="fixed",t.style.top="0",t.style.left="0",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(n){console.error(n)}document.body.removeChild(t)})}var xt=m(()=>{r()});function G(e){return e.__reactFiber$}var $e=m(()=>{r()});function ye(e){for(let t=G(e);t;t=t.return){let n=t.stateNode;if(n&&n.forceUpdate)return n}}var Mt=m(()=>{r();$e()});function we(e){return new Promise(t=>setTimeout(t,e))}var Pt=m(()=>{r()});function Ce(e){let[t,n]=o.useState(ve[e]);return o.useEffect(()=>{ve[e]||fetch(e).then(i=>i.json()).then(i=>{ve[e]=i,n(i)}).catch(()=>{ve[e]=St,n(St)})},[e]),t??{name:"Loading...",description:"This module is still loading.",author:"Loading..."}}var ve,St,kt=m(()=>{r();K();ve={},St={name:"Invalid module.",description:"This module does not exist.",author:"Unknown",invalid:!0}});var An,Re,Et=m(()=>{r();An=["Clickable","Tooltip"],Re=(e,{parent:t=!1,displayName:n=!0,blockList:i=An}={})=>{let s=l=>!l?.type?.displayName||i.includes(l?.type?.displayName),a=l=>typeof l?.type!="string"&&(n?!s(l):!0),u=l=>a(l)?l?.type:u(l.return),c=u(cumcord.utils.getReactInstance(e));return t?find(l=>l?.default===c):c}});var O=m(()=>{r();ze();mt();gt();bt();xt();$e();Mt();Pt();kt();Et()});var w,Ve=m(()=>{r();O();w={filterModules:(e,t=!1)=>n=>{let i=[];for(let s in e)if(e.hasOwnProperty(s)){let a=e[s].exports;if(!a)continue;if(a.default&&a.__esModule&&n(a.default)){if(t)return a.default;i.push(a.default)}if(n(a)){if(t)return a;i.push(a)}}if(!t)return i},byProps:e=>t=>e.every(n=>t[n]!==void 0),byProtos:e=>t=>t.prototype&&e.every(n=>t.prototype[n]!==void 0),byDisplayName:(e,t=!0)=>t?n=>n.displayName===e:n=>n?.default?.displayName===e,byKeyword:e=>t=>e.every(n=>Object.keys(t).some(i=>i.toLowerCase().includes(n.toLowerCase()))==!0),byStrings:e=>t=>{if(typeof t=="function"){if(e.every(n=>t.toString().includes(n)))return!0}else return U(t,n=>{if(!!n)try{for(let i of Object.values(n))if(typeof i=="function"&&e.every(s=>i.toString().includes(s)))return!0}catch{}})}}});var In,jn,Nt,Dt=m(()=>{r();Ve();de();In=e=>{let t=[],n=i=>{for(let s=0;s<e.length;s++)!e[s][0](i)||(e[s][1]?t[s]?t[s].push(i):t[s]=[i]:t[s]||(t[s]=i))};for(let i in T.c){if(!T.c.hasOwnProperty(i))continue;let s=T.c[i].exports;!s||(s.default&&s.__esModule&&n(s.default),n(s))}return t},jn=e=>({find:t=>e.push([t,!1]),findAll:t=>e.push([t,!0]),findByProps:(...t)=>e.push([w.byProps(t),!1]),findByPropsAll:(...t)=>e.push([w.byProps(t),!0]),findByPrototypes:(...t)=>e.push([w.byProtos(t),!1]),findByPrototypesAll:(...t)=>e.push([w.byProtos(t),!0]),findByDisplayName:(t,n=!0)=>e.push([w.byDisplayName(t,n),!1]),findByDisplayNameAll:(t,n=!0)=>e.push([w.byDisplayName(t,n),!0]),findByStrings:(...t)=>e.push([w.byStrings(t),!1]),findByStringsAll:(...t)=>e.push([w.byStrings(t),!0]),findByKeywordAll:(...t)=>e.push([w.byKeyword(t),!0])}),Nt=e=>{let t=[],n=jn(t);return e(n),In(t)}});var g,_t,Bi,Ti,S,Oi,Ai,Ii,Q,be,ji,Li,zi,d,x=m(()=>{r();de();pt();Ve();Dt();g={modules:T.c,findAsync:q,batchFind:Nt,find:w.filterModules(T.c,!0),findAll:w.filterModules(T.c),getModule(e){for(let t in g.modules){let n=g.modules[t]?.exports;if(n===e||n?.default===e)return n}},findByProps:(...e)=>g.find(w.byProps(e)),findByPropsAll:(...e)=>g.findAll(w.byProps(e)),findByPrototypes:(...e)=>g.find(w.byProtos(e)),findByPrototypesAll:(...e)=>g.findAll(w.byProtos(e)),findByDisplayName:(e,t=!0)=>g.find(w.byDisplayName(e,t)),findByDisplayNameAll:(e,t=!0)=>g.findAll(w.byDisplayName(e,t)),findByStrings:(...e)=>g.find(w.byStrings(e)),findByStringsAll:(...e)=>g.findAll(w.byStrings(e)),findByKeywordAll:(...e)=>g.findAll(w.byKeyword(e))},_t=g.find,Bi=g.findAll,Ti=g.getModule,S=g.findByProps,Oi=g.findByPropsAll,Ai=g.findByPrototypes,Ii=g.findByPrototypesAll,Q=g.findByDisplayName,be=g.findByDisplayNameAll,ji=g.findByStrings,Li=g.findByStringsAll,zi=g.findByKeywordAll,d=g});var k,o,Ke,Hi,$i,Ri,Vi,Bt,Ki,Zi,qi,Ji,Tt,K=m(()=>{r();x();k={constants:d.findByProps("API_HOST","APP_URL_PREFIX"),channels:d.findByProps("getChannelId","getVoiceChannelId"),Flux:d.findByProps("Store","connectStores"),FluxDispatcher:d.findByProps("_currentDispatchActionType","_subscriptions","_waitQueue"),i18n:d.findByPropsAll("Messages","_requestedLocale")[1],React:d.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","createElement"),ReactDOM:d.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","hydrate"),Redux:d.findByProps("createStore","__DO_NOT_USE__ActionTypes"),zustand:d.find(e=>{if(typeof e=="function"&&e.toString().includes("[useStore, api] = create() is deprecated and will be removed in v4"))return e}),uuid:{v4:d.findByProps("v4","v1")},highlightjs:d.findByProps("initHighlighting")},o=k.React,Ke=k.ReactDOM,Hi=k.Flux,$i=k.FluxDispatcher,Ri=k.Redux,Vi=k.constants,Bt=k.channels,Ki=k.i18n,Zi=k.zustand,qi=k.uuid,Ji=k.highlightjs,Tt=k});var r=m(()=>{K()});var It=V(se=>{r();"use strict";var Ln=se&&se.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(se,"__esModule",{value:!0});var Ot=Ln(he()),At=class{constructor(){this.listeners=Object.values(Ot.default).reduce((t,n)=>(t[n]=new Set,t),{}),this.on=function(t,n){if(this.listeners[t].has(n))throw Error(`This listener on ${t} already exists.`);this.listeners[t].add(n)},this.once=function(t,n){let i=(s,a)=>{this.off(s,i),n(s,a)};this.on(t,i)},this.off=function(t,n){this.listeners[t].delete(n)},this.emit=function(t,n){for(let i of this.listeners[t])i(t,n)};for(let t of Object.values(Ot.default))this[t.toLowerCase()]=n=>{this.emit(t,n)}}};se.default=At});var jt=V(ae=>{r();"use strict";var zn=ae&&ae.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ae,"__esModule",{value:!0});var Fn=zn(It());function Un(e={},{nestArrays:t=!0}={}){let n=new Fn.default;function i(s,a,u){return new Proxy(s,{get(c,l){let p=[...u,l],f=c[l];return f!=null?(n.get({path:p,value:f}),!t&&Array.isArray(f)?f:typeof f=="object"?i(f,a,p):f):i(c[l]={},a,p)},set(c,l,p){return c[l]=p,n.set({path:[...u,l],value:p}),!0},deleteProperty(c,l){return delete c[l]?(n.delete({path:[...u,l]}),!0):!1},has(c,l){return typeof c[l]=="object"&&Object.keys(c[l]).length===0?!1:l in c}})}return Object.assign({store:i(e,e,[]),ghost:e},n)}ae.default=Un});var Y=V($=>{r();"use strict";var Lt=$&&$.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty($,"__esModule",{value:!0});$.make=$.Events=void 0;var Hn=he();Object.defineProperty($,"Events",{enumerable:!0,get:function(){return Lt(Hn).default}});var $n=jt();Object.defineProperty($,"make",{enumerable:!0,get:function(){return Lt($n).default}})});r();x();K();r();var Ut=Z(Y());r();r();function Rn(){if(!(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent))||!indexedDB.databases)return Promise.resolve();let t;return new Promise(n=>{let i=()=>indexedDB.databases().finally(n);t=setInterval(i,100),i()}).finally(()=>clearInterval(t))}var zt=Rn;function xe(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function Vn(e,t){let n=zt().then(()=>{let i=indexedDB.open(e);return i.onupgradeneeded=()=>i.result.createObjectStore(t),xe(i)});return(i,s)=>n.then(a=>s(a.transaction(t,i).objectStore(t)))}var Ze;function qe(){return Ze||(Ze=Vn("keyval-store","keyval")),Ze}function Me(e,t=qe()){return t("readonly",n=>xe(n.get(e)))}function Pe(e,t,n=qe()){return n("readwrite",i=>(i.put(t,e),xe(i.transaction)))}function Ft(e,t=qe()){return t("readwrite",n=>(n.delete(e),xe(n.transaction)))}var Ht={nests:Ut.default,idbKeyval:{get:Me,set:Pe}};r();x();F();r();r();x();r();x();r();r();K();var j=class extends o.Component{constructor(t){super(t);this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}render(){return this.state.hasError?o.createElement("div",{className:"cumcord-error-handler"},o.createElement("h1",{className:"cumcord-error-handler-title"},"Oops, we had a fucky wucky. (Cumcord)"),o.createElement("code",{className:"cumcord-error-handler-code"},`${this.state.error}`)):this.props.children}};var Se=S("ModalCloseButton"),$t=be("Header")[1],Rt=Q("Flex"),{openModal:Kn}=S("openModal","openModalLazy");function ke(e,t){Kn(n=>o.createElement(Se.ModalRoot,{transitionState:n.transitionState,size:"large",className:"cumcord-settings-modal"},o.createElement(j,null,o.createElement(Se.ModalHeader,{separator:!1},o.createElement(Rt.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},o.createElement($t,{tag:"h2",size:$t.Sizes.SIZE_20},e)),o.createElement(Rt.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},o.createElement(Se.ModalCloseButton,{onClick:n.onClose}))),o.createElement(Se.ModalContent,null,typeof t=="function"?o.createElement(t):t))))}O();r();x();var{openModal:Zn}=S("openModal","openModalLazy"),Je=S("button","colorRed"),qn=Q("ConfirmModal"),Jn=be("Markdown")[1];async function X({header:e="Are you sure?",confirmText:t="Confirm",cancelText:n="Cancel",content:i="Are you sure you want to do that?",type:s="neutral"}={},a=()=>{}){return new Promise(u=>{var c,l=!1;switch(s.toLowerCase()){case"danger":c=Je.colorRed;break;case"confirm":c=Je.colorGreen;break;default:c=Je.colorBrandNew;break}function p(f){l||(l=!0,a(f),u(f))}Zn(f=>(f.transitionState===3&&p(!1),o.createElement(qn,{header:e,confirmText:t,cancelText:n,transitionState:f.transitionState,confirmButtonColor:c,onClose:()=>{p(!1)},onCancel:()=>{p(!1),f.onClose()},onConfirm:()=>{p(!0),f.onClose()}},o.createElement(Jn,{editable:!1},i))))})}r();K();F();r();x();var Wn=d.findByDisplayNameAll("Header")[1],Vt=d.findByDisplayName("Text"),Kt=e=>o.createElement("div",{onClick:e.onClick,className:"cumcord-toast"+(e.className?` ${e.className}`:"")},e.title?o.createElement(Wn,{className:"cumcord-toast-title"},e.title):null,e.content?o.createElement("div",{className:"cumcord-toast-content"},o.createElement(Vt,{size:Vt.Sizes.SIZE_16},e.content)):null);r();O();r();var Zt=Z(Y()),L=Zt.make({toasts:[]});var qt=()=>(N(L),o.createElement(o.Fragment,null,L.ghost.toasts.map(e=>e())));var le=document.createElement("div");function Jt(){I("@keyframes cumcord-fadeIn{0%{opacity:0}100%{opacity:1}}.cumcord-toast-container{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;display:flex;flex-direction:column-reverse;align-items:flex-end;z-index:999999}.cumcord-toast{background-color:var(--background-floating);padding:18px;margin-right:10px;margin-bottom:10px;display:flex;flex-direction:column;justify-content:center;gap:14px;align-content:center;pointer-events:all;border-radius:5px;box-shadow:var(--elevation-high);animation:cumcord-fadeIn .3s;max-width:400px;overflow-wrap:anywhere}.cumcord-toast-title{font-size:22px;line-height:1}"),le.className="cumcord-toast-container",document.getElementById("app-mount").prepend(le),Ke.render(o.createElement(qt,null),le)}function Wt(){Ke.unmountComponentAtNode(le),le.remove()}function ee({title:e,content:t,onClick:n=()=>{},className:i,duration:s=3e3}){let a=()=>o.createElement(Kt,{onClick:n,className:i,title:e,content:t});L.ghost.toasts.push(a),L.update();function u(){let c=L.ghost.toasts.indexOf(a);c>-1&&(L.ghost.toasts.splice(c,1),L.update())}return s!=1/0&&setTimeout(u,s),u}r();r();var ue=Z(Y());async function We(e){let t=await Me(`${e}_CUMCORD_STORE`)||{},n=ue.make(t),i=()=>Pe(`${e}_CUMCORD_STORE`,{...n.ghost});return n.on(ue.Events.SET,i),n.on(ue.Events.DELETE,i),n}var Gt=Z(Y()),Qt={cache:"no-store"},E=Gt.make({}),h={},Gn=window.eval;function Ge(e,t){let n=Object.assign({},cumcord);n.pluginData=t;let i=new URL(t.id),s=`(cumcord)=>{return ${e}}`+atob("Ci8v")+`# sourceURL=${i.hostname}${i.pathname}`,a=Gn(s)(n),u=a;return typeof a=="function"&&(u=a(t)),u}async function Ee(e){let t=h.ghost[e];if(!t)throw new Error(`Plugin ${e} not found`);if(E.ghost[e])throw new Error(`Plugin ${e} already loaded`);let n=Ge(t.js,{persist:await We(e),id:e});try{n.onLoad&&n.onLoad()}catch{}E.store[e]=n}function Qe(e){let t=E.ghost[e];if(!t)throw new Error(`Plugin ${e} not found`);if(!E.ghost[e])throw new Error(`Plugin ${e} isn't loaded`);try{t.onUnload()}catch{}delete E.store[e]}function Ne(e){let t=h.store[e];if(!h.ghost[e])throw new Error(`Plugin ${e} not found`);t.enabled?(Qe(e),t.enabled=!1):(Ee(e),t.enabled=!0)}async function z(e){let t=e.replace(/\/?$/,"/"),n=new URL("plugin.json",t),i=new URL("plugin.js",t),s=h.ghost[t],a;s&&(a=h.store[t]);let u=s?s?.enabled:!0,c=s?s?.update:!0;s?.update==null&&s&&(a.update=!0,c=!0);let l;try{let b=await fetch(n,Qt);if(l=await b.json(),b.status!=200&&!s)throw new Error("Plugin manifest not returning success")}catch{if(!s)throw new Error("Plugin manifest cannot be parsed")}if(s)if(l&&c){if(a.manifest.hash==l.hash){a.manifest!=l&&(a.manifest=l),u&&Ee(t);return}}else{u&&Ee(t);return}let p=await await fetch(i,Qt);if(p.status!=200)throw new Error("Plugin not returning success");let f=await p.text();h.store[t]={manifest:l,js:f,enabled:u,update:c},u&&await Ee(t)}function De(e){try{Qe(e)}catch{}delete h.store[e]}async function Yt(){h=await We("PLUGIN_CACHE")}async function Xt(){for(let e of Object.keys(h.ghost))z(e)}function en(){for(let e of Object.keys(h.ghost))try{Qe(e)}catch{}}var Qn=d.findByDisplayName("Card"),Yn=d.findByDisplayNameAll("Header")[1],Xn=d.findByDisplayName("Text"),Ye=d.findByDisplayName("Flex"),eo=d.findByDisplayNameAll("Markdown")[1],to=d.findByDisplayName("Switch"),Xe=e=>{let t=h.ghost[e.pluginId],n=h;if(!t.manifest)return null;N(E,!1,(s,a)=>{if(a.path[0]==e.pluginId)return!0});let i=null;return E.ghost[e.pluginId]&&E.ghost[e.pluginId].settings&&(i=o.createElement("svg",{onClick:()=>{ke(t.manifest.name,E.ghost[e.pluginId].settings)},className:"cumcord-card-settings",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},o.createElement("g",null,o.createElement("path",{d:"M0,0h24v24H0V0z",fill:"none"}),o.createElement("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})))),o.createElement(Qn,{className:"cumcord-plugin-card",type:"cardPrimary",outline:!1,editable:!1},o.createElement(Ye,{justify:Ye.Justify.BETWEEN,align:Ye.Align.CENTER},o.createElement("div",{className:"cumcord-card-header"},o.createElement(Yn,{className:"cumcord-card-title"},t.manifest.name),o.createElement(Xn,{className:"cumcord-card-author",tag:"h5"}," ","by ",o.createElement("strong",null,t.manifest.author))),o.createElement("div",{className:"cumcord-card-right"},o.createElement("div",{className:"cumcord-card-buttons"},i,o.createElement("svg",{onClick:()=>{ee({content:"Copied plugin URL to clipboard.",duration:1300}),H(e.pluginId)},className:"cumcord-card-copy",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"none"},o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"})),t.update?o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",onClick:()=>{n.store[e.pluginId].update=!1}},o.createElement("g",null,o.createElement("rect",{fill:"none",height:"24",width:"24",x:"0"})),o.createElement("g",null,o.createElement("g",null,o.createElement("g",null,o.createElement("path",{d:"M21,10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-0.1c-2.73,2.71-2.73,7.08,0,9.79s7.15,2.71,9.88,0 C18.32,15.65,19,14.08,19,12.1h2c0,1.98-0.88,4.55-2.64,6.29c-3.51,3.48-9.21,3.48-12.72,0c-3.5-3.47-3.53-9.11-0.02-12.58 s9.14-3.47,12.65,0L21,3V10.12z M12.5,8v4.25l3.5,2.08l-0.72,1.21L11,13V8H12.5z"}))))):o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",onClick:()=>{n.store[e.pluginId].update=!0}},o.createElement("g",null,o.createElement("rect",{fill:"none",height:"24",width:"24"})),o.createElement("path",{d:"M8.67,5.84L7.22,4.39C8.6,3.51,10.24,3,12,3c2.74,0,5.19,1.23,6.84,3.16L21,4v6h-6l2.41-2.41C16.12,6.02,14.18,5,12,5 C10.8,5,9.66,5.31,8.67,5.84z M13,7h-2v1.17l2,2V7z M19.78,22.61l-3-3C15.39,20.48,13.76,21,12,21c-4.97,0-9-4.03-9-9 c0-1.76,0.51-3.4,1.39-4.78L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M15.32,18.15L5.84,8.67C5.31,9.66,5,10.8,5,12 c0,3.86,3.14,7,7,7C13.2,19,14.34,18.69,15.32,18.15z M20.94,13h-2.02c-0.12,0.83-0.39,1.61-0.77,2.32l1.47,1.47 C20.32,15.67,20.79,14.38,20.94,13z"})),o.createElement("svg",{onClick:()=>{X({header:"Do you want to remove this plugin?",content:`All of ${t.manifest.name}'s data will be deleted and cannot be recovered.`,type:"danger",confirmText:"Delete"},s=>{s&&(De(e.pluginId),Ft(`${e.pluginId}_CUMCORD_STORE`))})},className:"cumcord-card-delete",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}))),o.createElement(to,{checked:t.enabled,onChange:()=>{try{Ne(e.pluginId)}catch{}}}))),o.createElement(eo,{className:"cumcord-card-description"},t.manifest.description))};x();O();var tn=o.useState,no=d.findByDisplayName("FormTitle"),oo=d.findByDisplayName("FormSection"),io=d.findByDisplayName("Flex"),ro=d.findByDisplayName("TextInput"),et=d.findByProps("Sizes","Colors","Looks","DropdownSizes"),so=d.findByDisplayName("FormDivider"),nn=d.findByDisplayName("SearchBar");function on(e,t){return e.toLowerCase().split(t.toLowerCase()).length-1}var rn=()=>{let[e,t]=tn(""),[n,i]=tn("");function s(){z(n).then(()=>i("")).catch(a=>ee({title:"Failed to import plugin",content:a.message,duration:3e3}))}return N(h),o.createElement(j,null,o.createElement(oo,null,o.createElement(no,{tag:"h1"},"Plugins"),o.createElement(io,{basis:"auto",grow:1,shrink:1},o.createElement(ro,{className:"cumcord-plugin-import",placeholder:"https://example.com/plugin",type:"text",value:n,onChange:a=>i(a),onKeyDown:a=>{a.key==="Enter"&&s()}}),o.createElement(et,{color:et.Colors.BRAND,size:et.Sizes.MEDIUM,onClick:s},"Add plugin")),o.createElement(nn,{className:"cumcord-plugin-search",query:e,onQueryChange:a=>{t(a)},placeholder:"Search...",size:nn.Sizes.MEDIUM}),o.createElement(so,{className:"cumcord-plugin-divider"}),e?Object.keys(h.ghost).sort((a,u)=>{let c=Object.values(h.ghost[a].manifest).join(""),l=Object.values(h.ghost[u].manifest).join("");return on(l,e)-on(c,e)}).map(a=>o.createElement(Xe,{pluginId:a})):Object.keys(h.ghost).map(a=>o.createElement(Xe,{pluginId:a}))))};var sn={async initializeSettings(){I(".cumcord-plugin-card{padding:16px;margin-bottom:10px}.cumcord-plugin-import{flex-grow:1;margin-right:20px}.cumcord-plugin-divider{margin-top:10px;margin-bottom:10px}.cumcord-plugin-search{margin-top:10px}.cumcord-card-header{display:inline-block}.cumcord-card-author,.cumcord-card-title{display:inline}.cumcord-card-right{display:flex}.cumcord-card-buttons{display:flex;margin-right:4px}.cumcord-card-buttons>*{fill:var(--interactive-normal);cursor:pointer;width:20px}.cumcord-card-buttons>*:hover{fill:var(--interactive-hover)}.cumcord-card-description{padding-top:3px;overflow-wrap:break-word}.cumcord-card-copy{width:18px}");let e=await q(()=>Q("SettingsView"));P("getPredicateSections",e.prototype,(t,n)=>{let i=n.findIndex(a=>a.section=="changelog")-1;if(i<0)return n;let s=[{section:"DIVIDER"},{section:"HEADER",label:"Cumcord"},{section:"CUMCORD_PLUGINS",label:"Plugins",element:rn}];return n.splice(i,0,...s),n})}};r();x();F();r();O();x();r();x();async function tt(){let{svgContentRight:e,svgContentLines:t,svgContentLeft:n,svgDots:i,svgTag:s}=await d.findAsync(()=>d.findByProps("svgContentRight"));return function({className:u}){return o.createElement("svg",{width:"57",height:"40",viewBox:"0 0 57 40",fill:"none",className:u},o.createElement("path",{d:"M49.4949 36H3.9596C1.78182 36 0 34.2486 0 32.1081V3.89189C0 1.75135 1.78182 0 3.9596 0H49.4949C51.6727 0 53.4545 1.75135 53.4545 3.89189V32.1081C53.4545 34.2486 51.6727 36 49.4949 36Z",className:e}),o.createElement("path",{d:"M44.5456 10.8889H25.7375C24.6486 10.8889 23.7577 9.99798 23.7577 8.90909C23.7577 7.8202 24.6486 6.92929 25.7375 6.92929H44.5456C45.6345 6.92929 46.5254 7.8202 46.5254 8.90909C46.5254 9.99798 45.6345 10.8889 44.5456 10.8889ZM19.7981 10.8889C18.7092 10.8889 17.8183 9.99798 17.8183 8.90909C17.8183 7.8202 18.7092 6.92929 19.7981 6.92929C20.887 6.92929 21.7779 7.8202 21.7779 8.90909C21.7779 9.99798 20.887 10.8889 19.7981 10.8889ZM44.5456 19.798H25.7375C24.6486 19.798 23.7577 18.9071 23.7577 17.8182C23.7577 16.7293 24.6486 15.8384 25.7375 15.8384H44.5456C45.6345 15.8384 46.5254 16.7293 46.5254 17.8182C46.5254 18.9071 45.6345 19.798 44.5456 19.798ZM19.7981 19.798C18.7092 19.798 17.8183 18.9071 17.8183 17.8182C17.8183 16.7293 18.7092 15.8384 19.7981 15.8384C20.887 15.8384 21.7779 16.7293 21.7779 17.8182C21.7779 18.9071 20.887 19.798 19.7981 19.798ZM31.6365 28.7071H25.7375C24.6486 28.7071 23.7577 27.8162 23.7577 26.7273C23.7577 25.6384 24.6486 24.7475 25.7375 24.7475H31.6365C32.7254 24.7475 33.6163 25.6384 33.6163 26.7273C33.6163 27.8162 32.7254 28.7071 31.6365 28.7071ZM19.7981 28.7071C18.7092 28.7071 17.8183 27.8162 17.8183 26.7273C17.8183 25.6384 18.7092 24.7475 19.7981 24.7475C20.887 24.7475 21.7779 25.6384 21.7779 26.7273C21.7779 27.8162 20.887 28.7071 19.7981 28.7071Z",className:t}),o.createElement("path",{d:"M3.9596 36H13.8586V0H3.9596C1.78182 0 0 1.78182 0 3.9596V32.0404C0 34.2182 1.78182 36 3.9596 36Z",className:n}),o.createElement("path",{d:"M6.9293 10.8889C5.24647 10.8889 3.9596 9.60202 3.9596 7.91919C3.9596 6.23636 5.24647 4.94949 6.9293 4.94949C8.61212 4.94949 9.89899 6.23636 9.89899 7.91919C9.89899 9.60202 8.61212 10.8889 6.9293 10.8889ZM6.9293 20.7879C5.24647 20.7879 3.9596 19.501 3.9596 17.8182C3.9596 16.1354 5.24647 14.8485 6.9293 14.8485C8.61212 14.8485 9.89899 16.1354 9.89899 17.8182C9.89899 19.501 8.61212 20.7879 6.9293 20.7879ZM6.9293 30.6869C5.24647 30.6869 3.9596 29.4 3.9596 27.7172C3.9596 26.0343 5.24647 24.7475 6.9293 24.7475C8.61212 24.7475 9.89899 26.0343 9.89899 27.7172C9.89899 29.4 8.61212 30.6869 6.9293 30.6869Z",className:i}),o.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M41.4328 33L46 37.7129L43.7836 40L37 32.9999L39.2164 30.7128L39.2165 30.7129L43.7836 26L46 28.2871L41.4328 33Z",className:s}),o.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M54.7821 35.2871L54.7841 35.2892L57 33.0021L50.2159 26L48 28.2871L52.5662 33L48 37.7129L50.2159 40L54.7821 35.2871Z",className:s}))}}r();x();O();var ao=d.findByDisplayName("Clickable"),lo=d.findByDisplayName("Link");async function nt(){let{copyLink:e,copyLinkIcon:t,copied:n}=await d.findAsync(()=>d.findByProps("titleRegion"));return function({url:s}){let[a,u]=o.useState(!1),c=o.useRef(null);o.useEffect(()=>function(){return clearTimeout(c)});function l(){a||(H(s),u(!0),c.current=setTimeout(()=>u(!1),2e3))}return o.createElement(ao,{className:`${e}${a?" "+n:""}`,onClick:l},o.createElement(lo,{className:t,href:s,target:"_blank"}),a?"Copied!":"Copy Link")}}var te=d.findByDisplayName("Text"),ce=d.findByProps("BorderColors","Colors"),uo=d.findByDisplayName("Alert"),co=d.findByProps("openModal","useModalsStore"),fo=d.findByDisplayName("InfoFilled");async function ot(){let{wrapper:e,content:t,title:n,titleRegion:i,icon:s,infoLink:a,infoIcon:u,buildInfo:c,buildDetails:l,subHead:p}=await d.findAsync(()=>d.findByProps("titleRegion")),f=await nt(),b=await tt();return function({url:v}){N(h);let B=Ce(v+"/plugin.json"),Te=h.ghost[v];return o.createElement("div",{className:e},o.createElement(te,{size:te.Sizes.SIZE_12,className:i},o.createElement("strong",{className:n},B.author),o.createElement("a",{className:a,onClick:()=>{co.openModal(Cn=>o.createElement(uo,{...Cn,title:"What is this?",body:o.createElement("p",{className:"cumcord-plugembeds-alerttext"},"This is a Cumcord feature. It allows you to install plugins straight from chat.",o.createElement("br",null),"Simply hit the install button on the embed.")}))},target:"_blank"},o.createElement(fo,{className:u})),o.createElement(f,{url:v})),o.createElement("div",{className:t},o.createElement(b,{className:s}),o.createElement("div",{className:c},o.createElement(te,{size:te.Sizes.SIZE_14,className:p},B.name),o.createElement(te,{size:te.Sizes.SIZE_16,className:l},B.description)),o.createElement(ce,{size:ce.Sizes.MEDIUM,color:B.invalid?ce.Colors.GREY:Te?ce.Colors.BLUE:ce.Colors.GREEN,disabled:B.invalid||Te,onClick:()=>z(v)},B.invalid?"Invalid":Te?"Installed":"Install")))}}var po=/^https:\/\/cumcordplugins\.github\.io\/Condom\/(.+?)\/(.+?)+$/i;function mo(e){return po.test(e)}var an={async initializePluginEmbeds(){let e=await ot();I(".cumcord-plugembeds-alerttext{margin:0;}"),cumcord.patcher.findAndPatch(()=>d.findByProps("defaultRules","astParserFor"),t=>P("react",t.defaultRules.link,n=>{if(mo(n[0].target))return n[0].target.endsWith("/")||(n[0].target+="/"),o.createElement(e,{url:n[0].target})}))}};O();F();r();x();r();r();O();var it=Z(Y()),D=!1,_,rt=it.make({});async function ln(){if(D){if(_){C.log("Unloading previous plugin version...");try{_.onUnload()}catch(e){C.error("Failed to unload:",e)}}C.log("Loading new plugin version...");try{let e=await(await fetch("http://127.0.0.1:42069")).text();_=Ge(e,{persist:rt,id:"https://FAKE_PLUGIN_ID"}),_.onLoad&&_.onLoad()}catch(e){C.error("Failed to load:",e)}}}function un(){D=!D,D==!1&&(_.onUnload(),_=void 0,rt=it.make({})),C.log(`Dev mode is now ${D?"on":"off"}.`)}function cn(){D?_?_.settings?ke("Fake Dev Plugin",_.settings):C.log("No settings for this plugin."):C.error("No plugin loaded!"):C.error("Dev mode is off!")}var dn=()=>{if(D){if(_)return rt;C.error("No plugin loaded!")}else C.error("Dev mode is off!")};function st(e,t){var n;try{n=JSON.parse(e)}catch{return}switch(n.action.toLowerCase()){case"get_info":t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:n.uuid||Math.random(),status:"OK"}));return;case"install_plugin":if(n.url){if(!n.url.match(/^(http|https):\/\/[^ "]+$/)){t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:n.uuid||Math.random(),status:"ERROR",error:"Invalid URL."}));return}DiscordNative.window.focus(),X({header:"Do you want to install this plugin?",content:`Cumcord plugins can run code on your computer and can be potentially dangerous. Only click confirm if you trust the plugin from \`${n.url}\`.`,confirmText:"Install",cancelText:"Cancel",type:"danger"},i=>{if(i){z(n.url),t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:n.uuid||Math.random(),status:"OK"}));return}else{t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:n.uuid||Math.random(),status:"ERROR",error:"Plugin installation cancelled."}));return}})}else{t.send(JSON.stringify({uuid:n.uuid||Math.random(),status:"ERROR",error:"No URL provided."}));return}return;case"update_plugin_dev":D?(ln(),t.send(JSON.stringify({uuid:n.uuid||Math.random(),status:"OK"}))):t.send(JSON.stringify({uuid:n.uuid||Math.random(),status:"ERROR",message:"Dev mode not enabled."}));return;default:return}}F();var _e=[];function fn(){window.DiscordNative&&ie("handleConnection",_t(e=>e.Z?.__proto__?.handleConnection).Z,(e,t)=>{let n=e[0];if(n.upgradeReq().url=="/cumcord")_e.push(n),n.on("message",i=>st(i,n)),n.on("close",()=>{_e.splice(_e.indexOf(n),1)});else return t(...e)})}function pn(){if(window.DiscordNative)for(let e of _e)e.close()}r();x();K();F();O();var go=S("queryCommands"),ho=S("useApplicationCommandsDiscoveryState"),{sendMessage:mn}=S("sendMessage"),{createBotMessage:yo}=S("createBotMessage"),{receiveMessage:wo}=S("receiveMessage"),ne="917806991081099275",vo="2d179b0c17f137125df3f01949cb0e5f",Co="f76f807bfc5692f3f14d1935f063d64b",gn={id:ne,icon:vo,name:"Cumcord",type:1},R=[],bo={string:3,int:4,bool:5,user:6,channel:7,role:8};function hn(){P("queryCommands",go,([{query:e}],t)=>[...t,...R.filter(n=>n.name.includes(e))]),P("useApplicationCommandsDiscoveryState",ho,(e,t)=>{R.length>0&&(t.discoverySections.find(n=>n.id===ne)||(t.discoverySections.push({data:R,section:gn,key:ne}),t.sectionsOffset.push(R.length),t.discoveryCommands=[...t.discoveryCommands,...R]),t.applicationCommandSections.find(n=>n.id===ne)||t.applicationCommandSections.push(gn))})}function yn({name:e,description:t,args:n,handler:i}){let s={applicationId:ne,type:0,target:1,description:t,name:e,id:"CUMCORD_COMMAND"};return n&&(s.options=n.map(a=>{a.type||(a.type="string");let u={...a};return u.type=bo[a.type],u.required=u.required===void 0?!0:u.required,u})),s.execute=(a,u)=>{if(!i)return;let c={};if(n)for(let l of a)c[l.name]=l.value;(async()=>{try{let l=await i({args:c,...u},p=>{let f=yo(u.channel.id);f.author.username="Cumcord",f.author.avatar=Co,f.author.id=ne,typeof p=="string"?f.content=p:f={...f,...p},wo(Bt.getChannelId(),f)});if(l)switch(typeof l){case"string":mn(u.channel.id,{content:l,validNonShortcutEmojis:[]});break;case"undefined":break;default:mn(u.channel.id,l)}}catch(l){C.error(l)}})()},R.push(s),()=>{let a=R.indexOf(s);a>-1&&R.splice(a,1)}}r();var xo="https://raw.githubusercontent.com/Cumcord/Lamivudine/master/src/index.js",Mo=eval;function wn(e){e.shiftKey&&e.altKey&&e.key==="Q"&&(fetch(xo).then(t=>t.text()).then(t=>Mo(t)).catch(t=>console.error(t)),at())}function vn(){document.addEventListener("keydown",wn)}function at(){document.removeEventListener("keydown",wn)}function Po(){return en(),at(),pn(),pe(),Wt(),ft(),window.cumcord=void 0,delete window.cumcord,!0}var Be=[];async function So(){C.log("Initializing Cumcord API"),window.cumcord={uninject:Po,modules:{webpackModules:d,webpack:d,common:Tt,internal:Ht},plugins:{importPlugin:z,removePlugin:De,togglePlugin:Ne},patcher:{before:oe,after:P,instead:ie,findAndPatch:Ae,injectCSS:I},ui:{toasts:{showToast:ee},modals:{showConfirmationModal:X},components:{ErrorBoundary:j}},utils:{logger:C,findInTree:U,findInReactTree:ge,getReactInstance:G,getOwnerInstance:ye,sleep:we,useNest:N,copyText:H,findByDomNode:Re},commands:{addCommand:yn},cum:(e=2,t=6)=>{let n=`8${"=".repeat(e)}D ${"~".repeat(t)}`;return Array.isArray(Be)?new Promise(i=>{Be.push(()=>i(n))}):n}},window.DiscordNative&&(window.cumcord.dev={toggleDevMode:un,showSettings:cn},Object.defineProperty(window.cumcord.dev,"storage",{configurable:!0,enumerable:!0,get:dn}),Object.defineProperty(window.cumcord.dev,"isEnabled",{configurable:!0,enumerable:!0,get:()=>D})),I(".cumcord-error-handler{font-family: var(--font-display);color:var(--text-normal);padding:16px}.cumcord-error-handler-title{margin-bottom:7px;font-weight:bold;font-size:24px}.cumcord-error-handler-code{background-color:var(--background-secondary);font-family:var(--font-code);user-select:text}"),Jt(),await Yt(),sn.initializeSettings(),window.cumcord.plugins.installed=h,window.cumcord.plugins.loaded=E;try{hn()}catch{}await Xt();try{vn(),an.initializePluginEmbeds()}catch{}fn(),C.log("Cumcord is injected!");for(let e of Be)e();Be=void 0}if(window.cumcord)throw new Error("Cumcord is already injected");So();})();
//# sourceURL=Cumcord