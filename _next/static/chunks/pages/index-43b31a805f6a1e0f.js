(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7942:function(e,t,n){"use strict";var i=n(3038);t.default=void 0;var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(4957),s=n(9898),d=n(639);var l={};function p(e,t,n,i){if(e&&a.isLocalURL(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var c=function(e){var t,n=!1!==e.prefetch,r=s.useRouter(),c=o.default.useMemo((function(){var t=a.resolveHref(r,e.href,!0),n=i(t,2),o=n[0],s=n[1];return{href:o,as:e.as?a.resolveHref(r,e.as):s||o}}),[r,e.href,e.as]),f=c.href,m=c.as,u=e.children,x=e.replace,h=e.shallow,g=e.scroll,y=e.locale;"string"===typeof u&&(u=o.default.createElement("a",null,u));var b=(t=o.default.Children.only(u))&&"object"===typeof t&&t.ref,j=d.useIntersection({rootMargin:"200px"}),w=i(j,2),_=w[0],C=w[1],k=o.default.useCallback((function(e){_(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,_]);o.default.useEffect((function(){var e=C&&n&&a.isLocalURL(f),t="undefined"!==typeof y?y:r&&r.locale,i=l[f+"%"+m+(t?"%"+t:"")];e&&!i&&p(r,f,m,{locale:t})}),[m,f,C,y,n,r]);var v={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,o,s,d){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==s&&i.indexOf("#")>=0&&(s=!1),t[r?"replace":"push"](n,i,{shallow:o,locale:d,scroll:s}))}(e,r,f,m,x,h,g,y)},onMouseEnter:function(e){a.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),p(r,f,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof y?y:r&&r.locale,I=r&&r.isLocaleDomain&&a.getDomainLocale(m,S,r&&r.locales,r&&r.domainLocales);v.href=I||a.addBasePath(a.addLocale(m,S,r&&r.defaultLocale))}return o.default.cloneElement(t,v)};t.default=c},639:function(e,t,n){"use strict";var i=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,d=r.useRef(),l=r.useState(!1),p=i(l,2),c=p[0],f=p[1],m=r.useCallback((function(e){d.current&&(d.current(),d.current=void 0),n||c||e&&e.tagName&&(d.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,c]);return r.useEffect((function(){if(!a&&!c){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[c]),[m,c]};var r=n(7294),o=n(6286),a="undefined"!==typeof IntersectionObserver;var s=new Map},5869:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});n(7294);var i=n(5893),r=function(){return(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsxs)("g",{opacity:"0.15",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",stroke:"url(#paint0_radial)",id:"path_0"}),(0,i.jsx)("path",{d:"M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",stroke:"url(#paint1_radial)",id:"path_1"}),(0,i.jsx)("path",{d:"M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",stroke:"url(#paint2_radial)",id:"path_2"})]}),(0,i.jsx)("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#945DD6",children:(0,i.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,i.jsx)("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint3_linear)",children:(0,i.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,i.jsx)("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#46737",children:(0,i.jsx)("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,i.jsx)("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint7_linear)",children:(0,i.jsx)("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,i.jsx)("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#945DD6",children:(0,i.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint4_linear)",children:(0,i.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("ellipse",{cx:"382.164",cy:"155.029",rx:"1.07433",ry:"1.07306",transform:"translate(-382.164 -155.029) rotate(90 382.164 155.029)",fill:"#F46737",children:(0,i.jsx)("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("path",{d:"M381.81 154.669L356.057 128.885",transform:"translate(-381.81 -154.669) rotate(-45 381.81 154.669)",stroke:"url(#paint5_linear)",children:(0,i.jsx)("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("ellipse",{cx:"333.324",cy:"382.691",rx:"1.07306",ry:"1.07433",transform:"translate(-333.324 -382.691) rotate(-180 333.324 382.691)",fill:"#F46737",children:(0,i.jsx)("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_1"})})}),(0,i.jsx)("path",{d:"M333.667 382.335L359.42 356.551",transform:"scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",stroke:"url(#paint6_linear)",children:(0,i.jsx)("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_1"})})}),(0,i.jsx)("ellipse",{cx:"165.524",cy:"93.9596",rx:"1.07306",ry:"1.07433",transform:"translate(-165.524 -93.9596)",fill:"#F46737",children:(0,i.jsx)("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("path",{d:"M165.182 94.3159L139.429 120.1",transform:"translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",stroke:"url(#paint7_linear)",children:(0,i.jsx)("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#13ADC7",children:(0,i.jsx)("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsx)("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint11_linear)",children:(0,i.jsx)("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:(0,i.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,i.jsxs)("defs",{children:[(0,i.jsxs)("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[(0,i.jsx)("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),(0,i.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,i.jsxs)("radialGradient",{id:"paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[(0,i.jsx)("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),(0,i.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,i.jsxs)("radialGradient",{id:"paint2_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[(0,i.jsx)("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),(0,i.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint3_linear",x1:"295.043",y1:"193.116",x2:"269.975",y2:"218.154",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#945DD6"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint4_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#945DD6"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint5_linear",x1:"382.168",y1:"155.027",x2:"357.1",y2:"129.989",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#F46737"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint6_linear",x1:"333.309",y1:"382.693",x2:"358.376",y2:"357.655",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#F46737"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint7_linear",x1:"165.54",y1:"93.9578",x2:"140.472",y2:"118.996",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#F46737"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint8_linear",x1:"414.367",y1:"301.156",x2:"439.435",y2:"276.118",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#13ADC7"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint9_linear",x1:"515.943",y1:"288.238",x2:"541.339",y2:"291.454",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#13ADC7"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint10_linear",x1:"117.001",y1:"230.619",x2:"117.36",y2:"258.193",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#945DD6"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),(0,i.jsxs)("linearGradient",{id:"paint11_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#13ADC7"}),(0,i.jsx)("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]})]})]})})},o=n(7379),a=o.default.section.withConfig({displayName:"GlobalComponents__Section",componentId:"sc-6qzy6y-0"})(["display:",";flex-direction:",";padding:",";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ","{padding:24px 48px 0;flex-direction:column;}@media ","{padding:",";width:calc(100vw - 32px);flex-direction:column;}"],(function(e){return e.grid?"grid":"flex"}),(function(e){return e.row?"row":"column"}),(function(e){return e.nopadding?"0":"32px 48px 0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.nopadding?"0":"16px 16px 0"})),s=o.default.h2.withConfig({displayName:"GlobalComponents__SectionTitle",componentId:"sc-6qzy6y-1"})(["font-weight:800;font-size:",";line-height:",";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:",";@media ","{font-size:",";line-height:",";margin-bottom:12px;padding:",";}@media ","{font-size:32px;line-height:40px;font-size:",";line-height:",";margin-bottom:8px;padding:",";max-width:100%;}"],(function(e){return e.main?"65px":"56px"}),(function(e){return e.main?"72px":"56px"}),(function(e){return e.main?"58px 0 16px":"0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"40px 0 12px":"0"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.main?"28px":"32px"}),(function(e){return e.main?"32px":"40px"}),(function(e){return e.main?"16px 0 8px":"0"})),d=o.default.p.withConfig({displayName:"GlobalComponents__SectionText",componentId:"sc-6qzy6y-2"})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ","{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ","{font-size:16px;line-height:24px;padding-bottom:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),l=o.default.div.withConfig({displayName:"GlobalComponents__SectionDivider",componentId:"sc-6qzy6y-3"})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:",";margin:",";@media ","{width:48px;height:4px;}@media ","{width:32px;height:2px;}"],(function(e){return e.colorAlt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(e){return e.divider?"4rem 0":""}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),p=(o.default.p.withConfig({displayName:"GlobalComponents__SectionSubText",componentId:"sc-6qzy6y-4"})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ","{max-width:672px;font-size:16px;line-height:25px;}@media ","{font-size:14px;line-height:22px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.button.withConfig({displayName:"GlobalComponents__SecondaryBtn",componentId:"sc-6qzy6y-5"})(["color:#FFF;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ","{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"GlobalComponents__ButtonBack",componentId:"sc-6qzy6y-6"})(["width:",";height:",";border-radius:50px;font-size:",";font-weight:600;display:flex;align-items:center;justify-content:center;margin:",";color:#fff;background:",";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:",";@media ","{width:",";height:",";font-size:",";margin-bottom:",";}@media ","{width:100%;height:32px;font-size:14px;margin-bottom:",";}"],(function(e){return e.alt?"150px":"262px"}),(function(e){return e.alt?"52px":"64px"}),(function(e){return e.alt?"20px":"24px"}),(function(e){var t=e.alt,n=e.form;return t||n?"0":"0 0 80px"}),(function(e){return e.alt?"linear-gradient(270deg, #ff622e 0%, #B133FF 100%)":"linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"150px":"184px"}),(function(e){return e.alt?"52px":"48px"}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.alt?"0":"64px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.alt?"0":"32px"})),o.default.button.withConfig({displayName:"GlobalComponents__ButtonFront",componentId:"sc-6qzy6y-7"})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(270deg,#F46737 0%,#FAD089 100%);opacity:",";transition:.4s ease;font-size:",";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:",";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{font-size:",";}@media ","{font-size:14px;}"],(function(e){return e.disabled?".5":"1"}),(function(e){return e.alt?"20px":"24px"}),(function(e){return e.disabled?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"GlobalComponents__LinkContainer",componentId:"sc-6qzy6y-8"})(["margin-left:",";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ","{margin-left:",";}@media ","{margin-left:",";}"],(function(e){return e.large?"24px":"16px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.large?"16px":"8px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"0":"8px"})),o.default.div.withConfig({displayName:"GlobalComponents__LinkIconImg",componentId:"sc-6qzy6y-9"})(["display:flex;height:",";@media ","{height:",";}@media ","{height:",";}"],(function(e){return e.large?"32px":"24px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.nav?"16px":"24px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"32px":"16px"})),o.default.div.withConfig({displayName:"HeroStyles__LeftSection",componentId:"pbjia3-0"})(["width:100%;@media ","{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ","{width:100%;display:flex;flex-direction:column;margin:0 auto;}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.md}))),c=function(){return(0,i.jsx)(a,{row:!0,nopadding:!0,children:(0,i.jsxs)(p,{children:[(0,i.jsxs)(s,{main:!0,center:!0,children:["Hello there! ",(0,i.jsx)("br",{}),"I'm Christian Vargas"]}),(0,i.jsx)(d,{children:"I'm a computer engineering student, passionate about development. I consider myself as a person with a great curiosity, and always willing to learn more."})]})})},f=o.default.img.withConfig({displayName:"ProjectsStyles__Img",componentId:"l76idc-0"})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]),m=o.default.section.withConfig({displayName:"ProjectsStyles__GridContainer",componentId:"l76idc-1"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media ","{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"],(function(e){return e.theme.breakpoints.sm})),u=o.default.div.withConfig({displayName:"ProjectsStyles__BlogCard",componentId:"l76idc-2"})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;@media ","{width:100%;}"],(function(e){return e.theme.breakpoints.sm})),x=o.default.div.withConfig({displayName:"ProjectsStyles__TitleContent",componentId:"l76idc-3"})(["text-align:center;z-index:20;width:100%;"]),h=o.default.h3.withConfig({displayName:"ProjectsStyles__HeaderThree",componentId:"l76idc-4"})(["font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:.5rem 0;font-size:",";"],(function(e){return e.title?"3rem":"2rem"})),g=o.default.hr.withConfig({displayName:"ProjectsStyles__Hr",componentId:"l76idc-5"})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]),y=(o.default.div.withConfig({displayName:"ProjectsStyles__Intro",componentId:"l76idc-6"})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]),o.default.p.withConfig({displayName:"ProjectsStyles__CardInfo",componentId:"l76idc-7"})(["width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media ","{padding:.3rem}"],(function(e){return e.theme.breakpoints.sm}))),b=o.default.ul.withConfig({displayName:"ProjectsStyles__UtilityList",componentId:"l76idc-8"})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]),j=o.default.a.withConfig({displayName:"ProjectsStyles__ExternalLinks",componentId:"l76idc-9"})(["color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#801414;}cursor:pointer;"]),w=o.default.ul.withConfig({displayName:"ProjectsStyles__TagList",componentId:"l76idc-10"})(["display:flex;justify-content:space-around;padding:2rem;"]),_=o.default.li.withConfig({displayName:"ProjectsStyles__Tag",componentId:"l76idc-11"})(["color:#d8bfbf;font-size:1.5rem;"]),C=[{title:"Social Login",description:"Web App developed using React.js, Node.js and Passport.js. This app is a example of how to use your social media credentials to login to another website.",image:"https://i.ibb.co/xSt509M/2.png",tags:["React.js","Node.js","Passport.js"],source:"https://github.com/ChrisEVR/React-Social-Login",id:0},{title:"Notification App",description:"Web App developed using React.js, Node.js and Socket.io. This project is a example of how to use Socket.io to create an app able to notificate in real time when another user has executed an action.",image:"https://i.ibb.co/QFF3kHw/1.png",tags:["React","Node.js","Socket.io"],source:"https://github.com/ChrisEVR/React-Notification-App",id:1}],k=function(){return(0,i.jsxs)(a,{nopadding:!0,id:"projects",children:[(0,i.jsx)(l,{}),(0,i.jsx)(s,{main:!0,children:"Projects"}),(0,i.jsx)(m,{children:C.map((function(e){var t=e.id,n=e.image,r=e.title,o=e.description,a=e.tags,s=e.source;return(0,i.jsxs)(u,{children:[(0,i.jsx)(f,{src:n}),(0,i.jsxs)(x,{children:[(0,i.jsx)(h,{title:!0,children:r}),(0,i.jsx)(g,{})]}),(0,i.jsx)(y,{children:o}),(0,i.jsxs)("div",{children:[(0,i.jsx)(x,{children:"Stack"}),(0,i.jsx)(w,{children:a.map((function(e,t){return(0,i.jsx)(_,{children:e},t)}))})]}),(0,i.jsx)(b,{children:(0,i.jsx)(j,{href:s,children:"Code"})})]},t)}))})]})},v=n(859),S=(o.default.div.withConfig({displayName:"TechnologiesStyles__ImageContainer",componentId:"sc-1ehw0pq-0"})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ","{background-image:none;padding:0;margin-top:40px;}@media ","{background-image:none;padding:0;margin-top:16px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md})),o.default.img.withConfig({displayName:"TechnologiesStyles__MainImage",componentId:"sc-1ehw0pq-1"})(["width:100%;"]),o.default.ul.withConfig({displayName:"TechnologiesStyles__List",componentId:"sc-1ehw0pq-2"})(["list-style-type:none;display:grid;grid-template-columns:repeat(2,1fr);gap:40px;margin:3rem 0;@media ","{margin:64px 0;}@media ","{margin:64px 0;gap:24px}@media ","{display:flex;flex-direction:column;margin:32px 0;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}))),I=o.default.div.withConfig({displayName:"TechnologiesStyles__ListContainer",componentId:"sc-1ehw0pq-3"})(["display:flex;flex-direction:column;@media ","{display:flex;margin-left:18px;}"],(function(e){return e.theme.breakpoints.sm})),N=o.default.h4.withConfig({displayName:"TechnologiesStyles__ListTitle",componentId:"sc-1ehw0pq-4"})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:#FFFFFF;margin-bottom:8px;@media ","{font-size:24px;line-height:28px;}@media ","{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),z=o.default.p.withConfig({displayName:"TechnologiesStyles__ListParagraph",componentId:"sc-1ehw0pq-5"})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);@media ","{font-size:16px;line-height:28px;}@media ","{font-size:14px;line-height:22px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),L=o.default.li.withConfig({displayName:"TechnologiesStyles__ListItem",componentId:"sc-1ehw0pq-6"})(["max-width:320px;display:flex;flex-direction:column;@media ","{max-width:203px;}@media ","{margin-bottom:14px;max-width:320px;flex-direction:row;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),F=(o.default.img.withConfig({displayName:"TechnologiesStyles__ListIcon",componentId:"sc-1ehw0pq-7"})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ","{width:40px;height:40px;margin-bottom:8px;}@media ","{width:32px;height:32px;margin-bottom:0px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),function(){return(0,i.jsxs)(a,{id:"technologies",children:[(0,i.jsx)(l,{}),(0,i.jsx)(s,{children:"Technologies"}),(0,i.jsx)(d,{children:"I've experience with a range of technologies related to web development."}),(0,i.jsxs)(S,{children:[(0,i.jsxs)(L,{children:[(0,i.jsx)(v.GR$,{size:"3rem"}),(0,i.jsxs)(I,{children:[(0,i.jsx)(N,{children:"Front-End"}),(0,i.jsxs)(z,{children:["Experience with ",(0,i.jsx)("br",{}),"React.js ",(0,i.jsx)("br",{}),"Bootstrap ",(0,i.jsx)("br",{}),"JQuery ",(0,i.jsx)("br",{})]})]})]}),(0,i.jsxs)(L,{children:[(0,i.jsx)(v.NLu,{size:"3rem"}),(0,i.jsxs)(I,{children:[(0,i.jsx)(N,{children:"Back-End"}),(0,i.jsxs)(z,{children:["Experience with ",(0,i.jsx)("br",{}),"Node.js ",(0,i.jsx)("br",{}),"MySQL ",(0,i.jsx)("br",{}),"PHP ",(0,i.jsx)("br",{})]})]})]})]})]})}),D=n(8193),O=n(1649),M=o.default.div.withConfig({displayName:"HeaderStyles__Container",componentId:"sc-9w0vkp-0"})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ","{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),H=o.default.span.withConfig({displayName:"HeaderStyles__Span",componentId:"sc-9w0vkp-1"})(["font-size:2rem;"]),P=o.default.div.withConfig({displayName:"HeaderStyles__Div1",componentId:"sc-9w0vkp-2"})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ","{grid-area:1 / 1 / 2 / 3;}"],(function(e){return e.theme.breakpoints.sm})),E=o.default.div.withConfig({displayName:"HeaderStyles__Div2",componentId:"sc-9w0vkp-3"})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ","{grid-area:2 / 2 / 3 / 5;}"],(function(e){return e.theme.breakpoints.sm})),U=o.default.div.withConfig({displayName:"HeaderStyles__Div3",componentId:"sc-9w0vkp-4"})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ","{align-items:center;grid-area:1 / 4 / 2 / 6;}"],(function(e){return e.theme.breakpoints.sm})),T=o.default.a.withConfig({displayName:"HeaderStyles__NavLink",componentId:"sc-9w0vkp-5"})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ","{padding:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),B=(o.default.button.withConfig({displayName:"HeaderStyles__ContactDropDown",componentId:"sc-9w0vkp-6"})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ","{padding:0.4rem 0;}@media ","{padding:0;}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.md})),(0,o.default)(O.U0j).withConfig({displayName:"HeaderStyles__NavProductsIcon",componentId:"sc-9w0vkp-7"})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:",";transform:",";&:hover{opacity:1;}@media ","{margin:2px 0 0 2px;width:15px;}"],(function(e){return e.isOpen?"1":".75"}),(function(e){return e.isOpen?"scaleY(-1)":"scaleY(1)"}),(function(e){return e.theme.breakpoints.sm})),o.default.a.withConfig({displayName:"HeaderStyles__SocialIcons",componentId:"sc-9w0vkp-8"})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"])),G=o.default.section.withConfig({displayName:"FooterStyles__FooterWrapper",componentId:"sc-1ifsifd-0"})(["width:calc(100vw - 96px);max-width:1040px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ","{padding:0 16px 48px;width:calc(100vw - 32px);}"],(function(e){return e.theme.breakpoints.sm})),R=o.default.a.withConfig({displayName:"FooterStyles__LinkItem",componentId:"sc-1ifsifd-1"})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ","{font-size:16px;line-height:28px;display:flex;}@media ","{font-size:8px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),q=o.default.div.withConfig({displayName:"FooterStyles__SocialIconsContainer",componentId:"sc-1ifsifd-2"})(["max-width:1040px;display:flex;justify-content:flex-end;@media ","{display:flex;justify-content:space-between;}@media ","{display:flex;width:100%;flex-direction:column;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),A=(o.default.div.withConfig({displayName:"FooterStyles__CompanyContainer",componentId:"sc-1ifsifd-3"})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ","{flex-direction:column;align-items:baseline;}@media ","{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.p.withConfig({displayName:"FooterStyles__Slogan",componentId:"sc-1ifsifd-4"})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding:1rem;@media ","{font-size:16px;line-height:28px;}@media ","{line-height:22px;font-size:14px;min-width:100px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),o.default.div.withConfig({displayName:"FooterStyles__SocialContainer",componentId:"sc-1ifsifd-5"})(["display:flex;align-items:center;@media ","{justify-content:center;padding-right:16px;flex-wrap:wrap;}"],(function(e){return e.theme.breakpoints.md})),o.default.ul.withConfig({displayName:"FooterStyles__LinkList",componentId:"sc-1ifsifd-6"})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ","{padding:32px 0 16px;}@media ","{width:100%;padding:32px 0 16px;gap:16px;}@media ","{width:100%;padding:32px 4px 16px;gap:5px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}))),V=o.default.div.withConfig({displayName:"FooterStyles__LinkColumn",componentId:"sc-1ifsifd-7"})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]),K=o.default.h4.withConfig({displayName:"FooterStyles__LinkTitle",componentId:"sc-1ifsifd-8"})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;@media ","{font-size:10px;line-height:12px;margin-bottom:8px;}"],(function(e){return e.theme.breakpoints.sm})),W=function(){return(0,i.jsxs)(G,{children:[(0,i.jsx)(l,{}),(0,i.jsx)(A,{children:(0,i.jsxs)(V,{children:[(0,i.jsx)(K,{children:"Contact:"}),(0,i.jsx)(R,{href:"mailto:christianvargasraudales@gmail.com",children:"christianvargasraudales@gmail.com"})]})}),(0,i.jsxs)(q,{children:[(0,i.jsx)(B,{href:"https://github.com/ChrisEVR?tab=repositoriesm",children:(0,i.jsx)(D.RrF,{size:"3rem"})}),(0,i.jsx)(B,{href:"https://www.linkedin.com/in/christian-eduardo-vargas-raudales-a27287166/",children:(0,i.jsx)(D._iD,{size:"3rem"})})]})]})},Z=n(1664),Q=function(){return(0,i.jsxs)(M,{children:[(0,i.jsx)(P,{children:(0,i.jsx)(Z.default,{href:"https://chrisevr.github.io/Portafolio/",passHref:!0,children:(0,i.jsxs)("a",{style:{display:"flex",alignItems:"center",color:"white",marginBottom:"20px"},children:[(0,i.jsx)(v.ePX,{size:"3rem"})," ",(0,i.jsx)(H,{children:" Portfolio "})]})})}),(0,i.jsxs)(E,{children:[(0,i.jsx)("li",{children:(0,i.jsx)(Z.default,{href:"https://chrisevr.github.io/Portafolio/#projects",passHref:!0,children:(0,i.jsx)(T,{children:"Projects"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(Z.default,{href:"https://chrisevr.github.io/Portafolio/#technologies",passHref:!0,children:(0,i.jsx)(T,{children:"Technologies"})})})]}),(0,i.jsxs)(U,{children:[(0,i.jsx)(B,{href:"https://github.com/ChrisEVR?tab=repositoriesm",children:(0,i.jsx)(D.RrF,{size:"3rem"})}),(0,i.jsx)(B,{href:"https://www.linkedin.com/in/christian-eduardo-vargas-raudales-a27287166/",children:(0,i.jsx)(D._iD,{size:"3rem"})})]})]})},X=o.default.div.withConfig({displayName:"LayoutStyles__Container",componentId:"mzu455-0"})(["max-width:1280px;width:100%;margin:auto;"]),Y=function(e){var t=e.children;return(0,i.jsxs)(X,{children:[(0,i.jsx)(Q,{}),(0,i.jsx)("main",{children:t}),(0,i.jsx)(W,{})]})},J=function(){return(0,i.jsxs)(Y,{children:[(0,i.jsxs)(a,{grid:!0,children:[(0,i.jsx)(c,{}),(0,i.jsx)(r,{})]}),(0,i.jsx)(k,{}),(0,i.jsx)(F,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5869)}])},1664:function(e,t,n){e.exports=n(7942)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var i=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(r),a=function(){return(a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function d(e){return e&&e.map((function(e,t){return i.createElement(e.tag,a({key:t},e.attr),d(e.child))}))}function l(e){return function(t){return i.createElement(p,a({attr:a({},e.attr)},t),d(e.child))}}function p(e){var t=function(t){var n,r=e.attr,o=e.size,d=e.title,l=s(e,["attr","size","title"]),p=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),d&&i.createElement("title",null,d),e.children)};return void 0!==o?i.createElement(o.Consumer,null,(function(e){return t(e)})):t(r)}}},function(e){e.O(0,[866,921,617,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);