System.register(["./chunk-vendor.js"],function(h){"use strict";var y,w,l,p,C;return{setters:[function(c){y=c.R,w=c.U,l=c.t,p=c.c,C=c.i}],execute:function(){const c={en:{translateTo:"Translate to English",translatedTo:"Translated to English",wasThisTranslationHelpful:"Was this translation helpful?",giveFeedback:"Give Feedback",translationFeedbackLink:"https://github.com/github/feedback/discussions/4373"},es:{translateTo:"Traducir al espa\xF1ol",translatedTo:"Traducido al espa\xF1ol",wasThisTranslationHelpful:"\xBFFue \xFAtil esta traducci\xF3n?",giveFeedback:"Env\xEDa tus comentarios",translationFeedbackLink:"https://github.com/github/feedback/discussions/6534"},pt:{translateTo:"Traduzir para portugu\xEAs",translatedTo:"Traduzido para o portugu\xEAs",wasThisTranslationHelpful:"Esta tradu\xE7\xE3o foi \xFAtil?",giveFeedback:"D\xEA sua opini\xE3o",translationFeedbackLink:"https://github.com/github/feedback/discussions/4374"},ko:{translateTo:"\uD55C\uAD6D\uC5B4\uB85C \uBC88\uC5ED",translatedTo:"\uD55C\uAD6D\uC5B4\uB85C \uBC88\uC5ED",wasThisTranslationHelpful:"\uC774 \uBC88\uC5ED\uC774 \uB3C4\uC6C0\uC774 \uB418\uC168\uB098\uC694?",giveFeedback:"\uD53C\uB4DC\uBC31 \uC81C\uACF5",translationFeedbackLink:"https://github.com/github/feedback/discussions/4372"}};var D=Object.defineProperty,f=(e,t)=>D(e,"name",{value:t,configurable:!0});function b(e){return!!c[e]}f(b,"isLanguageSupported");async function v(e="",t={},s=1e4){return(await x(`https://translator.github.com${e}`,{timeout:s,mode:"cors",method:"POST",body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json"})})).json()}f(v,"translationApi");async function x(e,t){const{timeout:s}=t,n=new AbortController,a=setTimeout(()=>n.abort(),s),r=await fetch(e,{...t,signal:n.signal});return clearTimeout(a),r}f(x,"fetchWithTimeout");function d(e,t){return c[t.language][e]}f(d,"get");var k=Object.defineProperty,$=Object.getOwnPropertyDescriptor,T=(e,t)=>k(e,"name",{value:t,configurable:!0}),u=(e,t,s,n)=>{for(var a=n>1?void 0:n?$(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(a=(n?o(t,s,a):o(a))||a);return n&&a&&k(t,s,a),a};const O=T(e=>e.tagName.toLowerCase(),"tagName");function _(e){const t=O(e);return w`<div data-target="${t}.spinner" hidden>
      <p class="text-center">
        <svg
          aria-label="Loading..."
          style="box-sizing: content-box; color: var(--color-icon-primary);"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          data-view-component="true"
          class="anim-rotate"
        >
          <circle
            cx="8"
            cy="8"
            r="7"
            stroke="currentColor"
            stroke-opacity="0.25"
            stroke-width="2"
            vector-effect="non-scaling-stroke"
          ></circle>
          <path
            d="M15 8a7.002 7.002 0 00-7-7"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            vector-effect="non-scaling-stroke"
          ></path>
        </svg>
      </p>
    </div>

    <details data-target="${t}.details" class="pl-3 pb-3" open hidden>
      <summary data-target="${t}.summary" class="color-fg-muted"></summary>
      <div data-target="${t}.content" class="pt-2"></div>
      <p class="pt-2">
        <span
          title="Feature Release Label: Beta"
          aria-label="Feature Release Label: Beta"
          data-view-component="true"
          class="Label Label--success Label--inline mr-1 px-1"
          >Beta</span
        >
        <span data-target="${t}.feedbackText"></span>
        <a data-target="${t}.feedbackLink" class="Link--secondary" href="#">{{feedbackLinkText}}</a>
      </p>
    </details>

    <span class="color-fg-muted"></span> `}T(_,"template");let i=class extends HTMLElement{constructor(){super();y(_(this),this)}set targetLanguage(e){this.setAttribute("to",e)}get targetLanguage(){return this.getAttribute("to")||navigator.languages[0].slice(0,2).toLowerCase()}set translation(e){this.content.innerHTML=e}showTranslation(e){e&&(this.translation=e);const t=this.targetLanguage;this.summary.textContent=d("translatedTo",{language:t}),this.feedbackText.textContent=d("wasThisTranslationHelpful",{language:t}),this.feedbackLink.textContent=d("giveFeedback",{language:t}),this.feedbackLink.href=d("translationFeedbackLink",{language:t}),this.details.hidden=!1,this.spinner.hidden=!0,this.scrollPageTo(this.details)}scrollPageTo(e){const t="smooth";e.scrollIntoView({behavior:t,block:"nearest"})}};T(i,"TranslationPlaceholderElement"),u([l],i.prototype,"summary",2),u([l],i.prototype,"spinner",2),u([l],i.prototype,"content",2),u([l],i.prototype,"feedbackText",2),u([l],i.prototype,"feedbackLink",2),u([l],i.prototype,"details",2),i=u([p],i);var E=Object.defineProperty,A=Object.getOwnPropertyDescriptor,H=(e,t)=>E(e,"name",{value:t,configurable:!0}),L=(e,t,s,n)=>{for(var a=n>1?void 0:n?A(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(a=(n?o(t,s,a):o(a))||a);return n&&a&&E(t,s,a),a};const j=`
  <div data-target="machine-translation.error" class="m-3" hidden>
    <div data-view-component="true" class="flash flash-error">
      An error occurred while translating this comment.
      <div data-view-component="true" class="flash-action">
        <button data-target="machine-translation.errorButton" type="button" data-view-component="true" class="btn">Try again</button>
      </div>
    </div>
  </div>
`;let g=h("M",class extends i{constructor(){super();this.innerHTML+=j,this.payloadMetadata={},this.error.querySelector("button").addEventListener("click",()=>this.load())}set sourceElement(e){this.element=e}get sourceElement(){if(!this.element)throw new Error("Source element not defined");return this.element}set language(e){this.contentLanguage=e}get language(){return this.contentLanguage}async load(){try{this.spinner.hidden=!1,this.details.hidden=!0,this.error.hidden=!0,this.showTranslation(await this.getTranslation())}catch{this.spinner.hidden=!0,this.error.hidden=!1,this.scrollPageTo(this.error)}}async resolveLanguage(){var e;if(!this.language){const t=this.sourceText(),s=await v("/detect",{text:t});this.language=(e=s[0])==null?void 0:e.language.slice(0,2).toLowerCase()}return Promise.resolve(this.language)}set payloadMetadata(e){this._payloadMetadata=e}get payloadMetadata(){return this._payloadMetadata}async getTranslation(){const e=await this.resolveLanguage(),t=[this.targetLanguage],s=this.payloadMetadata,n=this.sourceText();return(await v("/translate",{text:n,to:t,from:e,...s}))[0].translations[0].text}sourceText(){return this.sourceElement.outerHTML}async isTranslatable(){const e=this.targetLanguage;if(!b(e))return Promise.resolve(!1);const t=await this.resolveLanguage();return b(t)?!await this.alreadyTranslated():Promise.resolve(!1)}async alreadyTranslated(){const e=this.targetLanguage,t=await this.resolveLanguage();return e===t}translatedToNotice(){return c[this.targetLanguage].translatedTo}});H(g,"MachineTranslationElement"),L([l],g.prototype,"error",2),L([l],g.prototype,"errorButton",2),g=h("M",L([p],g));var P=Object.defineProperty,R=Object.getOwnPropertyDescriptor,F=(e,t)=>P(e,"name",{value:t,configurable:!0}),M=(e,t,s,n)=>{for(var a=n>1?void 0:n?R(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(a=(n?o(t,s,a):o(a))||a);return n&&a&&P(t,s,a),a};async function B(e){return(await fetch(e)).text()}F(B,"fetchHTML");let m=h("R",class extends HTMLElement{constructor(){super(...arguments);this.src=""}appendTo(e){return e.appendChild(this)}async load(){this.innerHTML=await B(this.src)}});F(m,"RemoteContentElement"),M([C],m.prototype,"src",2),m=h("R",M([p],m))}}});
//# sourceMappingURL=chunk-remote-content-element-650d30ae.js.map
