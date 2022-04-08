(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{419:function(t,s,a){"use strict";a.r(s);var e=a(56),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"cluster模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster模式"}},[t._v("#")]),t._v(" Cluster模式")]),t._v(" "),a("p",[a("strong",[t._v("集群模式")]),t._v("允许联网的Node.js 应用程序（http(s)/tcp/udp 服务器）在所有可用的 CPU 上进行扩展，而无需修改任何代码。这大大提高了应用程序的性能和可靠性，具体取决于可用的 CPU 数量。该模式的背后是使用了 Node.js的"),a("a",{attrs:{href:"https://nodejs.org/api/cluster.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("cluster模块"),a("OutboundLink")],1),t._v("，来扩展应用程序的子进程，可以自动共享服务器端口。")]),t._v(" "),a("p",[t._v("要了解更多信息，请参阅集群模块的官方 Node.js 文档中的"),a("a",{attrs:{href:"https://nodejs.org/api/cluster.html#cluster_how_it_works",target:"_blank",rel:"noopener noreferrer"}},[t._v("工作原理"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("img",{staticStyle:{zoom:"60%"},attrs:{src:"http://i.imgur.com/kTAowsL.png",alt:"http://i.imgur.com/kTAowsL.png"}}),t._v(" "),a("h2",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("p",[t._v("使用cluster模式，只需要传递"),a("code",[t._v("-i")]),t._v("参数：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pm2 start app.js -i max\n")])])]),a("p",[a("code",[t._v("max")]),t._v(" 选项表示"),a("code",[t._v("PM2")]),t._v("会自动发现可用的CPU的数量，然后尽可能多地启动进程。")]),t._v(" "),a("p",[t._v("或者通过"),a("code",[t._v("js/yaml/json")]),t._v("文件进行配置：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("apps")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("script")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("instances")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("exec_mode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cluster"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("注意")]),t._v("：您需要将"),a("code",[t._v("exec_mode")]),t._v("设置为"),a("code",[t._v("cluster")]),t._v("，以便PM2知道您希望在每个实例之间实现负载平衡，默认情况下不会（补充：默认情况下是fork模式）。")]),t._v(" "),a("p",[t._v("然后启动进程文件：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pm2 start processes.json\n")])])]),a("p",[a("em",[t._v("-i")]),t._v(" or "),a("em",[t._v("instances")]),t._v("选项可以是:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("0/max")]),t._v(" 将应用的实例扩展到所有CPU")]),t._v(" "),a("li",[a("strong",[t._v("-1")]),t._v(" 将应用的实例扩展到所有CPU的数量减去1")]),t._v(" "),a("li",[a("strong",[t._v("number")]),t._v(" 将应用的实例扩展到指定数量的CPU")])]),t._v(" "),a("h2",{attrs:{id:"重载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重载"}},[t._v("#")]),t._v(" 重载")]),t._v(" "),a("p",[a("code",[t._v("restart")]),t._v("表示杀死并重新启动进程，"),a("code",[t._v("reload")]),t._v("与其相反，它实现了"),a("strong",[t._v("0 秒停机时间")]),t._v("的重新加载。")]),t._v(" "),a("p",[t._v("要重新加载应用程序：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pm2 reload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("app_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("或者：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pm2 reload process.json\npm2 reload process.json --only api\n")])])]),a("p",[t._v("如果重载系统没有设法重新加载您的应用程序，超时后将回退到"),a("code",[t._v("restart")]),t._v("重启的方式。")]),t._v(" "),a("h2",{attrs:{id:"优雅关闭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优雅关闭"}},[t._v("#")]),t._v(" 优雅关闭")]),t._v(" "),a("p",[t._v("在生产环境中，您可能需要等待剩余的查询处理完毕或关闭所有连接之后才能退出应用程序。在"),a("em",[t._v("PM2 重新加载上下文中")]),t._v("，它可能转换为非常长的重载或重载不起作用（回退到"),a("code",[t._v("restart")]),t._v("重新启动），这意味着您的应用程序在退出时仍然具有打开的连接。您可能还需要关闭所有数据库连接、清除数据队列或其他任何东西。")]),t._v(" "),a("p",[t._v("要优雅地关闭应用程序，您可以捕获"),a("strong",[t._v("SIGINT")]),t._v("信号（PM2 在退出时发送的第一个信号）并执行操作以等待/清除所有这些状态：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("process.on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SIGINT'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   db.stop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     process.exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err ? "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("阅读更多关于"),a("a",{attrs:{href:"http://pm2.keymetrics.io/docs/usage/signals-clean-restart/",target:"_blank",rel:"noopener noreferrer"}},[t._v("优雅关机"),a("OutboundLink")],1),t._v("功能的信息。")]),t._v(" "),a("h2",{attrs:{id:"使您的应用程序无状态化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使您的应用程序无状态化"}},[t._v("#")]),t._v(" 使您的应用程序无状态化")]),t._v(" "),a("p",[t._v("确保您的"),a("a",{attrs:{href:"http://pm2.keymetrics.io/docs/usage/specifics/#stateless-apps",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("应用程序是无状态")]),a("OutboundLink")],1),t._v("的，这意味着进程中没有存储本地数据，例如会话/websocket 连接、会话内存和相关数据。使用 Redis、Mongo 或其他数据库在进程之间共享状态。")]),t._v(" "),a("p",[t._v("关于如何编写高效、生产就绪的无状态应用程序的另一个资源是"),a("a",{attrs:{href:"https://12factor.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Twelve Factor Application manifesto"),a("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=r.exports}}]);