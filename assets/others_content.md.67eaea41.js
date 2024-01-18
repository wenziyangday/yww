import{_ as s,o as n,c as l,Q as a}from"./chunks/framework.10dabb5d.js";const u=JSON.parse('{"title":"Content内容展示","description":"","frontmatter":{},"headers":[],"relativePath":"others/content.md","filePath":"others/content.md"}'),t={name:"others/content.md"},p=a(`<h1 id="content内容展示" tabindex="-1">Content内容展示 <a class="header-anchor" href="#content内容展示" aria-label="Permalink to &quot;Content内容展示&quot;">​</a></h1><p>主要用于对象数据在页面上的对照展示，该组件的优势是 对于 字段很多的对象展示时，减少不必要的跨级检索比对</p><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>content组件的基本使用</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-content</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;list&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:values</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;values&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      list: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          label: </span><span style="color:#9ECBFF;">&#39;姓名姓名姓名姓名&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          textKey: </span><span style="color:#9ECBFF;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          label: </span><span style="color:#9ECBFF;">&#39;年龄&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          textKey: </span><span style="color:#9ECBFF;">&#39;age&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          label: </span><span style="color:#9ECBFF;">&#39;性别性别性别性别&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          textKey: </span><span style="color:#9ECBFF;">&#39;sex&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      values: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;姓名&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        age: </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        sex: </span><span style="color:#9ECBFF;">&#39;男&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-content</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;list&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:values</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;values&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      list: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          label: </span><span style="color:#032F62;">&#39;姓名姓名姓名姓名&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          textKey: </span><span style="color:#032F62;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          label: </span><span style="color:#032F62;">&#39;年龄&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          textKey: </span><span style="color:#032F62;">&#39;age&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          label: </span><span style="color:#032F62;">&#39;性别性别性别性别&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          textKey: </span><span style="color:#032F62;">&#39;sex&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      values: {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;姓名&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        age: </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        sex: </span><span style="color:#032F62;">&#39;男&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="几种常用的内容模式" tabindex="-1">几种常用的内容模式 <a class="header-anchor" href="#几种常用的内容模式" aria-label="Permalink to &quot;几种常用的内容模式&quot;">​</a></h3><ul><li>带后缀的标题</li><li>单行内容显示</li><li>控制多行内容显示</li><li>多行右对齐</li><li>结合卡片展示</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- 带后缀的标题 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-content</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;list&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:values</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;values&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label-suffix</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;:&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- 单行内容显示 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-content</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;list&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:values</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;values&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">title-fold</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;single&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- 多行右对齐 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-content</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;list&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:values</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;values&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text-align</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;right&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- 控制多行内容显示 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-content</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;list&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:values</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;values&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text-fold</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;multi&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:multi-rows</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;2&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text-align</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;right&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- 结合卡片展示 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-card</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;卡片展示内容&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">mr-content</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;list&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:values</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;values&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label-width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;400&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text-color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#333&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">mr-card</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      list: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          label: </span><span style="color:#9ECBFF;">&#39;姓名姓名姓名姓名&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          textKey: </span><span style="color:#9ECBFF;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          label: </span><span style="color:#9ECBFF;">&#39;年龄&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          textKey: </span><span style="color:#9ECBFF;">&#39;age&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          label: </span><span style="color:#9ECBFF;">&#39;性别性别性别性别&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          textKey: </span><span style="color:#9ECBFF;">&#39;sex&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      values: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;姓名&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        age: </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        sex: </span><span style="color:#9ECBFF;">&#39;男&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 带后缀的标题 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-content</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;list&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:values</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;values&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label-suffix</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;:&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 单行内容显示 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-content</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;list&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:values</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;values&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">title-fold</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;single&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 多行右对齐 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-content</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;list&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:values</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;values&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text-align</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;right&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 控制多行内容显示 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-content</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;list&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:values</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;values&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text-fold</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;multi&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:multi-rows</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;2&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text-align</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;right&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 结合卡片展示 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-card</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;卡片展示内容&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">mr-content</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;list&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:values</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;values&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label-width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;400&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text-color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#333&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">mr-card</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      list: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          label: </span><span style="color:#032F62;">&#39;姓名姓名姓名姓名&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          textKey: </span><span style="color:#032F62;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          label: </span><span style="color:#032F62;">&#39;年龄&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          textKey: </span><span style="color:#032F62;">&#39;age&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          label: </span><span style="color:#032F62;">&#39;性别性别性别性别&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          textKey: </span><span style="color:#032F62;">&#39;sex&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      values: {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;姓名&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        age: </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        sex: </span><span style="color:#032F62;">&#39;男&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值</th></tr></thead><tbody><tr><td style="text-align:left;">list</td><td style="text-align:left;">展示用的结构列表 示例：[{label: &#39;姓名&#39;, textKey: &#39;name&#39;}]</td><td style="text-align:left;">Array</td><td style="text-align:left;">[]</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">values</td><td style="text-align:left;">展示数据</td><td style="text-align:left;">Object</td><td style="text-align:left;">{}</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">labelWidth</td><td style="text-align:left;">标题的宽度 单位rpx</td><td style="text-align:left;">String、Number</td><td style="text-align:left;">200</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">labelColor</td><td style="text-align:left;">标题的颜色</td><td style="text-align:left;">String</td><td style="text-align:left;">#999999</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">labelAlign</td><td style="text-align:left;">标题的对齐方式</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">left、right、center</td></tr><tr><td style="text-align:left;">labelFold</td><td style="text-align:left;">标题的单行，多行显示</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">single、multi</td></tr><tr><td style="text-align:left;">labelMultiRows</td><td style="text-align:left;">标题的多行显示显示行数</td><td style="text-align:left;">String、Number</td><td style="text-align:left;">2</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">labelSuffix</td><td style="text-align:left;">标题的后缀</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">textColor</td><td style="text-align:left;">显示的值的颜色</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">textAlign</td><td style="text-align:left;">值的对齐方式</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">left、right、center</td></tr><tr><td style="text-align:left;">textFold</td><td style="text-align:left;">值的单行，多行显示</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">single、multi</td></tr><tr><td style="text-align:left;">textMultiRows</td><td style="text-align:left;">值的多行显示显示行数</td><td style="text-align:left;">String、Number</td><td style="text-align:left;">2</td><td style="text-align:left;"></td></tr></tbody></table>`,11),o=[p];function e(c,E,r,y,i,d){return n(),l("div",null,o)}const g=s(t,[["render",e]]);export{u as __pageData,g as default};
