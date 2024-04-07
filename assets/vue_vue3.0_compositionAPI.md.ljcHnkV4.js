import{_ as s,c as i,o as t,V as e}from"./chunks/framework.9nulytGH.js";const E=JSON.parse('{"title":"composition API","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"vue/vue3.0/compositionAPI.md","filePath":"vue/vue3.0/compositionAPI.md"}'),o={name:"vue/vue3.0/compositionAPI.md"},p=e(`<h1 id="composition-api" tabindex="-1">composition API <a class="header-anchor" href="#composition-api" aria-label="Permalink to &quot;composition API&quot;">​</a></h1><blockquote><p>在 Vue 3 中，Composition API 是一个重要的特性，它提供了一种新的组织组件代码的方式。</p></blockquote><h3 id="对比option-api" tabindex="-1">对比option API <a class="header-anchor" href="#对比option-api" aria-label="Permalink to &quot;对比option API&quot;">​</a></h3><h4 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h4><p>Vue 3 中的 Composition API 是一种新的组织组件代码的方式，与传统的 Options API 相比具有一些显著的特点：</p><ul><li>更灵活的组织代码结构： <blockquote><p>Composition API 允许将组件的逻辑按照功能或特性进行组织，而不是按照生命周期钩子函数的顺序。这使得代码更易于理解、维护和重用。</p></blockquote></li><li>更好的代码复用： <blockquote><p>Composition API 提供了一种更好的方式来处理组件之间的逻辑复用。通过将逻辑提取到可复用的函数中，并在组件中进行引用，可以实现更高程度的代码共享。</p></blockquote></li><li>更好的 TypeScript 支持： <blockquote><p>Composition API 的设计更符合 TypeScript 的类型推断和类型检查规则，使得在使用 TypeScript 开发 Vue 应用时，能够更轻松地获得类型安全。</p></blockquote></li><li>更好的响应式处理： <blockquote><p>Composition API 提供了一种更直观、灵活的方式来定义响应式数据和计算属性，使得在处理复杂的数据逻辑时更加方便。</p></blockquote></li><li>更清晰的逻辑分离： <blockquote><p>Composition API 将组件的逻辑分离到独立的函数中，使得每个函数都可以专注于特定的功能，提高了代码的可读性和可维护性。</p></blockquote></li></ul><blockquote><p>总的来说，Composition API 在 Vue 3 中引入了一种更灵活、更清晰、更强大的方式来组织和管理组件代码，使得开发者能够更轻松地构建复杂的 Vue 应用。</p></blockquote><h4 id="劣势" tabindex="-1">劣势 <a class="header-anchor" href="#劣势" aria-label="Permalink to &quot;劣势&quot;">​</a></h4><ul><li>学习曲线较陡峭： <blockquote><p>对于习惯了 Options API 的开发者来说，学习 Composition API 可能需要一定的时间和适应期。</p></blockquote></li><li>对初学者不友好： <blockquote><p>初学者可能会觉得 Composition API 的灵活性和自由度太高，不知道从何处入手，容易造成代码混乱。</p></blockquote></li><li>与现有生态不兼容： <blockquote><p>一些 Vue 生态中的插件和库可能还没有完全适配 Composition API，可能需要等待一段时间才能完全兼容。</p></blockquote></li><li>可能导致代码分散： <blockquote><p>如果使用不当，可能会导致代码分散到多个地方，使得代码难以理解和维护。</p></blockquote></li></ul><h3 id="setup-函数" tabindex="-1">setup 函数 <a class="header-anchor" href="#setup-函数" aria-label="Permalink to &quot;setup 函数&quot;">​</a></h3><blockquote><p>在 Vue 3 中，Composition API 中的 <code>setup</code>函数用于组件的设置阶段，在组件实例创建之前执行。 它的主要作用是配置组件的状态、方法和生命周期钩子等，以及设置响应式数据。<code>setup</code> 函数接收两个参数：<code>props</code> 和 <code>context</code>。</p></blockquote><ul><li><p><code>props</code>:</p><blockquote><p><code>props</code> 对象包含了组件接收到的属性。在 <code>setup</code> 函数中，可以直接访问和操作 <code>props</code> 对象中的属性。</p></blockquote></li><li><p><code>context</code>:</p><blockquote><p><code>context</code> 对象包含了一些与组件上下文相关的属性和方法，包括 <code>attrs</code>、<code>slots</code>、<code>emit</code> 等。通过 <code>context</code> 对象，可以访问组件的属性、插槽内容以及触发自定义事件等功能。</p></blockquote></li></ul><h3 id="script-setup" tabindex="-1">script setup <a class="header-anchor" href="#script-setup" aria-label="Permalink to &quot;script setup&quot;">​</a></h3><blockquote><p><code>&lt;script setup&gt;</code> 是 Vue 3 中的一个新特性，它是 Composition API 的一种简化语法形式，用于在单文件组件中编写组件逻辑。 通过 <code>&lt;script setup&gt;</code> 可以 更简洁地定义 组件的属性、状态、方法等内容，而无需像传统的 <code>&lt;script&gt;</code> 部分那样显式地导入和使用 Composition API 的函数。 使用 <code>&lt;script setup&gt;</code> 时，可以直接在其中编写组件的逻辑，而不需要使用 <code>setup</code> 函数。Vue 会自动将 <code>&lt;script setup&gt;</code> 中的代码转换为对应的 <code>setup</code> 函数，从而实现相同的效果。</p></blockquote><p>例如，下面是一个使用 <code>&lt;script setup&gt;</code> 编写的简单示例：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{{ count }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">increment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Increment&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> increment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><blockquote><p>在上面的示例中，<code>&lt;script setup&gt;</code> 部分定义了 <code>count</code> 变量和 <code>increment</code> 方法，而无需使用 <code>setup</code> 函数。Vue 会将其转换为等效的 <code>setup</code> 函数形式。</p></blockquote><h3 id="对比setup" tabindex="-1">对比setup() <a class="header-anchor" href="#对比setup" aria-label="Permalink to &quot;对比setup()&quot;">​</a></h3><blockquote><p><code>&lt;script setup&gt;</code> 是 Vue 3 中引入的一个新特性，用于简化组件的编写和组织。</p></blockquote><p>相比之下，<code>&lt;script setup&gt;</code> 和普通的 <code>setup</code> 语法有以下几点区别：</p><ul><li>简化语法： <blockquote><p><code>&lt;script setup&gt;</code> 的语法更加简洁，不需要显式地定义 <code>setup</code> 函数。它可以直接在 <code>&lt;script setup&gt;</code> 内部编写组件的逻辑，而无需使用 <code>setup</code> 函数。</p></blockquote></li><li>全局变量： <blockquote><p>在 <code>&lt;script setup&gt;</code> 中可以直接访问组件的 props、context 等属性，无需通过 <code>setup</code> 函数参数来传递。这样可以简化代码，提高可读性。</p></blockquote></li><li>自动导入： <blockquote><p><code>&lt;script setup&gt;</code> 可以自动导入 Vue 相关的函数和变量，无需手动导入。这样可以减少代码量并提高开发效率。</p></blockquote></li></ul><blockquote><p>总的来说，<code>&lt;script setup&gt;</code> 提供了一种更加简洁和直观的方式来组织组件的逻辑，使得代码更加清晰易懂。它是 Vue 3 中非常实用和强大的一个特性，可以极大地提高开发效率。</p></blockquote><h3 id="异步数据处理" tabindex="-1">异步数据处理 <a class="header-anchor" href="#异步数据处理" aria-label="Permalink to &quot;异步数据处理&quot;">​</a></h3><blockquote><p>处理异步逻辑时，可以使用 async/await、Promise、callback 等方式。在 Vue.js 中，可以在组件的生命周期钩子函数中进行异步操作，也可以使用 Composition API 中的 setup 函数进行异步逻辑的处理。</p></blockquote>`,24),a=[p];function l(n,c,k,h,d,u){return t(),i("div",null,a)}const g=s(o,[["render",l]]);export{E as __pageData,g as default};
