(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-detail-layout"],{"524d":function(t,n,e){"use strict";e.r(n);var i=e("5838"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},5838:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={data:function(){return{title:"",customBind:{background:{background:"transparent",borderBottom:!1}}}},onPageScroll:function(t){t.scrollTop>40?(this.customBind.background.background="#fff",this.title="网络验收表"):(this.customBind.background.background="transparent",this.title="")},methods:{}}},"5a1c":function(t,n,e){var i=e("e04e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("588f5c30",i,!0,{sourceMap:!1,shadowMode:!1})},8975:function(t,n,e){t.exports=e.p+"static/img/bg-title.3ea6c243.png"},b430:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={mrLayout:e("0e2c").default},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("mr-layout",{staticClass:"bg",attrs:{title:t.title,"custom-bind":t.customBind}},[i("v-uni-view",{attrs:{slot:"content"},slot:"content"},[i("v-uni-view",{staticClass:"mm"},[i("v-uni-image",{attrs:{src:e("8975")}})],1),i("v-uni-view",{staticClass:"inner-content"},t._l(60,(function(n){return i("v-uni-view",{key:n,staticClass:"item"},[t._v("item "+t._s(n))])})),1)],1)],1)},o=[]},dccf:function(t,n,e){"use strict";var i=e("5a1c"),a=e.n(i);a.a},e04e:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.bg[data-v-5e884278]{min-height:100vh;background:#f7f8fa;padding:0 0 %?32?%}.bg .mm[data-v-5e884278]{position:absolute;top:0;width:100%;z-index:0}.bg .mm uni-image[data-v-5e884278]{width:%?750?%;height:%?504?%}.bg .inner-content[data-v-5e884278]{position:relative;min-height:70vh;background:#fff;margin-top:%?330?%;z-index:1}.bg .inner-content .item[data-v-5e884278]{display:flex;align-items:center;height:%?60?%;font-size:%?28?%;color:#333}',""]),t.exports=n},fba4:function(t,n,e){"use strict";e.r(n);var i=e("b430"),a=e("524d");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("dccf");var c,r=e("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"5e884278",null,!1,i["a"],c);n["default"]=s.exports}}]);