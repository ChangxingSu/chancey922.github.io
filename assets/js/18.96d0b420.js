(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{513:function(t,e,a){"use strict";a.r(e);var s=a(29),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("对微生物组学分析中常用的关联分析方法进行总结，侧重点在于方法的应用，原理暂时先不涉及过多。")]),t._v(" "),a("h1",{attrs:{id:"微生物环境关联因子分析方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微生物环境关联因子分析方法"}},[t._v("#")]),t._v(" 微生物环境关联因子分析方法")]),t._v(" "),a("h2",{attrs:{id:"环境关联因子分析的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境关联因子分析的特性"}},[t._v("#")]),t._v(" 环境关联因子分析的特性")]),t._v(" "),a("p",[t._v("一般情况下，环境因子指的是样本的一些生理生化指标，常见的比如温度、pH、各种形态N浓度、磷酸盐、COD或者特定污染物比如重金属、石油类物质等等。")]),t._v(" "),a("p",[t._v("值得注意的是，"),a("strong",[t._v("环境因子关联中的环境因子可以是任何类型的数据")]),t._v("，不要局限于我们常见的环境指标，比如同一环境样本中其它类型物种的组成结构，像水环境中的浮游动植物等，还有在动物共生微生物研究中，宿主动物相关基因的表达水平、代谢组学得到的代谢物组成数据等等，都是可以用来做关联分析。")]),t._v(" "),a("p",[t._v("因为环境因子的种类非常多样，就会出现定性数据和定量数据，在定量的数据之中，由于因子本身的差异，可能会导致数据之间差异特别的大，不同因子的数据之间可能会有几个数量级的差别。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210717230610399.png",alt:"image-20210717230610399"}})]),t._v(" "),a("h3",{attrs:{id:"标准化处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准化处理"}},[t._v("#")]),t._v(" 标准化处理")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#vegan::decostand() 函数的数据标准化方法\ndat2 <- decostand(dat, method = 'pa')    #二元 0-1 转化\ndat2 <- decostand(dat, method = 'normalize')    #转化后平方和为 1\ndat2 <- decostand(dat, method = 'hellinger')    #Hellinger 转化\ndat2 <- decostand(dat, method = 'chi.square')    #卡方转化\n")])])]),a("p",[t._v("参考：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzIxNzc1Mzk3NQ==&mid=2247484285&idx=1&sn=9f32e628b1abc7502b3c3a816461ccbd&chksm=97f5b365a0823a7310b5a561f05ebbf7f19e88d01d0de4cdce0be014612e19d75d4203a87c98&token=406444279&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("群落分析中常见的数据转化方法")])]),t._v(" "),a("h2",{attrs:{id:"环境因子的筛选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境因子的筛选"}},[t._v("#")]),t._v(" 环境因子的筛选")]),t._v(" "),a("p",[t._v("参考资料："),a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1749562",target:"_blank",rel:"noopener noreferrer"}},[t._v("微生物群落和环境因子相关性：Bioenv & bvStep")])]),t._v(" "),a("h3",{attrs:{id:"vif分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vif分析"}},[t._v("#")]),t._v(" VIF分析")]),t._v(" "),a("p",[t._v("VIF分析是针对所有环境因子进行共线性分析，最后会给出每个环境因子的得分，VIF分析通常以10作为边界，当VIF得分大于10的时候，通常意义上就认为这个环境因子是无效的，可以从后续的分析中剔除。")]),t._v(" "),a("p",[t._v("方法：ggvegan:vif.cca")]),t._v(" "),a("h3",{attrs:{id:"bioenv分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bioenv分析"}},[t._v("#")]),t._v(" BioEnv分析")]),t._v(" "),a("p",[t._v("BioEnv分析是计算不同环境因子组合与微生物群落之间的相关性，最后通过correlation的结果选出对微生物群落影响最大的环境因子组合。")]),t._v(" "),a("p",[t._v("方法：")]),t._v(" "),a("div",{staticClass:"language-R extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ggvegan::bioenv")]),t._v("\nbioenv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("comm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spearman"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bray"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("upto "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ncol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trace "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" partial "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" metric "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"euclidean"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mahalanobis"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"manhattan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gower"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parallel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getOption"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mc.cores"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token ellipsis"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ncomm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("群落\nenv"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("环境因子\nmethod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("相关性方法，同cor函数\nindex：群落不相似性矩阵的构建方法。同vegdist函数\nupto：子集中最多元素个数\npartial：是否做partial分析\nmetric：环境因子矩阵构建方法，有四种方法。\n")])])]),a("h2",{attrs:{id:"cca-rda分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cca-rda分析"}},[t._v("#")]),t._v(" CCA/RDA分析")]),t._v(" "),a("p",[t._v("环境关联因子分析最常使用的方法就是CCA和RDA，这两个方法其实是一个东西，只不过其所使用的模型不同，RDA是基于线性模型，而CCA是基于单峰模型。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210717230633775.png",alt:"image-20210717230633775"}})]),t._v(" "),a("p",[t._v("CCA和RDA也是一种降维分析。在CCA和RDA中，会以箭头的形式表示环境因子，"),a("strong",[t._v("箭头的长度表示环境因子对微生物群落变化的贡献程度，箭头越长，表明该环境因子对微生物群落的影响越大")]),t._v("。箭头的方向表示环境因子与微生物群落变化的关系，比如在这幅图中，我们可以看到pH的箭头指向绿色的样本，而COD的箭头却正好相反，那么我们就可以得出微生物群落向绿色分组转变可能是由于样本的pH增加而COD含量降低所导致的。")]),t._v(" "),a("p",[t._v("我们在文章中经常会发现，有些研究使用的是RDA，而有些研究使用的是CCA，那么到底这两种方法如何选择呢？")]),t._v(" "),a("p",[t._v("在进行排序分析之前，我们可以先对物种群落数据进行"),a("strong",[t._v("去趋势的对应分析 (Detrended correspondence analysis, DCA)")]),t._v("，根据结果中Lengths of gradient的数值来进行判断。")]),t._v(" "),a("p",[t._v("结果会给出4个Lengths of gradient的数值，如果其中"),a("strong",[t._v("最大的数值大于4，则应选择CCA，如果最大的数值小于3，则选择RDA，如果最大的数值在3-4之间，则两种分析方法都可以。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210127180952717.png",alt:"image-20210127180952717"}})]),t._v(" "),a("p",[t._v("但是这种标准并不是100%合适，在实际的使用中，"),a("strong",[t._v("我们最好是同时进行CCA和RDA，根据结果进行选择。")])]),t._v(" "),a("p",[t._v("在进行结果判断时，最主要是要看做出来的结果是否出现了“"),a("strong",[t._v("弓形效应")]),t._v("”，比如下面这个图，样本点的分布如同一个拉开的弓。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210717230652013.png",alt:"image-20210717230652013"}}),t._v(" "),a("p",[t._v("弓形效应：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzIxNzc1Mzk3NQ==&mid=2247484307&idx=1&sn=5a70c2a724841fcb54fd6f0245ec480e&chksm=97f5b38ba0823a9d2c460ac881939d75619215186bb62adb43cfc4e17e455727a4a3ec2009e2&token=514555567&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("对应分析（CA）和去趋势对应分析（DCA）在群落分析中的应用")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.davidzeleny.net/anadat-r/doku.php/en:ca_dca",target:"_blank",rel:"noopener noreferrer"}},[t._v("CA & DCA (unimodal unconstrained ordination)")])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://ordination.okstate.edu/robust.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Robustness of CCA")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://stats.stackexchange.com/questions/158552/what-is-the-horseshoe-effect-and-or-the-arch-effect-in-pca-correspondence",target:"_blank",rel:"noopener noreferrer"}},[t._v("What is the “horseshoe effect” and/or the “arch effect” in PCA / correspondence analysis?")])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://dmcglinn.github.io/quant_methods/lessons/multivariate_models.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multivariate models")]),t._v("介绍多变量模型")]),t._v(" "),a("p",[t._v("RDA：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzIxNzc1Mzk3NQ==&mid=2247484372&idx=1&sn=c4536dc5cd97135219ba420738270db9&chksm=97f5b3cca0823adaa8ffff57e20d2d001d8361f9a9ca6bc9217c9ff1810bc3826472fc778813&token=1015994592&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("群落分析的冗余分析（RDA）概述")])]),t._v(" "),a("h2",{attrs:{id:"基于unifrac的db-rda分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于unifrac的db-rda分析"}},[t._v("#")]),t._v(" 基于UniFrac的db-RDA分析")]),t._v(" "),a("p",[t._v("常规的冗余分析（RDA），样方或物种的降维排序实质上反映了欧氏距离。有时我们使用CCA或RDA进行分析得到的结果可能并不理想，这可能是由于部分数据类型并不适合CCA或RDA的算法，或者有时我们可能期望关注非欧式距离样方或物种关系的RDA，就可使用**基于距离的冗余分析（Distance-based redundancy analysis，db-RDA）**来解决。")]),t._v(" "),a("p",[t._v("db-RDA将主坐标分析（PCoA）计算的样方得分矩阵应用在RDA中，其好处是可以基于任意一种距离测度（例如Bray-curtis距离等，而不再仅仅局限于欧氏距离）进行RDA排序。此时可以尝试使用db-RDA，有可能会得到理想的结果。")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210202115336288.png",alt:"image-20210202115336288"}}),t._v(" "),a("p",[t._v("db-RDA结果中各参数的意义与CCA和RDA是一致的，只不过db-RDA在计算的过程中首先进行了PCoA，然后使用PCoA得到的各样本主要PC数值代替了原本的微生物OTU丰度数据。")]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/KIhGjTL1Tzc-QL7Z03LT_g",target:"_blank",rel:"noopener noreferrer"}},[t._v("R包vegan的基于距离的冗余分析（db-RDA）使用步骤")])]),t._v(" "),a("h2",{attrs:{id:"aggregated-boosted-tree-abt-分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aggregated-boosted-tree-abt-分析"}},[t._v("#")]),t._v(" Aggregated boosted tree (ABT)分析")]),t._v(" "),a("p",[t._v("Aggregated boosted tree (ABT)，可以用来评估环境因子对微生物群落差异的贡献大小，条形的长度代表贡献程度，能够用来识别对微生物群落影响最主要的环境因子。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/41396_2013_Article_BFismej2012139_Fig4_HTML.jpg",alt:"figure4"}})]),t._v(" "),a("blockquote",[a("p",[t._v("Relative influence (%) of environmental properties and spatial distance for phylogenetic diversity ("),a("strong",[t._v("a")]),t._v("), phylotypes ("),a("strong",[t._v("b")]),t._v("), weighted UniFrac dissimilarity of field data (pyrosequecing) ("),a("strong",[t._v("c")]),t._v(") and weighted UniFrac dissimilarity of metadata (meta-analysis) ("),a("strong",[t._v("d")]),t._v(") evaluated by ABT models.")]),t._v(" "),a("p",[t._v("——Contemporary environmental variation determines microbial diversity patterns in acid mine drainage")])]),t._v(" "),a("p",[t._v("方法：")]),t._v(" "),a("div",{staticClass:"language-R extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("dismo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("gbm.step\ngbm.step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gbm.x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gbm.y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fold.vector "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tree.complexity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n learning.rate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bag.fraction "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.75")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" site.weights "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nrow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n var.monotone "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gbm.x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n.folds "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prev.stratify "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n family "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bernoulli"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n.trees "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" step.size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n.trees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max.trees "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n tolerance.method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tolerance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" plot.main "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" plot.folds "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n verbose "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" silent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keep.fold.models "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keep.fold.vector "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n keep.fold.fit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token ellipsis"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("参考：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/5VD3qaAemBH0TFqSg2EH_A",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aggregated boosted tree（ABT）评估环境因子对群落变化的解释-红皇后学术")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/7vMXMSf3v7uZGF8lAQpyqw",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过Aggregated boosted tree（ABT）评估解释变量的重要性-小白鱼")])]),t._v(" "),a("h2",{attrs:{id:"多元回归树mrt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多元回归树mrt"}},[t._v("#")]),t._v(" 多元回归树MRT")]),t._v(" "),a("p",[a("strong",[t._v("多元回归树")]),t._v("（Multivariate Regression Trees，MRT）是单元回归树的拓展，是一种对一系列连续型变量递归划分成多个类群的聚类方法，是在"),a("strong",[t._v("决策树")]),t._v("(decision-trees)基础上发展起来的一种较新的分类技术。同一般回归模型一样,MRT也需要因变量(响应变量，群落学中一般是物种数据)和自变量(预测变量，一般为环境因子数据)。不同的是, MRT不需要在响应变量和预测变量之间建立参数估计的回归关系,而是以预测变量为分类节点,利用二歧式的分割法(binary split), 将由响应变量定义的空间(样方)逐步划分为尽可能同质的类别,每一次划分都由某一预测变量(环境因子)的一个最佳划分值来完成, 将响应变量定义的空间(样方)分成两个部分(也叫节点, node),最佳划分原则是让两个"),a("strong",[t._v("节点内部的差异尽量小,节点间的差异尽量大")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/41396_2013_Article_BFismej2012139_Fig5_HTML.jpg",alt:"figure5"}})]),t._v(" "),a("blockquote",[a("p",[t._v("Multivariate regression tree analysis of the relation between relative abundance of dominant lineages and environmental parameters in microbial communities of AMD. The bar plots show the mean relative abundance of specific lineages at each terminal nodes and the distribution patterns of relative abundance represent the dynamics of community composition among each split. The numbers under the bar plots indicate the number ("),a("em",[t._v("n")]),t._v(") of samples within each group. All values are in mg l−1, except pH, which is in standard units.")]),t._v(" "),a("p",[t._v("——Contemporary environmental variation determines microbial diversity patterns in acid mine drainage")])]),t._v(" "),a("p",[t._v("从MRT的应用来看，树型结果比较像VPA、CCA、Pearson的综合，既筛选出了关联密切的环境因子（Pearson），还量化了每个环境因子的解释能力（VPA），通过柱子分布，结合物种丰度等信息，还可以判断环境因子影响的关键物种（CCA）")]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/DkLlY5u6Tqju0r8QIx7jvQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("除了CCA，这个高级分析你也值得拥有")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/LQyX-RBAuZ-7i7kjvbxDsw",target:"_blank",rel:"noopener noreferrer"}},[t._v("多元回归树分析Multivariate Regression Trees，MRT[宏基因组]")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/KCqbQPpfkFt5ZKoPtN8Ruw",target:"_blank",rel:"noopener noreferrer"}},[t._v("约束聚类-多元回归树及重要判别变量识别及R操作")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/freescience/p/7277373.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("宏基因组扩增子图表解读2散点图：组间整体差异分析(Beta多样性)")])]),t._v(" "),a("h2",{attrs:{id:"方差分解分析-vpa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方差分解分析-vpa"}},[t._v("#")]),t._v(" 方差分解分析 (VPA)")]),t._v(" "),a("p",[t._v("群落分析中常见的环境因子分析包括CCA典范对应分析（canonical correspondence analysis）和RDA冗余分析 (Redundancy analysis)，这两种类型分析都是基于降维的思想，将样本、物种、环境因子的信息映射到一个二维平面上，从而判断三者间的关系，可用于发现对群落结构有影响的环境因子，是目前文章中最常见环境因子分析。")]),t._v(" "),a("p",[t._v("然而，这两种分析都存在着一个共同盲区，即无法直观、量化地展示某个环境因子对于群落整体变化的影响情况。这两种环境因子分析的本质实际上是用几组解释变量（即环境因子数据）来共同解释一组响应变量的变化（即微生物数据），当我们需要某个解释变量所能够解释的方差变异程度信息（即某个环境因子对于群落结构变化的贡献度）时，就可以采用一种新的分析方法--VPA分析加以补充。")]),t._v(" "),a("p",[a("strong",[t._v("VPA")]),t._v("，全称Variance Partitioning Analysis，中文成为方差分解分析，该分析的目的是"),a("strong",[t._v("确定指定的环境因子对群落结构变化的解释比例")]),t._v("。")]),t._v(" "),a("p",[t._v("我们使用CCA/RDA的排序分析方法可以得到所有参与分析的环境因子对群落变化的解释比例。而VPA分析的原理概括来说就是将每个解释变量（环境因子）进行独立运行CCA或RDA，获得每个解释变量（环境因子）对于响应变量（微生物群落）的方差变异的解释贡献度，之后通过将多组数据取交并集的方式获得每个解释变量（环境因子）的独立解释贡献度以及环境因子共同解释的贡献度。")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210202101334285.png",alt:"image-20210202101334285"}}),t._v(" "),a("blockquote",[a("p",[t._v("（2018）Liming does not counteract the influence of long-term fertilization on soil bacterial community structure and its co-occurrence pattern")])]),t._v(" "),a("p",[t._v("这个结果类似与Venn图，不同颜色的圆圈代表不同类型的环境因子，圆圈相交的部分表示不同类环境因子的相互作用，并且给出了不同位置对微生物群落变化解释的百分比。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/vpa.jpg",alt:"vpa"}})]),t._v(" "),a("p",[t._v("由于这一结果要求对环境因子有明确的分类，因此在真正的研究中使用的频率还不是很高，反而是在关于抗生素抗性基因的研究中经常使用，用来确定环境因子、可移动基因单元以及细菌群落对于抗生素抗性组变化的贡献程度。")]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/DTGOlNVUoePPgE0BNOqRHw",target:"_blank",rel:"noopener noreferrer"}},[t._v("高分期刊中频频登场的VPA分析到底是啥？")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/YU88HEqhIAsu0SRbo0jwFA",target:"_blank",rel:"noopener noreferrer"}},[t._v("微生物群落环境因子-VPA分析")]),t._v("：文献示例")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/wQBhMA8at6bS8SIlmF76rQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("方差分解分析 (VPA)：定量不同环境因子对群落变化的解释比例")]),t._v("：使用方法")]),t._v(" "),a("h2",{attrs:{id:"相关性分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关性分析"}},[t._v("#")]),t._v(" 相关性分析")]),t._v(" "),a("p",[a("strong",[t._v("如果想要知道具体哪些物种丰度的变化与环境因子有关，就需要用到相关性分析")]),t._v("。")]),t._v(" "),a("p",[t._v("最常见的结果展示方式就是"),a("strong",[t._v("相关性热图")]),t._v("，在图中使用色块的颜色表示物种与环境因子的相关系数，如果相关性检验的p值小于0.05，则在色块中标注星号表示物种与环境因子显著相关。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210202102152604.png",alt:"image-20210202102152604"}}),t._v(" "),a("p",[t._v("横向代表环境因子信息，竖向代表物种信息，图中蓝色代表正相关，红色代表负相关，颜色越深代表相关性越高，p值为相关性检验结果，图中的*表示 p<0.05，**表示 p<0.01。")]),t._v(" "),a("p",[t._v("与差异检验的统计学方法一样，"),a("strong",[t._v("相关性分析首先要求有两个变量")]),t._v("，比如物种丰度和环境因子，而且这两个变量是要成对的，两个变量的数据要一一对应，并且两个变量都是连续变量，最后要求两个变量的标准差不为零，也就是说两个变量中不能出现一个变量所有的数值都是相等的情况。")]),t._v(" "),a("p",[t._v("相关性分析的方法常用的有两种，分别是Pearson和Spearman，"),a("strong",[t._v("如果两个分析变量均符合正态分布，则使用Pearson，如果其中一个不符合正态分布，则使用Spearman。")])]),t._v(" "),a("p",[t._v("在使用相关性分析的时候，由于微生物群落数据的特点，物种非常多，但很多时候样本数目却并不是很多，所以可能会得到非常多的显著相关结果，这就需要在相关性分析的过程中，通过p值的校准来去除假阳性。")]),t._v(" "),a("p",[t._v("常用的p值检验方法有Bonferroni和FDR，FDR也就是常说的Q-value，Bonferroni更为严格，得到的结果可能更少，有时候校准之后可能一个相关的都没有了，需要根据自己数据的实际的结果进行选择，两种校准方法都是被认可的。")]),t._v(" "),a("h2",{attrs:{id:"mantel-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mantel-tests"}},[t._v("#")]),t._v(" Mantel tests")]),t._v(" "),a("p",[t._v("Mantel tests是确定两组距离测度矩阵（而非两组变量矩阵）之间相关性的相关性测试方法，用于判断一个矩阵中的样本距离与另一矩阵中的样本距离是否相关。Mantel tests零假设为响应变量矩阵中对象之间的距离与解释变量矩阵不存在相关，如果结果中p值显著，则拒绝零假设，即存在相关性，随着一个矩阵中样本之间距离的增加（或减少），另一矩阵中对应样本之间的距离也增加（或减少）。")]),t._v(" "),a("p",[t._v("群落分析中通常存在两组变量矩阵，样方-物种多度矩阵和样方-环境测量矩阵。首先根据两组变量矩阵计算样方间的相异（距离）矩阵，即分别获得通过物种丰度计算的样方距离（通常为Bray-Curtis距离），以及通过某几种环境参数计算的样方距离（通常为欧几里得距离）。有时也会使用样方间真实的地理距离直接作为某种距离测度。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210202103821323.png",alt:"image-20210202103821323"}})]),t._v(" "),a("p",[t._v("之后使用两组距离测度矩阵执行Mantel tests，例如确定样方之间的群落组成差异是否与样方之间的温度差异或样方之间的物理距离相关，或者说“共变”。这些测试可用于解决环境是针对微生物群落的“选择”，还是存在强烈的距离衰减模式，表明存在扩散限制。这些通常是生物地理学研究中的重要问题。")]),t._v(" "),a("p",[t._v("此外，Mantel方法还可用于检验假设或模型。在这种模型测试方法中，一个矩阵包含响应数据，另一个矩阵代表了要测试的先验模型（检验的备择假设），如果找到了重要的Mantel统计信息，它们将为模型提供一些支持。")]),t._v(" "),a("h3",{attrs:{id:"mantel-test结合相关性分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mantel-test结合相关性分析"}},[t._v("#")]),t._v(" Mantel test结合相关性分析")]),t._v(" "),a("p",[t._v("Mantel多用来呈现整体的物种特征。如基于群落物种Alpha多样性表、物种丰度表、功能丰度表，探讨整个群落的不同维度特征与每个环境因子的关联。此外，环境因子内部可以用Pearson相关性热图展示，丰富图形含义。")]),t._v(" "),a("p",[t._v("Mantel test首先基于每个表格，计算两两样本的距离指数，如基于物种Alpha多样性，计算每两个样本的距离，这份距离表格则反映样本间物种丰富程度的差异；再基于环境因子表格，计算每两个样本间的距离，这份距离表格则反映样本间环境因子检测值的差异。然后基于两份距离表格，计算Pearson相关系数（图5）。")]),t._v(" "),a("p",[t._v("该系数就反映了Alpha多样性差异与环境因子差异的相关程度，如果环境因子的差异与Alpha多样性差异一致，则暗示环境因子有可能是多样性差异的潜在因素，或者与多样性变化有关。")]),t._v(" "),a("p",[t._v("最终可以获得多样性、物种、功能与每个环境因子的相关程度和相关显著性。")]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/zlabx/article/details/107358265",target:"_blank",rel:"noopener noreferrer"}},[t._v("一篇SCIENCE文章的相关分析基于最新ggcor绘制方法与示例数据")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gitee.com/dr_yingli/ggcor?_from=gitee_search",target:"_blank",rel:"noopener noreferrer"}},[t._v("ggcor备份仓库1")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzUzMjA4Njc1MA==&mid=2247494461&idx=2&sn=6039b2d6fd3a5ac3b731687a4804b3b7&chksm=faba018ccdcd889ace1abf81b4acd5f60310233b10c6dc7635600bed3b72323804bcd6678d5e&mpshare=1&scene=23&srcid=12246fvMhyBfiXDb29AuUysS&sharer_sharetime=1608801047656&sharer_shareid=07ab3049bd9db705e7151828227d6707#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Science：组合图表绘制")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/MfUM3s4zkUzGwB7iZB5G1A",target:"_blank",rel:"noopener noreferrer"}},[t._v("R包vegan的Mantel tests")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/Sl_neQSHyRlEursO6SZl1Q",target:"_blank",rel:"noopener noreferrer"}},[t._v("R包vegan的Mantel tests探索群落物种组成是否与环境相关")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzUzMjYyMDE2OQ==&mid=2247485563&idx=1&sn=836cb2a0c425af69d8c0eee1b976a9dc&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("Science这张惊艳图表终于完成了：最终稳定版本")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://jkzorz.github.io/2019/07/08/mantel-test.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mantel Test in R")])]),t._v(" "),a("h2",{attrs:{id:"普鲁克分析-procrustes-analysis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普鲁克分析-procrustes-analysis"}},[t._v("#")]),t._v(" 普鲁克分析（Procrustes Analysis）")]),t._v(" "),a("p",[t._v("Procrustes分析（Procrustes Analysis，普鲁克分析）是一种通过分析形状分布，比较两组数据一致性的方法。数学上来讲，就是不断迭代，寻找标准形状（canonical shape），并利用最小二乘法寻找每个对象形状到这个标准形状的仿射变化方式（Gower, 1975）。")]),t._v(" "),a("p",[t._v("例如在组学分析中，经常需要分析来自相同样本不同组学数据集之间是否存在相似性关系，就微生物组而言，例如开篇时提到的那个示例，物种组成丰度和ARGs丰度是否存在潜在一致性。当然分析潜在关系的方法有很多，Procrustes分析就是一种很好的选择。不同颜色的点分别代表两个不同的数据集，点之间的箭头表示这两个点来自于同一个样本。普氏分析同样会给出相关系数和显著性p值，p值小于0.05表明两个多元数据集之间具有显著的相关性。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210202105045967.png",alt:"image-20210202104752251"}})]),t._v(" "),a("p",[t._v("(E)当采用食物树的未加权UniFrac值来确定食物摄入距离时，Procrustes分析表明平均饮食与平均微生物距离(Aitchison’s distance)之间一致性显著(Monte Carlo p=0.008)。(F-H) (F)当从标准化营养摄入值确定食物摄入距离时，Procrustes分析表明平均饮食与平均微生物距离(Aitchison’s distance)之间一致性不显著(Monte Carlo p=0.4)。当采用食物纤维含量确定食物树距离(Unweighted UniFrac)时，平均微生物距离(Aitchison’s distance)与(G)谷物和(H)果实的纤维来源β多样性之间一致性显著(Monte Carlo p = 0.036和0.032)。")]),t._v(" "),a("blockquote",[a("p",[t._v("(E) Significant agreement between average diet and average microbiome distances (Aitchison’s distance) by Procrustes analysis when food intake distances are determined with unweighted UniFrac using the tree of foods (Monte Carlo p value = 0.008). (F–H) (F) No significant agreement between average diet and average microbiome distances (Aitchison’s distance) by Procrustes analysis when food intake distances are determined from normalized nutritional intake variables (Monte Carlo p value = 0.4). Significant Procrustes agreement between average microbiome composition (Aitchison’s distance) and fiber-source diversity from (G) grains and (H) fruits determined using the tree-based distances from fiber content of foods (Unweighted UniFrac) (Monte Carlo p values = 0.036 and 0.032, respectively).")]),t._v(" "),a("p",[t._v("Daily Sampling Reveals Personalized Diet-Microbiome Associations in Humans")])]),t._v(" "),a("p",[t._v("再如群落分析中，常见通过Procrustes分析物种组成与环境的关系，以及物种形态、遗传组成、空间结构、行为特征等更多类型的数据集类似的案例。")]),t._v(" "),a("p",[t._v("Procrustes分析与Mantel test都是用于分析物种组成和环境属性关系的常见方法，当然二者的具体关注点还是有区别的，方法各有自身的优点。但如果只聚焦在评估两数据集一致性上，似乎Procrustes分析更直观一些。")]),t._v(" "),a("p",[t._v("M2统计量及其显著性检验p值提供了两个数据集之间一致性的总体度量，同时数据集的图形匹配和相关残差提供了比Mantel test更丰富的信息源。在对应点的坐标匹配度较好时，两个数据集表现出良好的一致性。坐标匹配度越差表明这些点与整体趋势不匹配，这类似于回归分析中残差较大的点，这些点不符合样本的总体趋势。此外，PROTEST的统计功效也被证明优于Mantel test的统计功效（Peres-Neto and Jackson, 2001）。因此，如果两组数据之间存在潜在关系，则Procrustes分析更有能力检测到，并且鉴于结果的图形性质，它还提供了出色的解释性准则。")]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/EXRo0VwPVhOX3biKBllS-g",target:"_blank",rel:"noopener noreferrer"}},[t._v("普鲁克分析（Procrustes Analysis）评估物种-环境/功能关联度的一个示例——小白鱼")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/7e1f05020239",target:"_blank",rel:"noopener noreferrer"}},[t._v("普氏分析")]),t._v("：基于论文的实践")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/CzlW_I8fcHrHdpJ_dqVV-A",target:"_blank",rel:"noopener noreferrer"}},[t._v("普氏分析结果可视化--物种与环境、物种与物种、物种与功能关联分析——红皇后学术")])]),t._v(" "),a("h2",{attrs:{id:"sem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sem"}},[t._v("#")]),t._v(" SEM")]),t._v(" "),a("p",[t._v("通过一种类似网络的方式展示微生物群落与环境因子的关系，结果中箭头的方向代表作用方向，实线代表直接相关，虚线代表间接相关，线的粗细代表相关性的强弱，并且给出了相关系数和显著性检验结果。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210202113057327.png",alt:"image-20210202113057327"}})]),t._v(" "),a("p",[t._v("示例")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/qGn54T8Kv-RaT7-xXc4ovg",target:"_blank",rel:"noopener noreferrer"}},[t._v("WR: 评估中国46个饮用水供应系统的水源水对自来水细菌群落的影响")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/eMf5BgEpu7NPQH8QQW0laQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("结构方程模型(SEM)，一学就会，确定不来看看吗？")])]),t._v(" "),a("h2",{attrs:{id:"分组诊断模型预测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组诊断模型预测"}},[t._v("#")]),t._v(" 分组诊断模型预测")]),t._v(" "),a("p",[t._v("通过筛选不同类型样本间的biomarker，进而利用这些biomarker来判断未知样本中某种不易被发现的性质。")]),t._v(" "),a("p",[t._v("这两项分析最常见的应用是在临床疾病的研究中，例如通过少数肠道微生物丰度判断病人是否具有某种疾病。而在生态环境领域的应用还不是特别普遍，主要应用是筛选biomarker从而通过少数微生物来预测整体的微生物群落，比如说可以尝试建立利用少数标志微生物的丰度评估某个环境的污染程度，但是要想实际应用可能还有待研究。")]),t._v(" "),a("p",[t._v("随机森林分析的主要结果是筛选到的biomarker，能够给出不同微生物对样本分组的重要程度，从而得到对样本分组影响最重要的物种作为"),a("strong",[t._v("biomarker")]),t._v("。之后可以结合ROC曲线判断这些biomarker对位置样本分组区分的准确性，从而筛选得到最优的biomarker组合。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy9Sb3pVQ1FXbW9vZ2lhaWFMcDBXQk5pYVJybmhWTXNBT2JLT2ZpYXM0bW5JY3A2aWJ2b1VFdUFrRThWcEREdTBpY3RnQ3ZqejM1R3VWT1JiOENaSVhuUjU2amExdy82NDA",alt:"img"}}),t._v(" "),a("p",[t._v("所有患者均患有多种亚型的高级别（III–IV期）癌症，并被分为PC，LC和SKCM组。b，用于区分分组癌症样品（"),a("em",[t._v("n")]),t._v(" = 100）和非癌症健康对照（"),a("em",[t._v("n")]),t._v(" = 69）的自举性能估计。使用不同的训练-测试分割（70％–30％）进行500次迭代的ROC（顶部）和PR（底部）曲线数据的栅格化密度图。c–h，两类之间的LOO迭代ML性能：PC与对照组（c），LC与对照组（d），SKCM与对照组（e），PC与LC（f），LC与SKCM（g），以及PC与SKCM（h）。i–k，多类（"),a("em",[t._v("n")]),t._v(" = 3或4），LOO迭代ML性能，以区分癌症类型（i）以及混合癌症患者和健康对照个体（j，k）。总体LOO ML性能计算为将一个与所有其他性能进行比较时的性能平均值。")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("a")]),t._v(", Demographics of samples analysed in the validation study. All patients had high-grade (stage III–IV) cancers of multiple subtypes and were aggregated into PC, LC, and SKCM groups. "),a("strong",[t._v("b")]),t._v(", Bootstrapped performance estimates for distinguishing grouped cancer samples ("),a("em",[t._v("n")]),t._v(" = 100) from non-cancer healthy controls ("),a("em",[t._v("n")]),t._v(" = 69). Rasterized density plot of ROC (top) and PR (bottom) curve data from 500 iterations with different training–testing splits (70%–30%). "),a("strong",[t._v("c")]),t._v("–"),a("strong",[t._v("h")]),t._v(", LOO iterative ML performances between two classes: PC versus control (Ctrl; "),a("strong",[t._v("c")]),t._v("), LC versus control ("),a("strong",[t._v("d")]),t._v("), SKCM versus control ("),a("strong",[t._v("e")]),t._v("), PC versus LC ("),a("strong",[t._v("f")]),t._v("), LC versus SKCM ("),a("strong",[t._v("g")]),t._v("), and PC versus SKCM ("),a("strong",[t._v("h")]),t._v("). "),a("strong",[t._v("i")]),t._v("–"),a("strong",[t._v("k")]),t._v(", Multi-class ("),a("em",[t._v("n")]),t._v(" = 3 or 4), LOO iterative ML performances to distinguish among types of cancer ("),a("strong",[t._v("i")]),t._v(") and between mixed patients with cancer and healthy control individuals ("),a("strong",[t._v("j")]),t._v(", "),a("strong",[t._v("k")]),t._v("). Overall LOO ML performance was calculated as the mean of performances when comparing one versus all others (shown below as confusion matrices).")]),t._v(" "),a("p",[t._v("Poore, G.D., Kopylova, E., Zhu, Q. "),a("em",[t._v("et al.")]),t._v(" Microbiome analyses of blood and tissues suggest cancer diagnostic approach. "),a("em",[t._v("Nature")]),t._v(" "),a("strong",[t._v("579,")]),t._v(" 567–574 (2020). https://doi.org/10.1038/s41586-020-2095-1")])]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/7Ab5IbOdxdWHxM0Kv2sYGA",target:"_blank",rel:"noopener noreferrer"}},[t._v("凌波微课|扩增子研究第十五讲：扩增子测序结果中的个性化分析")]),t._v("：简略介绍了biomarker")]),t._v(" "),a("h2",{attrs:{id:"微生物溯源分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微生物溯源分析"}},[t._v("#")]),t._v(" 微生物溯源分析")]),t._v(" "),a("p",[t._v("微生物溯源，也就是分析样本中来源于不同环境的微生物的比例。这个分析可以在QIIME中实现，也有专门的R包（"),a("code",[t._v("Source tacker")]),t._v("）来做这个工作，得到的结果分别以饼图、条形图和面积图展示样本中不同来源物种的比例。使用这个分析有一个前提，就是要有作为来源的数据，打个比方，如果想要知道室内空气中的微生物有多少来自于人体，就要有人体共生微生物的数据作为来源文件；或者想要知道河口附近的微生物有多少来自于河流，就要有河流本身的微生物数据作为来源；如果想要知道一个污染排放点源下游有多少微生物来自于排放的污染物，就要有排放物本身和上有样本的数据作为来源。")]),t._v(" "),a("p",[t._v("用途是可以识别相关各组间来源的分析，如具体的问题：")]),t._v(" "),a("ul",[a("li",[t._v("婴儿的肠道菌群有哪些继承了母亲的肠道菌群、哪些来自阴道菌群、哪些来自皮肤")]),t._v(" "),a("li",[t._v("法医学的应用，尸体中的菌群与来源土壤的鉴定、腐败菌来自本身，还是周围环境")]),t._v(" "),a("li",[t._v("河流污染物的来源分析、周围工厂、农田、养殖厂对河流污染的贡献和来源追溯。")]),t._v(" "),a("li",[t._v("分析植物菌组形成过程：植物根际菌在土壤中来源和种子来源；叶际菌群的土壤来源比例等。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210204085430362.png",alt:"image-20210204085430362"}})]),t._v(" "),a("p",[t._v("[3]产道菌群移植对剖腹产婴儿缺失菌群的恢复：图中展示了婴儿三个部位Skin、Oral、Anal中，肠道菌群组成的来源，随时间的推移而发生的改变。\n剖腹产的婴儿患免疫和代谢疾病的风险增高，被认为可能由于缺乏了与母亲生殖道分泌物（包括微生物）的接触；母亲生殖道的分泌物会覆盖顺产婴儿的全身，促进了婴儿口腔、肠道、皮肤菌群的定殖，以及对婴儿的保护作用；对剖腹产婴儿涂抹分泌物，随时间推移，其各部位菌群特征逐渐趋向于顺产婴儿。该方法可以部分的恢复剖腹产婴儿菌群，但对健康的长期影响有待观察，以及样本量也需要扩大。")]),t._v(" "),a("blockquote",[a("p",[t._v("Dominguez-Bello MG, De JKM, Nan S, et al. Partial restoration of the microbiota of cesarean-born infants via vaginal microbial transfer [J]. Nature Medicine, 2016, 22(3): 250-253.")])]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210204083130699.png",alt:"image-20210204083130699"}}),t._v(" "),a("p",[a("strong",[t._v("Feast")]),t._v("是另一个实现溯源的软件，其输入数据也是分组信息（metadata）和OTU丰度表，输出结果如PPT所示，给出了估计结果的百分比。")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210204083222778.png",alt:"image-20210204083222778"}}),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/32MIxFecCfhX3HjpQWFs4g",target:"_blank",rel:"noopener noreferrer"}},[t._v("SourceTracker：R语言实现微生物来源分析！！")]),t._v("：红皇后学术的R进行来源分析的教程")]),t._v(" "),a("p",[t._v("Knights, D., Kuczynski, J., Charlson, E. "),a("em",[t._v("et al.")]),t._v(" Bayesian community-wide culture-independent microbial source tracking. "),a("em",[t._v("Nat Methods")]),t._v(" "),a("strong",[t._v("8,")]),t._v(" 761–763 (2011). https://doi.org/10.1038/nmeth.1650  （Sourcetracker论文）")]),t._v(" "),a("p",[t._v("Shenhav, L., Thompson, M., Joseph, T.A. "),a("em",[t._v("et al.")]),t._v(" FEAST: fast expectation-maximization for microbial source tracking. "),a("em",[t._v("Nat Methods")]),t._v(" "),a("strong",[t._v("16,")]),t._v(" 627–632 (2019). https://doi.org/10.1038/s41592-019-0431-x（FEAST论文）")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/gX4_hyp732XTtfOx4Tdfhg",target:"_blank",rel:"noopener noreferrer"}},[t._v("积微论坛--用微生物组时序数据重现生物膜装配动态过程PPT对应的讲解和提问")]),t._v("：简略提到了Source Tracker 和Feast")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzUzMjA4Njc1MA==&mid=2247486245&idx=1&sn=20182f9c90411ae4c5cbdb057b84384b&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SourceTracker—微生物来源分析")]),t._v("：宏基因组关于source Tracker 的实操教学")]),t._v(" "),a("h2",{attrs:{id:"方法论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法论"}},[t._v("#")]),t._v(" 方法论")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/m70mmeQz_4w9Iox0IuAOxQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("微生物生态学中的多变量分析（中文解读）")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210202110727462.png",alt:"image-20210202110727462"}}),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/Ayc7d2SC2wKTqtFP206f-g",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关分析在微生物生态学中的应用与误用（中文翻译）")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.nature.com/articles/s41396-019-0459-z",target:"_blank",rel:"noopener noreferrer"}},[t._v("Use and abuse of correlation analyses in microbial ecology")])]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"http://test-123-imagebed.oss-cn-beijing.aliyuncs.com/img/image-20210202110828521.png",alt:"image-20210202110828521"}}),t._v(" "),a("p",[t._v("https://mp.weixin.qq.com/s/T6yJWSuM4iOxbbngYFWfUw这篇好像也不错")])])}),[],!1,null,null,null);e.default=r.exports}}]);