(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7156:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(4984)}])},3538:function(e,t,n){"use strict";var r=n(5893),o=n(7294),c=n(1664);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(s,e);var t,n,o,l=d(s);function s(){return a(this,s),l.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=e.pageTitle,n=e.homePageUrl,o=e.homePageText,a=e.activePageText;return(0,r.jsx)("div",{className:"page-title-area item-bg1",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"page-title-content",children:[(0,r.jsx)("h2",{children:t}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(c.default,{href:n,children:(0,r.jsx)("a",{children:o})})}),(0,r.jsx)("li",{children:a})]})]})})})}}])&&i(t.prototype,n),o&&i(t,o),s}(o.Component);t.Z=p},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,c=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,c=(o=n(7294))&&o.__esModule?o:{default:o},a=n(6273),i=n(387),l=n(7190);var s={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),f=c.default.useMemo((function(){var t=r(a.resolveHref(o,e.href,!0),2),n=t[0],c=t[1];return{href:n,as:e.as?a.resolveHref(o,e.as):c||n}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,v=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var x=(t=c.default.Children.only(h))&&"object"===typeof t&&t.ref,j=r(l.useIntersection({rootMargin:"200px"}),2),g=j[0],w=j[1],N=c.default.useCallback((function(e){g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);c.default.useEffect((function(){var e=w&&n&&a.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,r=s[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,d,p,{locale:t})}),[p,d,w,b,n,o]);var _={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:c,locale:l,scroll:i}))}(e,o,d,p,m,v,y,b)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var O="undefined"!==typeof b?b:o&&o.locale,E=o&&o.isLocaleDomain&&a.getDomainLocale(p,O,o&&o.locales,o&&o.domainLocales);_.href=E||a.addBasePath(a.addLocale(p,O,o&&o.defaultLocale))}return c.default.cloneElement(t,_)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,c=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=o.useRef(),s=r(o.useState(!1),2),u=s[0],f=s[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,a=r.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return o.useEffect((function(){if(!a&&!u){var e=c.requestIdleCallback((function(){return f(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=n(7294),c=n(9311),a="undefined"!==typeof IntersectionObserver;var i=new Map},4984:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(7294),c=n(8614),a=n(3538),i=n(8348),l=n(1664);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(d,e);var t,n,o,f=m(d);function d(){return s(this,d),f.apply(this,arguments)}return t=d,(n=[{key:"render",value:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)(a.Z,{pageTitle:"Login",homePageUrl:"/",homePageText:"Home",activePageText:"Login"}),(0,r.jsx)("section",{className:"user-area-all-style log-in-area ptb-100",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-12",children:(0,r.jsxs)("div",{className:"contact-form-action",children:[(0,r.jsx)("div",{className:"form-heading text-center",children:(0,r.jsx)("h3",{className:"form-title",children:"Login to your account!"})}),(0,r.jsx)("form",{children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:(0,r.jsxs)("button",{className:"default-btn mb-30",type:"submit",children:[(0,r.jsx)("i",{className:"bx bxl-google"}),"Google"]})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:(0,r.jsxs)("button",{className:"default-btn mb-30",type:"submit",children:[(0,r.jsx)("i",{className:"bx bxl-facebook"}),"Facebook"]})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:(0,r.jsxs)("button",{className:"default-btn mb-30",type:"submit",children:[(0,r.jsx)("i",{className:"bx bxl-twitter"}),"Twitter"]})}),(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)("div",{className:"form-group",children:(0,r.jsx)("input",{className:"form-control",type:"text",name:"name",placeholder:"Username or Email"})})}),(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)("div",{className:"form-group",children:(0,r.jsx)("input",{className:"form-control",type:"password",name:"password",placeholder:"Password"})})}),(0,r.jsx)("div",{className:"col-lg-6 col-sm-6 form-condition",children:(0,r.jsxs)("div",{className:"agree-label",children:[(0,r.jsx)("input",{type:"checkbox",id:"chb1"}),(0,r.jsx)("label",{children:"Remember me"})]})}),(0,r.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,r.jsx)(l.default,{href:"/recover-password",children:(0,r.jsx)("a",{className:"forget",children:"Forgot my password?"})})}),(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)("button",{className:"default-btn btn-two",type:"submit",children:"Log In Now"})}),(0,r.jsx)("div",{className:"col-12",children:(0,r.jsxs)("p",{className:"account-desc",children:["Not a member?",(0,r.jsx)(l.default,{href:"/sign-up",children:(0,r.jsx)("a",{children:"Register"})})]})})]})})]})})})})}),(0,r.jsx)(i.Z,{})]})}}])&&u(t.prototype,n),o&&u(t,o),d}(o.Component);t.default=v},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[760,774,888,179],(function(){return t=7156,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
