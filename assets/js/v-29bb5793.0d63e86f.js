"use strict";(self.webpackChunkblog_demo=self.webpackChunkblog_demo||[]).push([[2488],{5126:(e,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-29bb5793",path:"/learn/frontmatter.html",title:"Front Matter",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"官方预定义变量",slug:"官方预定义变量",children:[{level:3,title:"title",slug:"title",children:[]},{level:3,title:"lang",slug:"lang",children:[]},{level:3,title:"description",slug:"description",children:[]},{level:3,title:"layout",slug:"layout",children:[]},{level:3,title:"permalink",slug:"permalink",children:[]},{level:3,title:"metaTitle",slug:"metatitle",children:[]},{level:3,title:"meta",slug:"meta",children:[]}]},{level:2,title:"默认主题的预定义变量",slug:"默认主题的预定义变量",children:[{level:3,title:"navbar",slug:"navbar",children:[]},{level:3,title:"sidebar",slug:"sidebar",children:[]},{level:3,title:"prev",slug:"prev",children:[]},{level:3,title:"next",slug:"next",children:[]},{level:3,title:"search",slug:"search",children:[]},{level:3,title:"tags",slug:"tags",children:[]}]}],git:{}}},8499:(e,n,a)=>{a.r(n),a.d(n,{default:()=>Y});var l=a(6252);const t=(0,l._)("h1",{id:"front-matter",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#front-matter","aria-hidden":"true"},"#"),(0,l.Uk)(" Front Matter")],-1),s=(0,l.Uk)("在开始之前，你可以先读一读官方对于"),i={href:"https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html",target:"_blank",rel:"noopener noreferrer"},r=(0,l.Uk)("frontmatter"),c=(0,l.Uk)("的介绍，更有助于你的理解及使用"),o=(0,l.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>FrontMatter</code>是写在md文件中，并且<code>在每篇md的最顶部，使用---包裹</code>起来的一种形式，使用的是<code>yaml</code>语法，你可以像下面这样</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token front-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token string">&quot;2021/111/27&quot;</span> <span class="token comment">#手动设置此篇文章发布时间</span>\n<span class="token key atrule">tag</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>tag1<span class="token punctuation">,</span>tag2<span class="token punctuation">]</span> <span class="token comment">#设置此篇文章的标签</span>\n<span class="token key atrule">categories</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>cate1<span class="token punctuation">,</span>cate2<span class="token punctuation">,</span>cate3<span class="token punctuation">]</span> <span class="token comment">#设置此篇文章的类别</span>\n<span class="token key atrule">keyword</span><span class="token punctuation">:</span> key1<span class="token punctuation">,</span>key2 <span class="token comment">#设置此篇文章的关键词</span>\n<span class="token key atrule">description</span><span class="token punctuation">:</span> 这是一个描述 <span class="token comment">#设置此篇文章的描述</span>\n<span class="token key atrule">sticky</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#是否置顶该篇文章</span>\n<span class="token key atrule">coverUrl</span><span class="token punctuation">:</span> <span class="token string">&quot;https://aurora.xcye.xyz/avatar.jpg&quot;</span> <span class="token comment">#设置封面图</span>\n<span class="token key atrule">title</span><span class="token punctuation">:</span> 这是第一篇文章 <span class="token comment"># 设置标题</span></span>\n<span class="token punctuation">---</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div><p>上面这些是<code>aurora</code>主题自己加上的，你也可以加入官方的一些设置，下面这些都是官方的，并且在该主题中，基本上都支持</p><h2 id="官方预定义变量" tabindex="-1"><a class="header-anchor" href="#官方预定义变量" aria-hidden="true">#</a> 官方预定义变量</h2><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>h1_title || siteConfig.title</code></li></ul><p>当前页面的标题。</p><h3 id="lang" tabindex="-1"><a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>en-US</code></li></ul><p>当前页面的语言。</p><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>siteConfig.description</code></li></ul><p>当前页面的描述。</p><h3 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>Layout</code></li></ul><p>设置当前页面的布局组件。</p><h3 id="permalink" tabindex="-1"><a class="header-anchor" href="#permalink" aria-hidden="true">#</a> permalink</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>siteConfig.permalink</code></li></ul>',17),p=(0,l.Uk)("参考: "),u=(0,l.Uk)("Permalinks"),d=(0,l.Uk)("."),h=(0,l.uE)('<h3 id="metatitle" tabindex="-1"><a class="header-anchor" href="#metatitle" aria-hidden="true">#</a> metaTitle</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>`${page.title} | ${siteConfig.title}`</code></li></ul><p>重写默认的 meta title。</p><h3 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h3><ul><li>类型: <code>array</code></li><li>默认值: <code>undefined</code></li></ul><p>指定额外的要注入的 meta 标签：</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">meta</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> description\n    <span class="token key atrule">content</span><span class="token punctuation">:</span> hello\n  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> keywords\n    <span class="token key atrule">content</span><span class="token punctuation">:</span> super duper SEO\n<span class="token punctuation">---</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="默认主题的预定义变量" tabindex="-1"><a class="header-anchor" href="#默认主题的预定义变量" aria-hidden="true">#</a> 默认主题的预定义变量</h2><h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>undefined</code></li></ul>',10),k=(0,l.Uk)("参考: "),m=(0,l.Uk)("默认主题配置 > 禁用导航栏"),b=(0,l.Uk)("。"),g={id:"sidebar",tabindex:"-1"},f=(0,l._)("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#",-1),_=(0,l.Uk)(" sidebar"),v=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("类型: "),(0,l._)("code",null,"boolean|'auto'")]),(0,l._)("li",null,[(0,l.Uk)("默认值: "),(0,l._)("code",null,"undefined")])],-1),U=(0,l.Uk)("参考: "),y=(0,l.Uk)("默认主题配置 > 侧边栏"),E=(0,l.Uk)("。"),x={id:"prev",tabindex:"-1"},B=(0,l._)("a",{class:"header-anchor",href:"#prev","aria-hidden":"true"},"#",-1),A=(0,l.Uk)(" prev"),w=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("类型: "),(0,l._)("code",null,"boolean|string")]),(0,l._)("li",null,[(0,l.Uk)("默认值: "),(0,l._)("code",null,"undefined")])],-1),W=(0,l.Uk)("参考: "),C=(0,l.Uk)("默认主题配置 > 上 / 下一篇链接"),F=(0,l.Uk)("。"),q={id:"next",tabindex:"-1"},z=(0,l._)("a",{class:"header-anchor",href:"#next","aria-hidden":"true"},"#",-1),L=(0,l.Uk)(" next"),M=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("类型: "),(0,l._)("code",null,"boolean|string")]),(0,l._)("li",null,[(0,l.Uk)("默认值: "),(0,l._)("code",null,"undefined")])],-1),T=(0,l.Uk)("参考: "),j=(0,l.Uk)("默认主题配置 > 上 / 下一篇链接"),D=(0,l.Uk)("。"),I=(0,l._)("h3",{id:"search",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#search","aria-hidden":"true"},"#"),(0,l.Uk)(" search")],-1),P=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("类型: "),(0,l._)("code",null,"boolean")]),(0,l._)("li",null,[(0,l.Uk)("默认值: "),(0,l._)("code",null,"undefined")])],-1),S=(0,l.Uk)("参考: "),$=(0,l.Uk)("默认主题配置 > 内置搜索"),H=(0,l.Uk)("。"),N=(0,l._)("h3",{id:"tags",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#tags","aria-hidden":"true"},"#"),(0,l.Uk)(" tags")],-1),O=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("类型: "),(0,l._)("code",null,"array")]),(0,l._)("li",null,[(0,l.Uk)("默认值: "),(0,l._)("code",null,"undefined")])],-1),R={},Y=(0,a(3744).Z)(R,[["render",function(e,n){const a=(0,l.up)("ExternalLinkIcon"),R=(0,l.up)("RouterLink"),Y=(0,l.up)("Badge");return(0,l.wg)(),(0,l.iD)(l.HY,null,[t,(0,l._)("p",null,[s,(0,l._)("a",i,[r,(0,l.Wm)(a)]),c]),o,(0,l._)("p",null,[p,(0,l.Wm)(R,{to:"/learn/permalinks.html"},{default:(0,l.w5)((()=>[u])),_:1}),d]),h,(0,l._)("p",null,[k,(0,l.Wm)(R,{to:"/theme/default-theme-config.html#%E7%A6%81%E7%94%A8%E5%AF%BC%E8%88%AA%E6%A0%8F"},{default:(0,l.w5)((()=>[m])),_:1}),b]),(0,l._)("h3",g,[f,_,(0,l.Wm)(Y,{type:"tip",text:"不支持",vertical:"top"})]),v,(0,l._)("p",null,[U,(0,l.Wm)(R,{to:"/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F"},{default:(0,l.w5)((()=>[y])),_:1}),E]),(0,l._)("h3",x,[B,A,(0,l.Wm)(Y,{type:"tip",text:"不支持",vertical:"top"})]),w,(0,l._)("p",null,[W,(0,l.Wm)(R,{to:"/theme/default-theme-config.html#%E4%B8%8A-%E4%B8%8B%E4%B8%80%E7%AF%87%E9%93%BE%E6%8E%A5"},{default:(0,l.w5)((()=>[C])),_:1}),F]),(0,l._)("h3",q,[z,L,(0,l.Wm)(Y,{type:"tip",text:"不支持",vertical:"top"})]),M,(0,l._)("p",null,[T,(0,l.Wm)(R,{to:"/theme/default-theme-config.html#%E4%B8%8A-%E4%B8%8B%E4%B8%80%E7%AF%87%E9%93%BE%E6%8E%A5"},{default:(0,l.w5)((()=>[j])),_:1}),D]),I,P,(0,l._)("p",null,[S,(0,l.Wm)(R,{to:"/theme/default-theme-config.html#%E5%86%85%E7%BD%AE%E6%90%9C%E7%B4%A2"},{default:(0,l.w5)((()=>[$])),_:1}),H]),N,O],64)}]])}}]);