System.register(["./chunk-frameworks.js","./chunk-vendor.js"],function(){"use strict";var l,j,i,g,c;return{setters:[function(n){l=n.A,j=n.o,i=n.j},function(n){g=n.f,c=n.r}],execute:function(){var n=Object.defineProperty,w=(t,e)=>n(t,"name",{value:e,configurable:!0});function b(t){return t.trim().toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s/g,"-")}w(b,"parameterizeName"),l(".js-business-name",function(t){const e=t.target,r=document.querySelector(".js-business-slug[data-auto-update]");r instanceof HTMLInputElement&&(r.value=b(e.value),g(r,"input"))}),j(".js-business-slug[data-auto-update]",function(t){t.removeAttribute("data-auto-update");const e=document.querySelector(".js-name-slug-sync-icon");e&&e.remove()});var v=Object.defineProperty,f=(t,e)=>v(t,"name",{value:e,configurable:!0});function m(t,e){return new Promise((r,d)=>{setTimeout(async()=>{const a=new Request(t);a.headers.append("X-Requested-With","XMLHttpRequest");const o=await fetch(a);o.status===200?r(o):o.status===202?r(m(t,e)):d(o)},e)})}f(m,"fetchPoll");async function p(t,e,r,d){const a=document.querySelector(t),o=document.querySelector(e);function s(u){o&&(o.hidden=u,o.open=!1),a.hidden=!u}f(s,"loading"),s(!0);let y;try{y=await r.json()}catch{s(!1),i();return}const h=y.json;try{await m(h.job_url,d)}catch{s(!1),i();return}s(!1),window.location=h.export_url}f(p,"exportEvents"),c(".js-organization-members-export-form",async function(t,e){await p(".js-organization-members-exporting",".js-organization-members-export-menu",e,2e3)}),c(".js-dormant-users-export-form",async function(t,e){await p(".js-dormant-users-exporting",".js-dormant-users-export-button",e,2e3)})}}});
//# sourceMappingURL=chunk-async-export-dea33436.js.map