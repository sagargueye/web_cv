System.register(["./chunk-vendor.js","./chunk-band.js","./chunk-linear.js","./chunk-tip.js","./chunk-frameworks.js","./chunk-array.js","./chunk-axis.js","./chunk-range.js"],function(){"use strict";var w,D,$,A,j,v,z,L,P,T,h,S,O,x;return{setters:[function(s){w=s.t,D=s.c},function(s){$=s.b,A=s.o},function(s){j=s.s,v=s.m,z=s.l},function(s){L=s.d},function(s){P=s.aT},function(s){T=s.e,h=s.f,S=s.u},function(s){O=s.a,x=s.b},function(){}],execute:function(){function s(e,a){if((c=e.length)>1)for(var i=1,o,r,n=e[a[0]],c,l=n.length;i<c;++i)for(r=n,n=e[a[i]],o=0;o<l;++o)n[o][1]+=n[o][0]=isNaN(r[o][1])?r[o][0]:r[o][1]}function V(e){for(var a=e.length,i=new Array(a);--a>=0;)i[a]=a;return i}function q(e,a){return e[a]}function B(e){const a=[];return a.key=e,a}function M(){var e=h([]),a=V,i=s,o=q;function r(n){var c=Array.from(e.apply(this,arguments),B),l,g=c.length,f=-1,u;for(const d of n)for(l=0,++f;l<g;++l)(c[l][f]=[0,+o(d,c[l].key,f,n)]).data=d;for(l=0,u=T(a(c));l<g;++l)c[u[l]].index=l;return i(c,u),c}return r.keys=function(n){return arguments.length?(e=typeof n=="function"?n:h(Array.from(n)),r):e},r.value=function(n){return arguments.length?(o=typeof n=="function"?n:h(+n),r):o},r.order=function(n){return arguments.length?(a=n==null?V:typeof n=="function"?n:h(Array.from(n)),r):a},r.offset=function(n){return arguments.length?(i=n==null?s:n,r):i},r}var F=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,k=(e,a)=>F(e,"name",{value:a,configurable:!0}),H=(e,a,i,o)=>{for(var r=o>1?void 0:o?Q(a,i):a,n=e.length-1,c;n>=0;n--)(c=e[n])&&(r=(o?c(a,i,r):c(r))||r);return o&&r&&F(a,i,r),r};async function E(e){return await await P(e,{headers:{accept:"application/json"}})}k(E,"fetchData");let m=class extends HTMLElement{async connectedCallback(){const e=this.graph,a=e.getAttribute("data-url");if(!!a){e.classList.add("is-graph-loading"),e.classList.remove("is-graph-load-error","is-graph-empty");try{const i=await E(a);e.classList.remove("is-graph-loading");const o=await i.json();new ResizeObserver(n=>{for(const c of e.querySelectorAll("svg.viz"))c.remove();for(const c of n)c.target===e&&N(e,o)}).observe(e)}catch(i){if(e.classList.remove("is-graph-loading"),i.message==="HTTP 404Not Found")e.classList.add("is-graph-empty");else throw e.classList.add("is-graph-load-error"),i}}}};k(m,"DiscussionPageViewsGraphElement"),H([w],m.prototype,"graph",2),m=H([D],m);function N(e,a){const i=e.clientWidth,o=e.clientHeight,r={top:50,right:20,bottom:40,left:50},n=i-r.left-r.right,c=o-r.top-r.bottom,l=2,g=S("%-m/%-d"),f=L().attr("class","svg-tip").offset([-10,0]).html(function(t){return`<strong>${t.data.group}</strong><br>
      ${t.data.anonymous} anonymous visits<br>
      ${t.data["logged in"]} logged in visits`}),u=j(e).append("svg").attr("class","viz").attr("width",i).attr("height",o).attr("alt","A graph of the page views for discussions in this repository").attr("aria-describedby","discussion-page-views-description").append("g").attr("transform",`translate(${r.left},${r.top})`).call(f);let d="";for(const t of a){d+=`${t.name}: `;for(const y of t.data)d+=`${y.value} on ${g(new Date(y.date))} `}u.append("div").attr("text",d).attr("style","display: none;").attr("id","discussion-page-views-description");for(const t of a)u.append("circle").attr("cx",n-t.delta).attr("cy",-r.top/2).attr("class",t.class).attr("r",5),u.append("text").attr("x",n-t.delta+10).attr("y",-r.top/2+5).attr("class","legend-text").text(t.name);const R=v(a[0].data.map(t=>t.value))+v(a[1].data.map(t=>t.value)),C=a[0].data.map(t=>g(new Date(t.date))),b=$().domain(C).range([0,n]).padding(.2);u.append("g").attr("transform",`translate(0, ${c})`).attr("class","tick-labels-x").call(O(b).tickSize(0).tickValues(C));const p=z().domain([0,R]).range([c,0]);u.append("g").attr("class","tick-labels-y").call(x(p).ticks(4).tickSize(0)),u.append("g").attr("class","tick-y").call(x(p).ticks(4).tickSize(-n).tickFormat(()=>"")),u.append("text").attr("class","axis-label").attr("text-anchor","middle").attr("x",n/2).attr("y",o-r.top).text("Timeline"),u.append("text").attr("class","axis-label").attr("transform","rotate(-90)").attr("x",-c/2).attr("y",-r.bottom-10).attr("dy","0.71em").style("text-anchor","middle").text("Quantity");const G=[];for(const[t,y]of a[0].data.map(K=>K.date).entries())G.push({group:g(new Date(y)),"logged in":a[0].data[t].value,anonymous:a[1].data[t].value});const W=a.map(t=>t.name),I=A().domain(W).range(a.map(t=>t.class)),J=M().keys(W)(G);u.append("g").selectAll("g").data(J).join("g").attr("class",function(t){return I(t.key)}).selectAll("rect").data(t=>t).join("rect").attr("x",t=>b(t.data.group)).attr("y",function(t){return t[0]===0?p(t[1])+l:p(t[1])}).attr("height",function(t){return t[0]===0?p(t[0])-p(t[1])-l:p(t[0])-p(t[1])}).attr("width",b.bandwidth()).on("mouseover",f.show).on("mouseout",f.hide)}k(N,"render")}}});
//# sourceMappingURL=chunk-discussion-page-views-2eeb3449.js.map