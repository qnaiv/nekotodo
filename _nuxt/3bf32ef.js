(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{294:function(t,e,o){var content=o(340);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("29be87fa",content,!0,{sourceMap:!1})},302:function(t,e,o){var content=o(363);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("4ce91fa8",content,!0,{sourceMap:!1})},303:function(t,e,o){"use strict";o.r(e);o(181),o(48);var n=o(9),r=o(5),c=o(15),l=o(16),f=o(11),d=o(6),h=o(21),v=o(99),y=o(322),R=o.n(y),m=function t(e,o,n){Object(r.a)(this,t),this.id=e,this.url=o,this.captureAt=n};function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(f.a)(this,o)}}var j=function(t,e,o,desc){var n,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},C=function(t){Object(l.a)(f,t);var e,o=O(f);function f(){var t;return Object(r.a)(this,f),(t=o.apply(this,arguments)).latestCat=new m("","",new Date),t}return Object(c.a)(f,[{key:"created",value:function(){this.$CatRepository.isEmpty()?this.setRandomCatImage():this.latestCat=this.$CatRepository.getLatestCat()}},{key:"setRandomCatImage",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.a.get("https://api.thecatapi.com/v1/images/search");case 2:e=t.sent,(o=this.$CatRepository.getCats()).unshift(new m(e.data[0].id,e.data[0].url,new Date)),o.length>this.$CatRepository.MaxCatSize&&o.pop(),this.$CatRepository.setCats(o),this.latestCat=this.$CatRepository.getLatestCat();case 8:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),f}(v.c),_=C=j([v.a],C),T=(o(339),o(57)),component=Object(T.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"cat"}},[this.latestCat?e("img",{staticClass:"cat-image",attrs:{src:this.latestCat.url}}):this._e()])}),[],!1,null,"122cc8ca",null);e.default=component.exports},304:function(t,e,o){"use strict";o.r(e);o(181);var n=o(5),r=o(15),c=o(16),l=o(11),f=o(6),d=o(21),h=o(99);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(l.a)(this,o)}}var y=function(t,e,o,desc){var n,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},R=function(t){Object(c.a)(o,t);var e=v(o);function o(){return Object(n.a)(this,o),e.apply(this,arguments)}return Object(r.a)(o,[{key:"invokeOnClickTodo",value:function(t){void 0!==this.onClickTodo&&this.onClickTodo(t)}}]),o}(h.c);y([Object(h.b)({type:String,required:!0})],R.prototype,"title",void 0),y([Object(h.b)({type:Array,required:!0})],R.prototype,"todos",void 0),y([Object(h.b)({type:String,required:!0})],R.prototype,"emptyMessage",void 0),y([Object(h.b)({type:Function})],R.prototype,"onDeleteAll",void 0),y([Object(h.b)({type:Function})],R.prototype,"onClickTodo",void 0);var m=R=y([h.a],R),O=o(57),j=o(86),C=o.n(j),_=o(371),T=o(306),k=o(259),w=o(367),D=o(297),x=o(298),V=o(272),$=o(301),L=o(258),A=o(368),component=Object(O.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"todo-container",attrs:{flat:""}},[o("v-list",{staticClass:"todo-list",attrs:{subheader:"","two-line":""}},[o("v-subheader",[t._v(t._s(t.title))]),t._v(" "),t._l(t.todos,(function(e){return o("v-list-item",{key:e.id,on:{click:function(o){return t.invokeOnClickTodo(e.id)}}},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"todo-title",domProps:{textContent:t._s(e.title)}}),t._v(" "),o("v-list-item-subtitle",[e.doneAt?o("span",[t._v(t._s(t._f("moment")(e.doneAt))+" ")]):o("span",[t._v(t._s(t._f("moment")(e.createdAt))+" ")])])],1),t._v(" "),o("v-list-item-action",[void 0!==t.onClickTodo?o("v-btn",{attrs:{icon:""}},[o("v-icon",{attrs:{color:"grey"}},[t._v("mdi-check")])],1):t._e()],1)],1)})),t._v(" "),0==t.todos.length?o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(t.emptyMessage))])],1)],1):t._e()],2),t._v(" "),o("v-divider",{staticClass:"mx-4"}),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:function(e){return t.onDeleteAll()}}},[t._v("\n      Delete all\n    ")])],1)],1)}),[],!1,null,"646c5606",null);e.default=component.exports;C()(component,{VBtn:_.a,VCard:T.a,VCardActions:k.a,VDivider:w.a,VIcon:D.a,VList:x.a,VListItem:V.a,VListItemAction:$.a,VListItemContent:L.a,VListItemSubtitle:L.b,VListItemTitle:L.c,VSubheader:A.a})},305:function(t,e,o){"use strict";o.r(e);o(181);var n=o(5),r=o(15),c=o(16),l=o(11),f=o(6),d=o(21),h=o(99);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(l.a)(this,o)}}var y=function(t,e,o,desc){var n,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},R=function(t){Object(c.a)(o,t);var e=v(o);function o(){var t;return Object(n.a)(this,o),(t=e.apply(this,arguments)).isRecording=!1,t}return Object(r.a)(o,[{key:"created",value:function(){var t=this,e=new webkitSpeechRecognition;e.continuous=!1,e.interimResults=!1,e.lang="ja-JP",e.maxAlternatives=1,e.onresult=function(o){t.onresult(o),e.stop()},e.onaudiostart=function(){t.isRecording=!0},e.onaudioend=function(){t.isRecording=!1},this.rec=e}},{key:"recognizeVoice",value:function(){var t=this.rec;this.isRecording?(this.isRecording=!1,t.stop()):t.start()}},{key:"recButtonColor",get:function(){return this.isRecording?"#eebbc3":"#fffffe"}}]),o}(h.c);y([Object(h.b)({type:Function,required:!0})],R.prototype,"onresult",void 0);var m=R=y([h.a],R),O=o(57),j=o(86),C=o.n(j),_=o(371),T=o(274),k=o(297),component=Object(O.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-fab-transition",[e("v-btn",{attrs:{fixed:"",fab:"",bottom:"",right:"",color:this.recButtonColor},on:{click:this.recognizeVoice}},[e("v-icon",[this._v("mdi-microphone")])],1)],1)}),[],!1,null,"5c2cd62d",null);e.default=component.exports;C()(component,{VBtn:_.a,VFabTransition:T.b,VIcon:k.a})},339:function(t,e,o){"use strict";o(294)},340:function(t,e,o){(e=o(34)(!1)).push([t.i,".cat-image[data-v-122cc8ca]{max-width:500px;width:100%;max-height:400px;-o-object-fit:cover;object-fit:cover}",""]),t.exports=e},362:function(t,e,o){"use strict";o(302)},363:function(t,e,o){(e=o(34)(!1)).push([t.i,".todo-title[data-v-c68ee8f0]{text-overflow:inherit;white-space:unset}.todo-list[data-v-c68ee8f0]{background-color:#fffffe}",""]),t.exports=e},369:function(t,e,o){"use strict";o.r(e);o(43),o(132),o(181);var n=o(5),r=o(15),c=o(16),l=o(11),f=o(6),d=o(21),h=o(99),v=o(303),y=o(341),R=function t(title){Object(n.a)(this,t),this.id=Object(y.v4)(),this.title=title,this.isDone=!1,this.createdAt=new Date,this.doneAt=null},m=o(304),O=o(305);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(l.a)(this,o)}}var C=function(t,e,o,desc){var n,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},_=function(t){Object(c.a)(o,t);var e=j(o);function o(){var t;return Object(n.a)(this,o),(t=e.apply(this,arguments)).todos=[],t}return Object(r.a)(o,[{key:"recOnResult",value:function(t){this.todos.push(new R(t.results[0][0].transcript)),this.$TodoRepository.setTodos(this.todos)}},{key:"created",value:function(){this.$TodoRepository.isEmpty()||(this.todos=this.$TodoRepository.getTodos())}},{key:"done",value:function(t){var e=this.todos.find((function(e){return e.id===t}));e&&(e.isDone=!0,e.doneAt=new Date,this.$TodoRepository.setTodos(this.todos),this.$refs.cat.setRandomCatImage())}},{key:"clearDoneTodos",value:function(){this.todos=this.todos.filter((function(t){return!1===t.isDone})),this.$TodoRepository.setTodos(this.todos)}},{key:"clearNewTodos",value:function(){this.todos=this.todos.filter((function(t){return!0===t.isDone})),this.$TodoRepository.setTodos(this.todos)}},{key:"newTodos",get:function(){return this.todos.filter((function(t){return!t.isDone}))}},{key:"doneTodos",get:function(){return this.todos.filter((function(t){return t.isDone}))}}]),o}(h.c),T=_=C([Object(h.a)({components:{LatestCat:v.default,SpeechRecognitionButton:O.default,TodoList:m.default}})],_),k=(o(362),o(57)),w=o(86),D=o.n(w),x=o(371),V=o(306),$=o(259),L=o(365),A=o(366),P=o(368),component=Object(k.a)(T,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",[o("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[o("TodoList",{attrs:{title:"Todos",todos:t.newTodos,"on-delete-all":t.clearNewTodos,"on-click-todo":t.done,"empty-message":"TODOを登録してください。"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[o("TodoList",{attrs:{title:"Done",todos:t.doneTodos,"on-delete-all":t.clearDoneTodos,"empty-message":"完了したTODOはありません。"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[o("v-card",{staticClass:"cat-container",attrs:{flat:""}},[o("v-subheader",[t._v("Latest ねこ")]),t._v(" "),o("LatestCat",{ref:"cat",staticClass:"px-5 pb-5"}),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{color:"deep-purple lighten-2",text:"",to:"CatGallery"}},[t._v("\n          集めたねこを見る\n        ")])],1)],1)],1),t._v(" "),o("SpeechRecognitionButton",{attrs:{onresult:t.recOnResult}})],1)}),[],!1,null,"c68ee8f0",null);e.default=component.exports;D()(component,{TodoList:o(304).default,LatestCat:o(303).default,SpeechRecognitionButton:o(305).default}),D()(component,{VBtn:x.a,VCard:V.a,VCardActions:$.a,VCol:L.a,VRow:A.a,VSubheader:P.a})}}]);