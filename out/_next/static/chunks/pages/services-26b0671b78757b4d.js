(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{6395:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services",function(){return r(5742)}])},3538:function(e,t,r){"use strict";var n=r(5893),i=r(7294),a=r(1664);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=o(e);if(t){var i=o(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return l(this,r)}}var p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(l,e);var t,r,i,o=d(l);function l(){return s(this,l),o.apply(this,arguments)}return t=l,(r=[{key:"render",value:function(){var e=this.props,t=e.pageTitle,r=e.homePageUrl,i=e.homePageText,s=e.activePageText;return(0,n.jsx)("div",{className:"page-title-area item-bg1",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"page-title-content",children:[(0,n.jsx)("h2",{children:t}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{href:r,children:(0,n.jsx)("a",{children:i})})}),(0,n.jsx)("li",{children:s})]})]})})})}}])&&c(t.prototype,r),i&&c(t,i),l}(i.Component);t.Z=p},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(o){i=!0,a=o}finally{try{n||null==c.return||c.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},s=r(6273),c=r(387),o=r(7190);var l={};function u(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(i?"%"+i:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,i=c.useRouter(),f=a.default.useMemo((function(){var t=n(s.resolveHref(i,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?s.resolveHref(i,e.as):a||r}}),[i,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,x=e.shallow,v=e.scroll,j=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var y=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,g=n(o.useIntersection({rootMargin:"200px"}),2),b=g[0],N=g[1],w=a.default.useCallback((function(e){b(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,b]);a.default.useEffect((function(){var e=N&&r&&s.isLocalURL(d),t="undefined"!==typeof j?j:i&&i.locale,n=l[d+"%"+p+(t?"%"+t:"")];e&&!n&&u(i,d,p,{locale:t})}),[p,d,N,j,r,i]);var O={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,a,c,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[i?"replace":"push"](r,n,{shallow:a,locale:o,scroll:c}))}(e,i,d,p,m,x,v,j)},onMouseEnter:function(e){s.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(i,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof j?j:i&&i.locale,P=i&&i.isLocaleDomain&&s.getDomainLocale(p,_,i&&i.locales,i&&i.domainLocales);O.href=P||s.addBasePath(s.addLocale(p,_,i&&i.defaultLocale))}return a.default.cloneElement(t,O)};t.default=f},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(o){i=!0,a=o}finally{try{n||null==c.return||c.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!s,o=i.useRef(),l=n(i.useState(!1),2),u=l[0],f=l[1],d=i.useCallback((function(e){o.current&&(o.current(),o.current=void 0),r||u||e&&e.tagName&&(o.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,a=n.observer,s=n.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return i.useEffect((function(){if(!s&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var i=r(7294),a=r(9311),s="undefined"!==typeof IntersectionObserver;var c=new Map},5742:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=r(5893),i=r(7294),a=r(8614),s=r(3538),c=r(1664);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var i=u(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return f(this,r)}}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(s,e);var t,r,i,a=h(s);function s(){return o(this,s),a.apply(this,arguments)}return t=s,(r=[{key:"render",value:function(){return(0,n.jsx)("section",{className:"features-area features-area-inner-style ptb-100",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-cloud-computing-1"}),(0,n.jsx)("h3",{children:"Data Science"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-engineer"}),(0,n.jsx)("h3",{children:"Data Engineer"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-success"}),(0,n.jsx)("h3",{children:"Facing AI Challenges"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-technical-support"}),(0,n.jsx)("h3",{children:"Safe Security"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-shield"}),(0,n.jsx)("h3",{children:"Technical Support"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-success"}),(0,n.jsx)("h3",{children:"Live Support"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-machine-learning"}),(0,n.jsx)("h3",{children:"Heavy Industry"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-artificial-intelligence"}),(0,n.jsx)("h3",{children:"Transportation"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-sm-6 offset-sm-3 offset-lg-0",children:(0,n.jsxs)("div",{className:"single-features",children:[(0,n.jsx)("i",{className:"flaticon-health"}),(0,n.jsx)("h3",{children:"Health Care"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita."}),(0,n.jsx)(c.default,{href:"/service-details",children:(0,n.jsx)("a",{className:"read-more-icon",children:(0,n.jsx)("span",{className:"flaticon-right-arrow"})})})]})}),(0,n.jsx)("div",{className:"col-lg-12",children:(0,n.jsx)("div",{className:"page-navigation-area",children:(0,n.jsx)("nav",{"aria-label":"Page navigation example text-center",children:(0,n.jsxs)("ul",{className:"pagination",children:[(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)(c.default,{href:"/services/#",children:(0,n.jsx)("a",{className:"page-link page-links",children:(0,n.jsx)("i",{className:"bx bx-chevrons-left"})})})}),(0,n.jsx)("li",{className:"page-item active",children:(0,n.jsx)(c.default,{href:"/services/#",children:(0,n.jsx)("a",{className:"page-link",children:"1"})})}),(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)(c.default,{href:"/services/#",children:(0,n.jsx)("a",{className:"page-link",children:"2"})})}),(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)(c.default,{href:"/services/#",children:(0,n.jsx)("a",{className:"page-link",children:"3"})})}),(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)(c.default,{href:"/services/#",children:(0,n.jsx)("a",{className:"page-link",children:(0,n.jsx)("i",{className:"bx bx-chevrons-right"})})})})]})})})})]})})})}}])&&l(t.prototype,r),i&&l(t,i),s}(i.Component),x=r(8348);function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return!t||"object"!==N(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=y(e);if(t){var i=y(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return g(this,r)}}var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(o,e);var t,r,i,c=w(o);function o(){return v(this,o),c.apply(this,arguments)}return t=o,(r=[{key:"render",value:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{}),(0,n.jsx)(s.Z,{pageTitle:"Services Style One",homePageUrl:"/",homePageText:"Home",activePageText:"Services Style One"}),(0,n.jsx)(m,{}),(0,n.jsx)(x.Z,{})]})}}])&&j(t.prototype,r),i&&j(t,i),o}(i.Component)},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)}},function(e){e.O(0,[760,774,888,179],(function(){return t=6395,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
