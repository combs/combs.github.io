!function(e){var t={};function l(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=t,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(i,r,function(t){return e[t]}.bind(null,r));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=1)}([function(e,t,l){var i,r,n,o,c;e.exports=(r=[],n=document,o=n.documentElement.doScroll,(c=(o?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState))||n.addEventListener("DOMContentLoaded",i=function(){for(n.removeEventListener("DOMContentLoaded",i),c=1;i=r.shift();)i()}),function(e){c?setTimeout(e,0):r.push(e)})},function(e,t,l){"use strict";l.r(t);var i=l(0);l.n(i)()((function(){window.reflowThumbnails=function(e=""){let t=document.querySelectorAll("div.row.thumbnails"),l="div.thumb",i=null;e&&(i=l+":not(."+e+")",l+="."+e);for(let e of t){let t=e.querySelectorAll("div.clearfix");for(let e of t)e.remove();let r=e.querySelectorAll(l);for(let e of r)e.style.display="block";if(null!=i)for(let t of e.querySelectorAll(i))t.style.display="none";for(let e=1;e<r.length;e++){if(e%3==0){let t=document.createElement("div");t.classList.add("clearfix","visible-md-block","visible-lg-block","visible-xl-block");let l=r[e-1].parentNode;l.parentNode.insertBefore(t,l.nextSibling)}if(e%2==0){let t=document.createElement("div");t.classList.add("clearfix","visible-sm-block");let l=r[e-1].parentNode;l.parentNode.insertBefore(t,l.nextSibling)}}}},window.clearFilters=function(){for(let e of document.querySelectorAll(".filter.active"))e.classList.remove("active")},window.filterAll=function(){clearFilters();for(let e of document.querySelectorAll(".filter-all"))e.classList.add("active");reflowThumbnails()};for(let e of document.querySelectorAll(".filter-all"))e.addEventListener("click",(function(){clearFilters(),reflowThumbnails(),this.classList.add("active")}));for(let e of document.querySelectorAll(".filter-sold"))e.addEventListener("click",(function(){this.classList.contains("active")?filterAll():(clearFilters(),reflowThumbnails("status-in-a-private-collection"),this.classList.add("active"))}));for(let e of document.querySelectorAll(".filter-available"))e.addEventListener("click",(function(){this.classList.contains("active")?filterAll():(clearFilters(),reflowThumbnails("status-available"),this.classList.add("active"))}));for(let e of document.querySelectorAll(".filter-upcoming-show"))e.addEventListener("click",(function(){this.classList.contains("active")?filterAll():(clearFilters(),reflowThumbnails("status-upcoming-show"),this.classList.add("active"))}));for(let e of document.querySelectorAll(".filter-on-display"))e.addEventListener("click",(function(){this.classList.contains("active")?filterAll():(clearFilters(),reflowThumbnails("status-on-display"),this.classList.add("active"))}))}))}]);
//# sourceMappingURL=index.js.map