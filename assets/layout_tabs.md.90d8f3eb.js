import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.10dabb5d.js";const g=JSON.parse('{"title":"Tabs 标签","description":"","frontmatter":{},"headers":[],"relativePath":"layout/tabs.md","filePath":"layout/tabs.md"}'),p={name:"layout/tabs.md"},t=l(`<h1 id="tabs-标签" tabindex="-1">Tabs 标签 <a class="header-anchor" href="#tabs-标签" aria-label="Permalink to &quot;Tabs 标签&quot;">​</a></h1><p>该组件，是一个tabs标签组件，在标签多的时候，可以配置为左右滑动，标签少的时候，可以禁止滑动。 该组件的一个特点是配置为滚动模式时，激活的tab会自动移动到组件的中间位置。</p><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><ul><li>通过设置<code>is-scroll</code>(默认为<code>true</code>)，配置tabs组件的内容是否可以左右拖动，一般4个标签以下时，无需拖动，设置为false，5个标签以上，建议可以左右拖动。 tabs标签的切换，需要绑定<code>current</code>值，在<code>change</code>事件回调中可以得到<code>index</code>，将其赋值给<code>current</code>即可。</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-tabs</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;list&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:is-scroll</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;false&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:current</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;current&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;change&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      list: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;售后管理&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;风险管理&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;贷后管理&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      current: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">change</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> index;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-tabs</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;list&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:is-scroll</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;false&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:current</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;current&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;change&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      list: [{</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;售后管理&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;风险管理&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;贷后管理&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      }],</span></span>
<span class="line"><span style="color:#24292E;">      current: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">change</span><span style="color:#24292E;">(</span><span style="color:#E36209;">index</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> index;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="组件使用的多种形态" tabindex="-1">组件使用的多种形态 <a class="header-anchor" href="#组件使用的多种形态" aria-label="Permalink to &quot;组件使用的多种形态&quot;">​</a></h3><ul><li>滚动模式</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-tabs</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;list&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:is-scroll</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:current</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;current&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;change&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">bg-color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;transparent&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:gutter</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;60&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      list: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;售后管理&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;风险管理&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;贷后管理&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        count: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;渠道管理&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待付款&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待评价&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        count: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待收货&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待付款&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待评价&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        count: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">      }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      current: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">change</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> index;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-tabs</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;list&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:is-scroll</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:current</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;current&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;change&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">bg-color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;transparent&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:gutter</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;60&quot;</span></span>
<span class="line"><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      list: [{</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;售后管理&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;风险管理&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;贷后管理&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        count: </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;渠道管理&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待付款&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待评价&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        count: </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待收货&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待付款&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待评价&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        count: </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">      }],</span></span>
<span class="line"><span style="color:#24292E;">      current: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">change</span><span style="color:#24292E;">(</span><span style="color:#E36209;">index</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> index;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ul><li>胶囊模式: 1</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-tabs</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;change&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">bg-color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;transparent&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;capsule&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:gutter</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:bold</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      list: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;售后管理&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;风险管理&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;贷后管理&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        count: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;渠道管理&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待付款&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待评价&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        count: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待收货&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待付款&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待评价&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        count: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">      }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      current: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">change</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> index;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-tabs</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;change&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">bg-color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;transparent&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;capsule&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:gutter</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:bold</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      list: [{</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;售后管理&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;风险管理&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;贷后管理&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        count: </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;渠道管理&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待付款&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待评价&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        count: </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待收货&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待付款&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待评价&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        count: </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">      }],</span></span>
<span class="line"><span style="color:#24292E;">      current: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">change</span><span style="color:#24292E;">(</span><span style="color:#E36209;">index</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> index;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ul><li>胶囊模式: 2</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-tabs</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;list&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:current</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;current&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;change&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">bg-color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#F4F5F6&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:gutter</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">capsule-bg-inactive-color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;transparent&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">capsule-bg-active-color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#ffffff&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">capsule-border-radius</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;20&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">active-color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#333333&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;capsule&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      list: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;售后管理&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;风险管理&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;贷后管理&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        count: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;渠道管理&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待付款&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待评价&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        count: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待收货&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待付款&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;待评价&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        count: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">      }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      current: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">change</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> index;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-tabs</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;list&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:current</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;current&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;change&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">bg-color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#F4F5F6&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:gutter</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">capsule-bg-inactive-color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;transparent&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">capsule-bg-active-color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#ffffff&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">capsule-border-radius</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;20&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">active-color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#333333&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;capsule&quot;</span></span>
<span class="line"><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      list: [{</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;售后管理&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;风险管理&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;贷后管理&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        count: </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;渠道管理&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待付款&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待评价&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        count: </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待收货&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待付款&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;待评价&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        count: </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">      }],</span></span>
<span class="line"><span style="color:#24292E;">      current: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">change</span><span style="color:#24292E;">(</span><span style="color:#E36209;">index</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> index;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值</th></tr></thead><tbody><tr><td style="text-align:left;">list</td><td style="text-align:left;">需循环的标签列表</td><td style="text-align:left;">Array</td><td style="text-align:left;">[]</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">显示模式</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">capsule</td></tr><tr><td style="text-align:left;">isScroll</td><td style="text-align:left;">导航菜单是否需要滚动，如只有2或者3个的时候，就不需要滚动了，此时使用flex平分tab的宽度</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">current</td><td style="text-align:left;">当前活动tab的索引</td><td style="text-align:left;">Number, String</td><td style="text-align:left;">0</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">导航栏的高度和行高</td><td style="text-align:left;">String, Number</td><td style="text-align:left;">80</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">fontSize</td><td style="text-align:left;">字体大小</td><td style="text-align:left;">String, Number</td><td style="text-align:left;">30</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">duration</td><td style="text-align:left;">过渡动画时长, 单位ms</td><td style="text-align:left;">String、Number</td><td style="text-align:left;">0.5</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">activeColor</td><td style="text-align:left;">选中项的主题颜色</td><td style="text-align:left;">String</td><td style="text-align:left;">#c8161d</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">inactiveColor</td><td style="text-align:left;">未选中项的颜色</td><td style="text-align:left;">String</td><td style="text-align:left;">#999999</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">barWidth</td><td style="text-align:left;">菜单底部移动的bar的宽度，单位rpx</td><td style="text-align:left;">String, Number</td><td style="text-align:left;">40</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">barHeight</td><td style="text-align:left;">菜单底部移动的bar的高度，单位rpx</td><td style="text-align:left;">String, Number</td><td style="text-align:left;">6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">gutter</td><td style="text-align:left;">单个tab的左或有内边距（左右相同）</td><td style="text-align:left;">String, Number</td><td style="text-align:left;">30</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">bgColor</td><td style="text-align:left;">导航栏的背景颜色</td><td style="text-align:left;">String</td><td style="text-align:left;">#ffffff</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;">读取传入的数组对象的属性(tab名称)</td><td style="text-align:left;">String</td><td style="text-align:left;">name</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">count</td><td style="text-align:left;">读取传入的数组对象的属性(徽标数)</td><td style="text-align:left;">String</td><td style="text-align:left;">count</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">offset</td><td style="text-align:left;">徽标数位置偏移</td><td style="text-align:left;">Array</td><td style="text-align:left;"><code>[5, 20]</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">bold</td><td style="text-align:left;">活动tab字体是否加粗</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">activeItemStyle</td><td style="text-align:left;">当前活动tab item的样式</td><td style="text-align:left;">Object</td><td style="text-align:left;">{}</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">showBar</td><td style="text-align:left;">是否显示底部的滑块</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">barStyle</td><td style="text-align:left;">底部滑块的自定义样式</td><td style="text-align:left;">Object</td><td style="text-align:left;">{}</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">itemWidth</td><td style="text-align:left;">标签的宽度</td><td style="text-align:left;">Number, String</td><td style="text-align:left;">auto</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">capsuleBgActiveColor</td><td style="text-align:left;">胶囊激活背景颜色</td><td style="text-align:left;">String</td><td style="text-align:left;">#FEE8E8</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">capsuleBgInactiveColor</td><td style="text-align:left;">胶囊非激活背景颜色</td><td style="text-align:left;">String</td><td style="text-align:left;">#ffffff</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">capsuleBorderRadius</td><td style="text-align:left;">胶囊圆角</td><td style="text-align:left;">String</td><td style="text-align:left;">100</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;events&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">事件名</th><th style="text-align:left;">说明</th><th style="text-align:left;">参数</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;">点击标签时触发</td><td style="text-align:left;">index: 点击了第几个tab，索引从0开始</td></tr></tbody></table>`,17),e=[t];function o(c,r,E,y,i,d){return n(),a("div",null,e)}const u=s(p,[["render",o]]);export{g as __pageData,u as default};
