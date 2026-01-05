import{j as d}from"./jsx-runtime.Cw0dS1eS.js";/* empty css                       */import{r as E,e as v}from"./index.DlAYGZ0P.js";function Te(){return d.jsx("h2",{className:"texto-animado mb-8 text-gray-200/90 font-semibold text-xl text-pretty",children:""})}const Z={_origin:"https://api.emailjs.com"},_e=(e,t="https://api.emailjs.com")=>{Z._userID=e,Z._origin=t},fe=(e,t,o)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class ue{constructor(t){this.status=t.status,this.text=t.responseText}}const ge=(e,t,o={})=>new Promise((s,a)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:n})=>{const u=new ue(n);u.status===200||u.text==="OK"?s(u):a(u)}),i.addEventListener("error",({target:n})=>{a(new ue(n))}),i.open("POST",Z._origin+e,!0),Object.keys(o).forEach(n=>{i.setRequestHeader(n,o[n])}),i.send(t)}),Ie=(e,t,o,s)=>{const a=s||Z._userID;return fe(a,e,t),ge("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:a,service_id:e,template_id:t,template_params:o}),{"Content-type":"application/json"})},we=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},Ce=(e,t,o,s)=>{const a=s||Z._userID,i=we(o);fe(a,e,t);const n=new FormData(i);return n.append("lib_version","3.2.0"),n.append("service_id",e),n.append("template_id",t),n.append("user_id",a),ge("/api/v1.0/email/send-form",n)},Ne={init:_e,send:Ie,sendForm:Ce};function he(e){var t,o,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(o=he(e[t]))&&(s&&(s+=" "),s+=o)}else for(o in e)e[o]&&(s&&(s+=" "),s+=o);return s}function q(){for(var e,t,o=0,s="",a=arguments.length;o<a;o++)(e=arguments[o])&&(t=he(e))&&(s&&(s+=" "),s+=t);return s}const G=e=>typeof e=="number"&&!isNaN(e),X=e=>typeof e=="string",L=e=>typeof e=="function",se=e=>X(e)||L(e)?e:null,ce=e=>E.isValidElement(e)||X(e)||L(e)||G(e);function je(e,t,o){o===void 0&&(o=300);const{scrollHeight:s,style:a}=e;requestAnimationFrame(()=>{a.minHeight="initial",a.height=s+"px",a.transition=`all ${o}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,o)})})}function re(e){let{enter:t,exit:o,appendPosition:s=!1,collapse:a=!0,collapseDuration:i=300}=e;return function(n){let{children:u,position:m,preventExitTransition:_,done:f,nodeRef:w,isIn:I,playToast:N}=n;const h=s?`${t}--${m}`:t,p=s?`${o}--${m}`:o,T=E.useRef(0);return E.useLayoutEffect(()=>{const g=w.current,c=h.split(" "),r=y=>{y.target===w.current&&(N(),g.removeEventListener("animationend",r),g.removeEventListener("animationcancel",r),T.current===0&&y.type!=="animationcancel"&&g.classList.remove(...c))};g.classList.add(...c),g.addEventListener("animationend",r),g.addEventListener("animationcancel",r)},[]),E.useEffect(()=>{const g=w.current,c=()=>{g.removeEventListener("animationend",c),a?je(g,f,i):f()};I||(_?c():(T.current=1,g.className+=` ${p}`,g.addEventListener("animationend",c)))},[I]),v.createElement(v.Fragment,null,u)}}function pe(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const j=new Map;let ee=[];const de=new Set,ke=e=>de.forEach(t=>t(e)),ye=()=>j.size>0;function be(e,t){var o;if(t)return!((o=j.get(t))==null||!o.isToastActive(e));let s=!1;return j.forEach(a=>{a.isToastActive(e)&&(s=!0)}),s}function ve(e,t){ce(e)&&(ye()||ee.push({content:e,options:t}),j.forEach(o=>{o.buildToast(e,t)}))}function me(e,t){j.forEach(o=>{t!=null&&t!=null&&t.containerId?t?.containerId===o.id&&o.toggle(e,t?.id):o.toggle(e,t?.id)})}function Le(e){const{subscribe:t,getSnapshot:o,setProps:s}=E.useRef(function(i){const n=i.containerId||1;return{subscribe(u){const m=function(f,w,I){let N=1,h=0,p=[],T=[],g=[],c=w;const r=new Map,y=new Set,M=()=>{g=Array.from(r.values()),y.forEach(l=>l())},A=l=>{T=l==null?[]:T.filter(x=>x!==l),M()},C=l=>{const{toastId:x,onOpen:k,updateId:O,children:R}=l.props,Y=O==null;l.staleId&&r.delete(l.staleId),r.set(x,l),T=[...T,l.props.toastId].filter(B=>B!==l.staleId),M(),I(pe(l,Y?"added":"updated")),Y&&L(k)&&k(E.isValidElement(R)&&R.props)};return{id:f,props:c,observe:l=>(y.add(l),()=>y.delete(l)),toggle:(l,x)=>{r.forEach(k=>{x!=null&&x!==k.props.toastId||L(k.toggle)&&k.toggle(l)})},removeToast:A,toasts:r,clearQueue:()=>{h-=p.length,p=[]},buildToast:(l,x)=>{if(($=>{let{containerId:P,toastId:D,updateId:S}=$;const V=P?P!==f:f!==1,K=r.has(D)&&S==null;return V||K})(x))return;const{toastId:k,updateId:O,data:R,staleId:Y,delay:B}=x,Q=()=>{A(k)},te=O==null;te&&h++;const z={...c,style:c.toastStyle,key:N++,...Object.fromEntries(Object.entries(x).filter($=>{let[P,D]=$;return D!=null})),toastId:k,updateId:O,data:R,closeToast:Q,isIn:!1,className:se(x.className||c.toastClassName),bodyClassName:se(x.bodyClassName||c.bodyClassName),progressClassName:se(x.progressClassName||c.progressClassName),autoClose:!x.isLoading&&(F=x.autoClose,W=c.autoClose,F===!1||G(F)&&F>0?F:W),deleteToast(){const $=r.get(k),{onClose:P,children:D}=$.props;L(P)&&P(E.isValidElement(D)&&D.props),I(pe($,"removed")),r.delete(k),h--,h<0&&(h=0),p.length>0?C(p.shift()):M()}};var F,W;z.closeButton=c.closeButton,x.closeButton===!1||ce(x.closeButton)?z.closeButton=x.closeButton:x.closeButton===!0&&(z.closeButton=!ce(c.closeButton)||c.closeButton);let J=l;E.isValidElement(l)&&!X(l.type)?J=E.cloneElement(l,{closeToast:Q,toastProps:z,data:R}):L(l)&&(J=l({closeToast:Q,toastProps:z,data:R}));const H={content:J,props:z,staleId:Y};c.limit&&c.limit>0&&h>c.limit&&te?p.push(H):G(B)?setTimeout(()=>{C(H)},B):C(H)},setProps(l){c=l},setToggle:(l,x)=>{r.get(l).toggle=x},isToastActive:l=>T.some(x=>x===l),getSnapshot:()=>c.newestOnTop?g.reverse():g}}(n,i,ke);j.set(n,m);const _=m.observe(u);return ee.forEach(f=>ve(f.content,f.options)),ee=[],()=>{_(),j.delete(n)}},setProps(u){var m;(m=j.get(n))==null||m.setProps(u)},getSnapshot(){var u;return(u=j.get(n))==null?void 0:u.getSnapshot()}}}(e)).current;s(e);const a=E.useSyncExternalStore(t,o,o);return{getToastToRender:function(i){if(!a)return[];const n=new Map;return a.forEach(u=>{const{position:m}=u.props;n.has(m)||n.set(m,[]),n.get(m).push(u)}),Array.from(n,u=>i(u[0],u[1]))},isToastActive:be,count:a?.length}}function Pe(e){const[t,o]=E.useState(!1),[s,a]=E.useState(!1),i=E.useRef(null),n=E.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:u,pauseOnHover:m,closeToast:_,onClick:f,closeOnClick:w}=e;var I,N;function h(){o(!0)}function p(){o(!1)}function T(r){const y=i.current;n.canDrag&&y&&(n.didMove=!0,t&&p(),n.delta=e.draggableDirection==="x"?r.clientX-n.start:r.clientY-n.start,n.start!==r.clientX&&(n.canCloseOnClick=!1),y.style.transform=`translate3d(${e.draggableDirection==="x"?`${n.delta}px, var(--y)`:`0, calc(${n.delta}px + var(--y))`},0)`,y.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function g(){document.removeEventListener("pointermove",T),document.removeEventListener("pointerup",g);const r=i.current;if(n.canDrag&&n.didMove&&r){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return a(!0),e.closeToast(),void e.collapseAll();r.style.transition="transform 0.2s, opacity 0.2s",r.style.removeProperty("transform"),r.style.removeProperty("opacity")}}(N=j.get((I={id:e.toastId,containerId:e.containerId,fn:o}).containerId||1))==null||N.setToggle(I.id,I.fn),E.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||p(),window.addEventListener("focus",h),window.addEventListener("blur",p),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",p)}},[e.pauseOnFocusLoss]);const c={onPointerDown:function(r){if(e.draggable===!0||e.draggable===r.pointerType){n.didMove=!1,document.addEventListener("pointermove",T),document.addEventListener("pointerup",g);const y=i.current;n.canCloseOnClick=!0,n.canDrag=!0,y.style.transition="none",e.draggableDirection==="x"?(n.start=r.clientX,n.removalDistance=y.offsetWidth*(e.draggablePercent/100)):(n.start=r.clientY,n.removalDistance=y.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(r){const{top:y,bottom:M,left:A,right:C}=i.current.getBoundingClientRect();r.nativeEvent.type!=="touchend"&&e.pauseOnHover&&r.clientX>=A&&r.clientX<=C&&r.clientY>=y&&r.clientY<=M?p():h()}};return u&&m&&(c.onMouseEnter=p,e.stacked||(c.onMouseLeave=h)),w&&(c.onClick=r=>{f&&f(r),n.canCloseOnClick&&_()}),{playToast:h,pauseToast:p,isRunning:t,preventExitTransition:s,toastRef:i,eventHandlers:c}}function De(e){let{delay:t,isRunning:o,closeToast:s,type:a="default",hide:i,className:n,style:u,controlledProgress:m,progress:_,rtl:f,isIn:w,theme:I}=e;const N=i||m&&_===0,h={...u,animationDuration:`${t}ms`,animationPlayState:o?"running":"paused"};m&&(h.transform=`scaleX(${_})`);const p=q("Toastify__progress-bar",m?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${I}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":f}),T=L(n)?n({rtl:f,type:a,defaultClassName:p}):q(p,n),g={[m&&_>=1?"onTransitionEnd":"onAnimationEnd"]:m&&_<1?null:()=>{w&&s()}};return v.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":N},v.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${I} Toastify__progress-bar--${a}`}),v.createElement("div",{role:"progressbar","aria-hidden":N?"true":"false","aria-label":"notification timer",className:T,style:h,...g}))}let Me=1;const xe=()=>""+Me++;function $e(e){return e&&(X(e.toastId)||G(e.toastId))?e.toastId:xe()}function U(e,t){return ve(e,t),t.toastId}function ae(e,t){return{...t,type:t&&t.type||e,toastId:$e(t)}}function ne(e){return(t,o)=>U(t,ae(e,o))}function b(e,t){return U(e,ae("default",t))}b.loading=(e,t)=>U(e,ae("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),b.promise=function(e,t,o){let s,{pending:a,error:i,success:n}=t;a&&(s=X(a)?b.loading(a,o):b.loading(a.render,{...o,...a}));const u={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},m=(f,w,I)=>{if(w==null)return void b.dismiss(s);const N={type:f,...u,...o,data:I},h=X(w)?{render:w}:w;return s?b.update(s,{...N,...h}):b(h.render,{...N,...h}),I},_=L(e)?e():e;return _.then(f=>m("success",n,f)).catch(f=>m("error",i,f)),_},b.success=ne("success"),b.info=ne("info"),b.error=ne("error"),b.warning=ne("warning"),b.warn=b.warning,b.dark=(e,t)=>U(e,ae("default",{theme:"dark",...t})),b.dismiss=function(e){(function(t){var o;if(ye()){if(t==null||X(o=t)||G(o))j.forEach(s=>{s.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const s=j.get(t.containerId);s?s.removeToast(t.id):j.forEach(a=>{a.removeToast(t.id)})}}else ee=ee.filter(s=>t!=null&&s.options.toastId!==t)})(e)},b.clearWaitingQueue=function(e){e===void 0&&(e={}),j.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},b.isActive=be,b.update=function(e,t){t===void 0&&(t={});const o=((s,a)=>{var i;let{containerId:n}=a;return(i=j.get(n||1))==null?void 0:i.toasts.get(s)})(e,t);if(o){const{props:s,content:a}=o,i={delay:100,...s,...t,toastId:t.toastId||e,updateId:xe()};i.toastId!==e&&(i.staleId=e);const n=i.render||a;delete i.render,U(n,i)}},b.done=e=>{b.update(e,{progress:1})},b.onChange=function(e){return de.add(e),()=>{de.delete(e)}},b.play=e=>me(!0,e),b.pause=e=>me(!1,e);const Se=typeof window<"u"?E.useLayoutEffect:E.useEffect,oe=e=>{let{theme:t,type:o,isLoading:s,...a}=e;return v.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...a})},le={info:function(e){return v.createElement(oe,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return v.createElement(oe,{...e},v.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return v.createElement(oe,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return v.createElement(oe,{...e},v.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return v.createElement("div",{className:"Toastify__spinner"})}},Ae=e=>{const{isRunning:t,preventExitTransition:o,toastRef:s,eventHandlers:a,playToast:i}=Pe(e),{closeButton:n,children:u,autoClose:m,onClick:_,type:f,hideProgressBar:w,closeToast:I,transition:N,position:h,className:p,style:T,bodyClassName:g,bodyStyle:c,progressClassName:r,progressStyle:y,updateId:M,role:A,progress:C,rtl:l,toastId:x,deleteToast:k,isIn:O,isLoading:R,closeOnClick:Y,theme:B}=e,Q=q("Toastify__toast",`Toastify__toast-theme--${B}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":l},{"Toastify__toast--close-on-click":Y}),te=L(p)?p({rtl:l,position:h,type:f,defaultClassName:Q}):q(Q,p),z=function(H){let{theme:$,type:P,isLoading:D,icon:S}=H,V=null;const K={theme:$,type:P};return S===!1||(L(S)?V=S({...K,isLoading:D}):E.isValidElement(S)?V=E.cloneElement(S,K):D?V=le.spinner():(Ee=>Ee in le)(P)&&(V=le[P](K))),V}(e),F=!!C||!m,W={closeToast:I,type:f,theme:B};let J=null;return n===!1||(J=L(n)?n(W):E.isValidElement(n)?E.cloneElement(n,W):function(H){let{closeToast:$,theme:P,ariaLabel:D="close"}=H;return v.createElement("button",{className:`Toastify__close-button Toastify__close-button--${P}`,type:"button",onClick:S=>{S.stopPropagation(),$(S)},"aria-label":D},v.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},v.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(W)),v.createElement(N,{isIn:O,done:k,position:h,preventExitTransition:o,nodeRef:s,playToast:i},v.createElement("div",{id:x,onClick:_,"data-in":O,className:te,...a,style:T,ref:s},v.createElement("div",{...O&&{role:A},className:L(g)?g({type:f}):q("Toastify__toast-body",g),style:c},z!=null&&v.createElement("div",{className:q("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},z),v.createElement("div",null,u)),J,v.createElement(De,{...M&&!F?{key:`pb-${M}`}:{},rtl:l,theme:B,delay:m,isRunning:t,isIn:O,closeToast:I,hide:w,type:f,style:y,className:r,controlledProgress:F,progress:C||0})))},ie=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Oe=re(ie("bounce",!0));re(ie("slide",!0));re(ie("zoom"));re(ie("flip"));const ze={position:"top-right",transition:Oe,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Re(e){let t={...ze,...e};const o=e.stacked,[s,a]=E.useState(!0),i=E.useRef(null),{getToastToRender:n,isToastActive:u,count:m}=Le(t),{className:_,style:f,rtl:w,containerId:I}=t;function N(p){const T=q("Toastify__toast-container",`Toastify__toast-container--${p}`,{"Toastify__toast-container--rtl":w});return L(_)?_({position:p,rtl:w,defaultClassName:T}):q(T,se(_))}function h(){o&&(a(!0),b.play())}return Se(()=>{if(o){var p;const T=i.current.querySelectorAll('[data-in="true"]'),g=12,c=(p=t.position)==null?void 0:p.includes("top");let r=0,y=0;Array.from(T).reverse().forEach((M,A)=>{const C=M;C.classList.add("Toastify__toast--stacked"),A>0&&(C.dataset.collapsed=`${s}`),C.dataset.pos||(C.dataset.pos=c?"top":"bot");const l=r*(s?.2:1)+(s?0:g*A);C.style.setProperty("--y",`${c?l:-1*l}px`),C.style.setProperty("--g",`${g}`),C.style.setProperty("--s",""+(1-(s?y:0))),r+=C.offsetHeight,y+=.025})}},[s,m,o]),v.createElement("div",{ref:i,className:"Toastify",id:I,onMouseEnter:()=>{o&&(a(!1),b.pause())},onMouseLeave:h},n((p,T)=>{const g=T.length?{...f}:{...f,pointerEvents:"none"};return v.createElement("div",{className:N(p),style:g,key:`container-${p}`},T.map(c=>{let{content:r,props:y}=c;return v.createElement(Ae,{...y,stacked:o,collapseAll:h,isIn:u(y.toastId,y.containerId),style:y.style,key:`toast-${y.key}`},r)}))}))}function Be(e,t){let o;return function(...s){clearTimeout(o),o=setTimeout(()=>e.apply(this,s),t)}}function Ve(){const[e,t]=E.useState({email:"",subject:"",body:""}),[o,s]=E.useState(!1),a=Be(n=>{const{id:u,value:m}=n.target;t(_=>({..._,[u]:m}))},300),i=async n=>{n.preventDefault(),s(!0);try{await Ne.send("service_voe2pxj","template_nvnng4k",{from_name:e.email,to_email:"juanpabloriglos@gmail.com",subject:e.subject,body:e.body,email:e.email},"7LMagtTZiKrQnJb0s"),b.success("Enviado con éxito. A la brevedad nos estaremos comunicando con usted.",{position:"bottom-right",autoClose:5e3,theme:"dark"}),t({email:"",subject:"",body:""}),n.target.reset()}catch(u){console.error("Error al enviar el correo electrónico:",u),b.error("Error al enviar su consulta. A la brevedad lo estaremos solucionando, disculpe las molestias.",{position:"bottom-right",autoClose:5e3,theme:"dark"})}finally{s(!1)}};return d.jsxs(d.Fragment,{children:[d.jsx("header",{className:"-mt-24 flex flex-nowrap gap-4 z-40 contact-header",children:d.jsx(Te,{})}),d.jsxs("form",{className:"contact-form space-y-6",onSubmit:i,children:[d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"email",className:"input-label",children:"Tu email"}),d.jsxs("div",{className:"input-wrapper",children:[d.jsx("input",{onChange:a,type:"email",id:"email",className:"styled-input",placeholder:"tucorreo@ejemplo.com",required:!0}),d.jsx("div",{className:"input-border"})]})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"subject",className:"input-label",children:"Asunto"}),d.jsxs("div",{className:"input-wrapper",children:[d.jsx("input",{onChange:a,type:"text",id:"subject",className:"styled-input",placeholder:"Cuéntame brevemente de qué se trata",required:!0}),d.jsx("div",{className:"input-border"})]})]}),d.jsxs("div",{className:"input-group",children:[d.jsx("label",{htmlFor:"body",className:"input-label",children:"Mensaje"}),d.jsxs("div",{className:"input-wrapper",children:[d.jsx("textarea",{onChange:a,id:"body",rows:"6",className:"styled-input styled-textarea",placeholder:"Escribe aquí tu mensaje...",required:!0}),d.jsx("div",{className:"input-border"})]})]}),d.jsxs("button",{type:"submit",className:"submit-button",disabled:o,children:[d.jsx("span",{className:"button-gradient"}),d.jsx("span",{className:"button-content",children:o?d.jsxs(d.Fragment,{children:[d.jsx("svg",{className:"spinner",viewBox:"0 0 24 24",children:d.jsx("circle",{className:"spinner-circle",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"})}),"Enviando..."]}):d.jsxs(d.Fragment,{children:["Enviar mensaje",d.jsx("svg",{className:"send-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})]})})]})]}),d.jsx(Re,{}),d.jsx("style",{jsx:!0,children:`
				.contact-header {
					animation: fadeIn 0.6s ease-out forwards;
				}

				.contact-form {
					animation: fadeIn 0.8s ease-out forwards;
					animation-delay: 0.2s;
					opacity: 0;
				}

				.input-group {
					position: relative;
				}

				.input-label {
					display: block;
					margin-bottom: 0.5rem;
					font-size: 0.875rem;
					font-weight: 500;
					color: rgba(209, 213, 219, 0.9);
					transition: color 0.3s ease;
				}

				.input-wrapper {
					position: relative;
				}

				.styled-input {
					width: 100%;
					padding: 0.875rem 1rem;
					background: rgba(31, 41, 55, 0.6);
					border: 1px solid rgba(75, 85, 99, 0.4);
					border-radius: 0.5rem;
					color: white;
					font-size: 0.9375rem;
					transition: all 0.3s ease;
					backdrop-filter: blur(8px);
					position: relative;
					z-index: 1;
				}

				.styled-input::placeholder {
					color: rgba(156, 163, 175, 0.6);
				}

				.styled-input:focus {
					outline: none;
					background: rgba(31, 41, 55, 0.8);
					border-color: rgba(249, 115, 22, 0.6);
					box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1),
					            0 0 20px rgba(249, 115, 22, 0.2);
				}

				.styled-input:focus + .input-border {
					opacity: 1;
				}

				.input-border {
					position: absolute;
					inset: 0;
					border-radius: 0.5rem;
					padding: 1px;
					background: linear-gradient(
						135deg,
						rgba(249, 115, 22, 0.4),
						rgba(168, 85, 247, 0.4)
					);
					-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
					-webkit-mask-composite: xor;
					mask-composite: exclude;
					opacity: 0;
					transition: opacity 0.3s ease;
					pointer-events: none;
				}

				.styled-textarea {
					resize: vertical;
					min-height: 150px;
				}

				.submit-button {
					position: relative;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					padding: 0.875rem 2rem;
					background: rgba(17, 24, 39, 0.8);
					border: 1px solid rgba(249, 115, 22, 0.4);
					border-radius: 0.5rem;
					color: rgb(251, 146, 60);
					font-weight: 600;
					font-size: 0.9375rem;
					cursor: pointer;
					overflow: hidden;
					transition: all 0.3s ease;
					backdrop-filter: blur(8px);
				}

				.submit-button:disabled {
					opacity: 0.7;
					cursor: not-allowed;
				}

				.submit-button:not(:disabled):hover {
					border-color: rgba(249, 115, 22, 0.7);
					box-shadow: 0 8px 24px rgba(249, 115, 22, 0.3);
					transform: translateY(-2px);
				}

				.button-gradient {
					position: absolute;
					inset: 0;
					background: linear-gradient(
						135deg,
						rgba(249, 115, 22, 0.2),
						rgba(168, 85, 247, 0.2)
					);
					opacity: 0;
					transition: opacity 0.3s ease;
				}

				.submit-button:not(:disabled):hover .button-gradient {
					opacity: 1;
				}

				.button-content {
					position: relative;
					display: flex;
					align-items: center;
					gap: 0.5rem;
				}

				.send-icon {
					width: 1.25rem;
					height: 1.25rem;
					transition: transform 0.3s ease;
				}

				.submit-button:not(:disabled):hover .send-icon {
					transform: translateX(4px) translateY(-4px);
				}

				.spinner {
					width: 1.25rem;
					height: 1.25rem;
					animation: spin 1s linear infinite;
				}

				.spinner-circle {
					stroke-dasharray: 60;
					stroke-dashoffset: 40;
					animation: spinCircle 1.5s ease-in-out infinite;
				}

				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes spin {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}

				@keyframes spinCircle {
					0% {
						stroke-dashoffset: 60;
					}
					50% {
						stroke-dashoffset: 0;
					}
					100% {
						stroke-dashoffset: -60;
					}
				}
			`})]})}export{Ve as Contact};
