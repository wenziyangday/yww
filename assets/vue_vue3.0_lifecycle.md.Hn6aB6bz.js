import{_ as i,c as s,o as e,V as a}from"./chunks/framework.j2uNBPO8.js";const E=JSON.parse('{"title":"生命周期","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"vue/vue3.0/lifecycle.md","filePath":"vue/vue3.0/lifecycle.md"}'),l={name:"vue/vue3.0/lifecycle.md"},n=a(`<h1 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h1><blockquote><p>Vue.js 3.0 中的生命周期钩子函数是一组在 Vue 实例生命周期中特定阶段被调用的函数，开发者可以通过这些钩子函数来执行特定的逻辑。</p></blockquote><h4 id="options-api" tabindex="-1">options API <a class="header-anchor" href="#options-api" aria-label="Permalink to &quot;options API&quot;">​</a></h4><p>以下是 Vue.js 3.0 中常见的生命周期钩子函数：</p><ol><li><strong>beforeCreate：</strong> 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。</li><li><strong>created：</strong> 在实例创建完成后被立即调用，此时实例已完成数据观测 (data observer)、属性和方法的运算，但尚未挂载到 DOM 中。</li><li><strong>beforeMount：</strong> 在挂载开始之前被调用：相关的 render 函数首次被调用。</li><li><strong>mounted：</strong> 在挂载完成后被调用，此时组件已经挂载到 DOM 中。</li><li><strong>beforeUpdate：</strong> 在数据更新之前被调用，发生在虚拟 DOM 重新渲染和打补丁之前。</li><li><strong>updated：</strong> 在由于数据更改导致的虚拟 DOM 重新渲染和打补丁后会被调用。</li><li><strong>beforeUnmount：</strong> 在实例销毁之前调用。在这一步，实例仍然完全可用。</li><li><strong>unmounted：</strong> 在实例销毁后调用。这个钩子被调用后，Vue 实例指示的所有指令都已解绑，所有事件侦听器被移除，所有子实例也被销毁。</li><li><strong>activated：</strong> &lt;keep-alive&gt; 组件的生命周期钩子，函数组件被激活(当组件被插入到 DOM 中时调用)时调用</li><li><strong>deactivated：</strong> &lt;keep-alive&gt; 组件的生命周期钩子，函数组件被停用(当组件从 DOM 中被移除时调用)时调用</li></ol><blockquote><p>这些生命周期钩子函数提供了灵活的机制，使开发者可以在组件的不同生命周期阶段执行相应的逻辑，从而更好地控制组件的行为和状态。</p></blockquote><h3 id="composition-api" tabindex="-1">composition API <a class="header-anchor" href="#composition-api" aria-label="Permalink to &quot;composition API&quot;">​</a></h3><blockquote><p>在 Vue 3 中，使用 Composition API 时，并没有像 Options API 中那样的生命周期钩子函数，而是使用了一些<code>针对组件生命周期的特定函数</code>来处理不同阶段的逻辑。</p></blockquote><p>以下是一些常用的 Composition API 生命周期钩子函数：</p><ol><li><code>onMounted</code>: 在组件被挂载到 DOM 后执行的钩子函数。</li><li><code>onUnmounted</code>: 在组件从 DOM 中移除后执行的钩子函数。</li><li><code>onUpdated</code>: 在组件更新后执行的钩子函数。</li><li><code>onBeforeMount</code>: 在组件挂载到 DOM 之前执行的钩子函数。</li><li><code>onBeforeUnmount</code>: 在组件从 DOM 中移除之前执行的钩子函数。</li><li><code>onBeforeUpdate</code>: 在组件更新之前执行的钩子函数。</li><li><code>onActivated</code>: 注册一个回调函数，若组件实例是 &lt;KeepAlive&gt; 缓存树的一部分，当组件被插入到 DOM 中时调用。这个钩子在服务器端渲染期间不会被调用。</li><li><code>onDeactivated</code>: 注册一个回调函数，若组件实例是 &lt;KeepAlive&gt; 缓存树的一部分，当组件从 DOM 中被移除时调用。这个钩子在服务器端渲染期间不会被调用。</li></ol><p>这些钩子函数可以在组件的 <code>setup()</code> 函数中直接使用，例如：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {onMounted, onUnmounted} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onMounted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Component mounted&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onUnmounted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Component unmounted&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 返回组件实例的属性和方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>通过使用 Composition API 提供的生命周期函数，你可以更加灵活地组织组件的逻辑，而无需依赖于特定的生命周期钩子函数。</p><h3 id="父子组件之间的生命周期执行顺序" tabindex="-1">父子组件之间的生命周期执行顺序 <a class="header-anchor" href="#父子组件之间的生命周期执行顺序" aria-label="Permalink to &quot;父子组件之间的生命周期执行顺序&quot;">​</a></h3><p>在 Vue.js 中，父子组件之间的生命周期执行顺序如下：</p><ol><li><strong>父组件：</strong><ul><li>beforeCreate</li><li>created</li><li>beforeMount</li></ul></li><li><strong>子组件：</strong><ul><li>beforeCreate</li><li>created</li><li>beforeMount</li><li>mounted</li></ul></li><li><strong>父组件：</strong><ul><li>mounted</li></ul></li></ol><blockquote><p>这意味着父组件的生命周期钩子在子组件的生命周期钩子之前执行。在父组件的 <code>mounted</code> 钩子执行后，子组件的 <code>mounted</code> 钩子才会被触发。</p></blockquote><h3 id="父子组件之间的生命周期更新执行顺序" tabindex="-1">父子组件之间的生命周期更新执行顺序 <a class="header-anchor" href="#父子组件之间的生命周期更新执行顺序" aria-label="Permalink to &quot;父子组件之间的生命周期更新执行顺序&quot;">​</a></h3><p>在 Vue.js 中，父子组件之间的生命周期更新执行顺序如下：</p><ol><li><p><strong>父组件数据更新导致重新渲染：</strong></p><ul><li>beforeUpdate</li><li>子组件：beforeUpdate</li><li>子组件：updated</li><li>updated</li></ul></li><li><p><strong>子组件数据更新导致重新渲染：</strong></p><ul><li>父组件：beforeUpdate</li><li>beforeUpdate</li><li>updated</li><li>父组件：updated</li></ul></li></ol><blockquote><p>这意味着在父子组件之间，父组件的更新会在子组件之前触发，而子组件的更新会在父组件之后触发。</p></blockquote>`,21),t=[n];function o(p,r,h,d,k,c){return e(),s("div",null,t)}const g=i(l,[["render",o]]);export{E as __pageData,g as default};