System.register(["./chunk-linear.js"],function(mt){"use strict";var g,P,z,b,$,tt,nt,rt,E,A;return{setters:[function(p){g=p.n,P=p.o,z=p.p,b=p.q,$=p.r,tt=p.u,nt=p.v,rt=p.w,E=p.j,A=p.x}],execute:function(){mt({d:L,i:wt,t:dt});var p=180/Math.PI,G={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function et(t,n,r,e,i,a){var o,c,l;return(o=Math.sqrt(t*t+n*n))&&(t/=o,n/=o),(l=t*r+n*e)&&(r-=t*l,e-=n*l),(c=Math.sqrt(r*r+e*e))&&(r/=c,e/=c,l/=c),t*e<n*r&&(t=-t,n=-n,l=-l,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(n,t)*p,skewX:Math.atan(l)*p,scaleX:o,scaleY:c}}var k,H,it,I;function xt(t){return t==="none"?G:(k||(k=document.createElement("DIV"),H=document.documentElement,it=document.defaultView),k.style.transform=t,t=it.getComputedStyle(H.appendChild(k),null).getPropertyValue("transform"),H.removeChild(k),t=t.slice(7,-1).split(","),et(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}function Tt(t){return t==null||(I||(I=document.createElementNS("http://www.w3.org/2000/svg","g")),I.setAttribute("transform",t),!(t=I.transform.baseVal.consolidate()))?G:(t=t.matrix,et(t.a,t.b,t.c,t.d,t.e,t.f))}function ot(t,n,r,e){function i(s){return s.length?s.pop()+" ":""}function a(s,u,f,h,_,x){if(s!==f||u!==h){var w=_.push("translate(",null,n,null,r);x.push({i:w-4,x:g(s,f)},{i:w-2,x:g(u,h)})}else(f||h)&&_.push("translate("+f+n+h+r)}function o(s,u,f,h){s!==u?(s-u>180?u+=360:u-s>180&&(s+=360),h.push({i:f.push(i(f)+"rotate(",null,e)-2,x:g(s,u)})):u&&f.push(i(f)+"rotate("+u+e)}function c(s,u,f,h){s!==u?h.push({i:f.push(i(f)+"skewX(",null,e)-2,x:g(s,u)}):u&&f.push(i(f)+"skewX("+u+e)}function l(s,u,f,h,_,x){if(s!==f||u!==h){var w=_.push(i(_)+"scale(",null,",",null,")");x.push({i:w-4,x:g(s,f)},{i:w-2,x:g(u,h)})}else(f!==1||h!==1)&&_.push(i(_)+"scale("+f+","+h+")")}return function(s,u){var f=[],h=[];return s=t(s),u=t(u),a(s.translateX,s.translateY,u.translateX,u.translateY,f,h),o(s.rotate,u.rotate,f,h),c(s.skewX,u.skewX,f,h),l(s.scaleX,s.scaleY,u.scaleX,u.scaleY,f,h),s=u=null,function(_){for(var x=-1,w=h.length,q;++x<w;)f[(q=h[x]).i]=q.x(_);return f.join("")}}}var Et=ot(xt,"px, ","px)","deg)"),At=ot(Tt,", ",")",")"),Nt={value:function(){}};function L(){for(var t=0,n=arguments.length,r={},e;t<n;++t){if(!(e=arguments[t]+"")||e in r)throw new Error("illegal type: "+e);r[e]=[]}return new F(r)}function F(t){this._=t}function kt(t,n){return t.trim().split(/^|\s+/).map(function(r){var e="",i=r.indexOf(".");if(i>=0&&(e=r.slice(i+1),r=r.slice(0,i)),r&&!n.hasOwnProperty(r))throw new Error("unknown type: "+r);return{type:r,name:e}})}F.prototype=L.prototype={constructor:F,on:function(t,n){var r=this._,e=kt(t+"",r),i,a=-1,o=e.length;if(arguments.length<2){for(;++a<o;)if((i=(t=e[a]).type)&&(i=St(r[i],t.name)))return i;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++a<o;)if(i=(t=e[a]).type)r[i]=at(r[i],t.name,n);else if(n==null)for(i in r)r[i]=at(r[i],t.name,null);return this},copy:function(){var t={},n=this._;for(var r in n)t[r]=n[r].slice();return new F(t)},call:function(t,n){if((i=arguments.length-2)>0)for(var r=new Array(i),e=0,i,a;e<i;++e)r[e]=arguments[e+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=this._[t],e=0,i=a.length;e<i;++e)a[e].value.apply(n,r)},apply:function(t,n,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var e=this._[t],i=0,a=e.length;i<a;++i)e[i].value.apply(n,r)}};function St(t,n){for(var r=0,e=t.length,i;r<e;++r)if((i=t[r]).name===n)return i.value}function at(t,n,r){for(var e=0,i=t.length;e<i;++e)if(t[e].name===n){t[e]=Nt,t=t.slice(0,e).concat(t.slice(e+1));break}return r!=null&&t.push({name:n,value:r}),t}var N=0,S=0,C=0,st=1e3,D,X,R=0,m=0,U=0,B=typeof performance=="object"&&performance.now?performance:Date,ut=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function J(){return m||(ut(Ct),m=B.now()+U)}function Ct(){m=0}function V(){this._call=this._time=this._next=null}V.prototype=lt.prototype={constructor:V,restart:function(t,n,r){if(typeof t!="function")throw new TypeError("callback is not a function");r=(r==null?J():+r)+(n==null?0:+n),!this._next&&X!==this&&(X?X._next=this:D=this,X=this),this._call=t,this._time=r,K()},stop:function(){this._call&&(this._call=null,this._time=1/0,K())}};function lt(t,n,r){var e=new V;return e.restart(t,n,r),e}function Xt(){J(),++N;for(var t=D,n;t;)(n=m-t._time)>=0&&t._call.call(null,n),t=t._next;--N}function ct(){m=(R=B.now())+U,N=S=0;try{Xt()}finally{N=0,Ft(),m=0}}function It(){var t=B.now(),n=t-R;n>st&&(U-=n,R=t)}function Ft(){for(var t,n=D,r,e=1/0;n;)n._call?(e>n._time&&(e=n._time),t=n,n=n._next):(r=n._next,n._next=null,n=t?t._next=r:D=r);X=t,K(e)}function K(t){if(!N){S&&(S=clearTimeout(S));var n=t-m;n>24?(t<1/0&&(S=setTimeout(ct,n)),C&&(C=clearInterval(C))):(C||(R=m,C=setInterval(It,st)),N=1,ut(ct))}}function ft(t,n,r){var e=new V;return n=n==null?0:+n,e.restart(function(i){e.stop(),t(i+n)},n,r),e}var Dt=L("start","end","cancel","interrupt"),Rt=[],ht=0,_t=1,Q=2,Y=3,pt=4,W=5,M=6;function O(t,n,r,e,i,a){var o=t.__transition;if(!o)t.__transition={};else if(r in o)return;Vt(t,r,{name:n,index:e,group:i,on:Dt,tween:Rt,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:ht})}function Z(t,n){var r=v(t,n);if(r.state>ht)throw new Error("too late; already scheduled");return r}function y(t,n){var r=v(t,n);if(r.state>Y)throw new Error("too late; already running");return r}function v(t,n){var r=t.__transition;if(!r||!(r=r[n]))throw new Error("transition not found");return r}function Vt(t,n,r){var e=t.__transition,i;e[n]=r,r.timer=lt(a,0,r.time);function a(s){r.state=_t,r.timer.restart(o,r.delay,r.time),r.delay<=s&&o(s-r.delay)}function o(s){var u,f,h,_;if(r.state!==_t)return l();for(u in e)if(_=e[u],_.name===r.name){if(_.state===Y)return ft(o);_.state===pt?(_.state=M,_.timer.stop(),_.on.call("interrupt",t,t.__data__,_.index,_.group),delete e[u]):+u<n&&(_.state=M,_.timer.stop(),_.on.call("cancel",t,t.__data__,_.index,_.group),delete e[u])}if(ft(function(){r.state===Y&&(r.state=pt,r.timer.restart(c,r.delay,r.time),c(s))}),r.state=Q,r.on.call("start",t,t.__data__,r.index,r.group),r.state===Q){for(r.state=Y,i=new Array(h=r.tween.length),u=0,f=-1;u<h;++u)(_=r.tween[u].value.call(t,t.__data__,r.index,r.group))&&(i[++f]=_);i.length=f+1}}function c(s){for(var u=s<r.duration?r.ease.call(null,s/r.duration):(r.timer.restart(l),r.state=W,1),f=-1,h=i.length;++f<h;)i[f].call(t,u);r.state===W&&(r.on.call("end",t,t.__data__,r.index,r.group),l())}function l(){r.state=M,r.timer.stop(),delete e[n];for(var s in e)return;delete t.__transition}}function wt(t,n){var r=t.__transition,e,i,a=!0,o;if(!!r){n=n==null?null:n+"";for(o in r){if((e=r[o]).name!==n){a=!1;continue}i=e.state>Q&&e.state<W,e.state=M,e.timer.stop(),e.on.call(i?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete r[o]}a&&delete t.__transition}}function Yt(t){return this.each(function(){wt(this,t)})}function Mt(t,n){var r,e;return function(){var i=y(this,t),a=i.tween;if(a!==r){e=r=a;for(var o=0,c=e.length;o<c;++o)if(e[o].name===n){e=e.slice(),e.splice(o,1);break}}i.tween=e}}function Ot(t,n,r){var e,i;if(typeof r!="function")throw new Error;return function(){var a=y(this,t),o=a.tween;if(o!==e){i=(e=o).slice();for(var c={name:n,value:r},l=0,s=i.length;l<s;++l)if(i[l].name===n){i[l]=c;break}l===s&&i.push(c)}a.tween=i}}function qt(t,n){var r=this._id;if(t+="",arguments.length<2){for(var e=v(this.node(),r).tween,i=0,a=e.length,o;i<a;++i)if((o=e[i]).name===t)return o.value;return null}return this.each((n==null?Mt:Ot)(r,t,n))}function j(t,n,r){var e=t._id;return t.each(function(){var i=y(this,e);(i.value||(i.value={}))[n]=r.apply(this,arguments)}),function(i){return v(i,e).value[n]}}function vt(t,n){var r;return(typeof n=="number"?g:n instanceof P?z:(r=P(n))?(n=r,z):b)(t,n)}function Pt(t){return function(){this.removeAttribute(t)}}function zt(t){return function(){this.removeAttributeNS(t.space,t.local)}}function $t(t,n,r){var e,i=r+"",a;return function(){var o=this.getAttribute(t);return o===i?null:o===e?a:a=n(e=o,r)}}function Gt(t,n,r){var e,i=r+"",a;return function(){var o=this.getAttributeNS(t.space,t.local);return o===i?null:o===e?a:a=n(e=o,r)}}function Ht(t,n,r){var e,i,a;return function(){var o,c=r(this),l;return c==null?void this.removeAttribute(t):(o=this.getAttribute(t),l=c+"",o===l?null:o===e&&l===i?a:(i=l,a=n(e=o,c)))}}function Lt(t,n,r){var e,i,a;return function(){var o,c=r(this),l;return c==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),l=c+"",o===l?null:o===e&&l===i?a:(i=l,a=n(e=o,c)))}}function Ut(t,n){var r=$(t),e=r==="transform"?At:vt;return this.attrTween(t,typeof n=="function"?(r.local?Lt:Ht)(r,e,j(this,"attr."+t,n)):n==null?(r.local?zt:Pt)(r):(r.local?Gt:$t)(r,e,n))}function Bt(t,n){return function(r){this.setAttribute(t,n.call(this,r))}}function Jt(t,n){return function(r){this.setAttributeNS(t.space,t.local,n.call(this,r))}}function Kt(t,n){var r,e;function i(){var a=n.apply(this,arguments);return a!==e&&(r=(e=a)&&Jt(t,a)),r}return i._value=n,i}function Qt(t,n){var r,e;function i(){var a=n.apply(this,arguments);return a!==e&&(r=(e=a)&&Bt(t,a)),r}return i._value=n,i}function Wt(t,n){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;var e=$(t);return this.tween(r,(e.local?Kt:Qt)(e,n))}function Zt(t,n){return function(){Z(this,t).delay=+n.apply(this,arguments)}}function jt(t,n){return n=+n,function(){Z(this,t).delay=n}}function bt(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?Zt:jt)(n,t)):v(this.node(),n).delay}function tn(t,n){return function(){y(this,t).duration=+n.apply(this,arguments)}}function nn(t,n){return n=+n,function(){y(this,t).duration=n}}function rn(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?tn:nn)(n,t)):v(this.node(),n).duration}function en(t,n){if(typeof n!="function")throw new Error;return function(){y(this,t).ease=n}}function on(t){var n=this._id;return arguments.length?this.each(en(n,t)):v(this.node(),n).ease}function an(t,n){return function(){var r=n.apply(this,arguments);if(typeof r!="function")throw new Error;y(this,t).ease=r}}function sn(t){if(typeof t!="function")throw new Error;return this.each(an(this._id,t))}function un(t){typeof t!="function"&&(t=tt(t));for(var n=this._groups,r=n.length,e=new Array(r),i=0;i<r;++i)for(var a=n[i],o=a.length,c=e[i]=[],l,s=0;s<o;++s)(l=a[s])&&t.call(l,l.__data__,s,a)&&c.push(l);return new d(e,this._parents,this._name,this._id)}function ln(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,r=t._groups,e=n.length,i=r.length,a=Math.min(e,i),o=new Array(e),c=0;c<a;++c)for(var l=n[c],s=r[c],u=l.length,f=o[c]=new Array(u),h,_=0;_<u;++_)(h=l[_]||s[_])&&(f[_]=h);for(;c<e;++c)o[c]=n[c];return new d(o,this._parents,this._name,this._id)}function cn(t){return(t+"").trim().split(/^|\s+/).every(function(n){var r=n.indexOf(".");return r>=0&&(n=n.slice(0,r)),!n||n==="start"})}function fn(t,n,r){var e,i,a=cn(n)?Z:y;return function(){var o=a(this,t),c=o.on;c!==e&&(i=(e=c).copy()).on(n,r),o.on=i}}function hn(t,n){var r=this._id;return arguments.length<2?v(this.node(),r).on.on(t):this.each(fn(r,t,n))}function _n(t){return function(){var n=this.parentNode;for(var r in this.__transition)if(+r!==t)return;n&&n.removeChild(this)}}function pn(){return this.on("end.remove",_n(this._id))}function wn(t){var n=this._name,r=this._id;typeof t!="function"&&(t=nt(t));for(var e=this._groups,i=e.length,a=new Array(i),o=0;o<i;++o)for(var c=e[o],l=c.length,s=a[o]=new Array(l),u,f,h=0;h<l;++h)(u=c[h])&&(f=t.call(u,u.__data__,h,c))&&("__data__"in u&&(f.__data__=u.__data__),s[h]=f,O(s[h],n,r,h,s,v(u,r)));return new d(a,this._parents,n,r)}function vn(t){var n=this._name,r=this._id;typeof t!="function"&&(t=rt(t));for(var e=this._groups,i=e.length,a=[],o=[],c=0;c<i;++c)for(var l=e[c],s=l.length,u,f=0;f<s;++f)if(u=l[f]){for(var h=t.call(u,u.__data__,f,l),_,x=v(u,r),w=0,q=h.length;w<q;++w)(_=h[w])&&O(_,n,r,w,h,x);a.push(h),o.push(u)}return new d(a,o,n,r)}var yn=E.prototype.constructor;function dn(){return new yn(this._groups,this._parents)}function gn(t,n){var r,e,i;return function(){var a=A(this,t),o=(this.style.removeProperty(t),A(this,t));return a===o?null:a===r&&o===e?i:i=n(r=a,e=o)}}function yt(t){return function(){this.style.removeProperty(t)}}function mn(t,n,r){var e,i=r+"",a;return function(){var o=A(this,t);return o===i?null:o===e?a:a=n(e=o,r)}}function xn(t,n,r){var e,i,a;return function(){var o=A(this,t),c=r(this),l=c+"";return c==null&&(l=c=(this.style.removeProperty(t),A(this,t))),o===l?null:o===e&&l===i?a:(i=l,a=n(e=o,c))}}function Tn(t,n){var r,e,i,a="style."+n,o="end."+a,c;return function(){var l=y(this,t),s=l.on,u=l.value[a]==null?c||(c=yt(n)):void 0;(s!==r||i!==u)&&(e=(r=s).copy()).on(o,i=u),l.on=e}}function En(t,n,r){var e=(t+="")=="transform"?Et:vt;return n==null?this.styleTween(t,gn(t,e)).on("end.style."+t,yt(t)):typeof n=="function"?this.styleTween(t,xn(t,e,j(this,"style."+t,n))).each(Tn(this._id,t)):this.styleTween(t,mn(t,e,n),r).on("end.style."+t,null)}function An(t,n,r){return function(e){this.style.setProperty(t,n.call(this,e),r)}}function Nn(t,n,r){var e,i;function a(){var o=n.apply(this,arguments);return o!==i&&(e=(i=o)&&An(t,o,r)),e}return a._value=n,a}function kn(t,n,r){var e="style."+(t+="");if(arguments.length<2)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;return this.tween(e,Nn(t,n,r==null?"":r))}function Sn(t){return function(){this.textContent=t}}function Cn(t){return function(){var n=t(this);this.textContent=n==null?"":n}}function Xn(t){return this.tween("text",typeof t=="function"?Cn(j(this,"text",t)):Sn(t==null?"":t+""))}function In(t){return function(n){this.textContent=t.call(this,n)}}function Fn(t){var n,r;function e(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&In(i)),n}return e._value=t,e}function Dn(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,Fn(t))}function Rn(){for(var t=this._name,n=this._id,r=gt(),e=this._groups,i=e.length,a=0;a<i;++a)for(var o=e[a],c=o.length,l,s=0;s<c;++s)if(l=o[s]){var u=v(l,n);O(l,t,r,s,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new d(e,this._parents,t,r)}function Vn(){var t,n,r=this,e=r._id,i=r.size();return new Promise(function(a,o){var c={value:o},l={value:function(){--i===0&&a()}};r.each(function(){var s=y(this,e),u=s.on;u!==t&&(n=(t=u).copy(),n._.cancel.push(c),n._.interrupt.push(c),n._.end.push(l)),s.on=n}),i===0&&a()})}var Yn=0;function d(t,n,r,e){this._groups=t,this._parents=n,this._name=r,this._id=e}function dt(t){return E().transition(t)}function gt(){return++Yn}var T=E.prototype;d.prototype=dt.prototype={constructor:d,select:wn,selectAll:vn,filter:un,merge:ln,selection:dn,transition:Rn,call:T.call,nodes:T.nodes,node:T.node,size:T.size,empty:T.empty,each:T.each,on:hn,attr:Ut,attrTween:Wt,style:En,styleTween:kn,text:Xn,textTween:Dn,remove:pn,tween:qt,delay:bt,duration:rn,ease:on,easeVarying:sn,end:Vn,[Symbol.iterator]:T[Symbol.iterator]};function Mn(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var On={time:null,delay:0,duration:250,ease:Mn};function qn(t,n){for(var r;!(r=t.__transition)||!(r=r[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return r}function Pn(t){var n,r;t instanceof d?(n=t._id,t=t._name):(n=gt(),(r=On).time=J(),t=t==null?null:t+"");for(var e=this._groups,i=e.length,a=0;a<i;++a)for(var o=e[a],c=o.length,l,s=0;s<c;++s)(l=o[s])&&O(l,t,n,s,o,r||qn(l,n));return new d(e,this._parents,t,n)}E.prototype.interrupt=Yt,E.prototype.transition=Pn}}});
//# sourceMappingURL=chunk-index7-07f9e540.js.map