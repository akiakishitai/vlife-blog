(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{108:function(t,e,r){"use strict";r.r(e),r.d(e,"redirectFromTailSlash",(function(){return c}));var n=r(2),c=(r(30),r(88),r(47),function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var path,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(path=e.route.path,r=e.redirect,n=new RegExp("/$"),"/"===path||!n.test(path)){t.next=4;break}return t.abrupt("return",r(301,path.replace(n,"")));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},113:function(t,e,r){"use strict";var n=r(0),c=r(114);r(214),r(215),r(216),r(217),r(218),r(219),r(220),r(221),r(222),r(223),r(224),r(225),r(226),r(227),r(228),r(229),r(230),r(231),r(232);c.hooks.add("before-sanity-check",(function(t){t.element.querySelectorAll(".conum + b").forEach((function(t){t.classList.add("hidden")}))})),n.default.prototype.$prism={highlightAll:c.highlightAll}},115:function(t,e,r){"use strict";var n=r(62),c=r(162),o=r(85);Object(n.d)("required",o.c),Object(n.d)("email",o.a),Object(n.d)("max",o.b),Object(n.c)({classes:{required:"is-required"}}),Object(n.e)("ja",c)},119:function(t,e,r){"use strict";r(37);var n=r(7),c=r(12),o=r(15),l=r(5),f=r(9),d=(r(25),r(4));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var v=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},m=function(t){Object(c.a)(r,t);var e=h(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(d.Vue);v([Object(d.Prop)({required:!0})],m.prototype,"href",void 0),v([Object(d.Prop)({required:!1,default:!1})],m.prototype,"disabled",void 0),v([Object(d.Prop)({required:!1,default:!0})],m.prototype,"isDefaultStyle",void 0);var y=m=v([d.Component],m),O=(r(204),r(6)),component=Object(O.a)(y,(function(t,e){var r=e._c;return null!=e.props.href.match(/^https?:\/\//)?r("a",{class:[{link:e.props.isDefaultStyle},{disabled:e.props.disabled},e.data.class,e.data.staticClass],attrs:{href:e.props.href,rel:e.data.attrs.rel,media:e.data.attrs.media,hreflang:e.data.attrs.hreflang,type:e.data.attrs.type,ping:e.data.attrs.ping,download:e.data.attrs.download,target:"_blank"}},[e._t("default")],2):r("nuxt-link",{class:[{link:e.props.isDefaultStyle},{disabled:e.props.disabled},e.data.class,e.data.staticClass],attrs:{to:e.props.href,rel:e.data.attrs.rel,media:e.data.attrs.media,hreflang:e.data.attrs.hreflang,type:e.data.attrs.type,ping:e.data.attrs.ping,download:e.data.attrs.download}},[e._t("default")],2)}),[],!0,null,"675930a2",null);e.a=component.exports},142:function(t,e,r){},143:function(t,e,r){},144:function(t,e,r){},145:function(t,e,r){},146:function(t,e,r){},165:function(t,e,r){"use strict";var n=r(0),c=r(108),o=(r(37),r(7)),l=r(12),f=r(15),d=r(5),h=r(9),v=(r(25),r(4));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var y=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},O=function(t){Object(l.a)(r,t);var e=m(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return r}(v.Vue),j=O=y([v.Component],O),_=(r(202),r(6)),R=Object(_.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footerbar"},[r("ul",{staticClass:"flex justify-center items-center"},[r("li",[r("nuxt-link",{staticClass:"p-2 block",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),r("li",[r("nuxt-link",{staticClass:"p-2 block",attrs:{to:"/contact"}},[t._v("お問い合わせ")])],1),t._v(" "),r("li",[r("nuxt-link",{staticClass:"p-2 block",attrs:{to:"/privacy-policy"}},[t._v("プライバシーポリシー")])],1),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"mx-4 absolute right-0"},[r("a",{staticClass:"p-2 block",attrs:{href:"/feeds/atom.xml",title:"atom 1.0"}},[r("span",{staticClass:"material-icons"},[t._v("rss_feed")])])])}],!1,null,"a0bb2a58",null).exports,x=r(21);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var P=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},k=function(t){Object(l.a)(r,t);var e=C(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(x.a)(r,[{key:"isRootExact",value:function(t,e){return"/"===t&&"/"!==e}}]),r}(v.Vue);P([Object(v.Prop)({required:!0})],k.prototype,"href",void 0),P([Object(v.Prop)({required:!0})],k.prototype,"route",void 0);var w=k=P([v.Component],k),B=(r(203),Object(_.a)(w,(function(t,e){return(0,e._c)("nuxt-link",{class:[e.data.class,e.data.staticClass],attrs:{to:e.props.href,exact:e.$options.methods.isRootExact(e.props.href,e.props.route)}},[e._t("default")],2)}),[],!0,null,"c810d4dc",null).exports),S=r(119),I=r(93);function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var D=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},A=function(t){Object(l.a)(r,t);var e=$(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(x.a)(r,[{key:"routePath",get:function(){return this.$route.path}}]),r}(v.Vue),E=A=D([Object(v.Component)({components:{LinkWrapper:S.a,LinkItemOnAppBar:B,SvgImageTwitter:I.d,SvgImageGithub:I.b}})],A),T=(r(205),Object(_.a)(E,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"mdc-top-app-bar relative"},[r("div",{staticClass:"mdc-top-app-bar__row"},[r("div",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"},[r("nuxt-link",{staticClass:"mdc-top-app-bar__title",attrs:{to:"/"}},[t._v("Vがいる日々")])],1),t._v(" "),r("nav",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-end"},[r("ul",{staticClass:"flex"},[r("li",[r("LinkItemOnAppBar",{staticClass:"mdc-top-app-bar__action-item p-2 rounded-t hover:bg-grey-500 hover:bg-opacity-15",attrs:{href:"/",route:t.routePath}},[t._v("Home")])],1),t._v(" "),r("li",{staticClass:"ml-2"},[r("LinkItemOnAppBar",{staticClass:"mdc-top-app-bar__action-item p-2 rounded-t hover:bg-grey-500 hover:bg-opacity-15",attrs:{href:"/license",route:t.routePath}},[t._v("License")])],1)]),t._v(" "),r("ul",{staticClass:"flex ml-4"},[r("li",{staticClass:"flex items-center"},[r("a",{staticClass:"material-icons mdc-top-app-bar__action-item mdc-icon-button",attrs:{href:"https://twitter.com/akiakiS101",target:"_blank"}},[r("SvgImageTwitter",{attrs:{title:"Twitter account"}})],1)]),t._v(" "),r("li",{staticClass:"flex items-center"},[r("a",{staticClass:"material-icons mdc-top-app-bar__action-item mdc-icon-button",attrs:{href:"https://github.com/akiakishitai/vlife-blog",target:"_blank"}},[r("SvgImageGithub",{attrs:{title:"Github source"}})],1)])])])])])}),[],!1,null,"357cda0d",null).exports),V=n.default.extend({components:{FooterBar:R,TopAppBar:T},middleware:[c.redirectFromTailSlash]}),L=(r(206),Object(_.a)(V,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"min-h-screen flex flex-col items-center mx-auto bg-background"},[r("TopAppBar"),t._v(" "),r("main",{staticClass:"container flex-grow text-black text-opacity-87 px-4"},[r("nuxt",{staticClass:"mt-6"})],1),t._v(" "),r("footer-bar",{staticClass:"mt-8"})],1)}),[],!1,null,null,null));e.a=L.exports},170:function(t,e,r){t.exports=r(171)},199:function(t,e,r){},202:function(t,e,r){"use strict";r(142)},203:function(t,e,r){"use strict";r(143)},204:function(t,e,r){"use strict";r(144)},205:function(t,e,r){"use strict";r(145)},206:function(t,e,r){"use strict";r(146)},93:function(t,e,r){"use strict";r.d(e,"b",(function(){return B})),r.d(e,"d",(function(){return $})),r.d(e,"a",(function(){return E})),r.d(e,"c",(function(){return L}));var n=r(156),c=r.n(n),o=(r(37),r(7)),l=r(21),f=r(12),d=r(15),h=r(5),v=r(9),m=(r(25),r(4));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(h.a)(t);if(e){var c=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var O=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},j=function(t){Object(f.a)(r,t);var e=y(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return r}(m.Vue);O([Object(m.Prop)({required:!0})],j.prototype,"title",void 0),O([Object(m.Prop)({required:!0})],j.prototype,"svgPath",void 0);var _=j=O([m.Component],j),R=r(6),x=Object(R.a)(_,(function(t,e){var r=e._c;return r("svg",{staticClass:"fill-current",class:[e.data.staticClass,e.data.class],attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("title",[e._v(e._s(e.props.title))]),e._v(" "),r("path",{attrs:{d:e.props.svgPath}})])}),[],!0,null,"4b4cfb63",null).exports;function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(h.a)(t);if(e){var c=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var P=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},k=function(t){var e=function(e){Object(f.a)(n,e);var r=C(n);function n(){return Object(o.a)(this,n),r.apply(this,arguments)}return Object(l.a)(n,[{key:"svgPath",value:function(){return t.path}}]),n}(m.Vue);return P([Object(m.Prop)({required:!0})],e.prototype,"title",void 0),P([Object(m.Inject)({default:{SvgImage:x}})],e.prototype,"components",void 0),e=P([m.Component],e)},w=k(c.a),B=Object(R.a)(w,(function(t,e){return(0,e._c)(e.injections.components.SvgImage,{tag:"component",class:[e.data.staticClass,e.data.class],attrs:{title:e.props.title,svgPath:e.$options.methods.svgPath()}})}),[],!0,null,"f1b30468",null).exports,S=r(157),I=k(r.n(S).a),$=Object(R.a)(I,(function(t,e){return(0,e._c)(e.injections.components.SvgImage,{tag:"component",class:[e.data.staticClass,e.data.class],attrs:{title:e.props.title,svgPath:e.$options.methods.svgPath()}})}),[],!0,null,"49dc8ae1",null).exports,D=r(158),A=k(r.n(D).a),E=Object(R.a)(A,(function(t,e){return(0,e._c)(e.injections.components.SvgImage,{tag:"component",class:[e.data.staticClass,e.data.class],attrs:{title:e.props.title,svgPath:e.$options.methods.svgPath()}})}),[],!0,null,"27c91ef4",null).exports,T=r(159),V=k(r.n(T).a),L=Object(R.a)(V,(function(t,e){return(0,e._c)(e.injections.components.SvgImage,{tag:"component",class:[e.data.staticClass,e.data.class],attrs:{title:e.props.title,svgPath:e.$options.methods.svgPath()}})}),[],!0,null,"5cafb766",null).exports}},[[170,11,4,12]]]);