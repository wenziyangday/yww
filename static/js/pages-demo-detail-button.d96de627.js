(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-detail-button"],{"14cf":function(t,n,a){t.exports=a.p+"static/img/app_icon.ff09b2a0.png"},"6a69":function(t,n,a){var e=a("d2e5");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("168dd39d",e,!0,{sourceMap:!1,shadowMode:!1})},"77b5":function(t,n,a){"use strict";a.r(n);var e=a("a166"),s=a("b1f6");for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(n,t,(function(){return s[t]}))}(i);a("a49c");var u=a("f0c5"),r=Object(u["a"])(s["default"],e["b"],e["c"],!1,null,"3cea59e1",null,!1,e["a"],void 0);n["default"]=r.exports},a166:function(t,n,a){"use strict";a.d(n,"b",(function(){return s})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}));var e={mrLayout:a("3bde").default,mrButton:a("e080").default,mrIcon:a("ee59").default},s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("mr-layout",{attrs:{title:"按钮"},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"container-padding"},[e("v-uni-view",{staticClass:"margin-top"},[t._v("基本使用")]),e("v-uni-view",{staticClass:"flex-space-between wrap-button"},[e("mr-button",{attrs:{text:"基本使用"}}),e("mr-button",[t._v("基本使用")])],1),e("v-uni-view",{staticClass:"margin-top"},[t._v("按钮类型")]),e("v-uni-view",{staticClass:"flex-space-around wrap-button"},t._l(t.types,(function(t){return e("mr-button",{key:t,staticClass:"button",attrs:{type:t,text:t}})})),1),e("v-uni-view",{staticClass:"margin-top"},[t._v("plain类型")]),e("v-uni-view",{staticClass:"flex-space-around wrap-button"},t._l(t.types,(function(t){return e("mr-button",{key:t,staticClass:"button",attrs:{type:t,plain:!0,text:t}})})),1),e("v-uni-view",{staticClass:"margin-top"},[t._v("disabled类型")]),e("v-uni-view",{staticClass:"flex-space-around wrap-button"},t._l(t.types,(function(t){return e("mr-button",{key:t,staticClass:"button",attrs:{type:t,disabled:!0,text:t}})})),1),e("v-uni-view",{staticClass:"margin-top"},[t._v("size类型")]),e("v-uni-view",{staticClass:"flex-space-around wrap-button"},t._l(t.sizes,(function(t){return e("mr-button",{key:t,staticClass:"button",attrs:{size:t,text:t}})})),1),e("v-uni-view",{staticClass:"margin-top"},[t._v("shape类型")]),e("v-uni-view",{staticClass:"flex-space-around wrap-button"},t._l(t.shapes,(function(t){return e("mr-button",{key:t,staticClass:"button",attrs:{shape:t,text:t}})})),1),e("v-uni-view",{staticClass:"margin-top"},[t._v("loading类型")]),e("v-uni-view",{staticClass:"flex-space-around wrap-button"},t._l(t.loadings,(function(t){return e("mr-button",{key:t,staticClass:"button",attrs:{loading:t,text:""+t}})})),1),e("v-uni-view",{staticClass:"margin-top"},[t._v("带图标类型")]),e("v-uni-view",{staticClass:"flex-space-around wrap-button"},[e("mr-button",[e("mr-icon",{attrs:{name:"photo"}}),t._v("带图标按钮")],1),e("mr-button",[e("mr-icon",{staticClass:"icon",attrs:{name:a("14cf")}}),t._v("带图标按钮")],1)],1)],1)]},proxy:!0}])})},i=[]},a49c:function(t,n,a){"use strict";var e=a("6a69"),s=a.n(e);s.a},b1f6:function(t,n,a){"use strict";a.r(n);var e=a("d6ff"),s=a.n(e);for(var i in e)["default"].indexOf(i)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=s.a},d2e5:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.margin-top[data-v-3cea59e1]{padding:%?13?% 0}.wrap-button[data-v-3cea59e1]{flex-wrap:wrap}.button[data-v-3cea59e1]{width:%?180?%;flex:0 0 %?180?%;margin:%?10?% 0}.icon[data-v-3cea59e1]{width:%?80?%}',""]),t.exports=n},d6ff:function(t,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={data:function(){return{types:["default","primary","success","warning","error"],sizes:["default","medium","mini"],shapes:["circle","square"],loadings:[!0,!1]}}}}}]);