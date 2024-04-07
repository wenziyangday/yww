import{_ as t,c as o,o as e,V as s}from"./chunks/framework.9nulytGH.js";const k=JSON.parse('{"title":"uniapp QA","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"vue/uniapp/qa.md","filePath":"vue/uniapp/qa.md"}'),i={name:"vue/uniapp/qa.md"},a=s('<h1 id="uniapp-qa" tabindex="-1">uniapp QA <a class="header-anchor" href="#uniapp-qa" aria-label="Permalink to &quot;uniapp QA&quot;">​</a></h1><ol><li><p>关于跨域问题，h5, 小程序，APP 对于跨域的处理问题</p></li><li><p>storage 的读写是不需要申请权限的</p></li><li><p>uniapp 全局变量设置及使用 uni.scss 中设置变量，主题派生</p></li><li><p>处理小程序下 自动导入组件的bug <a href="#" title="有参数 不可用">//</a>: # (无参数 不可用) 16:47:20.668 import { unref as _unref, toDisplayString as _toDisplayString, t as _t, o as _o, resolveComponent as _ resolveComponent } from &quot;vue&quot;; 16:47:20.677 const <strong>BINDING_COMPONENTS</strong> = &#39;{&quot;hello-world&quot;:{&quot;name&quot;:&quot;_component_hello_world&quot;,&quot;type&quot;:&quot;unknown&quot;}}&#39;; 16:47:20.685 if (!Array) { 16:47:20.694 const _component_hello_world = _resolveComponent(&quot;hello-world&quot;); 16:47:20.694 _component_hello_world(); 16:47:20.703 } 16:47:20.713 export default /* @<strong>PURE</strong> */ _defineComponent({ 16:47:20.722 __name: &quot;index&quot;, 16:47:20.731 setup(__props) { 16:47:20.740 const aa = ref(100); 16:47:20.750 const handleClick = () =&gt; { 16:47:20.757 aa.value += 100; 16:47:20.771 }; 16:47:20.785 return (_ctx, _cache) =&gt; { 16:47:20.787 return { 16:47:20.803 a: _t(_unref(aa)), 16:47:20.804 b: _o(handleClick) 16:47:20.814 }; 16:47:20.815 }; 16:47:20.826 } 16:47:20.827 });</p><p>16:41:58.090 import { unref as _unref, toDisplayString as _toDisplayString, t as _t, o as _o, resolveComponent as _ resolveComponent, p as _p } from &quot;vue&quot;; 16:41:58.090 const <strong>BINDING_COMPONENTS</strong> = &#39;{&quot;hello-world&quot;:{&quot;name&quot;:&quot;_component_hello_world&quot;,&quot;type&quot;:&quot;unknown&quot;}}&#39;; 16:41:58.090 if (!Array) { 16:41:58.091 const _component_hello_world = _resolveComponent(&quot;hello-world&quot;); 16:41:58.091 _component_hello_world(); 16:41:58.091 } 16:41:58.091 export default /* @<strong>PURE</strong> */ _defineComponent({ 16:41:58.091 __name: &quot;index&quot;, 16:41:58.091 setup(__props) { 16:41:58.092 const aa = ref(100); 16:41:58.092 const handleClick = () =&gt; { 16:41:58.092 aa.value += 100; 16:41:58.092 }; 16:41:58.092 return (_ctx, _cache) =&gt; { 16:41:58.092 return { 16:41:58.093 a: _t(_unref(aa)), 16:41:58.093 b: _o(handleClick), 16:41:58.093 c: _p({ 16:41:58.093 name: &quot;hello-world&quot; 16:41:58.094 }) 16:41:58.094 }; 16:41:58.094 }; 16:41:58.094 } 16:41:58.094 });</p><p>16:47:50.490 import { unref as _unref, toDisplayString as _toDisplayString, t as _t, o as _o } from &quot;vue&quot;; 16:47:50.506 const <strong>BINDING_COMPONENTS</strong> = &#39;{&quot;hello-world&quot;:{&quot;name&quot;:&quot;HelloWorld&quot;,&quot;type&quot;:&quot;setup&quot;}}&#39;; 16:47:50.522 if (!Math) { 16:47:50.540 HelloWorld(); 16:47:50.556 } 16:47:50.570 import HelloWorld from &quot;@/components/HelloWorld.vue&quot;; 16:47:50.585 export default /* @<strong>PURE</strong> */ _defineComponent({ 16:47:50.597 __name: &quot;index&quot;, 16:47:50.606 setup(__props) { 16:47:50.617 const aa = ref(100); 16:47:50.628 const handleClick = () =&gt; { 16:47:50.638 aa.value += 100; 16:47:50.649 }; 16:47:50.659 return (_ctx, _cache) =&gt; { 16:47:50.670 return { 16:47:50.681 a: _t(_unref(aa)), 16:47:50.691 b: _o(handleClick) 16:47:50.692 }; 16:47:50.702 }; 16:47:50.713 } 16:47:50.722 });</p><p>16:42:22.412 import { unref as _unref, toDisplayString as _toDisplayString, t as _t, o as _o, p as _p } from &quot;vue&quot;; 16:42:22.413 const <strong>BINDING_COMPONENTS</strong> = &#39;{&quot;hello-world&quot;:{&quot;name&quot;:&quot;HelloWorld&quot;,&quot;type&quot;:&quot;setup&quot;}}&#39;; 16:42:22.428 if (!Math) { 16:42:22.441 HelloWorld(); 16:42:22.456 } 16:42:22.457 import HelloWorld from &quot;@/components/HelloWorld.vue&quot;; 16:42:22.468 export default /* @<strong>PURE</strong> */ _defineComponent({ 16:42:22.478 __name: &quot;index&quot;, 16:42:22.487 setup(__props) { 16:42:22.487 const aa = ref(100); 16:42:22.497 const handleClick = () =&gt; { 16:42:22.507 aa.value += 100; 16:42:22.517 }; 16:42:22.517 return (_ctx, _cache) =&gt; { 16:42:22.527 return { 16:42:22.537 a: _t(_unref(aa)), 16:42:22.546 b: _o(handleClick), 16:42:22.554 c: _p({ 16:42:22.563 name: &quot;hello-world&quot; 16:42:22.572 }) 16:42:22.572 }; 16:42:22.583 }; 16:42:22.591 } 16:42:22.599 });</p></li><li><p>在使用选择器id时，一定要注意id是全局唯一，尤其在使用id作为样式计算的时候尤为重要</p></li><li><p>vue3 中 组件如果是多个根节点 v-show 会失效，但是是单一根节点，但是v-if就不存在这种问题</p></li><li><p>Extraneous non-props attributes (class) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. 根节点是其他组件,并在使用该组件时添加了不属于该组件的属性(props)</p></li><li><p>offsetTop, css 中的几个top 之间的计算</p></li><li><p>in this 所带来的的问题 和 v-if 以及 v-show 的上下文</p></li><li><p>position: sticky 的正确使用姿势</p></li><li><p>小程序 不支持 element v-bind 的这种未声明属性的绑定</p></li><li><p>APP端的消息推送 TODO</p><ol><li>生成秘钥 可以是.keystore 也可以是 .jks 生成命令<div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keytool</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -genkey</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -alias</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> testalias -keyalg RSA -keysize </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2048</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -validity </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">36500</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -keystore test.keystore</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keytool</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -genkey</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -keystore</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/key.jks -keyalg RSA -keysize </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2048</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -validity </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -alias key</span></span></code></pre></div></li><li>消息推送类型 在线消息 离线消息</li><li>开启消息手机的通知权限</li><li>云端证书、自有证书、公共测试证书 <ul><li>云端证书：通过uniapp 开发者中心的应用管理创建，Android云端管理证书</li><li>自有证书：本地通过命令创建的证书</li><li>公共测试证书：uniapp 官方生成的公共证书</li></ul></li><li>uni-push2.0的在线推送需要勾选离线推送的 选项但是可以不配置sdk，如果不勾选 会出现 推送预览中 推送人数 0 人 ，无法下发消息</li></ol></li><li><p>APP 中不允许出现中文命名的文件</p></li></ol>',2),l=[a];function n(p,r,u,h,_,d){return e(),o("div",null,l)}const q=t(i,[["render",n]]);export{k as __pageData,q as default};
