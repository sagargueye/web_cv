System.register(["./chunk-line.js","./chunk-array.js"],function(Y){"use strict";var x,y,E,w,z,A,u;return{setters:[function(o){x=o.l,y=o.c,E=o.x,w=o.y,z=o.p},function(o){A=o.e,u=o.f}],execute:function(){Y("d",o);function o(i,f,l){var a=null,h=u(!0),c=null,g=y,r=null;i=typeof i=="function"?i:i===void 0?E:u(+i),f=typeof f=="function"?f:u(f===void 0?0:+f),l=typeof l=="function"?l:l===void 0?w:u(+l);function e(n){var t,X,s,d=(n=A(n)).length,p,v=!1,S,j=new Array(d),k=new Array(d);for(c==null&&(r=g(S=z())),t=0;t<=d;++t){if(!(t<d&&h(p=n[t],t,n))===v)if(v=!v)X=t,r.areaStart(),r.lineStart();else{for(r.lineEnd(),r.lineStart(),s=t-1;s>=X;--s)r.point(j[s],k[s]);r.lineEnd(),r.areaEnd()}v&&(j[t]=+i(p,t,n),k[t]=+f(p,t,n),r.point(a?+a(p,t,n):j[t],l?+l(p,t,n):k[t]))}if(S)return r=null,S+""||null}function m(){return x().defined(h).curve(g).context(c)}return e.x=function(n){return arguments.length?(i=typeof n=="function"?n:u(+n),a=null,e):i},e.x0=function(n){return arguments.length?(i=typeof n=="function"?n:u(+n),e):i},e.x1=function(n){return arguments.length?(a=n==null?null:typeof n=="function"?n:u(+n),e):a},e.y=function(n){return arguments.length?(f=typeof n=="function"?n:u(+n),l=null,e):f},e.y0=function(n){return arguments.length?(f=typeof n=="function"?n:u(+n),e):f},e.y1=function(n){return arguments.length?(l=n==null?null:typeof n=="function"?n:u(+n),e):l},e.lineX0=e.lineY0=function(){return m().x(i).y(f)},e.lineY1=function(){return m().x(i).y(l)},e.lineX1=function(){return m().x(a).y(f)},e.defined=function(n){return arguments.length?(h=typeof n=="function"?n:u(!!n),e):h},e.curve=function(n){return arguments.length?(g=n,c!=null&&(r=g(c)),e):g},e.context=function(n){return arguments.length?(n==null?c=r=null:r=g(c=n),e):c},e}}}});
//# sourceMappingURL=chunk-area-4f34ac62.js.map