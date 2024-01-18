import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.10dabb5d.js";const u=JSON.parse('{"title":"Steps 步骤条","description":"","frontmatter":{},"headers":[],"relativePath":"layout/steps.md","filePath":"layout/steps.md"}'),p={name:"layout/steps.md"},t=l(`<h1 id="steps-步骤条" tabindex="-1">Steps 步骤条 <a class="header-anchor" href="#steps-步骤条" aria-label="Permalink to &quot;Steps 步骤条&quot;">​</a></h1><p>该组件一般用于完成一个任务要分几个步骤，标识目前处于第几步的场景。</p><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>steps组件的基本使用</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-steps</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:current</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;current&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;numList&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      numList: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;下单&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;出库&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;运输&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;签收&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },],</span></span>
<span class="line"><span style="color:#E1E4E8;">      current: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-steps</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:current</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;current&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;numList&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      numList: [{</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;下单&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;出库&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;运输&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;签收&#39;</span></span>
<span class="line"><span style="color:#24292E;">      },],</span></span>
<span class="line"><span style="color:#24292E;">      current: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="组件的几种模式" tabindex="-1">组件的几种模式 <a class="header-anchor" href="#组件的几种模式" aria-label="Permalink to &quot;组件的几种模式&quot;">​</a></h3><ul><li>纵向使用</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-steps</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:direction</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;direction&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:current</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;current&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;steps&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:mode</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;mode&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;icon&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      direction: </span><span style="color:#9ECBFF;">&#39;column&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      current: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      steps: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;账号生成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        desc: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;自动销售方、开票方、进件二网备案&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        desc: </span><span style="color:#9ECBFF;">&#39;进行中&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;关联客户经理&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        desc: </span><span style="color:#9ECBFF;">&#39;下一步&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;开通B端/合作商作业平台账号&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        desc: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },],</span></span>
<span class="line"><span style="color:#E1E4E8;">      mode: </span><span style="color:#9ECBFF;">&#39;number&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&#39;checkmark&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-steps</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:direction</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;direction&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:current</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;current&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;steps&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:mode</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;mode&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;icon&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      direction: </span><span style="color:#032F62;">&#39;column&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      current: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      steps: [{</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;账号生成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        desc: </span><span style="color:#032F62;">&#39;已完成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;自动销售方、开票方、进件二网备案&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        desc: </span><span style="color:#032F62;">&#39;进行中&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;关联客户经理&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        desc: </span><span style="color:#032F62;">&#39;下一步&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;开通B端/合作商作业平台账号&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        desc: </span><span style="color:#032F62;">&#39;已完成&#39;</span></span>
<span class="line"><span style="color:#24292E;">      },],</span></span>
<span class="line"><span style="color:#24292E;">      mode: </span><span style="color:#032F62;">&#39;number&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      icon: </span><span style="color:#032F62;">&#39;checkmark&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ul><li>自定义内容结构</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mr-steps</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:direction</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;direction&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:current</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;current&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;steps&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;icon&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:use-slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">columnSlot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{data}</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;wrap-inner&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;{{ data.name }}&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;{{ data.status }}&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;desc&quot;</span><span style="color:#E1E4E8;">&gt;{{ data.content }}&lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;date&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;{{ data.date }}&lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">mr-steps</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      direction: </span><span style="color:#9ECBFF;">&#39;column&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      current: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      steps: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;批复人姓名&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        status: </span><span style="color:#9ECBFF;">&#39;已同意&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        content: </span><span style="color:#9ECBFF;">&#39;此处为审批内容；宽度为+++px，文字过多超出后向下展示，此处为审批内容&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        date: </span><span style="color:#9ECBFF;">&#39;2023-01-29 12:29:24&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;批复人姓名&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        status: </span><span style="color:#9ECBFF;">&#39;已同意&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        content: </span><span style="color:#9ECBFF;">&#39;此处为审批内容；宽度为+++px，文字过多超出后向下展示，此处为审批内容&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        date: </span><span style="color:#9ECBFF;">&#39;2023-01-29 12:29:24&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;批复人姓名&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        status: </span><span style="color:#9ECBFF;">&#39;已同意&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        content: </span><span style="color:#9ECBFF;">&#39;此处为审批内容；宽度为+++px，文字过多超出后向下展示，此处为审批内容&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        date: </span><span style="color:#9ECBFF;">&#39;2023-01-29 12:29:24&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;批复人姓名&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        status: </span><span style="color:#9ECBFF;">&#39;已同意&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        content: </span><span style="color:#9ECBFF;">&#39;此处为审批内容；宽度为+++px，文字过多超出后向下展示，此处为审批内容&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        date: </span><span style="color:#9ECBFF;">&#39;2023-01-29 12:29:24&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      mode: </span><span style="color:#9ECBFF;">&#39;number&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&#39;checkmark&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mr-steps</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:direction</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;direction&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:current</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;current&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;steps&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;icon&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:use-slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">columnSlot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">{data}</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;wrap-inner&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#B31D28;font-style:italic;">text</span><span style="color:#24292E;">&gt;{{ data.name }}&lt;/</span><span style="color:#B31D28;font-style:italic;">text</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#B31D28;font-style:italic;">text</span><span style="color:#24292E;">&gt;{{ data.status }}&lt;/</span><span style="color:#B31D28;font-style:italic;">text</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;desc&quot;</span><span style="color:#24292E;">&gt;{{ data.content }}&lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;date&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;{{ data.date }}&lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">mr-steps</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      direction: </span><span style="color:#032F62;">&#39;column&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      current: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      steps: [{</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;批复人姓名&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        status: </span><span style="color:#032F62;">&#39;已同意&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        content: </span><span style="color:#032F62;">&#39;此处为审批内容；宽度为+++px，文字过多超出后向下展示，此处为审批内容&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        date: </span><span style="color:#032F62;">&#39;2023-01-29 12:29:24&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;批复人姓名&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        status: </span><span style="color:#032F62;">&#39;已同意&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        content: </span><span style="color:#032F62;">&#39;此处为审批内容；宽度为+++px，文字过多超出后向下展示，此处为审批内容&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        date: </span><span style="color:#032F62;">&#39;2023-01-29 12:29:24&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;批复人姓名&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        status: </span><span style="color:#032F62;">&#39;已同意&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        content: </span><span style="color:#032F62;">&#39;此处为审批内容；宽度为+++px，文字过多超出后向下展示，此处为审批内容&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        date: </span><span style="color:#032F62;">&#39;2023-01-29 12:29:24&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }, {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;批复人姓名&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        status: </span><span style="color:#032F62;">&#39;已同意&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        content: </span><span style="color:#032F62;">&#39;此处为审批内容；宽度为+++px，文字过多超出后向下展示，此处为审批内容&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        date: </span><span style="color:#032F62;">&#39;2023-01-29 12:29:24&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }],</span></span>
<span class="line"><span style="color:#24292E;">      mode: </span><span style="color:#032F62;">&#39;number&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      icon: </span><span style="color:#032F62;">&#39;checkmark&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值</th></tr></thead><tbody><tr><td style="text-align:left;">mode</td><td style="text-align:left;">步骤条的模式</td><td style="text-align:left;">String</td><td style="text-align:left;">dot</td><td style="text-align:left;">number</td></tr><tr><td style="text-align:left;">list</td><td style="text-align:left;">步骤条的数据</td><td style="text-align:left;">Array</td><td style="text-align:left;">[]</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">current</td><td style="text-align:left;">当前哪一步是激活的</td><td style="text-align:left;">Number, String</td><td style="text-align:left;">0</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">activeColor</td><td style="text-align:left;">激活步骤的颜色</td><td style="text-align:left;">String</td><td style="text-align:left;">#c8161d</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">inActiveColor</td><td style="text-align:left;">未激活的颜色</td><td style="text-align:left;">String</td><td style="text-align:left;">#999999</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">icon</td><td style="text-align:left;">自定义图标</td><td style="text-align:left;">String</td><td style="text-align:left;">checkmark</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">direction</td><td style="text-align:left;">step的排列方向</td><td style="text-align:left;">String</td><td style="text-align:left;">row</td><td style="text-align:left;">column</td></tr><tr><td style="text-align:left;">useSlot</td><td style="text-align:left;">是否使用数据插槽(作用域)</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">column</td></tr></tbody></table>`,13),o=[t];function e(c,E,r,y,i,F){return n(),a("div",null,o)}const g=s(p,[["render",e]]);export{u as __pageData,g as default};
