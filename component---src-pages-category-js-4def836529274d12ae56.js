/*! For license information please see component---src-pages-category-js-4def836529274d12ae56.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[365],{5900:function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)){if(a.length){var i=l.apply(null,a);i&&e.push(i)}}else if("object"===n)if(a.toString===Object.prototype.toString)for(var o in a)r.call(a,o)&&a[o]&&e.push(o);else e.push(a.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()},9606:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var r=a(7294),l=a(5444),n=a(5900),i=a.n(n),o=function(e){var t=e.onClick;return r.createElement("svg",{version:"1.1",baseProfile:"full",width:"35",height:"25",onClick:t,className:"overflow-hidden group"},r.createElement("rect",{width:"35",height:"2",rx:"5",ry:"5",className:"group-hover:translate-x-0 translate-x-2 transition-transform duration-300 fill-black dark:fill-white"}),r.createElement("rect",{width:"35",height:"2",y:"10",rx:"5",ry:"5",className:"group-hover:translate-x-0 translate-x-4 transition-transform duration-300 fill-black dark:fill-white"}),r.createElement("rect",{width:"35",height:"2",y:"20",rx:"5",ry:"5",className:"group-hover:translate-x-0 translate-x-6 transition-transform duration-300 fill-black dark:fill-white"}))},s="DARKMODE_STORAGE_KEY",c="dark",d="white",u=function(){var e=(0,r.useState)(!1),t=e[0],a=e[1],l=i()("w-10 rounded-3xl border p-1 transition-all",t?"border-gray-700 bg-white":"border-white bg-gray-700"),n=i()("w-4 h-4 border rounded-full transition-all",t?" border-gray-700 bg-white":"border-white bg-gray-700 translate-x-4");return(0,r.useLayoutEffect)((function(){localStorage.getItem(s)===c?(a(!0),document.documentElement.classList.add("dark")):a(!1)}),[]),r.createElement("div",{className:l,onClick:function(){localStorage.setItem(s,t?d:c),t?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"),a(!t)}},r.createElement("div",{className:n}))},m=[{to:"/posts",display:"Posts"},{to:"/archive",display:"Archive"},{to:"/category",display:"Category"},{to:"/about",display:"About"}],f=function(){var e=(0,r.useState)(!1),t=e[0],a=e[1],n=i()("flex flex-col items-center absolute left-0 top-12 bg-white dark:bg-gray-900 w-full shadow",{hidden:!t});return r.createElement("div",{className:"flex items-center"},r.createElement("div",{className:"flex-row justify-center items-center gap-4 hidden lg:flex dark:text-white"},m.map((function(e){var t=e.to,a=e.display;return r.createElement(l.Link,{to:t,key:t},a)})),r.createElement(u,null)),r.createElement("div",{className:"lg:hidden flex items-center"},r.createElement(o,{onClick:function(){a(!t)}}),r.createElement("div",{className:n},r.createElement(u,null),m.map((function(e){var t=e.to,a=e.display;return r.createElement(l.Link,{className:"py-2 w-full shadow dark:shadow-gray-300 text-center dark:text-white",to:t,key:t},a)})))))},h=function(e){var t=e.location,a=e.title,n=e.children,o="/"===t.pathname,s=i()("flex-1 overflow-hidden relative",{"pt-12":!o});return r.createElement("div",{"data-is-root-path":o},r.createElement("header",{className:"shadow-md w-full h-12 items-center z-20 fixed bg-white dark:bg-gray-900 dark:shadow-gray-400 transition-colors"},r.createElement("div",{className:"flex flex-row justify-between px-4 py-2"},r.createElement("h1",{className:"text-xl font-title dark:text-white"},r.createElement(l.Link,{to:"/"},a)),r.createElement(f,null))),r.createElement("main",{className:"flex flex-column dark:bg-gray-900"},r.createElement("section",{className:"flex"}),r.createElement("section",{className:s},n)),r.createElement("footer",null))}},3633:function(e,t,a){"use strict";a.r(t);var r=a(7294),l=a(9606);t.default=function(e){var t,a=e.location,n=(null===(t=e.data.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return r.createElement(l.Z,{location:a,title:n},r.createElement("div",{className:"flex items-center justify-center"},r.createElement("h1",null,"준비중")))}}}]);
//# sourceMappingURL=component---src-pages-category-js-4def836529274d12ae56.js.map