System.register(["./chunk-linear.js"],function(l){"use strict";var r;return{setters:[function(o){r=o.s}],execute:function(){l({d:c,y:a});function o(e){e.preventDefault(),e.stopImmediatePropagation()}function c(e){var t=e.document.documentElement,n=r(e).on("dragstart.drag",o,!0);"onselectstart"in t?n.on("selectstart.drag",o,!0):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function a(e,t){var n=e.document.documentElement,s=r(e).on("dragstart.drag",null);t&&(s.on("click.drag",o,!0),setTimeout(function(){s.on("click.drag",null)},0)),"onselectstart"in n?s.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}}}});
//# sourceMappingURL=chunk-nodrag-0d9c0cff.js.map
