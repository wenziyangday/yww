(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-detail-skeleton"],{"016d":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{}}}},"0566":function(t,e,n){"use strict";var a=n("c8f9"),r=n.n(a);r.a},"12d9":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.loading[data-v-7ac1e296]{box-sizing:border-box;width:100%;padding:%?20?%;background-color:#fff;border-radius:%?10?%;overflow:hidden}.loading-line[data-v-7ac1e296]{border-radius:%?10?%;width:100%;height:%?40?%;margin-bottom:%?20?%;-webkit-animation:changeBg-data-v-7ac1e296 1.2s ease-in-out infinite;animation:changeBg-data-v-7ac1e296 1.2s ease-in-out infinite}.loading-line[data-v-7ac1e296]:last-child{margin-bottom:0}@-webkit-keyframes changeBg-data-v-7ac1e296{0%{opacity:.3}50%{opacity:1}100%{opacity:.3}}@keyframes changeBg-data-v-7ac1e296{0%{opacity:.3}50%{opacity:1}100%{opacity:.3}}',""]),t.exports=e},"216b":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={mrMainColor:"#333333",mrTitleColor:"#333333",mrSubtitleColor:"#666666",mrContentColor:"#999999",mrTipsColor:"#cccccc",mrLightColor:"#e0e0e0",mrBorderColor:"#dcdee0",mrBgColor:"#f4f5f6",mrDisabledColor:"#c8c9cc",mrPrimary:"#c8161d",mrPrimaryDark:"#a01217",mrPrimaryDisabled:"#e38a8e",mrPrimaryLight:"#fae8e8",mrWarning:"#ff7d00",mrWarningDark:"#d96a00",mrWarningDisabled:"#ffbe80",mrWarningLight:"#fff2e5",mrSuccess:"#00b42a",mrSuccessDark:"#009924",mrSuccessDisabled:"#80d995",mrSuccessLight:"#c2eec1",mrError:"#f53f3f",mrErrorDark:"#d03636",mrErrorDisabled:"#fa9f9f",mrErrorLight:"#feecec",mrInfo:"#909399",mrInfoDark:"#767a82",mrInfoDisabled:"#c4c6c9",mrInfoLight:"#f4f4f5"}},"28a3":function(t,e,n){"use strict";var a=n("fb89"),r=n.n(a);r.a},"3bb7":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.bg[data-v-5277de6b]{min-height:100vh;background:#f0f0f0;padding:0 %?32?% %?32?%}.bg h3[data-v-5277de6b]{padding:%?30?% 0}',""]),t.exports=e},4729:function(t,e,n){"use strict";n.r(e);var a=n("65ff"),r=n("a706");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("0566");var o=n("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"5277de6b",null,!1,a["a"],void 0);e["default"]=c.exports},"629b":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var r=a(n("216b")),i={name:"mr-skeleton",props:{mHeight:{type:Number,default:140},bgColor:{type:String,default:"#FFFFFF"},lineColor:{type:String,default:r.default.mrInfoLight},hasTitle:{type:Boolean,default:!1},titleWidth:{type:Number,default:40},titleHeight:{type:Number,default:40}},computed:{sums:function(){return this.hasTitle?Math.floor((this.mHeight-this.titleHeight-20)/60):Math.floor((this.mHeight-20)/60)}}};e.default=i},"65ff":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={mrLayout:n("3bde").default,mrSkeleton:n("ec74").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mr-layout",{staticClass:"bg",attrs:{title:"skeleton 展示"},scopedSlots:t._u([{key:"content",fn:function(){return[n("h3",[t._v("基本功能")]),n("mr-skeleton"),n("h3",[t._v("带标题")]),n("mr-skeleton",{attrs:{"has-title":!0}}),n("h3",[t._v("设置最小高度")]),n("mr-skeleton",{attrs:{"has-title":!0,"m-height":"378"}})]},proxy:!0}])})},i=[]},a706:function(t,e,n){"use strict";n.r(e);var a=n("016d"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},b2a2:function(t,e,n){"use strict";n.r(e);var a=n("629b"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},b485:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"loading",style:{height:t.mHeight+"rpx",background:t.bgColor}},[t.hasTitle?n("v-uni-view",{staticClass:"loading-line",style:{width:t.titleWidth+"%",height:t.titleHeight+"rpx",background:t.lineColor}}):t._e(),t._l(t.sums,(function(e){return n("v-uni-view",{key:e,staticClass:"loading-line",style:{width:50*Math.random()+50+"%",background:t.lineColor}})}))],2)},r=[]},c8f9:function(t,e,n){var a=n("3bb7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("11c8506b",a,!0,{sourceMap:!1,shadowMode:!1})},ec74:function(t,e,n){"use strict";n.r(e);var a=n("b485"),r=n("b2a2");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("28a3");var o=n("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"7ac1e296",null,!1,a["a"],void 0);e["default"]=c.exports},fb89:function(t,e,n){var a=n("12d9");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("3ba07acb",a,!0,{sourceMap:!1,shadowMode:!1})}}]);