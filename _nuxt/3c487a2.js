(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{241:function(t,e,n){"use strict";n(19),n(20),n(11),n(37);var r=n(7),c=n(12),o=n(14),l=n(4),f=n(6),v=n(3);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},h=function(t){Object(c.a)(n,t);var e=d(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(v.Vue);y([Object(v.Prop)({required:!0})],h.prototype,"value",void 0);var j=h=y([v.Component],h),O=n(5),component=Object(O.a)(j,(function(t,e){var n=e._c;return 1===e.props.value.level?n("h1",{staticClass:"text-4xl font-light"},[e._v(e._s(e.props.value.text))]):2===e.props.value.level?n("h2",{staticClass:"text-3xl font-normal mt-8"},[e._v(e._s(e.props.value.text))]):3===e.props.value.level?n("h3",{staticClass:"text-2xl font-semibold mt-6"},[e._v(e._s(e.props.value.text))]):4===e.props.value.level?n("h4",{staticClass:"text-xl font-semibold mt-4"},[e._v(e._s(e.props.value.text))]):5===e.props.value.level?n("h5",{staticClass:"text-lg font-semibold mt-4"},[e._v(e._s(e.props.value.text))]):6===e.props.value.level?n("h6",{staticClass:"text-base font-semibold mt-4"},[e._v(e._s(e.props.value.text))]):e._e()}),[],!0,null,null,null);e.a=component.exports},320:function(t,e,n){"use strict";n.r(e);n(19),n(20),n(11),n(37),n(30);var r=n(2),c=n(7),o=n(12),l=n(14),f=n(4),v=n(6),d=n(3),y=(n(160),n(92),n(23)),h=n(241);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},_=function(t){Object(o.a)(n,t);var e=j(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return n}(d.Vue);O([Object(d.Prop)({required:!0})],_.prototype,"licenses",void 0);var m=_=O([d.Component],_),R=n(5),x=Object(R.a)(m,(function(t,e){var n=e._c;return e.props.licenses.length>0?n("ul",{staticClass:"list-disc ml-6"},e._l(e.props.licenses,(function(t,r){return n("li",{key:r,staticClass:"mt-8"},[e._l(t.desc,(function(t,r){return n("div",{key:r},[e._v(e._s(t))])})),e._v(" "),n("pre",{staticClass:"whitespace-pre-wrap bg-grey-300 p-4 mt-4"},[e._v(e._s(t.body))])],2)})),0):e._e()}),[],!0,null,null,null).exports;function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var w=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},L=function(t){Object(o.a)(n,t);var e=C(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(y.a)(n,[{key:"description",get:function(){return this.content.split("\n\n-----\n\n")[0]}},{key:"splitLicense",get:function(){var t=this.content.split("\n\n-----\n\n").slice(1),pattern=/^The following software.*?\n\n/;return t.map((function(t){var e,n=(null!==(e=t.match(pattern))&&void 0!==e?e:[""])[0].split(". "),body=t.split(pattern)[1];return{desc:{lib:"".concat(n[0],"."),source:"".concat(n[1]),notice:"".concat(n[2])},body:body}}))}}]),n}(d.Vue);w([Object(d.Prop)()],L.prototype,"content",void 0);var P=L=w([Object(d.Component)({components:{HeadingLevel:h.a,LicenseYarnGenerated:x}})],L),D=Object(R.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("HeadingLevel",{attrs:{value:{level:1,text:"License"}}}),t._v(" "),n("HeadingLevel",{attrs:{value:{level:2,text:"Third-Party Licenses"}}}),t._v(" "),n("div",{staticClass:"font-license mt-8"},[t._v("\n    Using fonts:\n    "),t._t("font")],2),t._v(" "),n("div",{staticClass:"mt-8"},[t._v("\n    Using icons:\n    "),t._t("icon")],2),t._v(" "),n("div",{staticClass:"js-library"},[n("div",{staticClass:"mt-8"},[t._v(t._s(t.description))]),t._v(" "),n("LicenseYarnGenerated",{attrs:{licenses:t.splitLicense}})],1)],1)}),[],!1,null,null,null).exports,k=n(120);function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var E=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},V=function(t){Object(o.a)(n,t);var e=S(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return n}(d.Vue),H=V=E([Object(d.Component)({asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$http,e.next=3,n.get("/txt/thirdparty_license.txt");case 3:return r=e.sent,e.next=6,r.text();case 6:return c=e.sent,e.abrupt("return",{license:{library:c}});case 8:case"end":return e.stop()}}),e)})))()},components:{LicensePage:D,LinkWrapper:k.a},head:{title:"License"}})],V),U=Object(R.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LicensePage",{attrs:{content:t.license.library},scopedSlots:t._u([{key:"font",fn:function(){return[n("ul",{staticClass:"list-disc ml-6"},[n("li",{staticClass:"mt-8"},[t._v("\n          Material Design icons: Licensed under\n          "),n("LinkWrapper",{attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0"}},[t._v("Apache license version 2.0")]),t._v(".\n        ")],1)])]},proxy:!0},{key:"icon",fn:function(){return[n("ul",{staticClass:"list-disc ml-6"},[n("li",{staticClass:"mt-8"},[t._v("\n          Simple Icons: Licensed under\n          "),n("LinkWrapper",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/"}},[t._v("CC0 1.0 Universal")]),t._v(".\n        ")],1)])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=U.exports}}]);