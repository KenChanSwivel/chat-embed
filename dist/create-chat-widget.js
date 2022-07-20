var ChatWidget;(()=>{"use strict";var e={d:(t,o)=>{for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{createWidget:()=>s,stopNotification:()=>r});const o="BFimg4nhhiga2UkChbE_luhDsQoQL1_82igq9D9--RMSSVVOsCC1kd4Rc6V2vDcq7Bh0feKWxcvpZpY8eBr4Vhg";let a;async function n(e,t){const n=await async function(e,t){if("serviceWorker"in navigator){const o=await navigator.serviceWorker.register("/360-sw.js");return navigator.serviceWorker.ready.then((o=>{o.active.postMessage({token:e,system:t})})),o}console.log("[chat-embed] No service worker available")}(e,t);console.log(n),n&&await async function(e,t){const n=await e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:i(o)});a=n;const s={"content-type":"application/json",Authorization:`Bearer ${t}`},r=await fetch("https://auth.swivelsoftware.asia/api/notification/subscribe",{method:"POST",body:JSON.stringify(n),headers:s});r.ok&&console.dir(r)}(n,e),console.log("[chat-embed] service worker registered")}function i(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),o=window.atob(t),a=new Uint8Array(o.length);for(let e=0;e<o.length;++e)a[e]=o.charCodeAt(e);return a}async function s({username:e,password:t,system:o,entityKey:a,entityReferenceKey:i}){const s=await async function(e,t){const o=await fetch("https://auth.swivelsoftware.asia/auth/local/login",{method:"POST",headers:{"x-system":"360uat","Content-Type":"application/json"},body:JSON.stringify({username:e,password:t,rememberMe:!1})});return(await o.json()).accessToken}(e,t);localStorage.setItem("360-accessToken",s),function(e,t,o,a){const n=document.getElementById("chat-container"),i=document.createElement("swivel-chat-widget");i.setAttribute("id","swivel-chat-widget"),i.setAttribute("name",JSON.stringify(["Main"])),i.setAttribute("token",e),i.setAttribute("system",["360uat","360dev"].includes(t)?"360uat":t),i.setAttribute("uat","true"),i.setAttribute("propdata",JSON.stringify({full:!1,button:!0,right:!1,system:["360uat","360dev"].includes(t)?"360uat":t,entityType:"customer",entityKey:o,entityReferenceKey:a,hasPublicChatroom:!0,extraChatrooms:[],maxShowChatroom:10,leftOffset:0,rightOffset:0})),i.setAttribute("injectCss",n.id);const s=document.createElement("style");s.innerHTML="",n.appendChild(i),i.shadowRoot&&(console.log(s),i.shadowRoot.appendChild(s)),document.body.addEventListener("swivel-widget-loaded",(()=>{i.shadowRoot&&i.shadowRoot.appendChild(s)}))}(s,o,a,i),await n(s,o)}async function r(){!async function(){const e={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("360-accessToken")}`},t=await fetch("https://auth.swivelsoftware.asia/api/notification/unsubscribe",{method:"POST",body:JSON.stringify(a),headers:e});t.ok&&console.dir(t)}()}ChatWidget=t})();