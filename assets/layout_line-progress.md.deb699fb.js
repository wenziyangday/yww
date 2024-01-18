import{_ as t,o as s,c as l,Q as e}from"./chunks/framework.10dabb5d.js";const u=JSON.parse('{"title":"LineProgress 线形进度条","description":"","frontmatter":{},"headers":[],"relativePath":"layout/line-progress.md","filePath":"layout/line-progress.md"}'),a={name:"layout/line-progress.md"},n=e(`<h1 id="lineprogress-线形进度条" tabindex="-1">LineProgress 线形进度条 <a class="header-anchor" href="#lineprogress-线形进度条" aria-label="Permalink to &quot;LineProgress 线形进度条&quot;">​</a></h1><p>展示操作或任务的当前进度，比如上传文件，是一个线形的进度条。</p><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><ul><li>通过<code>percent</code>设置当前的进度值，该值区间为<code>0-100</code>.</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">mr-line-progress</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:percent</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;70&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">mr-line-progress</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:percent</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;70&quot;</span><span style="color:#24292E;">/&gt;</span></span></code></pre></div><h3 id="组件使用的多种形态" tabindex="-1">组件使用的多种形态 <a class="header-anchor" href="#组件使用的多种形态" aria-label="Permalink to &quot;组件使用的多种形态&quot;">​</a></h3><ul><li>通过<code>active-color</code>设置进度条的颜色，也可以直接设置<code>type</code>主题颜色(优先起作用)，使用预置值</li><li>通过<code>round</code>设置进度条圆角</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">mr-line-progress</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:percent</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;70&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;info&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">mr-line-progress</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:percent</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;70&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">active-color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#123456&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">mr-line-progress</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:percent</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;70&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:round</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;false&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">mr-line-progress</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:percent</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;70&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;info&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">mr-line-progress</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:percent</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;70&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">active-color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#123456&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">mr-line-progress</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:percent</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;70&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:round</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;false&quot;</span><span style="color:#24292E;">/&gt;</span></span></code></pre></div><ul><li>进度条动画效果</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">mr-line-progress</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:percent</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;70&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">striped</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">striped-active</span><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">mr-line-progress</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:percent</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;70&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">striped</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">striped-active</span><span style="color:#24292E;">/&gt;</span></span></code></pre></div><ul><li>隐藏百分比</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">mr-line-progress</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:percent</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;70&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:show-percent</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;false&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">mr-line-progress</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:percent</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;70&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:show-percent</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;false&quot;</span><span style="color:#24292E;">/&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值</th></tr></thead><tbody><tr><td style="text-align:left;">round</td><td style="text-align:left;">两端是否显示半圆形</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">主题颜色</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">activeColor</td><td style="text-align:left;">激活部分的颜色</td><td style="text-align:left;">String</td><td style="text-align:left;">#c8161d</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">inactiveColor</td><td style="text-align:left;">非激活部分的颜色</td><td style="text-align:left;">String</td><td style="text-align:left;">#ffffff</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">percent</td><td style="text-align:left;">进度百分比，数值</td><td style="text-align:left;">Number</td><td style="text-align:left;">0</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">showPercent</td><td style="text-align:left;">是否在进度条内部显示百分比的值</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">进度条的高度，单位rpx</td><td style="text-align:left;">Number, String</td><td style="text-align:left;">28</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">striped</td><td style="text-align:left;">是否显示条纹</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">stripedActive</td><td style="text-align:left;">条纹是否显示活动状态</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td></tr></tbody></table>`,15),o=[n];function p(r,c,i,d,y,E){return s(),l("div",null,o)}const h=t(a,[["render",p]]);export{u as __pageData,h as default};