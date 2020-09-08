!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("simple-range-slider",[],e):"object"==typeof exports?exports["simple-range-slider"]=e():t["simple-range-slider"]=e()}(window,(function(){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return r}));i(1);function r(t,e){if(!t||!(t instanceof Element||t instanceof HTMLDocument))throw new Error("Wrapper must be a valid node.");this.defaultOptions={min:0,max:100,mode:"horizontal",size:"100%",defaultValue:50,pathDiameter:"8px",handlerSize:"20px",pathColor:"#ddd",progressColor:"#1c70ff",loadingProgressColor:"#ccc",lockOnLoadingValue:!1},this.options=Object.assign(this.defaultOptions,e||{}),this.wrapper=t,this.init()}Object.defineProperty(r.prototype,"value",{get:function(){return this._value},set:function(t){this.options.lockOnLoadingValue&&t>=this.loadingValue&&(t=this.loadingValue);const e=Math.floor(100*Math.max(0,Math.min(100,100*t/this.options.max)))/100;this.isHorizontalMode?(this.progress.style.height="100%",this.progress.style.width=e+"%",this.handler.style.left=e+"%"):this.isVerticalMode&&(this.progress.style.width="100%",this.progress.style.height=e+"%",this.handler.style.bottom=e+"%"),this._value=t,this.events.call("change",this._value)}}),Object.defineProperty(r.prototype,"loadingValue",{get:function(){return this._loadingValue},set:function(t){const e=Math.floor(100*Math.max(0,Math.min(100,100*t/this.options.max)))/100;this.isHorizontalMode?(this.loadingProgress.style.height="100%",this.loadingProgress.style.width=e+"%"):this.isVerticalMode&&(this.loadingProgress.style.width="100%",this.loadingProgress.style.height=e+"%"),this._loadingValue=t,this.events.call("loadingChange",this._loadingValue)}}),r.prototype.init=function(){if(this.slider)return this;this.initialized=!1,this.events={call:function(t){if(t&&"string"==typeof t&&"function"==typeof this.events[t]){const e=Array.prototype.slice.call(arguments).slice(1);this.events[t].apply(this,e)}}.bind(this)},this.bound={width:void 0,height:void 0,leftPos:void 0,topPos:void 0},this._value=0,this._loadingValue=0,this.slider=document.createElement("div"),this.path=document.createElement("div"),this.progress=document.createElement("div"),this.loadingProgress=document.createElement("div"),this.handler=document.createElement("div"),this.slider.classList.add("simple-slider"),this.path.classList.add("simple-slider__path"),this.progress.classList.add("simple-slider__progress"),this.loadingProgress.classList.add("simple-slider__loading-progress"),this.handler.classList.add("simple-slider__handler"),this.path.appendChild(this.loadingProgress),this.path.appendChild(this.progress),this.slider.appendChild(this.path),this.slider.appendChild(this.handler),this.wrapper.innerHTML="",this.wrapper.appendChild(this.slider),this.applyOptions(),this.initListeners()},r.prototype.initListeners=function(){if(!this.slider)return;if(this.initialized)return this;let t=!1;const e=function(t){let e=t.pageX;e&&t.touches&&(e=t.touches[0].pageX);let s=t.pageY;s&&t.touches&&(s=t.touches[0].pageY),this.isHorizontalMode?i(e):this.isVerticalMode&&r(s)}.bind(this),i=function(t){const e=Math.min(1,Math.max(0,(t-this.bound.leftPos)/this.bound.width));this.value=(1-e)*this.options.min+e*this.options.max}.bind(this),r=function(t){const e=Math.min(1,Math.max(0,1-(t-this.bound.topPos)/this.bound.height));this.value=(1-e)*this.options.min+e*this.options.max}.bind(this);let s=function(i){i.preventDefault(),t=!0,this.events.call("start",this.value);let r=window.pageXOffset,s=window.pageYOffset;const n=this.slider.getBoundingClientRect();this.bound={width:n.width,height:n.height,leftPos:n.left+r,topPos:n.top+s},this.slider.classList.add("--dragging"),e(i),this.slider.parentElement.addEventListener("mousemove",o),this.slider.parentElement.addEventListener("touchmove",o)}.bind(this),n=function(e){e.preventDefault(),t&&(this.bound={width:void 0,height:void 0,leftPos:void 0,topPos:void 0},t=!1,this.slider.classList.remove("--dragging"),this.slider.parentElement.removeEventListener("mousemove",o),this.slider.parentElement.removeEventListener("touchmove",o),this.events.call("stop",this.value))}.bind(this),o=function(i){t&&(e(i),this.events.call("dragging",i,this.value))}.bind(this);return this.slider.addEventListener("mousedown",s),this.slider.addEventListener("touchstart",s),document.addEventListener("mouseup",n),document.addEventListener("touchend",n),this.initialized=!0,this},r.prototype.applyOptions=function(){let t="--"+(this.options.mode||this.defaultOptions.mode);this.slider.classList.remove("--horizontal"),this.slider.classList.remove("--vertical"),this.slider.classList.remove("--circle"),this.slider.classList.add(t),this.isVerticalMode="vertical"===this.options.mode,this.isCircleMode="circle"===this.options.mode,this.isHorizontalMode=!this.isCircleMode&&!this.isVerticalMode,this.options.size&&(this.isHorizontalMode?(this.slider.style.height="unset",this.slider.style.width=this.options.size):this.isVerticalMode&&(this.slider.style.width="auto",this.slider.style.height=this.options.size)),this.options.pathDiameter&&this.slider.style.setProperty("--slider-path-diameter",this.options.pathDiameter),this.options.handlerSize&&this.slider.style.setProperty("--slider-handler-size",this.options.handlerSize),this.options.pathColor&&this.slider.style.setProperty("--slider-path-color",this.options.pathColor),this.options.progressColor&&this.slider.style.setProperty("--slider-progress-color",this.options.progressColor),this.options.loadingProgressColor&&this.slider.style.setProperty("--slider-loading-progress-color",this.options.loadingProgressColor),this.value=this.options.defaultValue||0,this.loadingValue=this._loadingValue||0},r.prototype.on=function(t,e){if("string"!=typeof t||"function"!=typeof e)throw"Invalid event or callback function";this.events[t]=e},r.prototype.update=function(t){if(this.slider)return this.options=Object.assign(this.defaultOptions,t||{}),this.applyOptions(),this}},function(t,e,i){var r=i(2),s=i(3);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var n={insert:"head",singleton:!1};r(s,n);t.exports=s.locals||{}},function(t,e,i){"use strict";var r,s=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},n=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),o=[];function a(t){for(var e=-1,i=0;i<o.length;i++)if(o[i].identifier===t){e=i;break}return e}function l(t,e){for(var i={},r=[],s=0;s<t.length;s++){var n=t[s],l=e.base?n[0]+e.base:n[0],d=i[l]||0,h="".concat(l," ").concat(d);i[l]=d+1;var c=a(h),p={css:n[1],media:n[2],sourceMap:n[3]};-1!==c?(o[c].references++,o[c].updater(p)):o.push({identifier:h,updater:m(p,e),references:1}),r.push(h)}return r}function d(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var s=i.nc;s&&(r.nonce=s)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var o=n(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var h,c=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function p(t,e,i,r){var s=i?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=c(e,s);else{var n=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(n,o[e]):t.appendChild(n)}}function u(t,e,i){var r=i.css,s=i.media,n=i.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),n&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,g=0;function m(t,e){var i,r,s;if(e.singleton){var n=g++;i=f||(f=d(e)),r=p.bind(null,i,n,!1),s=p.bind(null,i,n,!0)}else i=d(e),r=u.bind(null,i,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var i=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<i.length;r++){var s=a(i[r]);o[s].references--}for(var n=l(t,e),d=0;d<i.length;d++){var h=a(i[d]);0===o[h].references&&(o[h].updater(),o.splice(h,1))}i=n}}}},function(t,e,i){(e=i(4)(!1)).push([t.i,".simple-slider {\r\n    --slider-path-diameter: 6px;\r\n    --slider-handler-size: 14px;\r\n    --slider-path-color: #ddd;\r\n    --slider-progress-color: #1c70ff;\r\n    --slider-loading-progress-color: #ccc;\r\n\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    padding: calc(8px / 1) 0;\r\n    padding: calc(var(--slider-path-diameter, 8px) / 1) 0;\r\n}\r\n\r\n.simple-slider.--vertical {\r\n    display: inline-block;\r\n    width: auto;\r\n    padding: 0 calc(8px / 1);\r\n    padding: 0 calc(var(--slider-path-diameter, 8px) / 1);\r\n}\r\n\r\n.simple-slider__path {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 8px;\r\n    height: var(--slider-path-diameter, 8px);\r\n    background-color: var(--slider-path-color, #ddd);\r\n    border-radius: 25px;\r\n    position: relative;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n}\r\n\r\n.simple-slider.--vertical .simple-slider__path {\r\n    height: 100%;\r\n    width: 8px;\r\n    width: var(--slider-path-diameter, 8px);\r\n    margin: 0 auto;\r\n}\r\n\r\n.simple-slider__loading-progress,\r\n.simple-slider__progress {\r\n    position: absolute;\r\n    left: 0;\r\n    width: 0;\r\n    height: 100%;\r\n    background-color: var(--slider-progress-color, #1c70ff);\r\n    max-width: 100% !important;\r\n    z-index: 1;\r\n}\r\n\r\n.simple-slider.--vertical .simple-slider__loading-progress,\r\n.simple-slider.--vertical .simple-slider__progress {\r\n    left: unset;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 0;\r\n}\r\n\r\n.simple-slider__loading-progress {\r\n    border-radius: 25px;\r\n    z-index: 0;\r\n    background-color: var(--slider-loading-progress-color, #ccc);\r\n}\r\n\r\n.simple-slider__handler {\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    width: 8px;\r\n    width: var(--slider-path-diameter, 8px);\r\n    height: 8px;\r\n    height: var(--slider-path-diameter, 8px);\r\n    background: rgba(174, 196, 221, 0.7);\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: .5%;\r\n    margin-left: calc(8px * -.5);\r\n    margin-left: calc(var(--slider-path-diameter, 8px) * -.5);\r\n    margin-top: calc(8px * -.5);\r\n    margin-top: calc(var(--slider-path-diameter, 8px) * -.5);\r\n    cursor: pointer;\r\n    -webkit-transition: opacity .1s, visibility .3s, -webkit-box-shadow .3s;\r\n    transition: opacity .1s, visibility .3s, -webkit-box-shadow .3s;\r\n    -o-transition: box-shadow .3s, opacity .1s, visibility .3s;\r\n    transition: box-shadow .3s, opacity .1s, visibility .3s;\r\n    transition: box-shadow .3s, opacity .1s, visibility .3s, -webkit-box-shadow .3s;\r\n    -webkit-transform-origin: center;\r\n    -ms-transform-origin: center;\r\n    transform-origin: center;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    z-index: 5;\r\n}\r\n\r\n.simple-slider.--vertical .simple-slider__handler {\r\n    left: 50%;\r\n    top: unset;\r\n    bottom: 0;\r\n    margin: 0;\r\n    margin-left: calc(8px * -.5);\r\n    margin-left: calc(var(--slider-path-diameter, 8px) * -.5);\r\n    margin-bottom: calc(8px * -.5);\r\n    margin-bottom: calc(var(--slider-path-diameter, 8px) * -.5);\r\n\r\n}\r\n\r\n.simple-slider:hover .simple-slider__handler,\r\n.simple-slider.--dragging .simple-slider__handler,\r\n.simple-slider__handler:hover {\r\n    -webkit-box-shadow: 0 0 0 calc(var(--slider-handler-size)) rgba(174, 196, 221, 0.7);\r\n    -ms-box-shadow: 0 0 0 calc(var(--slider-handler-size)) rgba(174, 196, 221, 0.7);\r\n    box-shadow: 0 0 0 calc(var(--slider-handler-size)) rgba(174, 196, 221, 0.7);\r\n    background: var(--slider-progress-color, #1c70ff);\r\n    opacity: 1;\r\n    visibility: visible;\r\n    -webkit-transition: opacity .2s, visibility .2s, -webkit-box-shadow .4s;\r\n    transition: opacity .2s, visibility .2s, -webkit-box-shadow .4s;\r\n    -o-transition: box-shadow .4s, opacity .2s, visibility .2s;\r\n    transition: box-shadow .4s, opacity .2s, visibility .2s;\r\n    transition: box-shadow .4s, opacity .2s, visibility .2s, -webkit-box-shadow .4s;\r\n}\r\n",""]),t.exports=e},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",r=t[3];if(!r)return i;if(e&&"function"==typeof btoa){var s=(o=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),n=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[i].concat(n).concat([s]).join("\n")}var o,a,l;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,r){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(r)for(var n=0;n<this.length;n++){var o=this[n][0];null!=o&&(s[o]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);r&&s[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),e.push(l))}},e}}])}));