(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{136:function(t,e,o){"use strict";o(50);var r=o(0),n=o(82),c=o.n(n);r.a.filter("moment",(function(t,e){var o=c()(t),r=null==e?"YYYY/MM/DD HH:mm":e;return console.log(o+r),o.format(r)}))},137:function(t,e,o){"use strict";var r=o(7),n=o(18),c=function(){function t(){Object(r.a)(this,t)}return Object(n.a)(t,[{key:"setTodos",value:function(t){localStorage.todos=JSON.stringify(t)}},{key:"getTodos",value:function(){return JSON.parse(localStorage.todos)}},{key:"isEmpty",value:function(){return console.log(localStorage.todos),void 0===localStorage.todos||null===localStorage.todos||0===JSON.parse(localStorage.todos).length}}]),t}(),l=function(){function t(){Object(r.a)(this,t),this.MaxCatSize=151}return Object(n.a)(t,[{key:"init",value:function(){localStorage.cats=JSON.stringify([])}},{key:"addCat",value:function(t){void 0!==localStorage.cats&&null!==localStorage.cats||this.init();var e=JSON.parse(localStorage.cats);e.unshift(t),localStorage.cats=JSON.stringify(e)}},{key:"getCats",value:function(){return void 0!==localStorage.cats&&null!==localStorage.cats||this.init(),JSON.parse(localStorage.cats)}},{key:"setCats",value:function(t){localStorage.cats=JSON.stringify(t)}},{key:"getLatestCat",value:function(){return JSON.parse(localStorage.cats)[0]}},{key:"isEmpty",value:function(){return console.log(localStorage.cats),void 0===localStorage.cats||null===localStorage.cats||0===JSON.parse(localStorage.cats).length}}]),t}();e.a=function(t,e){e("TodoRepository",new c),e("CatRepository",new l)}},176:function(t,e,o){var content=o(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("6570a8f6",content,!0,{sourceMap:!1})},178:function(t,e,o){var content=o(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("56b15182",content,!0,{sourceMap:!1})},193:function(t,e,o){"use strict";o(194),o(147);var r=o(7),n=o(19),c=o(15),l=o(8),f=o(10),d=o(108);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=Object(l.a)(t);if(e){var n=Object(l.a)(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return Object(c.a)(this,o)}}var h=function(t,e,o,desc){var r,n=arguments.length,c=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(n<3?r(c):n>3?r(e,o,c):r(e,o))||c);return n>3&&c&&Object.defineProperty(e,o,c),c},y=function(t){Object(n.a)(o,t);var e=v(o);function o(){var t;return Object(r.a)(this,o),(t=e.apply(this,arguments)).clipped=!1,t.drawer=!1,t.fixed=!1,t.items=[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],t.miniVariant=!1,t.right=!0,t.rightDrawer=!1,t.title="Vuetify.js",t}return o}(d.c),S=y=h([d.a],y),O=(o(237),o(62)),m=o(87),j=o.n(m),k=o(278),N=o(280),x=o(281),_=o(279),w=o(190),component=Object(O.a)(S,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{dark:""}},[e("v-app-bar",{attrs:{absolute:"",dense:""}},[e("v-toolbar-title",[this._v("nekotodo")])],1),this._v(" "),e("v-main",[e("v-container",{staticClass:"mt-11",attrs:{fluid:""}},[e("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;j()(component,{VApp:k.a,VAppBar:N.a,VContainer:x.a,VMain:_.a,VToolbarTitle:w.a})},205:function(t,e,o){o(206),t.exports=o(207)},231:function(t,e,o){"use strict";o(176)},232:function(t,e,o){(e=o(24)(!1)).push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=e},237:function(t,e,o){"use strict";o(178)},238:function(t,e,o){(e=o(24)(!1)).push([t.i,".v-application{background-color:#232946!important}",""]),t.exports=e},270:function(t,e){function o(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id=270},47:function(t,e,o){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(o(231),o(62)),c=o(87),l=o.n(c),f=o(278),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[205,6,2,7]]]);