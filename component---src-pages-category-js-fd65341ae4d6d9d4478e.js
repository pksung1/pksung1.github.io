/*! For license information please see component---src-pages-category-js-fd65341ae4d6d9d4478e.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[365],{5900:function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var i=n.apply(null,a);i&&e.push(i)}}else if("object"===l)if(a.toString===Object.prototype.toString)for(var o in a)r.call(a,o)&&a[o]&&e.push(o);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},9606:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(7294),n=a(5444),l=a(5900),i=a.n(l),o=function(e){var t=e.onClick;return r.createElement("svg",{version:"1.1",baseProfile:"full",width:"35",height:"25",onClick:t,className:"overflow-hidden group"},r.createElement("rect",{width:"35",height:"2",rx:"5",ry:"5",className:"group-hover:translate-x-0 translate-x-2 transition-transform duration-300 fill-black dark:fill-white"}),r.createElement("rect",{width:"35",height:"2",y:"10",rx:"5",ry:"5",className:"group-hover:translate-x-0 translate-x-4 transition-transform duration-300 fill-black dark:fill-white"}),r.createElement("rect",{width:"35",height:"2",y:"20",rx:"5",ry:"5",className:"group-hover:translate-x-0 translate-x-6 transition-transform duration-300 fill-black dark:fill-white"}))},s="DARKMODE_STORAGE_KEY",c="dark",d="white";function u(e){void 0===e&&(e=!1);var t=document.documentElement;e?(document.documentElement.classList.add("dark"),t.classList.add("bg-gray-900"),t.classList.remove("bg-white")):(document.documentElement.classList.remove("dark"),t.classList.add("bg-white"),t.classList.remove("bg-gray-900")),localStorage.setItem(s,e?c:d)}var m=function(e){var t=e.isDarkMode,a=(0,r.useState)(t),n=a[0],l=a[1],o=i()("w-10 rounded-3xl border p-1 transition-all",n?"border-gray-700 bg-white":"border-white bg-gray-700"),s=i()("w-4 h-4 border rounded-full transition-all",n?" border-gray-700 bg-white":"border-white bg-gray-700 translate-x-4");return r.createElement("div",{className:o,onClick:function(){u(!n),l(!n)}},r.createElement("div",{className:s}))},f=[{to:"/posts",display:"Posts"},{to:"/archive",display:"Archive"},{to:"/category",display:"Category"},{to:"/about",display:"About"}],h=function(e){var t=e.isDarkMode,a=(0,r.useState)(!1),l=a[0],s=a[1],c=i()("flex flex-col items-center absolute left-0 top-12 bg-white dark:bg-gray-900 w-full shadow",{hidden:!l});return r.createElement("div",{className:"flex items-center"},r.createElement("div",{className:"flex-row justify-center items-center gap-4 hidden lg:flex dark:text-white"},f.map((function(e){var t=e.to,a=e.display;return r.createElement(n.Link,{to:t,key:t},a)})),r.createElement(m,{isDarkMode:t})),r.createElement("div",{className:"lg:hidden flex items-center"},r.createElement(o,{onClick:function(){s(!l)}}),r.createElement("div",{className:c},r.createElement(m,null),f.map((function(e){var t=e.to,a=e.display;return r.createElement(n.Link,{className:"py-2 w-full shadow dark:shadow-gray-300 text-center dark:text-white",to:t,key:t},a)})))))},g=function(e){var t=e.location,a=e.title,l=e.children,o="/"===t.pathname,d=i()("flex-1 overflow-hidden relative",{"pt-12":!o}),m=(0,r.useMemo)((function(){return localStorage.getItem(s)===c}),[]);return(0,r.useLayoutEffect)((function(){return u(m),function(){console.log("clean darkmode")}}),[]),r.createElement("div",{"data-is-root-path":o},r.createElement("header",{className:"shadow-md w-full h-12 items-center z-20 fixed bg-white dark:bg-gray-900 dark:shadow-gray-400 transition-colors"},r.createElement("div",{className:"flex flex-row justify-between px-4 py-2"},r.createElement("h1",{className:"text-xl font-title dark:text-white"},r.createElement(n.Link,{to:"/"},a)),r.createElement(h,{isDarkMode:m}))),r.createElement("main",{className:"flex flex-column dark:bg-gray-900"},r.createElement("section",{className:"flex"}),r.createElement("section",{className:d},l)),r.createElement("footer",null))}},3633:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(9606);t.default=function(e){var t,a=e.location,l=(null===(t=e.data.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return r.createElement(n.Z,{location:a,title:l},r.createElement("div",{className:"flex items-center justify-center"},r.createElement("h1",null,"준비중")))}}}]);
//# sourceMappingURL=component---src-pages-category-js-fd65341ae4d6d9d4478e.js.map