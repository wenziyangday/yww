import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.10dabb5d.js";const g=JSON.parse('{"title":"Picker 选择器组件","description":"","frontmatter":{},"headers":[],"relativePath":"form/picker.md","filePath":"form/picker.md"}'),p={name:"form/picker.md"},t=l(`<h1 id="picker-选择器组件" tabindex="-1">Picker 选择器组件 <a class="header-anchor" href="#picker-选择器组件" aria-label="Permalink to &quot;Picker 选择器组件&quot;">​</a></h1><ul><li>选择器组件提供了 一种弹窗模式选择</li><li>此选择器有两种弹出模式</li><li><ul><li>一是时间模式，可以配置年，日，月，时，分，秒参数</li></ul></li><li><ul><li>二是地区模式，可以配置省，市，区参数</li></ul></li></ul><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><ul><li>通过<code>mode</code>参数设置为<code>time</code>、<code>region</code>，区分时间、地区模式。</li><li>通过<code>v-model</code>双向绑定一个值为布尔值的变量，来打开或者收起picker。</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-picker</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;show&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mode</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;time&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">mr-picker</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;show = true&quot;</span><span style="color:#E1E4E8;">&gt;打开&lt;/</span><span style="color:#85E89D;">mr-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-picker</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;show&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mode</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;time&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">mr-picker</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;show = true&quot;</span><span style="color:#24292E;">&gt;打开&lt;/</span><span style="color:#22863A;">mr-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="组件的多种形态" tabindex="-1">组件的多种形态 <a class="header-anchor" href="#组件的多种形态" aria-label="Permalink to &quot;组件的多种形态&quot;">​</a></h3><ul><li>时间模式</li><li><ul><li>如果<code>mode</code>为<code>time</code>，可以通过<code>default-time</code>参数设置打开时的默认时间，格式如&quot;2025-07-02 13:01:00&quot;、&quot;2025-07-02 13:01&quot;</li></ul></li><li><ul><li>时间模式时：通过<code>params</code> 参数传入一个对象给组件，给需要显示的参数属性置为true，可选的参数有：<code>year</code>、<code>month</code>、<code>day</code>、<code>hour</code>、<code>minute</code>、<code>second</code>。 其中，<code>hour</code>、<code>minute</code>、<code>second</code>值默认为false，其他值默认为true</li></ul></li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-picker</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mode</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;time&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;show&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:params</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;params&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:defaultTime</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;defaultTime&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        year: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        month: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        day: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        hour: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        minute: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        second: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      defaultTime: </span><span style="color:#9ECBFF;">&#39;2025-07-02 13:01:00&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-picker</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mode</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;time&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;show&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:params</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;params&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:defaultTime</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;defaultTime&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      params: {</span></span>
<span class="line"><span style="color:#24292E;">        year: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        month: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        day: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        hour: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        minute: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        second: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      defaultTime: </span><span style="color:#032F62;">&#39;2025-07-02 13:01:00&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ul><li>地区模式</li><li><ul><li>如果<code>mode</code>为<code>region</code>，可以通过<code>default-region</code>(Array格式)中文的省市区名称，如：<code>[&quot;河北省&quot;, &quot;秦皇岛市&quot;, &quot;北戴河区&quot;]</code> ，或者代号的 省市区，如：<code>[&quot;13&quot;, &quot;1303&quot;, &quot;130304&quot;]</code></li></ul></li><li><ul><li>地区模式时：可选的参数有：<code>province</code>、<code>city</code>、<code>area</code>，默认都为true</li></ul></li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-picker</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mode</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;region&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;show&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:params</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;params&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:defaultRegion</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;defaultRegion&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        province: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        city: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        area: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      defaultRegion: [</span><span style="color:#9ECBFF;">&quot;河北省&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;秦皇岛市&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;北戴河区&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-picker</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mode</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;region&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;show&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:params</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;params&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:defaultRegion</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;defaultRegion&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      params: {</span></span>
<span class="line"><span style="color:#24292E;">        province: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        city: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        area: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      defaultRegion: [</span><span style="color:#032F62;">&quot;河北省&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;秦皇岛市&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;北戴河区&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ul><li><p>回调参数</p></li><li><ul><li>当点击<code>picker</code>的&quot;取消&quot;或者&quot;确定&quot;按钮时，会分别产生回调事件<code>cancel</code>和<code>confirm</code> ，均为会返回组件内部的当前值。回调的参数为一个对象，属性和传递给picker组件的params对象为true的属性一致。</li></ul></li><li><ul><li>注意：<code>mode</code>为<code>region</code>时，回调对象属性为一个对象，分别有<code>label</code>和<code>value</code>属性，见如下说明：</li></ul></li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件内部parmas参数默认值：</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> params </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  year: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  month: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  day: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  hour: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  minute: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  second: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  province: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  city: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  area: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  timestamp: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 1.3.7版本提供</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果params值如下(时间选择模式)：：</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> params </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  year: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  month: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  day: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  hour: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  minute: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  second: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 选择时间的时间戳</span></span>
<span class="line"><span style="color:#E1E4E8;">  timestamp: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 那么回调的参数可能如下：</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> cbP </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  year: </span><span style="color:#9ECBFF;">&#39;2020&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  month: </span><span style="color:#9ECBFF;">&#39;05&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  day: </span><span style="color:#9ECBFF;">&#39;10&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果params值如下(地区选择模式)：</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> params </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  province: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  city: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  area: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 那么回调的参数可能如下：</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> cbP2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  area: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;宝安区&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: </span><span style="color:#9ECBFF;">&quot;440306&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  city: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;深圳市&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: </span><span style="color:#9ECBFF;">&quot;4403&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  province: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: </span><span style="color:#9ECBFF;">&quot;广东省&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: </span><span style="color:#9ECBFF;">&quot;44&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 组件内部parmas参数默认值：</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> params </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  year: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  month: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  day: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  hour: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  minute: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  second: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  province: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  city: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  area: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  timestamp: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 1.3.7版本提供</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果params值如下(时间选择模式)：：</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> params </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  year: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  month: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  day: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  hour: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  minute: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  second: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 选择时间的时间戳</span></span>
<span class="line"><span style="color:#24292E;">  timestamp: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 那么回调的参数可能如下：</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> cbP </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  year: </span><span style="color:#032F62;">&#39;2020&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  month: </span><span style="color:#032F62;">&#39;05&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  day: </span><span style="color:#032F62;">&#39;10&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果params值如下(地区选择模式)：</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> params </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  province: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  city: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  area: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 那么回调的参数可能如下：</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> cbP2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  area: {</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;宝安区&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    value: </span><span style="color:#032F62;">&quot;440306&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  city: {</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;深圳市&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    value: </span><span style="color:#032F62;">&quot;4403&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  province: {</span></span>
<span class="line"><span style="color:#24292E;">    label: </span><span style="color:#032F62;">&quot;广东省&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    value: </span><span style="color:#032F62;">&quot;44&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值</th></tr></thead><tbody><tr><td style="text-align:left;">params</td><td style="text-align:left;">picker中需要显示的参数</td><td style="text-align:left;">Object</td><td style="text-align:left;"></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">rangeKey</td><td style="text-align:left;">当 range 是一个 Array＜Object＞ 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">mode</td><td style="text-align:left;">模式选择</td><td style="text-align:left;">String</td><td style="text-align:left;">time</td><td style="text-align:left;">region</td></tr><tr><td style="text-align:left;">startYear</td><td style="text-align:left;">年份开始时间</td><td style="text-align:left;">String, Number</td><td style="text-align:left;">1950</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">endYear</td><td style="text-align:left;">年份结束时间</td><td style="text-align:left;">String, Number</td><td style="text-align:left;">2050</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">cancelColor</td><td style="text-align:left;">&quot;取消&quot;按钮的颜色</td><td style="text-align:left;">String</td><td style="text-align:left;">#333333</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">confirmColor</td><td style="text-align:left;">&quot;确定&quot;按钮的颜色</td><td style="text-align:left;">String</td><td style="text-align:left;">#c8161d</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">defaultTime</td><td style="text-align:left;">默认显示的时间</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">defaultRegion</td><td style="text-align:left;">默认显示的地区</td><td style="text-align:left;">Array</td><td style="text-align:left;"><code>[]</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">showTimeTag</td><td style="text-align:left;">时间模式时，是否显示后面的年月日中文提示</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">areaCode</td><td style="text-align:left;">默认显示地区的编码，defaultRegion和areaCode同时存在，areaCode优先</td><td style="text-align:left;">Array</td><td style="text-align:left;"><code>[]</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">safeAreaInsetBottom</td><td style="text-align:left;">安全区</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">maskCloseAble</td><td style="text-align:left;">是否允许通过点击遮罩关闭Picker</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">通过双向绑定控制组件的弹出与收起</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">title</td><td style="text-align:left;">顶部标题</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">cancelText</td><td style="text-align:left;">取消按钮的文字</td><td style="text-align:left;">String</td><td style="text-align:left;">取消</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">confirmText</td><td style="text-align:left;">确认按钮的文字</td><td style="text-align:left;">String</td><td style="text-align:left;">确认</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;events&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">事件名</th><th style="text-align:left;">说明</th><th style="text-align:left;">回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">confirm</td><td style="text-align:left;">点击确定按钮，返回当前选择的值</td><td style="text-align:left;">Object: 见上方&quot;回调参数&quot;部分说明</td></tr><tr><td style="text-align:left;">cancel</td><td style="text-align:left;">点击取消按钮，返回当前选择的值</td><td style="text-align:left;">Object: 见上方&quot;回调参数&quot;部分说明</td></tr></tbody></table>`,17),e=[t];function o(c,r,E,y,i,d){return n(),a("div",null,e)}const F=s(p,[["render",o]]);export{g as __pageData,F as default};
