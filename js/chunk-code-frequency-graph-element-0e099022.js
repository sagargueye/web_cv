System.register(["./chunk-vendor.js","./chunk-linear.js","./chunk-time.js","./chunk-frameworks.js","./chunk-format-symbol.js","./chunk-min.js","./chunk-axis.js","./chunk-array.js","./chunk-area.js","./chunk-line.js"],function(){"use strict";var w,y,x,k,j,b,D,A,E,L,_,$,F,f,P;return{setters:[function(e){w=e.t,y=e.c},function(e){x=e.A,k=e.m,j=e.l,b=e.s},function(e){D=e.s},function(e){A=e.m,E=e.aT},function(e){L=e.f},function(e){_=e.m},function(e){$=e.a,F=e.b},function(e){f=e.t},function(e){P=e.d},function(){}],execute:function(){var e=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,h=(r,n)=>e(r,"name",{value:n,configurable:!0}),C=(r,n,a,i)=>{for(var s=i>1?void 0:i?Y(n,a):n,c=r.length-1,o;c>=0;c--)(o=r[c])&&(s=(i?o(n,a,s):o(s))||s);return i&&s&&e(n,a,s),s};const R=A(M);async function M(r){return await(await E(r,{headers:{accept:"application/json"}})).json()}h(M,"fetchData");let u=class extends HTMLElement{async connectedCallback(){const r=this.graph,n=r.getAttribute("data-url");if(!!n){for(const a of r.querySelectorAll("svg.viz"))a.remove();r.classList.add("is-graph-loading"),r.classList.remove("is-graph-load-error","is-graph-empty");try{const a=await R(n);r.classList.remove("is-graph-loading"),a!=null&&a.unusable?r.classList.add("is-graph-without-usable-data"):a!=null&&a.length===0||a!=null&&a.summary!=null&&a.summary.total===0||a[0]!=null&&a[0].weeks!=null&&a[0].weeks.length===0?r.classList.add("is-graph-empty"):S(r,a)}catch(a){throw r.classList.remove("is-graph-loading"),r.classList.add("is-graph-load-error"),a}}}};h(u,"CodeFrequencyGraphElement"),C([w],u.prototype,"graph",2),u=C([y],u);function S(r,n){const a=Math.round(r.getBoundingClientRect().width),i=500,[s,c,o,q]=[10,10,20,40],l=n.map(t=>[new Date(t[0]*1e3),t[1],t[2]]).sort((t,v)=>x(t[0],v[0])),z=l.map(t=>[t[0],t[1]]),O=l.map(t=>[t[0],t[2]]),B=k(z,t=>t[1]),G=_(O,t=>t[1]);if(!B||!G)throw new Error("Graph has no valid max or min values");const p=l[0][0],m=l[l.length-1][0],T=D().domain([p,m]).range([0,a-q-c]),d=j().domain([G,B]).range([i-o-s,0]),H=$(T).tickFormat(t=>{if(!(t instanceof Date))throw new Error("invariant");if(!(p instanceof Date))throw new Error("invariant");if(!(m instanceof Date))throw new Error("invariant");return p.getFullYear()!==m.getFullYear()?f("%m/%y")(t):f("%m/%d")(t)}),I=F(d).tickPadding(5).tickSize(a).tickFormat(t=>{if(typeof t!="number")throw new Error("invariant");return L(Math.abs(t))}),J=P().x(t=>T(t[0])).y0(t=>d(t[1])).y1(()=>d(0)),g=b(r).append("svg").attr("viewBox",`0 0 ${a} ${i}`).attr("preserveAspectRatio","xMinYMin meet").attr("class","viz code-frequency").append("g").attr("transform",`translate(${q},${s})`);g.append("g").attr("class","x axis").attr("transform",`translate(0, ${i-s-o})`).call(H).selectAll(".tick text").attr("fill","#6a737d"),g.append("g").attr("class","y axis").attr("transform",`translate(${a}, 0)`).call(I).selectAll(".tick text").attr("fill","#6a737d"),g.selectAll("path.area").data([z,O]).enter().append("path").attr("class",(t,v)=>v===0?"addition":"deletion").attr("d",J)}h(S,"render")}}});
//# sourceMappingURL=chunk-code-frequency-graph-element-7620c14e.js.map
