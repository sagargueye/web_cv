System.register(["./chunk-vendor.js"],function(){"use strict";var u;return{setters:[function(d){u=d.o}],execute:function(){var d=Object.defineProperty,o=(e,t)=>d(e,"name",{value:t,configurable:!0});function r(e){document.querySelector(".js-gist-dropzone").classList.remove("d-none"),e.stopPropagation(),e.preventDefault()}o(r,"onDragenter");function a(e){const t=e.target;t instanceof Element&&t.classList.contains("js-gist-dropzone")&&t.classList.add("d-none")}o(a,"onDragleave");async function f(e){const t=e.dataTransfer;if(!!t)for(const i of t.files)try{const n=await l(i);e.target.dispatchEvent(new CustomEvent("gist:filedrop",{bubbles:!0,detail:n}))}catch{}}o(f,"doDrop");function s(e){f(e),document.querySelector(".js-gist-dropzone").classList.add("d-none"),e.stopPropagation(),e.preventDefault()}o(s,"onDrop"),u(".js-gist-dropzone",{add(){document.body.addEventListener("dragenter",r),document.body.addEventListener("dragleave",a),document.body.addEventListener("dragover",r),document.body.addEventListener("drop",s)},remove(){document.body.removeEventListener("dragenter",r),document.body.removeEventListener("dragleave",a),document.body.removeEventListener("dragover",r),document.body.removeEventListener("drop",s)}});function l(e){return new Promise(function(t,i){const n=new FileReader;n.onload=function(){const c=n.result;c&&!/\0/.test(c)?t({file:e,data:c}):i(new Error("invalid file"))},n.readAsText(e)})}o(l,"readTextFile")}}});
//# sourceMappingURL=chunk-drag-drop-7af1cc62.js.map
