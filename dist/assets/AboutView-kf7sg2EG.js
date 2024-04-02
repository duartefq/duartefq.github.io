import{d as bt,c as nt,w as Se,h as Pe,o as Ft,a as jt,b as C,r as X,e as h,u as y,n as Oe,f as v,g as b}from"./index-BB01pOAu.js";function wa(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,n)}return e}function u(t){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?wa(Object(e),!0).forEach(function(n){N(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):wa(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function Lt(t){"@babel/helpers - typeof";return Lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Lt(t)}function Ee(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function xa(t,a){for(var e=0;e<a.length;e++){var n=a[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Ce(t,a,e){return a&&xa(t.prototype,a),e&&xa(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function N(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function la(t,a){return Ne(t)||Le(t,a)||Xa(t,a)||ze()}function yt(t){return Ie(t)||Te(t)||Xa(t)||Me()}function Ie(t){if(Array.isArray(t))return qt(t)}function Ne(t){if(Array.isArray(t))return t}function Te(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Le(t,a){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var n=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(n.push(o.value),!(a&&n.length===a));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return n}}function Xa(t,a){if(t){if(typeof t=="string")return qt(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return qt(t,a)}}function qt(t,a){(a==null||a>t.length)&&(a=t.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=t[e];return n}function Me(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ze(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Aa=function(){},fa={},Ka={},qa=null,Qa={mark:Aa,measure:Aa};try{typeof window<"u"&&(fa=window),typeof document<"u"&&(Ka=document),typeof MutationObserver<"u"&&(qa=MutationObserver),typeof performance<"u"&&(Qa=performance)}catch{}var Re=fa.navigator||{},_a=Re.userAgent,Sa=_a===void 0?"":_a,K=fa,P=Ka,Pa=qa,wt=Qa;K.document;var U=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",Ja=~Sa.indexOf("MSIE")||~Sa.indexOf("Trident/"),xt,At,_t,St,Pt,H="___FONT_AWESOME___",Qt=16,Za="fa",te="svg-inline--fa",at="data-fa-i2svg",Jt="data-fa-pseudo-element",Fe="data-fa-pseudo-element-pending",ca="data-prefix",ua="data-icon",Oa="fontawesome-i2svg",je="async",De=["HTML","HEAD","STYLE","SCRIPT"],ae=function(){try{return!0}catch{return!1}}(),S="classic",O="sharp",ma=[S,O];function ht(t){return new Proxy(t,{get:function(e,n){return n in e?e[n]:e[S]}})}var mt=ht((xt={},N(xt,S,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),N(xt,O,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),xt)),dt=ht((At={},N(At,S,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),N(At,O,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),At)),vt=ht((_t={},N(_t,S,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),N(_t,O,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),_t)),$e=ht((St={},N(St,S,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),N(St,O,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),St)),Ye=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ee="fa-layers-text",He=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Be=ht((Pt={},N(Pt,S,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),N(Pt,O,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Pt)),ne=[1,2,3,4,5,6,7,8,9,10],Ve=ne.concat([11,12,13,14,15,16,17,18,19,20]),Ue=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gt=new Set;Object.keys(dt[S]).map(gt.add.bind(gt));Object.keys(dt[O]).map(gt.add.bind(gt));var We=[].concat(ma,yt(gt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY]).concat(ne.map(function(t){return"".concat(t,"x")})).concat(Ve.map(function(t){return"w-".concat(t)})),ct=K.FontAwesomeConfig||{};function Ge(t){var a=P.querySelector("script["+t+"]");if(a)return a.getAttribute(t)}function Xe(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(P&&typeof P.querySelector=="function"){var Ke=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ke.forEach(function(t){var a=la(t,2),e=a[0],n=a[1],r=Xe(Ge(e));r!=null&&(ct[n]=r)})}var re={styleDefault:"solid",familyDefault:"classic",cssPrefix:Za,replacementClass:te,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ct.familyPrefix&&(ct.cssPrefix=ct.familyPrefix);var st=u(u({},re),ct);st.autoReplaceSvg||(st.observeMutations=!1);var m={};Object.keys(re).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(e){st[t]=e,ut.forEach(function(n){return n(m)})},get:function(){return st[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(a){st.cssPrefix=a,ut.forEach(function(e){return e(m)})},get:function(){return st.cssPrefix}});K.FontAwesomeConfig=m;var ut=[];function qe(t){return ut.push(t),function(){ut.splice(ut.indexOf(t),1)}}var G=Qt,$={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Qe(t){if(!(!t||!U)){var a=P.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=t;for(var e=P.head.childNodes,n=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return P.head.insertBefore(a,n),t}}var Je="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pt(){for(var t=12,a="";t-- >0;)a+=Je[Math.random()*62|0];return a}function lt(t){for(var a=[],e=(t||[]).length>>>0;e--;)a[e]=t[e];return a}function da(t){return t.classList?lt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(a){return a})}function ie(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ze(t){return Object.keys(t||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(ie(t[e]),'" ')},"").trim()}function Dt(t){return Object.keys(t||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(t[e].trim(),";")},"")}function va(t){return t.size!==$.size||t.x!==$.x||t.y!==$.y||t.rotate!==$.rotate||t.flipX||t.flipY}function tn(t){var a=t.transform,e=t.containerWidth,n=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),o="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:c}}function an(t){var a=t.transform,e=t.width,n=e===void 0?Qt:e,r=t.height,i=r===void 0?Qt:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Ja?l+="translate(".concat(a.x/G-n/2,"em, ").concat(a.y/G-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(a.x/G,"em), calc(-50% + ").concat(a.y/G,"em)) "):l+="translate(".concat(a.x/G,"em, ").concat(a.y/G,"em) "),l+="scale(".concat(a.size/G*(a.flipX?-1:1),", ").concat(a.size/G*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var en=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function oe(){var t=Za,a=te,e=m.cssPrefix,n=m.replacementClass,r=en;if(e!==t||n!==a){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(n))}return r}var Ea=!1;function Vt(){m.autoAddCss&&!Ea&&(Qe(oe()),Ea=!0)}var nn={mixout:function(){return{dom:{css:oe,insertCss:Vt}}},hooks:function(){return{beforeDOMElementCreation:function(){Vt()},beforeI2svg:function(){Vt()}}}},B=K||{};B[H]||(B[H]={});B[H].styles||(B[H].styles={});B[H].hooks||(B[H].hooks={});B[H].shims||(B[H].shims=[]);var j=B[H],se=[],rn=function t(){P.removeEventListener("DOMContentLoaded",t),Mt=1,se.map(function(a){return a()})},Mt=!1;U&&(Mt=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),Mt||P.addEventListener("DOMContentLoaded",rn));function on(t){U&&(Mt?setTimeout(t,0):se.push(t))}function kt(t){var a=t.tag,e=t.attributes,n=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?ie(t):"<".concat(a," ").concat(Ze(n),">").concat(i.map(kt).join(""),"</").concat(a,">")}function Ca(t,a,e){if(t&&t[a]&&t[a][e])return{prefix:a,iconName:e,icon:t[a][e]}}var sn=function(a,e){return function(n,r,i,o){return a.call(e,n,r,i,o)}},Ut=function(a,e,n,r){var i=Object.keys(a),o=i.length,s=r!==void 0?sn(e,r):e,l,c,f;for(n===void 0?(l=1,f=a[i[0]]):(l=0,f=n);l<o;l++)c=i[l],f=s(f,a[c],c,a);return f};function ln(t){for(var a=[],e=0,n=t.length;e<n;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<n){var i=t.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function Zt(t){var a=ln(t);return a.length===1?a[0].toString(16):null}function fn(t,a){var e=t.length,n=t.charCodeAt(a),r;return n>=55296&&n<=56319&&e>a+1&&(r=t.charCodeAt(a+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function Ia(t){return Object.keys(t).reduce(function(a,e){var n=t[e],r=!!n.icon;return r?a[n.iconName]=n.icon:a[e]=n,a},{})}function ta(t,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.skipHooks,r=n===void 0?!1:n,i=Ia(a);typeof j.hooks.addPack=="function"&&!r?j.hooks.addPack(t,Ia(a)):j.styles[t]=u(u({},j.styles[t]||{}),i),t==="fas"&&ta("fa",a)}var Ot,Et,Ct,rt=j.styles,cn=j.shims,un=(Ot={},N(Ot,S,Object.values(vt[S])),N(Ot,O,Object.values(vt[O])),Ot),ga=null,le={},fe={},ce={},ue={},me={},mn=(Et={},N(Et,S,Object.keys(mt[S])),N(Et,O,Object.keys(mt[O])),Et);function dn(t){return~We.indexOf(t)}function vn(t,a){var e=a.split("-"),n=e[0],r=e.slice(1).join("-");return n===t&&r!==""&&!dn(r)?r:null}var de=function(){var a=function(i){return Ut(rt,function(o,s,l){return o[l]=Ut(s,i,{}),o},{})};le=a(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),fe=a(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),me=a(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var e="far"in rt||m.autoFetchSvg,n=Ut(cn,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});ce=n.names,ue=n.unicodes,ga=$t(m.styleDefault,{family:m.familyDefault})};qe(function(t){ga=$t(t.styleDefault,{family:m.familyDefault})});de();function pa(t,a){return(le[t]||{})[a]}function gn(t,a){return(fe[t]||{})[a]}function Z(t,a){return(me[t]||{})[a]}function ve(t){return ce[t]||{prefix:null,iconName:null}}function pn(t){var a=ue[t],e=pa("fas",t);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function q(){return ga}var ba=function(){return{prefix:null,iconName:null,rest:[]}};function $t(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,n=e===void 0?S:e,r=mt[n][t],i=dt[n][t]||dt[n][r],o=t in j.styles?t:null;return i||o||null}var Na=(Ct={},N(Ct,S,Object.keys(vt[S])),N(Ct,O,Object.keys(vt[O])),Ct);function Yt(t){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=(a={},N(a,S,"".concat(m.cssPrefix,"-").concat(S)),N(a,O,"".concat(m.cssPrefix,"-").concat(O)),a),o=null,s=S;(t.includes(i[S])||t.some(function(c){return Na[S].includes(c)}))&&(s=S),(t.includes(i[O])||t.some(function(c){return Na[O].includes(c)}))&&(s=O);var l=t.reduce(function(c,f){var d=vn(m.cssPrefix,f);if(rt[f]?(f=un[s].includes(f)?$e[s][f]:f,o=f,c.prefix=f):mn[s].indexOf(f)>-1?(o=f,c.prefix=$t(f,{family:s})):d?c.iconName=d:f!==m.replacementClass&&f!==i[S]&&f!==i[O]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var k=o==="fa"?ve(c.iconName):{},x=Z(c.prefix,c.iconName);k.prefix&&(o=null),c.iconName=k.iconName||x||c.iconName,c.prefix=k.prefix||c.prefix,c.prefix==="far"&&!rt.far&&rt.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},ba());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===O&&(rt.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=Z(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=q()||"fas"),l}var bn=function(){function t(){Ee(this,t),this.definitions={}}return Ce(t,[{key:"add",value:function(){for(var e=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=u(u({},e.definitions[s]||{}),o[s]),ta(s,o[s]);var l=vt[S][s];l&&ta(l,o[s]),de()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];e[s]||(e[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(e[s][d]=c)}),e[s][l]=c}),e}}]),t}(),Ta=[],it={},ot={},yn=Object.keys(ot);function hn(t,a){var e=a.mixoutsTo;return Ta=t,it={},Object.keys(ot).forEach(function(n){yn.indexOf(n)===-1&&delete ot[n]}),Ta.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),Lt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){it[o]||(it[o]=[]),it[o].push(i[o])})}n.provides&&n.provides(ot)}),e}function aa(t,a){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];var i=it[t]||[];return i.forEach(function(o){a=o.apply(null,[a].concat(n))}),a}function et(t){for(var a=arguments.length,e=new Array(a>1?a-1:0),n=1;n<a;n++)e[n-1]=arguments[n];var r=it[t]||[];r.forEach(function(i){i.apply(null,e)})}function V(){var t=arguments[0],a=Array.prototype.slice.call(arguments,1);return ot[t]?ot[t].apply(null,a):void 0}function ea(t){t.prefix==="fa"&&(t.prefix="fas");var a=t.iconName,e=t.prefix||q();if(a)return a=Z(e,a)||a,Ca(ge.definitions,e,a)||Ca(j.styles,e,a)}var ge=new bn,kn=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,et("noAuto")},wn={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(et("beforeI2svg",a),V("pseudoElements2svg",a),V("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,on(function(){An({autoReplaceSvgRoot:e}),et("watch",a)})}},xn={icon:function(a){if(a===null)return null;if(Lt(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:Z(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],n=$t(a[0]);return{prefix:n,iconName:Z(n,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(m.cssPrefix,"-"))>-1||a.match(Ye))){var r=Yt(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||q(),iconName:Z(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=q();return{prefix:i,iconName:Z(i,a)||a}}}},R={noAuto:kn,config:m,dom:wn,parse:xn,library:ge,findIconDefinition:ea,toHtml:kt},An=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,n=e===void 0?P:e;(Object.keys(j.styles).length>0||m.autoFetchSvg)&&U&&m.autoReplaceSvg&&R.dom.i2svg({node:n})};function Ht(t,a){return Object.defineProperty(t,"abstract",{get:a}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return kt(n)})}}),Object.defineProperty(t,"node",{get:function(){if(U){var n=P.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function _n(t){var a=t.children,e=t.main,n=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(va(o)&&e.found&&!n.found){var s=e.width,l=e.height,c={x:s/l/2,y:.5};r.style=Dt(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function Sn(t){var a=t.prefix,e=t.iconName,n=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(a,"-").concat(m.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:n}]}]}function ya(t){var a=t.icons,e=a.main,n=a.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,f=t.titleId,d=t.extra,k=t.watchable,x=k===void 0?!1:k,T=n.found?n:e,L=T.width,M=T.height,g=r==="fak",p=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(W){return d.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(d.classes).join(" "),_={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(M)})},E=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(L/M*16*.0625,"em")}:{};x&&(_.attributes[at]=""),l&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(f||pt())},children:[l]}),delete _.attributes.title);var I=u(u({},_),{},{prefix:r,iconName:i,main:e,mask:n,maskId:c,transform:o,symbol:s,styles:u(u({},E),d.styles)}),D=n.found&&e.found?V("generateAbstractMask",I)||{children:[],attributes:{}}:V("generateAbstractIcon",I)||{children:[],attributes:{}},F=D.children,Bt=D.attributes;return I.children=F,I.attributes=Bt,s?Sn(I):_n(I)}function La(t){var a=t.content,e=t.width,n=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[at]="");var f=u({},o.styles);va(r)&&(f.transform=an({transform:r,startCentered:!0,width:e,height:n}),f["-webkit-transform"]=f.transform);var d=Dt(f);d.length>0&&(c.style=d);var k=[];return k.push({tag:"span",attributes:c,children:[a]}),i&&k.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),k}function Pn(t){var a=t.content,e=t.title,n=t.extra,r=u(u(u({},n.attributes),e?{title:e}:{}),{},{class:n.classes.join(" ")}),i=Dt(n.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[a]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Wt=j.styles;function na(t){var a=t[0],e=t[1],n=t.slice(4),r=la(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(J.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(J.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(J.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:o}}var On={found:!1,width:512,height:512};function En(t,a){!ae&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(a,'" is missing.'))}function ra(t,a){var e=a;return a==="fa"&&m.styleDefault!==null&&(a=q()),new Promise(function(n,r){if(V("missingIconAbstract"),e==="fa"){var i=ve(t)||{};t=i.iconName||t,a=i.prefix||a}if(t&&a&&Wt[a]&&Wt[a][t]){var o=Wt[a][t];return n(na(o))}En(t,a),n(u(u({},On),{},{icon:m.showMissingIcons&&t?V("missingIconAbstract")||{}:{}}))})}var Ma=function(){},ia=m.measurePerformance&&wt&&wt.mark&&wt.measure?wt:{mark:Ma,measure:Ma},ft='FA "6.5.2"',Cn=function(a){return ia.mark("".concat(ft," ").concat(a," begins")),function(){return pe(a)}},pe=function(a){ia.mark("".concat(ft," ").concat(a," ends")),ia.measure("".concat(ft," ").concat(a),"".concat(ft," ").concat(a," begins"),"".concat(ft," ").concat(a," ends"))},ha={begin:Cn,end:pe},Nt=function(){};function za(t){var a=t.getAttribute?t.getAttribute(at):null;return typeof a=="string"}function In(t){var a=t.getAttribute?t.getAttribute(ca):null,e=t.getAttribute?t.getAttribute(ua):null;return a&&e}function Nn(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Tn(){if(m.autoReplaceSvg===!0)return Tt.replace;var t=Tt[m.autoReplaceSvg];return t||Tt.replace}function Ln(t){return P.createElementNS("http://www.w3.org/2000/svg",t)}function Mn(t){return P.createElement(t)}function be(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,n=e===void 0?t.tag==="svg"?Ln:Mn:e;if(typeof t=="string")return P.createTextNode(t);var r=n(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(be(o,{ceFn:n}))}),r}function zn(t){var a=" ".concat(t.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var Tt={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(be(r),e)}),e.getAttribute(at)===null&&m.keepOriginalSource){var n=P.createComment(zn(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(a){var e=a[0],n=a[1];if(~da(e).indexOf(m.replacementClass))return Tt.replace(a);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return kt(s)}).join(`
`);e.setAttribute(at,""),e.innerHTML=o}};function Ra(t){t()}function ye(t,a){var e=typeof a=="function"?a:Nt;if(t.length===0)e();else{var n=Ra;m.mutateApproach===je&&(n=K.requestAnimationFrame||Ra),n(function(){var r=Tn(),i=ha.begin("mutate");t.map(r),i(),e()})}}var ka=!1;function he(){ka=!0}function oa(){ka=!1}var zt=null;function Fa(t){if(Pa&&m.observeMutations){var a=t.treeCallback,e=a===void 0?Nt:a,n=t.nodeCallback,r=n===void 0?Nt:n,i=t.pseudoElementsCallback,o=i===void 0?Nt:i,s=t.observeMutationsRoot,l=s===void 0?P:s;zt=new Pa(function(c){if(!ka){var f=q();lt(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!za(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&za(d.target)&&~Ue.indexOf(d.attributeName))if(d.attributeName==="class"&&In(d.target)){var k=Yt(da(d.target)),x=k.prefix,T=k.iconName;d.target.setAttribute(ca,x||f),T&&d.target.setAttribute(ua,T)}else Nn(d.target)&&r(d.target)})}}),U&&zt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Rn(){zt&&zt.disconnect()}function Fn(t){var a=t.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),e}function jn(t){var a=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",r=Yt(da(t));return r.prefix||(r.prefix=q()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=gn(r.prefix,t.innerText)||pa(r.prefix,Zt(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Dn(t){var a=lt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return m.autoA11y&&(e?a["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(n||pt()):(a["aria-hidden"]="true",a.focusable="false")),a}function $n(){return{iconName:null,title:null,titleId:null,prefix:null,transform:$,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ja(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=jn(t),n=e.iconName,r=e.prefix,i=e.rest,o=Dn(t),s=aa("parseNodeAttributes",{},t),l=a.styleParser?Fn(t):[];return u({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:$,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Yn=j.styles;function ke(t){var a=m.autoReplaceSvg==="nest"?ja(t,{styleParser:!1}):ja(t);return~a.extra.classes.indexOf(ee)?V("generateLayersText",t,a):V("generateSvgReplacementMutation",t,a)}var Q=new Set;ma.map(function(t){Q.add("fa-".concat(t))});Object.keys(mt[S]).map(Q.add.bind(Q));Object.keys(mt[O]).map(Q.add.bind(Q));Q=yt(Q);function Da(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();var e=P.documentElement.classList,n=function(d){return e.add("".concat(Oa,"-").concat(d))},r=function(d){return e.remove("".concat(Oa,"-").concat(d))},i=m.autoFetchSvg?Q:ma.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Yn));i.includes("fa")||i.push("fa");var o=[".".concat(ee,":not([").concat(at,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(at,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=lt(t.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var l=ha.begin("onTree"),c=s.reduce(function(f,d){try{var k=ke(d);k&&f.push(k)}catch(x){ae||x.name==="MissingIcon"&&console.error(x)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(k){ye(k,function(){n("active"),n("complete"),r("pending"),typeof a=="function"&&a(),l(),f()})}).catch(function(k){l(),d(k)})})}function Hn(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ke(t).then(function(e){e&&ye([e],a)})}function Bn(t){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(a||{}).icon?a:ea(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:ea(r||{})),t(n,u(u({},e),{},{mask:r}))}}var Vn=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?$:n,i=e.symbol,o=i===void 0?!1:i,s=e.mask,l=s===void 0?null:s,c=e.maskId,f=c===void 0?null:c,d=e.title,k=d===void 0?null:d,x=e.titleId,T=x===void 0?null:x,L=e.classes,M=L===void 0?[]:L,g=e.attributes,p=g===void 0?{}:g,_=e.styles,E=_===void 0?{}:_;if(a){var I=a.prefix,D=a.iconName,F=a.icon;return Ht(u({type:"icon"},a),function(){return et("beforeDOMElementCreation",{iconDefinition:a,params:e}),m.autoA11y&&(k?p["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(T||pt()):(p["aria-hidden"]="true",p.focusable="false")),ya({icons:{main:na(F),mask:l?na(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:D,transform:u(u({},$),r),symbol:o,title:k,maskId:f,titleId:T,extra:{attributes:p,styles:E,classes:M}})})}},Un={mixout:function(){return{icon:Bn(Vn)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Da,e.nodeCallback=Hn,e}}},provides:function(a){a.i2svg=function(e){var n=e.node,r=n===void 0?P:n,i=e.callback,o=i===void 0?function(){}:i;return Da(r,o)},a.generateSvgReplacementMutation=function(e,n){var r=n.iconName,i=n.title,o=n.titleId,s=n.prefix,l=n.transform,c=n.symbol,f=n.mask,d=n.maskId,k=n.extra;return new Promise(function(x,T){Promise.all([ra(r,s),f.iconName?ra(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var M=la(L,2),g=M[0],p=M[1];x([e,ya({icons:{main:g,mask:p},prefix:s,iconName:r,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:k,watchable:!0})])}).catch(T)})},a.generateAbstractIcon=function(e){var n=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,l=Dt(s);l.length>0&&(r.style=l);var c;return va(o)&&(c=V("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(c||i.icon),{children:n,attributes:r}}}},Wn={mixout:function(){return{layer:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return Ht({type:"layer"},function(){et("beforeDOMElementCreation",{assembler:e,params:n});var o=[];return e(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(yt(i)).join(" ")},children:o}]})}}}},Gn={mixout:function(){return{counter:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,o=n.classes,s=o===void 0?[]:o,l=n.attributes,c=l===void 0?{}:l,f=n.styles,d=f===void 0?{}:f;return Ht({type:"counter",content:e},function(){return et("beforeDOMElementCreation",{content:e,params:n}),Pn({content:e.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(yt(s))}})})}}}},Xn={mixout:function(){return{text:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?$:r,o=n.title,s=o===void 0?null:o,l=n.classes,c=l===void 0?[]:l,f=n.attributes,d=f===void 0?{}:f,k=n.styles,x=k===void 0?{}:k;return Ht({type:"text",content:e},function(){return et("beforeDOMElementCreation",{content:e,params:n}),La({content:e,transform:u(u({},$),i),title:s,extra:{attributes:d,styles:x,classes:["".concat(m.cssPrefix,"-layers-text")].concat(yt(c))}})})}}},provides:function(a){a.generateLayersText=function(e,n){var r=n.title,i=n.transform,o=n.extra,s=null,l=null;if(Ja){var c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/c,l=f.height/c}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,La({content:e.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Kn=new RegExp('"',"ug"),$a=[1105920,1112319];function qn(t){var a=t.replace(Kn,""),e=fn(a,0),n=e>=$a[0]&&e<=$a[1],r=a.length===2?a[0]===a[1]:!1;return{value:Zt(r?a[0]:a),isSecondary:n||r}}function Ya(t,a){var e="".concat(Fe).concat(a.replace(":","-"));return new Promise(function(n,r){if(t.getAttribute(e)!==null)return n();var i=lt(t.children),o=i.filter(function(F){return F.getAttribute(Jt)===a})[0],s=K.getComputedStyle(t,a),l=s.getPropertyValue("font-family").match(He),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),n();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),k=~["Sharp"].indexOf(l[2])?O:S,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?dt[k][l[2].toLowerCase()]:Be[k][c],T=qn(d),L=T.value,M=T.isSecondary,g=l[0].startsWith("FontAwesome"),p=pa(x,L),_=p;if(g){var E=pn(L);E.iconName&&E.prefix&&(p=E.iconName,x=E.prefix)}if(p&&!M&&(!o||o.getAttribute(ca)!==x||o.getAttribute(ua)!==_)){t.setAttribute(e,_),o&&t.removeChild(o);var I=$n(),D=I.extra;D.attributes[Jt]=a,ra(p,x).then(function(F){var Bt=ya(u(u({},I),{},{icons:{main:F,mask:ba()},prefix:x,iconName:_,extra:D,watchable:!0})),W=P.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?t.insertBefore(W,t.firstChild):t.appendChild(W),W.outerHTML=Bt.map(function(_e){return kt(_e)}).join(`
`),t.removeAttribute(e),n()}).catch(r)}else n()}else n()})}function Qn(t){return Promise.all([Ya(t,"::before"),Ya(t,"::after")])}function Jn(t){return t.parentNode!==document.head&&!~De.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Jt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ha(t){if(U)return new Promise(function(a,e){var n=lt(t.querySelectorAll("*")).filter(Jn).map(Qn),r=ha.begin("searchPseudoElements");he(),Promise.all(n).then(function(){r(),oa(),a()}).catch(function(){r(),oa(),e()})})}var Zn={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Ha,e}}},provides:function(a){a.pseudoElements2svg=function(e){var n=e.node,r=n===void 0?P:n;m.searchPseudoElements&&Ha(r)}}},Ba=!1,tr={mixout:function(){return{dom:{unwatch:function(){he(),Ba=!0}}}},hooks:function(){return{bootstrap:function(){Fa(aa("mutationObserverCallbacks",{}))},noAuto:function(){Rn()},watch:function(e){var n=e.observeMutationsRoot;Ba?oa():Fa(aa("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Va=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)},ar={mixout:function(){return{parse:{transform:function(e){return Va(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,n){var r=n.getAttribute("data-fa-transform");return r&&(e.transform=Va(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var n=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},k={transform:"translate(".concat(o/2*-1," -256)")},x={outer:s,inner:d,path:k};return{tag:"g",attributes:u({},x.outer),children:[{tag:"g",attributes:u({},x.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:u(u({},n.icon.attributes),x.path)}]}]}}}},Gt={x:0,y:0,width:"100%",height:"100%"};function Ua(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||a)&&(t.attributes.fill="black"),t}function er(t){return t.tag==="g"?t.children:[t]}var nr={hooks:function(){return{parseNodeAttributes:function(e,n){var r=n.getAttribute("data-fa-mask"),i=r?Yt(r.split(" ").map(function(o){return o.trim()})):ba();return i.prefix||(i.prefix=q()),e.mask=i,e.maskId=n.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var n=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,l=e.transform,c=i.width,f=i.icon,d=o.width,k=o.icon,x=tn({transform:l,containerWidth:d,iconWidth:c}),T={tag:"rect",attributes:u(u({},Gt),{},{fill:"white"})},L=f.children?{children:f.children.map(Ua)}:{},M={tag:"g",attributes:u({},x.inner),children:[Ua(u({tag:f.tag,attributes:u(u({},f.attributes),x.path)},L))]},g={tag:"g",attributes:u({},x.outer),children:[M]},p="mask-".concat(s||pt()),_="clip-".concat(s||pt()),E={tag:"mask",attributes:u(u({},Gt),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,g]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:er(k)},E]};return n.push(I,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(p,")")},Gt)}),{children:n,attributes:r}}}},rr={provides:function(a){var e=!1;K.matchMedia&&(e=K.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ir={hooks:function(){return{parseNodeAttributes:function(e,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},or=[nn,Un,Wn,Gn,Xn,Zn,tr,ar,nr,rr,ir];hn(or,{mixoutsTo:R});R.noAuto;R.config;R.library;R.dom;var sa=R.parse;R.findIconDefinition;R.toHtml;var sr=R.icon;R.layer;R.text;R.counter;function Wa(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,n)}return e}function Y(t){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?Wa(Object(e),!0).forEach(function(n){z(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Wa(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function Rt(t){"@babel/helpers - typeof";return Rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Rt(t)}function z(t,a,e){return a=ur(a),a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function lr(t,a){if(t==null)return{};var e={},n=Object.keys(t),r,i;for(i=0;i<n.length;i++)r=n[i],!(a.indexOf(r)>=0)&&(e[r]=t[r]);return e}function fr(t,a){if(t==null)return{};var e=lr(t,a),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(e[n]=t[n])}return e}function cr(t,a){if(typeof t!="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var n=e.call(t,a||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function ur(t){var a=cr(t,"string");return typeof a=="symbol"?a:String(a)}var mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},we={exports:{}};(function(t){(function(a){var e=function(g,p,_){if(!c(p)||d(p)||k(p)||x(p)||l(p))return p;var E,I=0,D=0;if(f(p))for(E=[],D=p.length;I<D;I++)E.push(e(g,p[I],_));else{E={};for(var F in p)Object.prototype.hasOwnProperty.call(p,F)&&(E[g(F,_)]=e(g,p[F],_))}return E},n=function(g,p){p=p||{};var _=p.separator||"_",E=p.split||/(?=[A-Z])/;return g.split(E).join(_)},r=function(g){return T(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(p,_){return _?_.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var p=r(g);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(g,p){return n(g,p).toLowerCase()},s=Object.prototype.toString,l=function(g){return typeof g=="function"},c=function(g){return g===Object(g)},f=function(g){return s.call(g)=="[object Array]"},d=function(g){return s.call(g)=="[object Date]"},k=function(g){return s.call(g)=="[object RegExp]"},x=function(g){return s.call(g)=="[object Boolean]"},T=function(g){return g=g-0,g===g},L=function(g,p){var _=p&&"process"in p?p.process:p;return typeof _!="function"?g:function(E,I){return _(E,g,I)}},M={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(g,p){return e(L(r,p),g)},decamelizeKeys:function(g,p){return e(L(o,p),g,p)},pascalizeKeys:function(g,p){return e(L(i,p),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=M:a.humps=M})(mr)})(we);var dr=we.exports,vr=["class","style"];function gr(t){return t.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var n=e.indexOf(":"),r=dr.camelize(e.slice(0,n)),i=e.slice(n+1).trim();return a[r]=i,a},{})}function pr(t){return t.split(/\s+/).reduce(function(a,e){return a[e]=!0,a},{})}function xe(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(l){return xe(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.class=pr(f);break;case"style":l.style=gr(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});e.class;var i=e.style,o=i===void 0?{}:i,s=fr(e,vr);return Pe(t.tag,Y(Y(Y({},a),{},{class:r.class,style:Y(Y({},r.style),o)},r.attrs),s),n)}var Ae=!1;try{Ae=!0}catch{}function br(){if(!Ae&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Xt(t,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?z({},t,a):{}}function yr(t){var a,e=(a={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},z(a,"fa-".concat(t.size),t.size!==null),z(a,"fa-rotate-".concat(t.rotation),t.rotation!==null),z(a,"fa-pull-".concat(t.pull),t.pull!==null),z(a,"fa-swap-opacity",t.swapOpacity),z(a,"fa-bounce",t.bounce),z(a,"fa-shake",t.shake),z(a,"fa-beat",t.beat),z(a,"fa-fade",t.fade),z(a,"fa-beat-fade",t.beatFade),z(a,"fa-flash",t.flash),z(a,"fa-spin-pulse",t.spinPulse),z(a,"fa-spin-reverse",t.spinReverse),a);return Object.keys(e).map(function(n){return e[n]?n:null}).filter(function(n){return n})}function Ga(t){if(t&&Rt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(sa.icon)return sa.icon(t);if(t===null)return null;if(Rt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var tt=bt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(a){return[!0,!1,"horizontal","vertical","both"].indexOf(a)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(a){return["right","left"].indexOf(a)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(a){return[90,180,270].indexOf(Number.parseInt(a,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(a){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(a)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(a,e){var n=e.attrs,r=nt(function(){return Ga(a.icon)}),i=nt(function(){return Xt("classes",yr(a))}),o=nt(function(){return Xt("transform",typeof a.transform=="string"?sa.transform(a.transform):a.transform)}),s=nt(function(){return Xt("mask",Ga(a.mask))}),l=nt(function(){return sr(r.value,Y(Y(Y(Y({},i.value),o.value),s.value),{},{symbol:a.symbol,title:a.title,titleId:a.titleId,maskId:a.maskId}))});Se(l,function(f){if(!f)return br("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=nt(function(){return l.value?xe(l.value.abstract[0],{},n):null});return function(){return c.value}}}),hr={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},kr={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"]},wr={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]},Kt={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"]},xr={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};const Ar={class:"mb-6 ms-8"},_r={class:"absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-md -start-4 ring-6 dark:bg-blue-900"},Sr={class:"mb-1 text-lg font-semibold text-gray-900 dark:text-slate-300"},Pr={class:"mb-1 text-md font-semibold text-gray-900 dark:text-slate-300"},Or={class:"mb-1 text-sm font-medium text-gray-600 dark:text-slate-300"},Er={class:"mb-1 text-sm font-medium text-gray-600 dark:text-gray-500"},Cr={class:"flex flex-wrap"},Ir={class:"ml-4 my-2 text-base font-normal text-gray-900 dark:text-gray-400"},It=bt({__name:"ResumeItem",setup(t){return(a,e)=>(Ft(),jt("li",Ar,[C("span",_r,[X(a.$slots,"icon")]),C("h2",Sr,[X(a.$slots,"heading")]),C("h3",Pr,[h(y(tt),{class:"mr-2",icon:y(kr)},null,8,["icon"]),X(a.$slots,"sub-heading")]),C("div",Or,[h(y(tt),{class:"mr-2",icon:y(wr)},null,8,["icon"]),X(a.$slots,"period")]),C("div",Er,[h(y(tt),{class:"mr-2",icon:y(hr)},null,8,["icon"]),X(a.$slots,"location")]),C("div",Cr,[X(a.$slots,"technologies")]),C("p",Ir,[X(a.$slots,"default")])]))}});var w=(t=>(t[t.Frameworks=0]="Frameworks",t[t.Programming=1]="Programming",t[t.Tool=2]="Tool",t))(w||{});const A=bt({__name:"ItemPill",props:{category:{type:Number,default:w.Programming}},setup(t){return(a,e)=>(Ft(),jt("span",{class:Oe([{"bg-teal-900":t.category===y(w).Programming,"bg-orange-800":t.category===y(w).Frameworks,"bg-blue-800":t.category===y(w).Tool},"mt-1 text-white text-xs font-medium me-1 px-2.5 py-0.5 rounded-full"])},[X(a.$slots,"default")],2))}}),Nr={class:"lg:h-full lg:max-h-screen lg:overflow-y-auto"},Tr={class:"relative ms-4 border-s border-gray-200 dark:border-gray-700 my-4"},Lr=C("br",null,null,-1),Mr=C("ul",{class:"space-y-2 list-disc"},[C("li",null,[b(" Developed new modules for "),C("a",{href:"https://elentra.org",target:"_blank"},"elentra.org"),b(", a medical education platform maintained by an international consortium of medical schools. ")]),C("li",null," Ensured code quality through code reviews and collaboration in an Agile (Scrum) environment. "),C("li",null,"Contributed to the Elentra Platform's architecture committee.")],-1),zr=C("ul",{class:"space-y-2 list-disc"},[C("li",null," Built a web platform for managing Brazilian healthcare professional courses and implemented data pipelines & visualizations (using Power BI) for course analysis. ")],-1),Rr=C("ul",{class:"space-y-2 list-disc"},[C("li",null," Designed and built a Laravel platform for MERCOSUR and Brazil's Ministry of Health to manage healthcare professional applications for international work. ")],-1),Fr=C("ul",{class:"space-y-2 list-disc"},[C("li",null,"With an academic exchange period at Langara College, Vancouver, BC (2013-2015).")],-1),jr=bt({__name:"ResumeItems",setup(t){return(a,e)=>(Ft(),jt("div",Nr,[C("ol",Tr,[h(It,null,{icon:v(()=>[h(y(tt),{icon:y(Kt)},null,8,["icon"])]),heading:v(()=>[b(" Senior Full Stack Web Developer (2022-2024) "),Lr,b(" Full Stack Web Developer (2018-2022) ")]),period:v(()=>[b("2018-2024")]),"sub-heading":v(()=>[b("Queen's University")]),location:v(()=>[b("Kingston, Ontario")]),technologies:v(()=>[h(A,{category:y(w).Programming},{default:v(()=>[b("PHP")]),_:1},8,["category"]),h(A,{category:y(w).Programming},{default:v(()=>[b("JavaScript")]),_:1},8,["category"]),h(A,{category:y(w).Programming},{default:v(()=>[b("TypeScript")]),_:1},8,["category"]),h(A,{category:y(w).Programming},{default:v(()=>[b("SQL")]),_:1},8,["category"]),h(A,{category:y(w).Programming},{default:v(()=>[b("Bash")]),_:1},8,["category"]),h(A,{category:y(w).Frameworks},{default:v(()=>[b("Laravel")]),_:1},8,["category"]),h(A,{category:y(w).Frameworks},{default:v(()=>[b("Vue.js")]),_:1},8,["category"]),h(A,{category:y(w).Frameworks},{default:v(()=>[b("VueX/Pinia")]),_:1},8,["category"]),h(A,{category:y(w).Frameworks},{default:v(()=>[b("GraphQL")]),_:1},8,["category"]),h(A,{category:y(w).Tool},{default:v(()=>[b("Docker")]),_:1},8,["category"]),h(A,{category:y(w).Tool},{default:v(()=>[b("Vite")]),_:1},8,["category"]),h(A,{category:y(w).Tool},{default:v(()=>[b("MySQL/MariaDB")]),_:1},8,["category"]),h(A,{category:y(w).Tool},{default:v(()=>[b("Git")]),_:1},8,["category"]),h(A,{category:y(w).Tool},{default:v(()=>[b("Postman")]),_:1},8,["category"])]),default:v(()=>[Mr]),_:1}),h(It,null,{icon:v(()=>[h(y(tt),{icon:y(Kt)},null,8,["icon"])]),heading:v(()=>[b("Full Stack Web Developer")]),"sub-heading":v(()=>[b("Fiotec (Foundation for Scientific and Technological Development in Health)")]),period:v(()=>[b("2018-2018")]),location:v(()=>[b("Natal, Brazil")]),technologies:v(()=>[h(A,{category:y(w).Programming},{default:v(()=>[b("Python")]),_:1},8,["category"]),h(A,{category:y(w).Programming},{default:v(()=>[b("JavaScript")]),_:1},8,["category"]),h(A,{category:y(w).Programming},{default:v(()=>[b("SQL")]),_:1},8,["category"]),h(A,{category:y(w).Programming},{default:v(()=>[b("Bash")]),_:1},8,["category"]),h(A,{category:y(w).Frameworks},{default:v(()=>[b("Django")]),_:1},8,["category"]),h(A,{category:y(w).Tool},{default:v(()=>[b("Git")]),_:1},8,["category"]),h(A,{category:y(w).Tool},{default:v(()=>[b("PostgreSQL")]),_:1},8,["category"])]),default:v(()=>[zr]),_:1}),h(It,null,{icon:v(()=>[h(y(tt),{icon:y(Kt)},null,8,["icon"])]),heading:v(()=>[b("Full Stack Web Developer Intern")]),"sub-heading":v(()=>[b("Laboratory for Technological Innovation in Healthcare")]),period:v(()=>[b("2015-2017")]),location:v(()=>[b("Natal, Brazil")]),technologies:v(()=>[h(A,{category:y(w).Programming},{default:v(()=>[b("PHP")]),_:1},8,["category"]),h(A,{category:y(w).Programming},{default:v(()=>[b("JavaScript")]),_:1},8,["category"]),h(A,{category:y(w).Programming},{default:v(()=>[b("SQL")]),_:1},8,["category"]),h(A,{category:y(w).Programming},{default:v(()=>[b("Bash")]),_:1},8,["category"]),h(A,{category:y(w).Frameworks},{default:v(()=>[b("Laravel")]),_:1},8,["category"]),h(A,{category:y(w).Tool},{default:v(()=>[b("Docker")]),_:1},8,["category"]),h(A,{category:y(w).Tool},{default:v(()=>[b("MySQL")]),_:1},8,["category"]),h(A,{category:y(w).Tool},{default:v(()=>[b("Git")]),_:1},8,["category"]),h(A,{category:y(w).Tool},{default:v(()=>[b("Postman")]),_:1},8,["category"]),h(A,{category:y(w).Tool},{default:v(()=>[b("CI/CD")]),_:1},8,["category"])]),default:v(()=>[Rr]),_:1}),h(It,null,{icon:v(()=>[h(y(tt),{icon:y(xr)},null,8,["icon"])]),period:v(()=>[b("Class of 2017")]),location:v(()=>[b("Natal, Brazil")]),heading:v(()=>[b("Bachelor of Technology in System Analysis and Software Development")]),"sub-heading":v(()=>[b("Federal Institute of Technology of Rio Grande do Norte (IFRN)")]),default:v(()=>[Fr]),_:1})])]))}}),$r=bt({__name:"AboutView",setup(t){return(a,e)=>(Ft(),jt("main",null,[h(jr)]))}});export{$r as default};
