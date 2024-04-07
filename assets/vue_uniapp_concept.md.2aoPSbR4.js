import{_ as i,c as l,o as e,V as a}from"./chunks/framework.9nulytGH.js";const b=JSON.parse('{"title":"uniapp 基本概念","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"vue/uniapp/concept.md","filePath":"vue/uniapp/concept.md"}'),t={name:"vue/uniapp/concept.md"},o=a('<h1 id="uniapp-基本概念" tabindex="-1">uniapp 基本概念 <a class="header-anchor" href="#uniapp-基本概念" aria-label="Permalink to &quot;uniapp 基本概念&quot;">​</a></h1><h3 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h3><h4 id="应用级" tabindex="-1">应用级 <a class="header-anchor" href="#应用级" aria-label="Permalink to &quot;应用级&quot;">​</a></h4><ul><li>onLanuch – uni-app 初始化完成时触发（全局只触发一次）</li><li>onShow – uni-app启动，或从后台进入前台显示</li><li>onHide – uni-app从前台进入后台</li><li>onError – 当uni-app 报错时触发</li><li>onUNiNViewMessage – 对 nvue 页面发送的数据进行监听</li><li>onUnhandledRejection – 对未处理的Promise拒绝事件监听函数</li><li>onPageNotFound – 页面不存在监听函数</li><li>onThemeChange – 监听系统主题变化</li></ul><h4 id="页面级" tabindex="-1">页面级 <a class="header-anchor" href="#页面级" aria-label="Permalink to &quot;页面级&quot;">​</a></h4><ul><li>onInit – 监听页面初始化，参数同onLoad参数，为上个页面传递的数据，参数类型为Object，触发时机早于onLoad</li><li>onLoad – 监听页面加载，其参数为上个页面传递的数据，参数类型为Object</li><li>onShow – 监听页面显示，页面每次出现在屏幕上都触发，包括从下级页面返回露出当前页面</li><li>onReady – 监听页面初次渲染</li><li>onHide – 监听页面隐藏</li><li>onUnload – 监听页面隐藏</li><li>onResize – 监听窗口尺寸变化</li></ul><h4 id="组件级" tabindex="-1">组件级 <a class="header-anchor" href="#组件级" aria-label="Permalink to &quot;组件级&quot;">​</a></h4><blockquote><p>同vue生命周期相同</p></blockquote><ul><li>beforeCreate</li><li>created</li><li>beforeMount</li><li>mounted</li><li>beforeUpdate</li><li>updated</li><li>beforeDestroy</li><li>destroyed</li></ul><h3 id="跨端工作原理" tabindex="-1">跨端工作原理 <a class="header-anchor" href="#跨端工作原理" aria-label="Permalink to &quot;跨端工作原理&quot;">​</a></h3><ul><li>uni-app分<code>编译器</code>和<code>运行时（runtime）</code>。</li><li>uni-app能实现一套代码、多端运行，是通过这2部分配合完成的。</li><li>编译器将开发者的代码进行编译，编译的输出物由各个终端的runtime进行解析，每个平台（Web、Android App、iOS App、各家小程序）都有各自的runtime。</li></ul><h4 id="编译器" tabindex="-1">编译器 <a class="header-anchor" href="#编译器" aria-label="Permalink to &quot;编译器&quot;">​</a></h4><blockquote><p>将uni-app统一代码编译生成每个平台支持的特有代码；如在小程序平台，编译器将.vue文件拆分生成wxml、wxss、js等代码。</p></blockquote><p>vue版本上编译器的差异：</p><ul><li>vue2：uni-app编译器基于wepback实现</li><li>vue3：uni-app编译器基于Vite实现，编译速度更快，详见：vue3和vite双向加持，uni-app性能再次提升</li></ul><p>uni-app项目根据创建方式的不同，编译器在使用上也有差异：</p><ul><li>cli 方式创建的项目，编译器安装在项目下。编译器不会跟随HBuilderX升级。如需升级编译器，。</li><li>HBuilderX可视化界面创建的项目，编译器在HBuilderX的安装目录下的plugin目录，随着HBuilderX的升级会自动升级编译器。</li><li>已经使用cli创建的项目，如果想继续在HBuilderX里使用，可以把工程拖到HBuilderX中。 注意如果是把整个项目拖入HBuilderX，则编译时走的是项目下的编译器。如果是把src目录拖入到HBuilderX中，则走的是HBuilderX安装目录下plugin目录下的编译器。</li></ul><h4 id="运行时-runtime" tabindex="-1">运行时（runtime） <a class="header-anchor" href="#运行时-runtime" aria-label="Permalink to &quot;运行时（runtime）&quot;">​</a></h4><blockquote><p>动态处理数据绑定、事件代理，保证Vue和平台宿主数据的一致性；</p></blockquote><p>UniApp 的工作原理主要基于以下几个方面：</p><ol><li><strong>多端编译</strong>：UniApp 使用了基于 Vue.js 的语法，并通过内置的编译器将 Vue 代码转换成多端可运行的代码，包括微信小程序、支付宝小程序、H5、App 等。</li><li><strong>基础库封装</strong>：UniApp 提供了一系列的 API，封装了不同端的原生能力，使得开发者可以在一套代码中实现跨端的开发。这些 API 包括了页面生命周期、路由、网络请求、本地存储、分享、支付等功能。</li><li><strong>编译打包</strong>：UniApp 的开发者工具会将开发者编写的代码进行打包，生成相应的小程序项目、H5 项目或 App 项目。在生成的项目中，会根据不同的平台生成对应的页面文件、配置文件等，确保在不同平台上的兼容性和性能。</li><li><strong>运行环境</strong>：UniApp 提供了各种运行环境，包括开发者工具、真机预览、模拟器预览等，方便开发者在不同平台上调试和预览自己的应用。</li></ol><h3 id="非h5端逻辑层和渲染层分离原因" tabindex="-1">非H5端逻辑层和渲染层分离原因 <a class="header-anchor" href="#非h5端逻辑层和渲染层分离原因" aria-label="Permalink to &quot;非H5端逻辑层和渲染层分离原因&quot;">​</a></h3><ul><li>在web平台，逻辑层（js）和渲染层（html、css），都运行在统一的webview里。</li><li>但在小程序和app端，逻辑层和渲染层被分离了。分离的核心原因是性能。过去很多开发者吐槽基于webview的app性能不佳，很大原因是js运算和界面渲染抢资源导致的卡顿。</li><li>不管小程序还是app，逻辑层都独立为了单独的js引擎，渲染层仍然是webview（app上也支持纯原生渲染）。</li><li>所以注意<code>小程序和app的逻辑层</code>都不支持浏览器专用的window、dom等API。app只能在渲染层操作window、dom，即renderjs。</li></ul><h3 id="对比其他跨平台框架-flutter、reactnative" tabindex="-1">对比其他跨平台框架 flutter、reactNative <a class="header-anchor" href="#对比其他跨平台框架-flutter、reactnative" aria-label="Permalink to &quot;对比其他跨平台框架 flutter、reactNative&quot;">​</a></h3><blockquote><p>UNiAPP、React Native 和 Flutter 是当前比较流行的跨平台框架，它们都可以帮助开发者使用一套代码实现多个平台的应用程序，但它们之间有一些区别：</p></blockquote><ol><li><strong>技术栈</strong>： <ul><li>UNiAPP：基于 Vue.js 框架，使用 Vue.js 的语法进行开发。</li><li>React Native：基于 React 框架，使用 React.js 的语法进行开发。</li><li>Flutter：使用 Dart 语言进行开发。</li></ul></li><li><strong>渲染方式</strong>： <ul><li>UNiAPP 和 React Native 使用原生控件进行渲染，通过桥接实现与原生平台的交互。</li><li>Flutter 使用自定义渲染引擎进行渲染，具有更高的性能和自定义能力。</li></ul></li><li><strong>性能和体验</strong>： <ul><li>UNiAPP 和 React Native 的性能和体验受到原生控件和桥接的影响，可能会出现一些性能和体验上的差异。</li><li>Flutter 使用自定义渲染引擎，具有更好的性能和体验，更接近原生应用。</li></ul></li><li><strong>生态系统</strong>： <ul><li>React Native 有较为完善的生态系统，社区活跃，拥有丰富的组件和插件。</li><li>UNiAPP 的生态系统相对较小，但也在不断发展壮大。</li><li>Flutter 生态系统相对较新，但在 Google 的支持下发展迅速，拥有活跃的社区和丰富的资源。</li></ul></li><li><strong>学习成本</strong>： <ul><li>UNiAPP 和 React Native 基于流行的前端框架（Vue.js 和 React.js），对前端开发者更为友好，学习曲线相对较低。</li><li>Flutter 使用 Dart 语言，对于熟悉其他编程语言的开发者来说可能需要一定的学习成本。</li></ul></li></ol><p>综上所述，UNiAPP、React Native 和 Flutter 在技术栈、渲染方式、性能体验、生态系统和学习成本等方面存在区别</p><h3 id="开发过程中的挑战" tabindex="-1">开发过程中的挑战 <a class="header-anchor" href="#开发过程中的挑战" aria-label="Permalink to &quot;开发过程中的挑战&quot;">​</a></h3><p>UNiAPP 的开发过程中可能会遇到一些挑战和难点，主要包括以下几个方面：</p><ol><li><strong>跨平台适配</strong>：UNiAPP 支持多个平台，包括微信小程序、支付宝小程序、H5 等，但不同平台之间存在一定的差异，比如组件支持度、API 调用方式等。因此，开发过程中需要考虑不同平台的适配问题，确保应用在各个平台上的正常运行和良好体验。</li><li><strong>组件兼容性</strong>：虽然 UNiAPP 提供了一套统一的组件库，但在实际开发中，可能会遇到一些第三方组件或自定义组件与不同平台的兼容性问题，需要进行调试和优化，保证组件在各个平台上的稳定运行。</li><li><strong>性能优化</strong>：跨平台开发可能会带来一些性能上的挑战，包括启动速度、渲染性能、内存占用等方面。开发者需要针对不同平台进行性能优化，采取一些手段如懒加载、图片压缩、减少不必要的重绘等，提升应用的性能表现。</li><li><strong>开发体验</strong>：UNiAPP 提供了一套基于 Vue.js 的开发框架，但开发体验可能与原生开发有所不同，需要开发者适应新的开发模式和工具链。比如，UNiAPP 使用了一些特定的标签和属性，需要熟悉并掌握其使用方法。</li><li><strong>版本更新和维护</strong>：由于涉及多个平台，应用的更新和维护可能会比较复杂，需要考虑不同平台的发布流程和版本管理。同时，需要及时跟进 UNiAPP 的更新，保持应用的兼容性和稳定性。</li><li><strong>调试和排查问题</strong>：跨平台开发可能会引入一些平台相关的问题，比如某些 API 在特定平台上的行为不一致等。因此，开发者需要具备良好的调试能力，能够快速定位和解决问题，保证应用的正常运行。</li></ol><p>面对这些难点，开发者可以通过学习官方文档、参与社区讨论、积极实践和尝试新的技术方案来应对，并且不断优化和提升应用的质量和性能。</p>',31),n=[o];function r(u,p,s,c,d,h){return e(),l("div",null,n)}const g=i(t,[["render",r]]);export{b as __pageData,g as default};
