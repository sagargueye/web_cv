System.register([],function(j){"use strict";return{execute:function(){j("p",z);var k=Object.defineProperty,d=(e,n)=>k(e,"name",{value:n,configurable:!0});const h=Math.random,m=Math.cos,$=Math.sin,T=Math.PI,q=T*2,A=40,w=3,C=12-w,D=10,x=100,v=-.1,F=-v-v,H=.13,O=.18,b=.4,S=.7-b;let g,M;const p=[],P=["#6a737d","#0366d6","#28a745","#ffd33d","#f66a0a","#6f42c1","#ea4aaa"];function X(){const e=Math.floor(Math.random()*P.length);return P[e]}d(X,"colorTheme");function Y(e,n,o){return(1-m(T*o))/2*(n-e)+e}d(Y,"interpolation");const u=1/D,W=u+u;function I(){const e=[u,1-u];let n=1-W;const o=[0,1];for(;n;){let i=n*h(),t,s,a,c,r;for(t=0,s=e.length,n=0;t<s;t+=2){if(c=e[t],r=e[t+1],a=r-c,i<n+a){const E=i+c-n;o.push(E),i=E;break}n+=a}const f=i-u,y=i+u;for(t=e.length-1;t>0;t-=2)s=t-1,c=e[s],r=e[t],c>=f&&c<y?r>y?e[s]=y:e.splice(s,2):c<f&&r>f&&(r<=y?e[t]=f:e.splice(t,0,f,y));for(t=0,s=e.length,n=0;t<s;t+=2)n+=e[t+1]-e[t]}return o.sort()}d(I,"createPoisson");const l=document.createElement("div");l.style.position="fixed",l.style.top="0",l.style.left="0",l.style.width="100%",l.style.height="0",l.style.overflow="visible",l.style.zIndex="9999";class _{constructor(n){this.frame=0,this.outer=document.createElement("div"),this.inner=document.createElement("div"),this.outer.appendChild(this.inner),this.outer.style.position="absolute",this.outer.style.width=`${w+C*h()}px`,this.outer.style.height=`${w+C*h()}px`,this.inner.style.width="100%",this.inner.style.height="100%",this.inner.style.backgroundColor=n(),this.outer.style.perspective="50px",this.outer.style.transform=`rotate(${360*h()}deg)`,this.theta=360*h(),this.axis=`rotate3D(${m(360*h())},${m(360*h())},0,`,this.inner.style.transform=`${this.axis}${this.theta}deg)`,this.dTheta=b+S*h(),this.x=window.innerWidth*h(),this.y=-x,this.dx=$(v+F*h()),this.dy=H+O*h(),this.outer.style.left=`${this.x}px`,this.outer.style.top=`${this.y}px`,this.splineX=I(),this.splineY=[];const o=this.splineX.length-1;for(let i=1;i<o;++i)this.splineY[i]=x*h();this.splineY[0]=this.splineY[o]=x*h()}update(n,o){this.frame+=o,this.x+=this.dx*o,this.y+=this.dy*o,this.theta+=this.dTheta*o;let i=this.frame%7777/7777,t=0,s=1;for(;i>=this.splineX[s];)t=s++;const a=Y(this.splineY[t],this.splineY[s],(i-this.splineX[t])/(this.splineX[s]-this.splineX[t]));return i*=q,this.inner.style.transform=`${this.axis}${this.theta}deg)`,this.outer.style.left=`${this.x+a*m(i)}px`,this.outer.style.top=`${this.y+a*$(i)}px`,this.y>n+x}}d(_,"Confetto");function z(e){const n=e==null?5e3:e;if(!M){document.body.appendChild(l);const o=d(()=>{const s=new _(X);p.push(s),l.appendChild(s.outer),g=window.setTimeout(o,A*h())},"addConfetto");o();let i;const t=d(s=>{const a=i?s-i:0;i=s;const c=window.innerHeight;for(let r=p.length-1;r>=0;--r)p[r].update(c,a)&&(l.removeChild(p[r].outer),p.splice(r,1));if(g||p.length){M=requestAnimationFrame(t);return}document.body.removeChild(l),M=void 0},"loop");window.setTimeout(function(){clearTimeout(g),g=void 0},n),requestAnimationFrame(t)}}d(z,"poof")}}});
//# sourceMappingURL=chunk-confetti-73bf889b.js.map