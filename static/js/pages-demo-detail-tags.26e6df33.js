(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-detail-tags"],{"3b4d":function(e,t,n){"use strict";function a(e,t,n){this.$children.map((function(c){e===c.$options.name?c.$emit.apply(c,[t].concat(n)):a.apply(c,[e,t].concat(n))}))}n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d81d"),n("99af");var c={methods:{dispatch:function(e,t,n){var a=this.$parent||this.$root,c=a.$options.name;while(a&&(!c||c!==e))a=a.$parent,a&&(c=a.$options.name);a&&a.$emit.apply(a,[t].concat(n))},broadcast:function(e,t,n){a.call(this,e,t,n)}}};t.default=c},"3f26":function(e,t,n){"use strict";n.r(t);var a=n("4e3b"),c=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=c.a},"4ce6":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a}));var a={mrTag:n("e80a").default},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"tags"},e._l(e.tags,(function(t){return n("mr-tag",e._b({key:"object"===typeof t?t[e.valueKey?e.valueKey:e.textKey]:t,staticClass:"tag",attrs:{disabled:e.disabled,text:"object"===typeof t?t[e.textKey]:t,mode:e.checks.includes("object"===typeof t?t[e.valueKey?e.valueKey:e.textKey]:t)?"dark":"light"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleClick("object"===typeof t?t[e.valueKey?e.valueKey:e.textKey]:t)}}},"mr-tag","object"===typeof t&&t.customBind?t.customBind:e.customBind,!1))})),1)},s=[]},"4e3b":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("fb6a"),n("caad"),n("2532"),n("4de4"),n("d3b7"),n("14d9");var a={data:function(){return{value:"",checks:[],checks2:[],checks3:[],egs:["签署零售合作协议","法定代表人","实控人","股东"],egs1:[{text:"签署零售合作协议"},{text:"法定代表人"},{text:"实控人"},{text:"股东"}],egs2:[{text:"签署零售合作协议"},{text:"法定代表人",customBind:{color:"#FF7D00",bgColor:"rgba(255, 125, 0, 0.1)",borderColor:"#FF7D00"}},{text:"实控人",customBind:{color:"#FF7D00",bgColor:"rgba(255, 125, 0, 0.1)"}},{text:"股东",customBind:{color:"#FF7D00",bgColor:"rgba(255, 125, 0, 0.1)"}}],egs3:[{text:"签署零售合作协议",value:"sign"},{text:"法定代表人",value:"present"},{text:"实控人",value:"control"},{text:"股东",value:"support"}],egs4:[{name:"签署零售合作协议",value:"sign"},{name:"法定代表人",value:"present"},{name:"实控人",value:"control"},{name:"股东",value:"support"}],checks4:[]}},methods:{checksAdd:function(e){var t=this.checks.slice();console.log(e),t.includes(e)?this.checks=t.filter((function(t){return t!==e})):this.checks.push(e)}}};t.default=a},"5af9":function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("fb6a"),n("caad"),n("2532"),n("4de4"),n("d3b7"),n("14d9");var c=a(n("3b4d")),s={name:"mr-tags",inject:{mrForm:{default:function(){return null}}},data:function(){return{newChecks:[]}},model:{prop:"checks",event:"change"},mixins:[c.default],props:{checks:{type:Array,default:function(){return[]}},tags:{type:Array,default:function(){return[]}},textKey:{type:String,default:"text"},valueKey:{type:String,default:""},checkType:{type:String,default:"radio"},customBind:{type:Object,default:function(){return{}}},disabled:{type:Boolean,default:!1}},computed:{tagDisabled:function(){return this.disabled||(this.mrForm||{}).disabled}},methods:{checksAdd:function(e){var t=this,n=this.checks.slice();n.includes(e)?this.newChecks=n.filter((function(t){return t!==e})):this.newChecks.push(e),this.$nextTick((function(){t.$emit("change",t.newChecks)})),setTimeout((function(){t.dispatch("mr-form-item","on-form-change",[e])}),60)},checkAdd:function(e){var t=this;this.$nextTick((function(){t.$emit("change",[e])})),setTimeout((function(){t.dispatch("mr-form-item","on-form-change",[e])}),60)},handleClick:function(e){this.tagDisabled||("radio"===this.checkType&&this.checkAdd(e),"checkbox"===this.checkType&&this.checksAdd(e))}},mounted:function(){this.newChecks=this.checks}};t.default=s},"787a":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.bg[data-v-34a96528]{min-height:100vh;background:#f0f0f0;padding:%?32?%}.bg h3[data-v-34a96528]{padding:%?30?% 0}.bg .display[data-v-34a96528]{display:flex;align-items:center;flex-wrap:wrap}.bg .display .item[data-v-34a96528]{margin:0 %?10?% %?10?% 0}.bg .bob[data-v-34a96528]{margin-top:%?-10?%;padding-bottom:%?20?%;margin-bottom:%?10?%;border-bottom:%?1?% solid #f0ad4e}',""]),e.exports=t},"82c4":function(e,t,n){"use strict";n.r(t);var a=n("eb36"),c=n("3f26");for(var s in c)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return c[e]}))}(s);n("8a7d");var i=n("f0c5"),o=Object(i["a"])(c["default"],a["b"],a["c"],!1,null,"34a96528",null,!1,a["a"],void 0);t["default"]=o.exports},"8a7d":function(e,t,n){"use strict";var a=n("cfde"),c=n.n(a);c.a},cfde:function(e,t,n){var a=n("787a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var c=n("4f06").default;c("a3e1fd42",a,!0,{sourceMap:!1,shadowMode:!1})},d670:function(e,t,n){"use strict";n.r(t);var a=n("5af9"),c=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=c.a},d7d3:function(e,t,n){"use strict";var a=n("e8be"),c=n.n(a);c.a},e256:function(e,t,n){"use strict";n.r(t);var a=n("4ce6"),c=n("d670");for(var s in c)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return c[e]}))}(s);n("d7d3");var i=n("f0c5"),o=Object(i["a"])(c["default"],a["b"],a["c"],!1,null,"ccfabdd0",null,!1,a["a"],void 0);t["default"]=o.exports},e8be:function(e,t,n){var a=n("f437");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var c=n("4f06").default;c("1dab1084",a,!0,{sourceMap:!1,shadowMode:!1})},eb36:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a}));var a={mrLayout:n("3bde").default,mrTags:n("e256").default},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mr-layout",{staticClass:"bg",attrs:{title:"标签展示"},scopedSlots:e._u([{key:"content",fn:function(){return[n("h3",[e._v("基本功能")]),n("mr-tags",{attrs:{tags:e.egs}}),n("h3",[e._v("自定义主题--全局自定义")]),n("mr-tags",{attrs:{tags:e.egs,"custom-bind":{type:"success"}}}),n("h3",[e._v("自定义主题--局部自定义")]),n("mr-tags",{attrs:{tags:e.egs2}}),n("h3",[e._v("disabled标签")]),n("mr-tags",{attrs:{tags:e.egs2,disabled:!0}}),n("h3",[e._v("v-model单选: "+e._s(e.checks))]),n("mr-tags",{attrs:{tags:e.egs},model:{value:e.checks,callback:function(t){e.checks=t},expression:"checks"}}),n("h3",[e._v("v-model多选2: "+e._s(e.checks2))]),n("mr-tags",{attrs:{tags:e.egs,"check-type":"checkbox"},model:{value:e.checks2,callback:function(t){e.checks2=t},expression:"checks2"}}),n("h3",[e._v('v-model多选3--value-key="value": '+e._s(e.checks3))]),n("mr-tags",{attrs:{tags:e.egs3,"check-type":"checkbox","value-key":"value"},model:{value:e.checks3,callback:function(t){e.checks3=t},expression:"checks3"}}),n("h3",[e._v('v-model多选4--text-key="value": '+e._s(e.checks4))]),n("mr-tags",{attrs:{tags:e.egs4,"check-type":"checkbox","text-key":"name"},model:{value:e.checks4,callback:function(t){e.checks4=t},expression:"checks4"}})]},proxy:!0}])})},s=[]},f437:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tags[data-v-ccfabdd0]{display:flex;align-items:center;flex-wrap:wrap}.tags .tag[data-v-ccfabdd0]{display:inline-flex;align-items:center;justify-content:center;margin:%?8?%;text-align:center}',""]),e.exports=t}}]);