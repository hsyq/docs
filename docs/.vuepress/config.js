module.exports = {
  base: '/',
  title: '昆吾',
  description: '整理的一些常用工具的中文文档，包括pm2，log4js，sequelize，mongoose',
  head: [
    // ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['meta', { name: 'keywords', content: 'PM2中文文档，log4js中文文档，mongoose中文文档，sequelize中文文档' }],
    // 设置 Google 的 Search Console
    // ['meta', { name: 'google-site-verification', content: '_rNB9Nt0ukzWmMfhXSSxCHUAeeMs24OiuhGm4QjdwXA' }]
  ],

  themeConfig: {
    repo: 'hsyq/docs',
    nav: [
      { text: '主页', link: '/' },

      { text: 'PM2', link: '/pm2/' },
      { text: 'Log4js', link: '/log4js/' },

      {
        text: '博客',
        items: [
          { text: 'Github', link: 'https://github.com/hsyq' },
          { text: '语雀', link: 'https://www.yuque.com/kunwu-mi1a0' },
          { text: '掘金', link: 'https://juejin.cn/user/3878732751440253/posts' }
        ]
      }
    ],

    sidebar: {
      // 通过对象，为每个页面设置一个侧边栏
      // 设置主页的侧边栏
      // {
      //   title: '欢迎学习', // 必要的
      //   path: '/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      //   collapsable: false, // 不折叠
      //   sidebarDepth: 1,    // 可选的, 默认值是 1
      //   // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
      //   children: [
      //     { title: "学前必读", path: "/" }
      //   ]
      // },


      '/pm2/': [
        {
          title: "PM2中文文档",
          children: [
            "/pm2/1.quickstart/1.快速开始",
            "/pm2/2.general/1.进程管理",
            "/pm2/2.general/2.重启策略",
            "/pm2/2.general/3.日志",
            "/pm2/2.general/4.持久化应用.md",
            "/pm2/2.general/5.配置文件",
            "/pm2/2.general/6.集群模式",
            "/pm2/2.general/7.PM2作为静态服务器",
            "/pm2/2.general/8.部署系统",
            "/pm2/2.general/9.环境变量",
            "/pm2/2.general/10.升级PM2",
          ],
        },
      ],

      '/log4js/': [{
        title: "Log4js中文文档",
        children: [
          "/log4js/1",
          "/log4js/2",
        ],
      },],

      '/sequelize/': [{
        title: "Sequelize中文文档",
        children: [
          "/sequelize/1",
          "/sequelize/2",
        ],
      },],

      '/mongoose/': [{
        title: "Mongoose中文文档",
        children: [
          "/mongoose/1",
          "/mongoose/2",
        ],
      },],

      '/常用npm包的文档/': [{
        title: "常用NPM",
        children: [
          "/npm/1",
          "/npm/2",
        ],
      },],
    },

    lastUpdated: '上次更新',
    // displayAllHeaders: true
  }
}