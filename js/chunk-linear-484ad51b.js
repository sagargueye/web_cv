System.register([],function(P){"use strict";return{execute:function(){P({A:sn,B:tn,C:Dt,D:yn,S:m,a:$t,b:cn,c:bt,d:L,e:Mt,f:void 0,h:Ln,i:Qn,j:Jn,k:void 0,l:zt,m:Ot,n:Z,o:H,q:xt,r:pn,s:wr,t:_t,u:Dn,v:mn,w:Bn,x:Vn,y:wn});function sn(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function cn(n){let t=n,e=n;n.length===1&&(t=(a,u)=>n(a)-u,e=It(n));function r(a,u,o,s){for(o==null&&(o=0),s==null&&(s=a.length);o<s;){const c=o+s>>>1;e(a[c],u)<0?o=c+1:s=c}return o}function i(a,u,o,s){for(o==null&&(o=0),s==null&&(s=a.length);o<s;){const c=o+s>>>1;e(a[c],u)>0?s=c:o=c+1}return o}function f(a,u,o,s){o==null&&(o=0),s==null&&(s=a.length);const c=r(a,u,o,s-1);return c>o&&t(a[c-1],u)>-t(a[c],u)?c-1:c}return{left:r,center:f,right:i}}function It(n){return(t,e)=>sn(n(t),e)}function Bt(n){return n===null?NaN:+n}function*Dt(n,t){if(t===void 0)for(let e of n)e!=null&&(e=+e)>=e&&(yield e);else{let e=-1;for(let r of n)(r=t(r,++e,n))!=null&&(r=+r)>=r&&(yield r)}}const Tt=cn(sn).right;cn(Bt).center;var ln=Math.sqrt(50),hn=Math.sqrt(10),dn=Math.sqrt(2);function Ht(n,t,e){var r,i=-1,f,a,u;if(t=+t,n=+n,e=+e,n===t&&e>0)return[n];if((r=t<n)&&(f=n,n=t,t=f),(u=J(n,t,e))===0||!isFinite(u))return[];if(u>0)for(n=Math.ceil(n/u),t=Math.floor(t/u),a=new Array(f=Math.ceil(t-n+1));++i<f;)a[i]=(n+i)*u;else for(u=-u,n=Math.ceil(n*u),t=Math.floor(t*u),a=new Array(f=Math.ceil(t-n+1));++i<f;)a[i]=(n+i)/u;return r&&a.reverse(),a}function J(n,t,e){var r=(t-n)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),f=r/Math.pow(10,i);return i>=0?(f>=ln?10:f>=hn?5:f>=dn?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(f>=ln?10:f>=hn?5:f>=dn?2:1)}function Ln(n,t,e){var r=Math.abs(t-n)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),f=r/i;return f>=ln?i*=10:f>=hn?i*=5:f>=dn&&(i*=2),t<n?-i:i}function Ot(n,t){let e;if(t===void 0)for(const r of n)r!=null&&(e<r||e===void 0&&r>=r)&&(e=r);else{let r=-1;for(let i of n)(i=t(i,++r,n))!=null&&(e<i||e===void 0&&i>=i)&&(e=i)}return e}var gn="http://www.w3.org/1999/xhtml",Fn={svg:"http://www.w3.org/2000/svg",xhtml:gn,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function pn(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),Fn.hasOwnProperty(t)?{space:Fn[t],local:n}:n}function Vt(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===gn&&t.documentElement.namespaceURI===gn?t.createElement(n):t.createElementNS(e,n)}}function Ut(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function In(n){var t=pn(n);return(t.local?Ut:Vt)(t)}function Xt(){}function mn(n){return n==null?Xt:function(){return this.querySelector(n)}}function Kt(n){typeof n!="function"&&(n=mn(n));for(var t=this._groups,e=t.length,r=new Array(e),i=0;i<e;++i)for(var f=t[i],a=f.length,u=r[i]=new Array(a),o,s,c=0;c<a;++c)(o=f[c])&&(s=n.call(o,o.__data__,c,f))&&("__data__"in o&&(s.__data__=o.__data__),u[c]=s);return new m(r,this._parents)}function yn(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function Yt(){return[]}function Bn(n){return n==null?Yt:function(){return this.querySelectorAll(n)}}function Zt(n){return function(){var t=n.apply(this,arguments);return t==null?[]:yn(t)}}function Gt(n){typeof n=="function"?n=Zt(n):n=Bn(n);for(var t=this._groups,e=t.length,r=[],i=[],f=0;f<e;++f)for(var a=t[f],u=a.length,o,s=0;s<u;++s)(o=a[s])&&(r.push(n.call(o,o.__data__,s,a)),i.push(o));return new m(r,i)}function Dn(n){return function(){return this.matches(n)}}function Tn(n){return function(t){return t.matches(n)}}var Jt=Array.prototype.find;function Qt(n){return function(){return Jt.call(this.children,n)}}function Wt(){return this.firstElementChild}function jt(n){return this.select(n==null?Wt:Qt(typeof n=="function"?n:Tn(n)))}var ne=Array.prototype.filter;function te(){return this.children}function ee(n){return function(){return ne.call(this.children,n)}}function re(n){return this.selectAll(n==null?te:ee(typeof n=="function"?n:Tn(n)))}function ie(n){typeof n!="function"&&(n=Dn(n));for(var t=this._groups,e=t.length,r=new Array(e),i=0;i<e;++i)for(var f=t[i],a=f.length,u=r[i]=[],o,s=0;s<a;++s)(o=f[s])&&n.call(o,o.__data__,s,f)&&u.push(o);return new m(r,this._parents)}function Hn(n){return new Array(n.length)}function ae(){return new m(this._enter||this._groups.map(Hn),this._parents)}function Q(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}Q.prototype={constructor:Q,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function fe(n){return function(){return n}}function ue(n,t,e,r,i,f){for(var a=0,u,o=t.length,s=f.length;a<s;++a)(u=t[a])?(u.__data__=f[a],r[a]=u):e[a]=new Q(n,f[a]);for(;a<o;++a)(u=t[a])&&(i[a]=u)}function oe(n,t,e,r,i,f,a){var u,o,s=new Map,c=t.length,l=f.length,h=new Array(c),g;for(u=0;u<c;++u)(o=t[u])&&(h[u]=g=a.call(o,o.__data__,u,t)+"",s.has(g)?i[u]=o:s.set(g,o));for(u=0;u<l;++u)g=a.call(n,f[u],u,f)+"",(o=s.get(g))?(r[u]=o,o.__data__=f[u],s.delete(g)):e[u]=new Q(n,f[u]);for(u=0;u<c;++u)(o=t[u])&&s.get(h[u])===o&&(i[u]=o)}function se(n){return n.__data__}function ce(n,t){if(!arguments.length)return Array.from(this,se);var e=t?oe:ue,r=this._parents,i=this._groups;typeof n!="function"&&(n=fe(n));for(var f=i.length,a=new Array(f),u=new Array(f),o=new Array(f),s=0;s<f;++s){var c=r[s],l=i[s],h=l.length,g=yn(n.call(c,c&&c.__data__,s,r)),y=g.length,R=u[s]=new Array(y),A=a[s]=new Array(y),F=o[s]=new Array(h);e(c,l,R,A,F,g,t);for(var k=0,v=0,G,x;k<y;++k)if(G=R[k]){for(k>=v&&(v=k+1);!(x=A[v])&&++v<y;);G._next=x||null}}return a=new m(a,r),a._enter=u,a._exit=o,a}function le(){return new m(this._exit||this._groups.map(Hn),this._parents)}function he(n,t,e){var r=this.enter(),i=this,f=this.exit();return r=typeof n=="function"?n(r):r.append(n+""),t!=null&&(i=t(i)),e==null?f.remove():e(f),r&&i?r.merge(i).order():i}function de(n){if(!(n instanceof m))throw new Error("invalid merge");for(var t=this._groups,e=n._groups,r=t.length,i=e.length,f=Math.min(r,i),a=new Array(r),u=0;u<f;++u)for(var o=t[u],s=e[u],c=o.length,l=a[u]=new Array(c),h,g=0;g<c;++g)(h=o[g]||s[g])&&(l[g]=h);for(;u<r;++u)a[u]=t[u];return new m(a,this._parents)}function ge(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var r=n[t],i=r.length-1,f=r[i],a;--i>=0;)(a=r[i])&&(f&&a.compareDocumentPosition(f)^4&&f.parentNode.insertBefore(a,f),f=a);return this}function pe(n){n||(n=me);function t(l,h){return l&&h?n(l.__data__,h.__data__):!l-!h}for(var e=this._groups,r=e.length,i=new Array(r),f=0;f<r;++f){for(var a=e[f],u=a.length,o=i[f]=new Array(u),s,c=0;c<u;++c)(s=a[c])&&(o[c]=s);o.sort(t)}return new m(i,this._parents).order()}function me(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function ye(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function xe(){return Array.from(this)}function we(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var r=n[t],i=0,f=r.length;i<f;++i){var a=r[i];if(a)return a}return null}function ve(){let n=0;for(const t of this)++n;return n}function be(){return!this.node()}function _e(n){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var i=t[e],f=0,a=i.length,u;f<a;++f)(u=i[f])&&n.call(u,u.__data__,f,i);return this}function Me(n){return function(){this.removeAttribute(n)}}function Ne(n){return function(){this.removeAttributeNS(n.space,n.local)}}function Ae(n,t){return function(){this.setAttribute(n,t)}}function ke(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function Se(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function Ee(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function Ce(n,t){var e=pn(n);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((t==null?e.local?Ne:Me:typeof t=="function"?e.local?Ee:Se:e.local?ke:Ae)(e,t))}function On(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function Re(n){return function(){this.style.removeProperty(n)}}function Pe(n,t,e){return function(){this.style.setProperty(n,t,e)}}function $e(n,t,e){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(n):this.style.setProperty(n,r,e)}}function ze(n,t,e){return arguments.length>1?this.each((t==null?Re:typeof t=="function"?$e:Pe)(n,t,e==null?"":e)):Vn(this.node(),n)}function Vn(n,t){return n.style.getPropertyValue(t)||On(n).getComputedStyle(n,null).getPropertyValue(t)}function qe(n){return function(){delete this[n]}}function Le(n,t){return function(){this[n]=t}}function Fe(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function Ie(n,t){return arguments.length>1?this.each((t==null?qe:typeof t=="function"?Fe:Le)(n,t)):this.node()[n]}function Un(n){return n.trim().split(/^|\s+/)}function xn(n){return n.classList||new Xn(n)}function Xn(n){this._node=n,this._names=Un(n.getAttribute("class")||"")}Xn.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function Kn(n,t){for(var e=xn(n),r=-1,i=t.length;++r<i;)e.add(t[r])}function Yn(n,t){for(var e=xn(n),r=-1,i=t.length;++r<i;)e.remove(t[r])}function Be(n){return function(){Kn(this,n)}}function De(n){return function(){Yn(this,n)}}function Te(n,t){return function(){(t.apply(this,arguments)?Kn:Yn)(this,n)}}function He(n,t){var e=Un(n+"");if(arguments.length<2){for(var r=xn(this.node()),i=-1,f=e.length;++i<f;)if(!r.contains(e[i]))return!1;return!0}return this.each((typeof t=="function"?Te:t?Be:De)(e,t))}function Oe(){this.textContent=""}function Ve(n){return function(){this.textContent=n}}function Ue(n){return function(){var t=n.apply(this,arguments);this.textContent=t==null?"":t}}function Xe(n){return arguments.length?this.each(n==null?Oe:(typeof n=="function"?Ue:Ve)(n)):this.node().textContent}function Ke(){this.innerHTML=""}function Ye(n){return function(){this.innerHTML=n}}function Ze(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t==null?"":t}}function Ge(n){return arguments.length?this.each(n==null?Ke:(typeof n=="function"?Ze:Ye)(n)):this.node().innerHTML}function Je(){this.nextSibling&&this.parentNode.appendChild(this)}function Qe(){return this.each(Je)}function We(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function je(){return this.each(We)}function nr(n){var t=typeof n=="function"?n:In(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function tr(){return null}function er(n,t){var e=typeof n=="function"?n:In(n),r=t==null?tr:typeof t=="function"?t:mn(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})}function rr(){var n=this.parentNode;n&&n.removeChild(this)}function ir(){return this.each(rr)}function ar(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function fr(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function ur(n){return this.select(n?fr:ar)}function or(n){return arguments.length?this.property("__data__",n):this.node().__data__}function sr(n){return function(t){n.call(this,t,this.__data__)}}function cr(n){return n.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}})}function lr(n){return function(){var t=this.__on;if(!!t){for(var e=0,r=-1,i=t.length,f;e<i;++e)f=t[e],(!n.type||f.type===n.type)&&f.name===n.name?this.removeEventListener(f.type,f.listener,f.options):t[++r]=f;++r?t.length=r:delete this.__on}}}function hr(n,t,e){return function(){var r=this.__on,i,f=sr(t);if(r){for(var a=0,u=r.length;a<u;++a)if((i=r[a]).type===n.type&&i.name===n.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=f,i.options=e),i.value=t;return}}this.addEventListener(n.type,f,e),i={type:n.type,name:n.name,value:t,listener:f,options:e},r?r.push(i):this.__on=[i]}}function dr(n,t,e){var r=cr(n+""),i,f=r.length,a;if(arguments.length<2){var u=this.node().__on;if(u){for(var o=0,s=u.length,c;o<s;++o)for(i=0,c=u[o];i<f;++i)if((a=r[i]).type===c.type&&a.name===c.name)return c.value}return}for(u=t?hr:lr,i=0;i<f;++i)this.each(u(r[i],t,e));return this}function Zn(n,t,e){var r=On(n),i=r.CustomEvent;typeof i=="function"?i=new i(t,e):(i=r.document.createEvent("Event"),e?(i.initEvent(t,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(t,!1,!1)),n.dispatchEvent(i)}function gr(n,t){return function(){return Zn(this,n,t)}}function pr(n,t){return function(){return Zn(this,n,t.apply(this,arguments))}}function mr(n,t){return this.each((typeof t=="function"?pr:gr)(n,t))}function*yr(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var r=n[t],i=0,f=r.length,a;i<f;++i)(a=r[i])&&(yield a)}var Gn=P("E",[null]);function m(n,t){this._groups=n,this._parents=t}function Jn(){return new m([[document.documentElement]],Gn)}function xr(){return this}m.prototype=Jn.prototype={constructor:m,select:Kt,selectAll:Gt,selectChild:jt,selectChildren:re,filter:ie,data:ce,enter:ae,exit:le,join:he,merge:de,selection:xr,order:ge,sort:pe,call:ye,nodes:xe,node:we,size:ve,empty:be,each:_e,attr:Ce,style:ze,property:Ie,classed:He,text:Xe,html:Ge,raise:Qe,lower:je,append:nr,insert:er,remove:ir,clone:ur,datum:or,on:dr,dispatch:mr,[Symbol.iterator]:yr};function wr(n){return typeof n=="string"?new m([[document.querySelector(n)]],[document.documentElement]):new m([[n]],Gn)}function Qn(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}var w="$";function W(){}W.prototype=wn.prototype={constructor:W,has:function(n){return w+n in this},get:function(n){return this[w+n]},set:function(n,t){return this[w+n]=t,this},remove:function(n){var t=w+n;return t in this&&delete this[t]},clear:function(){for(var n in this)n[0]===w&&delete this[n]},keys:function(){var n=[];for(var t in this)t[0]===w&&n.push(t.slice(1));return n},values:function(){var n=[];for(var t in this)t[0]===w&&n.push(this[t]);return n},entries:function(){var n=[];for(var t in this)t[0]===w&&n.push({key:t.slice(1),value:this[t]});return n},size:function(){var n=0;for(var t in this)t[0]===w&&++n;return n},empty:function(){for(var n in this)if(n[0]===w)return!1;return!0},each:function(n){for(var t in this)t[0]===w&&n(this[t],t.slice(1),this)}};function wn(n,t){var e=new W;if(n instanceof W)n.each(function(u,o){e.set(o,u)});else if(Array.isArray(n)){var r=-1,i=n.length,f;if(t==null)for(;++r<i;)e.set(r,n[r]);else for(;++r<i;)e.set(t(f=n[r],r,n),f)}else if(n)for(var a in n)e.set(a,n[a]);return e}function Wn(){}var $=wn.prototype;Wn.prototype={constructor:Wn,has:$.has,add:function(n){return n+="",this[w+n]=n,this},remove:$.remove,clear:$.clear,values:$.keys,size:$.size,empty:$.empty,each:$.each};var jn=Array.prototype,vr=P("g",jn.map),nt=P("z",jn.slice);function B(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function X(n,t){var e=Object.create(n.prototype);for(var r in t)e[r]=t[r];return e}function E(){}var z=.7,D=1/z,T="\\s*([+-]?\\d+)\\s*",K="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",_="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",br=/^#([0-9a-f]{3})$/,_r=/^#([0-9a-f]{6})$/,Mr=new RegExp("^rgb\\("+[T,T,T]+"\\)$"),Nr=new RegExp("^rgb\\("+[_,_,_]+"\\)$"),Ar=new RegExp("^rgba\\("+[T,T,T,K]+"\\)$"),kr=new RegExp("^rgba\\("+[_,_,_,K]+"\\)$"),Sr=new RegExp("^hsl\\("+[K,_,_]+"\\)$"),Er=new RegExp("^hsla\\("+[K,_,_,K]+"\\)$"),tt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};B(E,H,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function H(n){var t;return n=(n+"").trim().toLowerCase(),(t=br.exec(n))?(t=parseInt(t[1],16),new p(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1)):(t=_r.exec(n))?et(parseInt(t[1],16)):(t=Mr.exec(n))?new p(t[1],t[2],t[3],1):(t=Nr.exec(n))?new p(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Ar.exec(n))?rt(t[1],t[2],t[3],t[4]):(t=kr.exec(n))?rt(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Sr.exec(n))?it(t[1],t[2]/100,t[3]/100,1):(t=Er.exec(n))?it(t[1],t[2]/100,t[3]/100,t[4]):tt.hasOwnProperty(n)?et(tt[n]):n==="transparent"?new p(NaN,NaN,NaN,0):null}function et(n){return new p(n>>16&255,n>>8&255,n&255,1)}function rt(n,t,e,r){return r<=0&&(n=t=e=NaN),new p(n,t,e,r)}function vn(n){return n instanceof E||(n=H(n)),n?(n=n.rgb(),new p(n.r,n.g,n.b,n.opacity)):new p}function bn(n,t,e,r){return arguments.length===1?vn(n):new p(n,t,e,r==null?1:r)}function p(n,t,e,r){this.r=+n,this.g=+t,this.b=+e,this.opacity=+r}B(p,bn,X(E,{brighter:function(n){return n=n==null?D:Math.pow(D,n),new p(this.r*n,this.g*n,this.b*n,this.opacity)},darker:function(n){return n=n==null?z:Math.pow(z,n),new p(this.r*n,this.g*n,this.b*n,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var n=this.opacity;return n=isNaN(n)?1:Math.max(0,Math.min(1,n)),(n===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(n===1?")":", "+n+")")}}));function it(n,t,e,r){return r<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new M(n,t,e,r)}function Cr(n){if(n instanceof M)return new M(n.h,n.s,n.l,n.opacity);if(n instanceof E||(n=H(n)),!n)return new M;if(n instanceof M)return n;n=n.rgb();var t=n.r/255,e=n.g/255,r=n.b/255,i=Math.min(t,e,r),f=Math.max(t,e,r),a=NaN,u=f-i,o=(f+i)/2;return u?(t===f?a=(e-r)/u+(e<r)*6:e===f?a=(r-t)/u+2:a=(t-e)/u+4,u/=o<.5?f+i:2-f-i,a*=60):u=o>0&&o<1?0:a,new M(a,u,o,n.opacity)}function Rr(n,t,e,r){return arguments.length===1?Cr(n):new M(n,t,e,r==null?1:r)}function M(n,t,e,r){this.h=+n,this.s=+t,this.l=+e,this.opacity=+r}B(M,Rr,X(E,{brighter:function(n){return n=n==null?D:Math.pow(D,n),new M(this.h,this.s,this.l*n,this.opacity)},darker:function(n){return n=n==null?z:Math.pow(z,n),new M(this.h,this.s,this.l*n,this.opacity)},rgb:function(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*t,i=2*e-r;return new p(_n(n>=240?n-240:n+120,i,r),_n(n,i,r),_n(n<120?n+240:n-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function _n(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}var at=Math.PI/180,ft=180/Math.PI,j=18,ut=.95047,ot=1,st=1.08883,ct=4/29,O=6/29,lt=3*O*O,Pr=O*O*O;function Mn(n){if(n instanceof N)return new N(n.l,n.a,n.b,n.opacity);if(n instanceof C){var t=n.h*at;return new N(n.l,Math.cos(t)*n.c,Math.sin(t)*n.c,n.opacity)}n instanceof p||(n=vn(n));var e=Sn(n.r),r=Sn(n.g),i=Sn(n.b),f=Nn((.4124564*e+.3575761*r+.1804375*i)/ut),a=Nn((.2126729*e+.7151522*r+.072175*i)/ot),u=Nn((.0193339*e+.119192*r+.9503041*i)/st);return new N(116*a-16,500*(f-a),200*(a-u),n.opacity)}function $r(n,t,e,r){return arguments.length===1?Mn(n):new N(n,t,e,r==null?1:r)}function N(n,t,e,r){this.l=+n,this.a=+t,this.b=+e,this.opacity=+r}B(N,$r,X(E,{brighter:function(n){return new N(this.l+j*(n==null?1:n),this.a,this.b,this.opacity)},darker:function(n){return new N(this.l-j*(n==null?1:n),this.a,this.b,this.opacity)},rgb:function(){var n=(this.l+16)/116,t=isNaN(this.a)?n:n+this.a/500,e=isNaN(this.b)?n:n-this.b/200;return n=ot*An(n),t=ut*An(t),e=st*An(e),new p(kn(3.2404542*t-1.5371385*n-.4985314*e),kn(-.969266*t+1.8760108*n+.041556*e),kn(.0556434*t-.2040259*n+1.0572252*e),this.opacity)}}));function Nn(n){return n>Pr?Math.pow(n,1/3):n/lt+ct}function An(n){return n>O?n*n*n:lt*(n-ct)}function kn(n){return 255*(n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055)}function Sn(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function zr(n){if(n instanceof C)return new C(n.h,n.c,n.l,n.opacity);n instanceof N||(n=Mn(n));var t=Math.atan2(n.b,n.a)*ft;return new C(t<0?t+360:t,Math.sqrt(n.a*n.a+n.b*n.b),n.l,n.opacity)}function qr(n,t,e,r){return arguments.length===1?zr(n):new C(n,t,e,r==null?1:r)}function C(n,t,e,r){this.h=+n,this.c=+t,this.l=+e,this.opacity=+r}B(C,qr,X(E,{brighter:function(n){return new C(this.h,this.c,this.l+j*(n==null?1:n),this.opacity)},darker:function(n){return new C(this.h,this.c,this.l-j*(n==null?1:n),this.opacity)},rgb:function(){return Mn(this).rgb()}}));var ht=-.14861,En=1.78277,Cn=-.29227,nn=-.90649,Y=1.97294,dt=Y*nn,gt=Y*En,pt=En*Cn-nn*ht;function Lr(n){if(n instanceof q)return new q(n.h,n.s,n.l,n.opacity);n instanceof p||(n=vn(n));var t=n.r/255,e=n.g/255,r=n.b/255,i=(pt*r+dt*t-gt*e)/(pt+dt-gt),f=r-i,a=(Y*(e-i)-Cn*f)/nn,u=Math.sqrt(a*a+f*f)/(Y*i*(1-i)),o=u?Math.atan2(a,f)*ft-120:NaN;return new q(o<0?o+360:o,u,i,n.opacity)}function Fr(n,t,e,r){return arguments.length===1?Lr(n):new q(n,t,e,r==null?1:r)}function q(n,t,e,r){this.h=+n,this.s=+t,this.l=+e,this.opacity=+r}B(q,Fr,X(E,{brighter:function(n){return n=n==null?D:Math.pow(D,n),new q(this.h,this.s,this.l*n,this.opacity)},darker:function(n){return n=n==null?z:Math.pow(z,n),new q(this.h,this.s,this.l*n,this.opacity)},rgb:function(){var n=isNaN(this.h)?0:(this.h+120)*at,t=+this.l,e=isNaN(this.s)?0:this.s*t*(1-t),r=Math.cos(n),i=Math.sin(n);return new p(255*(t+e*(ht*r+En*i)),255*(t+e*(Cn*r+nn*i)),255*(t+e*(Y*r)),this.opacity)}}));function Rn(n){return function(){return n}}function Ir(n,t){return function(e){return n+e*t}}function Br(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(r){return Math.pow(n+r*t,e)}}function Dr(n){return(n=+n)==1?mt:function(t,e){return e-t?Br(t,e,n):Rn(isNaN(t)?e:t)}}function mt(n,t){var e=t-n;return e?Ir(n,e):Rn(isNaN(n)?t:n)}var yt=P("p",function n(t){var e=Dr(t);function r(i,f){var a=e((i=bn(i)).r,(f=bn(f)).r),u=e(i.g,f.g),o=e(i.b,f.b),s=mt(i.opacity,f.opacity);return function(c){return i.r=a(c),i.g=u(c),i.b=o(c),i.opacity=s(c),i+""}}return r.gamma=n,r}(1));function Tr(n,t){var e=t?t.length:0,r=n?Math.min(e,n.length):0,i=new Array(e),f=new Array(e),a;for(a=0;a<r;++a)i[a]=tn(n[a],t[a]);for(;a<e;++a)f[a]=t[a];return function(u){for(a=0;a<r;++a)f[a]=i[a](u);return f}}function Hr(n,t){var e=new Date;return n=+n,t-=n,function(r){return e.setTime(n+t*r),e}}function Z(n,t){return n=+n,t-=n,function(e){return n+t*e}}function Or(n,t){var e={},r={},i;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in n?e[i]=tn(n[i],t[i]):r[i]=t[i];return function(f){for(i in e)r[i]=e[i](f);return r}}var Pn=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,$n=new RegExp(Pn.source,"g");function Vr(n){return function(){return n}}function Ur(n){return function(t){return n(t)+""}}function xt(n,t){var e=Pn.lastIndex=$n.lastIndex=0,r,i,f,a=-1,u=[],o=[];for(n=n+"",t=t+"";(r=Pn.exec(n))&&(i=$n.exec(t));)(f=i.index)>e&&(f=t.slice(e,f),u[a]?u[a]+=f:u[++a]=f),(r=r[0])===(i=i[0])?u[a]?u[a]+=i:u[++a]=i:(u[++a]=null,o.push({i:a,x:Z(r,i)})),e=$n.lastIndex;return e<t.length&&(f=t.slice(e),u[a]?u[a]+=f:u[++a]=f),u.length<2?o[0]?Ur(o[0].x):Vr(t):(t=o.length,function(s){for(var c=0,l;c<t;++c)u[(l=o[c]).i]=l.x(s);return u.join("")})}function tn(n,t){var e=typeof t,r;return t==null||e==="boolean"?Rn(t):(e==="number"?Z:e==="string"?(r=H(t))?(t=r,yt):xt:t instanceof H?yt:t instanceof Date?Hr:Array.isArray(t)?Tr:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Or:Z)(n,t)}function Xr(n,t){return n=+n,t-=n,function(e){return Math.round(n+t*e)}}function Kr(n){return function(){return n}}function Yr(n){return+n}var wt=[0,1];function L(n){return n}function zn(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:Kr(isNaN(t)?NaN:.5)}function vt(n){var t=n[0],e=n[n.length-1],r;return t>e&&(r=t,t=e,e=r),function(i){return Math.max(t,Math.min(e,i))}}function Zr(n,t,e){var r=n[0],i=n[1],f=t[0],a=t[1];return i<r?(r=zn(i,r),f=e(a,f)):(r=zn(r,i),f=e(f,a)),function(u){return f(r(u))}}function Gr(n,t,e){var r=Math.min(n.length,t.length)-1,i=new Array(r),f=new Array(r),a=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<r;)i[a]=zn(n[a],n[a+1]),f[a]=e(t[a],t[a+1]);return function(u){var o=Tt(n,u,1,r)-1;return f[o](i[o](u))}}function bt(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function _t(){var n=wt,t=wt,e=tn,r,i,f,a=L,u,o,s;function c(){return u=Math.min(n.length,t.length)>2?Gr:Zr,o=s=null,l}function l(h){return isNaN(h=+h)?f:(o||(o=u(n.map(r),t,e)))(r(a(h)))}return l.invert=function(h){return a(i((s||(s=u(t,n.map(r),Z)))(h)))},l.domain=function(h){return arguments.length?(n=vr.call(h,Yr),a===L||(a=vt(n)),c()):n.slice()},l.range=function(h){return arguments.length?(t=nt.call(h),c()):t.slice()},l.rangeRound=function(h){return t=nt.call(h),e=Xr,c()},l.clamp=function(h){return arguments.length?(a=h?vt(n):L,l):a!==L},l.interpolate=function(h){return arguments.length?(e=h,c()):e},l.unknown=function(h){return arguments.length?(f=h,l):f},function(h,g){return r=h,i=g,c()}}function Mt(n,t){return _t()(n,t)}function Jr(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function en(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,r=n.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+n.slice(e+1)]}function V(n){return n=en(Math.abs(n)),n?n[1]:NaN}function Qr(n,t){return function(e,r){for(var i=e.length,f=[],a=0,u=n[0],o=0;i>0&&u>0&&(o+u+1>r&&(u=Math.max(1,r-o)),f.push(e.substring(i-=u,i+u)),!((o+=u+1)>r));)u=n[a=(a+1)%n.length];return f.reverse().join(t)}}function Wr(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var jr=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function rn(n){if(!(t=jr.exec(n)))throw new Error("invalid format: "+n);var t;return new qn({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}rn.prototype=qn.prototype;function qn(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}qn.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function ni(n){n:for(var t=n.length,e=1,r=-1,i;e<t;++e)switch(n[e]){case".":r=i=e;break;case"0":r===0&&(r=e),i=e;break;default:if(!+n[e])break n;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(i+1):n}var Nt;function ti(n,t){var e=en(n,t);if(!e)return n+"";var r=e[0],i=e[1],f=i-(Nt=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,a=r.length;return f===a?r:f>a?r+new Array(f-a+1).join("0"):f>0?r.slice(0,f)+"."+r.slice(f):"0."+new Array(1-f).join("0")+en(n,Math.max(0,t+f-1))[0]}function At(n,t){var e=en(n,t);if(!e)return n+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}var kt={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:Jr,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>At(n*100,t),r:At,s:ti,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function St(n){return n}var Et=Array.prototype.map,Ct=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function ei(n){var t=n.grouping===void 0||n.thousands===void 0?St:Qr(Et.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",i=n.decimal===void 0?".":n.decimal+"",f=n.numerals===void 0?St:Wr(Et.call(n.numerals,String)),a=n.percent===void 0?"%":n.percent+"",u=n.minus===void 0?"\u2212":n.minus+"",o=n.nan===void 0?"NaN":n.nan+"";function s(l){l=rn(l);var h=l.fill,g=l.align,y=l.sign,R=l.symbol,A=l.zero,F=l.width,k=l.comma,v=l.precision,G=l.trim,x=l.type;x==="n"?(k=!0,x="g"):kt[x]||(v===void 0&&(v=12),G=!0,x="g"),(A||h==="0"&&g==="=")&&(A=!0,h="0",g="=");var oi=R==="$"?e:R==="#"&&/[boxX]/.test(x)?"0"+x.toLowerCase():"",si=R==="$"?r:/[%p]/.test(x)?a:"",qt=kt[x],ci=/[defgprs%]/.test(x);v=v===void 0?6:/[gprs]/.test(x)?Math.max(1,Math.min(21,v)):Math.max(0,Math.min(20,v));function Lt(d){var I=oi,b=si,U,Ft,fn;if(x==="c")b=qt(d)+b,d="";else{d=+d;var un=d<0||1/d<0;if(d=isNaN(d)?o:qt(Math.abs(d),v),G&&(d=ni(d)),un&&+d==0&&y!=="+"&&(un=!1),I=(un?y==="("?y:u:y==="-"||y==="("?"":y)+I,b=(x==="s"?Ct[8+Nt/3]:"")+b+(un&&y==="("?")":""),ci){for(U=-1,Ft=d.length;++U<Ft;)if(fn=d.charCodeAt(U),48>fn||fn>57){b=(fn===46?i+d.slice(U+1):d.slice(U))+b,d=d.slice(0,U);break}}}k&&!A&&(d=t(d,1/0));var on=I.length+d.length+b.length,S=on<F?new Array(F-on+1).join(h):"";switch(k&&A&&(d=t(S+d,S.length?F-b.length:1/0),S=""),g){case"<":d=I+d+b+S;break;case"=":d=I+S+d+b;break;case"^":d=S.slice(0,on=S.length>>1)+I+d+b+S.slice(on);break;default:d=S+I+d+b;break}return f(d)}return Lt.toString=function(){return l+""},Lt}function c(l,h){var g=s((l=rn(l),l.type="f",l)),y=Math.max(-8,Math.min(8,Math.floor(V(h)/3)))*3,R=Math.pow(10,-y),A=Ct[8+y/3];return function(F){return g(R*F)+A}}return{format:s,formatPrefix:c}}var an,Rt,Pt;ri({thousands:",",grouping:[3],currency:["$",""]});function ri(n){return an=ei(n),Rt=P("f",an.format),Pt=P("k",an.formatPrefix),an}function ii(n){return Math.max(0,-V(Math.abs(n)))}function ai(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(V(t)/3)))*3-V(Math.abs(n)))}function fi(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,V(t)-V(n))+1}function ui(n,t,e,r){var i=Ln(n,t,e),f;switch(r=rn(r==null?",f":r),r.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(t));return r.precision==null&&!isNaN(f=ai(i,a))&&(r.precision=f),Pt(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(f=fi(i,Math.max(Math.abs(n),Math.abs(t))))&&(r.precision=f-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(f=ii(i))&&(r.precision=f-(r.type==="%")*2);break}}return Rt(r)}function $t(n){var t=n.domain;return n.ticks=function(e){var r=t();return Ht(r[0],r[r.length-1],e==null?10:e)},n.tickFormat=function(e,r){var i=t();return ui(i[0],i[i.length-1],e==null?10:e,r)},n.nice=function(e){e==null&&(e=10);var r=t(),i=0,f=r.length-1,a=r[i],u=r[f],o;return u<a&&(o=a,a=u,u=o,o=i,i=f,f=o),o=J(a,u,e),o>0?(a=Math.floor(a/o)*o,u=Math.ceil(u/o)*o,o=J(a,u,e)):o<0&&(a=Math.ceil(a*o)/o,u=Math.floor(u*o)/o,o=J(a,u,e)),o>0?(r[i]=Math.floor(a/o)*o,r[f]=Math.ceil(u/o)*o,t(r)):o<0&&(r[i]=Math.ceil(a*o)/o,r[f]=Math.floor(u*o)/o,t(r)),n},n}function zt(){var n=Mt(L,L);return n.copy=function(){return bt(n,zt())},Qn.apply(n,arguments),$t(n)}}}});
//# sourceMappingURL=chunk-linear-00a5ab95.js.map
