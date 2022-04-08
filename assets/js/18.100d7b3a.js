(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{416:function(t,a,e){"use strict";e.r(a);var s=e(56),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"应用程序日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用程序日志"}},[t._v("#")]),t._v(" 应用程序日志")]),t._v(" "),e("p",[t._v("使用 PM2 启动应用程序后，您可以轻松查阅和管理日志。")]),t._v(" "),e("p",[t._v("默认情况下，日志文件位于"),e("code",[t._v("$HOME/.pm2/logs")]),t._v("文件夹中。")]),t._v(" "),e("h3",{attrs:{id:"日志视图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志视图"}},[t._v("#")]),t._v(" 日志视图")]),t._v(" "),e("p",[t._v("要显示应用程序的日志，您可以使用"),e("code",[t._v("pm2 logs")]),t._v("命令：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("❯ pm2 logs -h\n\n  Usage: logs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("namespace"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  stream logs file. Default stream all logs\n\n  Options:\n\n    --json                以json格式输出\n    --format              格式化日志输出\n    --raw                 以原始格式输出\n    --err                 只显示错误日志\n    --out                 只显示标准输出日志\n    --lines "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("           输出最后N行，而不是默认的最后15行\n    --timestamp "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("format"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  每条日志记录添加时间戳（默认格式YYYY-MM-DD-HH:MM:ss）\n    --nostream            打印日志而不启动日志流\n    --highlight "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   高亮给定的值\n    -h, --help            显示帮助信息\n")])])]),e("p",[t._v("一些重要的命令：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实时展示所有应用的日志")]),t._v("\npm2 logs\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实时展示api这个应用的日志")]),t._v("\npm2 logs api\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用json格式实时展示日志，不输出旧日志，只输出新产生的日志")]),t._v("\npm2 logs --json\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出最近的1000行日志信息，并实时展示新的")]),t._v("\npm2 logs big-api --lines "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n")])])]),e("p",[t._v("您还可以使用 CLI 仪表板检查日志：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("pm2 monit\n")])])]),e("h2",{attrs:{id:"日志大小限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志大小限制"}},[t._v("#")]),t._v(" 日志大小限制")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/keymetrics/pm2-logrotate",target:"_blank",rel:"noopener noreferrer"}},[t._v("pm2-logrotate"),e("OutboundLink")],1),t._v("模块使用磁盘上的有限空间自动切割并保留所有日志文件。")]),t._v(" "),e("p",[t._v("安装：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("pm2 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pm2-logrotate\n")])])]),e("p",[e("a",{attrs:{href:"https://github.com/pm2-hive/pm2-logrotate#configure",target:"_blank",rel:"noopener noreferrer"}},[t._v("在此处"),e("OutboundLink")],1),t._v("阅读有关 pm2-logrotate 的更多信息。")]),t._v(" "),e("h2",{attrs:{id:"清洗日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清洗日志"}},[t._v("#")]),t._v(" 清洗日志")]),t._v(" "),e("p",[t._v("这将清空 PM2 管理的当前应用程序的日志：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清空所有日志")]),t._v("\npm2 flush\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清除name/id匹配<api>的应用程序的日志")]),t._v("\npm2 flush "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("api"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n")])])]),e("h2",{attrs:{id:"应用程序日志选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用程序日志选项"}},[t._v("#")]),t._v(" 应用程序日志选项")]),t._v(" "),e("p",[t._v("启动应用程序时，您可以指定许多选项来告诉日志该如何工作。")]),t._v(" "),e("p",[t._v("具体有几种不同的指定方式。")]),t._v(" "),e("h3",{attrs:{id:"命令行界面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行界面"}},[t._v("#")]),t._v(" 命令行界面")]),t._v(" "),e("p",[t._v("运行时"),e("code",[t._v("pm2 start app.js [OPTIONS]")]),t._v("时，您可以将这些选项中的任何一个传递给 CLI：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定out日志和error日志文件的输出路径specify filepath to output both out and error logs")]),t._v("\n-l --log "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定out日志的输出路径")]),t._v("\n-o --output "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定error日志的输出路径")]),t._v("\n-e --error "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出带有标准格式化时间戳的前缀日志")]),t._v("\n--time\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 带有自定义格式时间戳的前缀日志")]),t._v("\n--log-date-format "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("format"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用相同的应用程序名运行多个进程时，不要按id拆分文件，即合并所有进程的日志输出到同一个文件中")]),t._v("\n--merge-logs\n")])])]),e("h4",{attrs:{id:"使用日期自动为日志添加前缀"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用日期自动为日志添加前缀"}},[t._v("#")]),t._v(" 使用日期自动为日志添加前缀")]),t._v(" "),e("p",[t._v("通过"),e("code",[t._v("--time")]),t._v("选项，可以轻松为应用程序日志添加前缀：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ pm2 start app.js --time\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Or a running app")]),t._v("\n$ pm2 restart app --time\n")])])]),e("h3",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),e("p",[t._v("通过配置文件，您可以传递以下选项：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("场地")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("error_file")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("（string）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("错误日志路径（默认为$HOME/.pm2/logs/XXXerr.log）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("out_file")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("（string）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输出日志路径（默认为$HOME/.pm2/logs/XXXout.log）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("pid_file")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("（string）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("pid 文件路径（默认为$HOME/.pm2/pid/app-pm_id.pid）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("merge_logs")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("默认为false，设置为true后，所有进程的日志会合并到一个日志文件中")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("log_date_format")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("（string）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("“YYYY-MM-DD HH:mm Z”")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置日志日期格式（即日志文件中每条日志记录前面的日期格式）")])])])]),t._v(" "),e("h3",{attrs:{id:"禁用日志后缀"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#禁用日志后缀"}},[t._v("#")]),t._v(" 禁用日志后缀")]),t._v(" "),e("p",[e("em",[t._v("个人注：这个标题不准确。")])]),t._v(" "),e("p",[t._v("仅适用于 (node.js的) 集群模式的应用程序；如果希望集群进程的所有实例的日志都记录到到同一个文件中，您可以使用该选项"),e("code",[t._v("--merge-logs")]),t._v("或"),e("code",[t._v("merge_logs: true")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"禁用日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#禁用日志"}},[t._v("#")]),t._v(" 禁用日志")]),t._v(" "),e("p",[t._v("要禁止日志写入磁盘，可以将选项"),e("code",[t._v("out_file")]),t._v("和"),e("code",[t._v("error_file")]),t._v("设为"),e("code",[t._v("/dev/null")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("module.exports = {\n  apps : [{\n    name: 'Business News Watcher',\n    script: 'app.js',\n    instances: 1,\n    out_file: \"/dev/null\",\n    error_file: \"/dev/null\"\n    cron_restart: '0 0 * * *'\n    [...]\n  }]\n}\n")])])]),e("p",[t._v("您可以提供"),e("code",[t._v("/dev/null")]),t._v("或"),e("code",[t._v("NULL")]),t._v("作为日志的输出（不取决于平台，它们是硬编码字符串）。")]),t._v(" "),e("h3",{attrs:{id:"使用原生-logrotate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用原生-logrotate"}},[t._v("#")]),t._v(" 使用原生 logrotate")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" pm2 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("logrotate")]),t._v(" -u user\n")])])]),e("p",[t._v("这将写入一个基本的 logrotate 配置"),e("code",[t._v("/etc/logrotate.d/pm2-user")]),t._v("，如下所示：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("/home/user/.pm2/pm2.log /home/user/.pm2/logs/*.log "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("        rotate "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("        weekly        missingok        notifempty        compress        delaycompress        create 0640 user user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"自己补充"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自己补充"}},[t._v("#")]),t._v(" 自己补充")]),t._v(" "),e("p",[t._v("pm2的日志模块默认为每一个服务进程都分配两个默认的日志文件：")]),t._v(" "),e("ul",[e("li",[t._v("out.log：记录应用中的"),e("code",[t._v("console.log")]),t._v("输出")]),t._v(" "),e("li",[t._v("error.log：错误日志，记录应用运行报错的信息")])]),t._v(" "),e("p",[t._v("这两个日志文件存默认放于"),e("code",[t._v("$HOME/.pm2/logs")]),t._v("中。")]),t._v(" "),e("p",[t._v("默认，pm2会为应用的每个进程都创建各自的日志，例如，假设pm2管理的某个应用有5个进程，那么日志文件夹下将会生成10个日志文件。")]),t._v(" "),e("p",[e("code",[t._v("pm2 log")]),t._v(" 命令等同于"),e("code",[t._v("pm2 logs")]),t._v("。")])])}),[],!1,null,null,null);a.default=r.exports}}]);