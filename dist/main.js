(()=>{"use strict";var e={493:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"*{margin:0;padding:0;box-sizing:border-box}body{height:100vh;display:flex;justify-content:center;flex-direction:column;align-items:center;color:#fff}.gameColor{background:linear-gradient(#13478b, #7bb3fc);width:800px;height:600px;display:flex;flex-direction:column;align-items:center;justify-content:center}",""]);const a=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var c=e[r],l=t.base?c[0]+t.base:c[0],d=n[l]||0,s="".concat(l," ").concat(d);n[l]=d+1;var u=i(s),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:s,updater:h(m,t),references:1}),o.push(s)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=n.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,s=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,f=0;function h(e,t){var n,o,r;if(t.singleton){var a=f++;n=p||(p=l(t)),o=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0)}else n=l(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=i(n[o]);a[r].references--}for(var l=c(e,t),d=0;d<n.length;d++){var s=i(n[d]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=l}}}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(493);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const r=()=>{const e=document.querySelector("body"),t=document.createElement("div"),n=document.createElement("button"),o=document.createElement("div"),a=document.createElement("h1"),i=document.createElement("p"),c=document.createElement("p"),l=document.createElement("button"),d=document.createElement("button"),s=document.createElement("button");l.textContent="How to Play",d.textContent="Leaderboard",s.textContent="Credits",n.textContent="Play",t.className="gameColor",l.className="btn btn-light mx-3",d.className="btn btn-light mx-3",s.className="btn btn-light mx-3",n.className="btn btn-info border mt-3 w-50",i.textContent="Welcome to platformer game,",c.textContent="I hope you enjoy playing it.",a.textContent="Platformer",t.appendChild(a),t.appendChild(i),t.appendChild(c),o.appendChild(l),o.appendChild(d),o.appendChild(s),t.appendChild(o),t.appendChild(n),e.appendChild(t),l.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",(()=>{const e=document.querySelector("body"),t=document.createElement("div"),n=document.createElement("h1"),o=document.createElement("p"),a=document.createElement("button");t.className="creditsDiv gameColor",o.className="w-50 text-center",a.className="btn btn-light border mx-3",a.textContent="Home",n.textContent="How to play",o.textContent="To play this game you have to use the up, right, and left tiles of your keyboard to jump, move to right, and move to left, respectively.",a.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",r()})),t.appendChild(n),t.appendChild(o),t.appendChild(a),e.appendChild(t)})()})),d.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",(()=>{const e=document.querySelector("body"),t=document.createElement("div"),n=document.createElement("h1"),o=document.createElement("button");t.className="creditsDiv gameColor",o.className="btn btn-light border mx-3",o.textContent="Home",n.textContent="Leaderboard:",t.appendChild(n),t.appendChild(o),e.appendChild(t),o.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",r()}))})()})),s.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",(()=>{const e=document.querySelector("body"),t=document.createElement("div"),n=document.createElement("h1"),o=document.createElement("p"),a=document.createElement("div"),i=document.createElement("button");t.className="creditsDiv gameColor",o.className="w-50 text-center",i.className="btn btn-light border mx-3",i.textContent="Home",n.textContent="Credits",o.textContent="This game was created using Phaser and JavaScript by: Jhonatan Sarrazola",a.appendChild(i),t.appendChild(n),t.appendChild(o),t.appendChild(a),e.appendChild(t),i.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",r()}))})()})),n.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none"}))};r()})()})();