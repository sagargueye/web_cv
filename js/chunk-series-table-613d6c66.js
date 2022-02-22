System.register([],function(h){"use strict";return{execute:function(){function d(s="Error loading data",e="Unable to render chart."){return`<div class="blankslate color-bg-tertiary rounded-1 d-flex flex-column flex-items-center flex-justify-center height-full">
  <svg
    aria-hidden="true"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    width="24"
    class="octicon octicon-graph blankslate-icon"
  >
    <path d="M2.5 2.75a.75.75 0 00-1.5 0v18.5c0 .414.336.75.75.75H20a.75.75 0 000-1.5H2.5V2.75z"></path>
    <path
      d="M22.28 7.78a.75.75 0 00-1.06-1.06l-5.72 5.72-3.72-3.72a.75.75 0 00-1.06 0l-6 6a.75.75 0 101.06 1.06l5.47-5.47 3.72 3.72a.75.75 0 001.06 0l6.25-6.25z"
    ></path>
  </svg>

  <h3 class="mb-1">${s}</h3>

  <p>${e}</p>
</div>`}class i extends HTMLElement{connectedCallback(){this.render()}static get observedAttributes(){return["series","error","loading","masked"]}attributeChangedCallback(){this.handleAttributeChanged()}handleAttributeChanged(){this.render()}render(){if(this.error)return void(this.innerHTML=d(void 0,this.error));if(this.loading)return void(this.innerHTML=`<div class="blankslate color-bg-tertiary rounded-1 d-flex flex-column flex-items-center flex-justify-center height-full">
  <svg
    aria-hidden="true"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    width="24"
    class="octicon octicon-graph blankslate-icon"
  >
    <path d="M2.5 2.75a.75.75 0 00-1.5 0v18.5c0 .414.336.75.75.75H20a.75.75 0 000-1.5H2.5V2.75z"></path>
    <path
      d="M22.28 7.78a.75.75 0 00-1.06-1.06l-5.72 5.72-3.72-3.72a.75.75 0 00-1.06 0l-6 6a.75.75 0 101.06 1.06l5.47-5.47 3.72 3.72a.75.75 0 001.06 0l6.25-6.25z"
    ></path>
  </svg>

  <h3 class="my-2">Loading <span class="AnimatedEllipsis"></span></h3>
</div>`);if(this.masked)return this.innerHTML=`<div class="blankslate color-bg-tertiary rounded-1 d-flex flex-column flex-items-center flex-justify-center height-full">
  <svg
    aria-hidden="true"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    width="24"
    class="octicon octicon-graph blankslate-icon"
  >
    <path d="M2.5 2.75a.75.75 0 00-1.5 0v18.5c0 .414.336.75.75.75H20a.75.75 0 000-1.5H2.5V2.75z"></path>
    <path
      d="M22.28 7.78a.75.75 0 00-1.06-1.06l-5.72 5.72-3.72-3.72a.75.75 0 00-1.06 0l-6 6a.75.75 0 101.06 1.06l5.47-5.47 3.72 3.72a.75.75 0 001.06 0l6.25-6.25z"
    ></path>
  </svg>

  <h3 class="my-2">Click to view</h3>
  <p>This chart may contain sensitive data.</p>
</div>`,void this.addEventListener("click",this.unmask);const e=this.seriesData;if(!e)return void(this.innerHTML=`<div class="blankslate color-bg-tertiary rounded-1 d-flex flex-column flex-items-center flex-justify-center height-full">
  <svg
    aria-hidden="true"
    height="24"
    viewBox="0 0 24 24"
    version="1.1"
    width="24"
    class="octicon octicon-graph blankslate-icon"
  >
    <path d="M2.5 2.75a.75.75 0 00-1.5 0v18.5c0 .414.336.75.75.75H20a.75.75 0 000-1.5H2.5V2.75z"></path>
    <path
      d="M22.28 7.78a.75.75 0 00-1.06-1.06l-5.72 5.72-3.72-3.72a.75.75 0 00-1.06 0l-6 6a.75.75 0 101.06 1.06l5.47-5.47 3.72 3.72a.75.75 0 001.06 0l6.25-6.25z"
    ></path>
  </svg>

  <h3 class="mb-1">No data available</h3>

  <p>No results were returned.</p>
</div>`);if(!this.validateInput())throw this.innerHTML=d(void 0,Array.isArray(e)&&e.filter(t=>t[1]===null).length>0?"Data cannot contain null values":void 0),new r("Malformed input. Failed to render component");const n=e[0].reduce((t,l,o)=>`${t}<th>${l}</th>${o===e[0].length-1?"</tr>":""}`,"<tr>");e.shift();const a=e.reduce((t,l,o)=>t+l.reduce((c,u,g)=>`${c}<td>${u}</td>${g===e[o].length-1?"</tr>":""}`,"<tr>"),"");this.innerHTML=`<table>${n}${a}</table>`}get series(){const e=this.getAttribute("series");return e?JSON.parse(decodeURI(e)):null}set series(e){e?this.setAttribute("series",encodeURI(JSON.stringify(e))):this.removeAttribute("series")}get seriesData(){const e=this.series;if(e){if(e.columns===void 0||e.rows===void 0)throw new r("Malformed input. Failed to render component");return[e.columns.map(n=>n.name),...e.rows]}return null}get error(){const e=this.getAttribute("error");return e?decodeURI(e):null}set error(e){e?this.setAttribute("error",encodeURI(e)):this.removeAttribute("error")}get loading(){return this.hasAttribute("loading")}set loading(e){e?this.setAttribute("loading",""):this.removeAttribute("loading")}get masked(){return this.hasAttribute("masked")}set masked(e){e?this.setAttribute("masked",""):this.removeAttribute("masked")}validateInput(){let e=!0;const n=this.seriesData;if(!n)return e;const a=n.slice(1);for(const t of a)if(t.length===0&&(e=!1),t.length!==n[0].length){e=!1;break}return e}unmask(){this.removeEventListener("click",this.unmask),this.masked=!1}}h("default",i);class r extends Error{constructor(e){super(e),this.name="SeriesTableError"}}window.customElements.get("series-table")||(window.SeriesTableElement=i,window.SeriesTableError=r,window.customElements.define("series-table",i))}}});
//# sourceMappingURL=chunk-series-table-9c4671a8.js.map
