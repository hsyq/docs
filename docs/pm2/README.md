# PM2 Docs 中文版

<img src="https://cdn.jsdelivr.net/gh/hsyq/assets/imgs/2022-04/pm2-v4.png" style="zoom:50%;" />



PM2是一个守护进程管理器，它将帮助您全天候管理和保持应用程序在线。

官网：https://pm2.keymetrics.io/

Github：[https://github.com/Unitech/pm2]()





## 特性

- 待补充



## 快速开始

### 安装

可以使用`npm`和`yarn` 安装。

```bash
npm i -g pm2
```



### 启动应用

使用`pm2`快速启动一个`Node.js`程序：

```bash
pm2 start app.js
```

此时，你的应用将以进程守护的方式在后台运行。





### 常用命令

```bash
pm2 list 
pm2 restart
pm2 reload
pm2 stop
pm2 delete
pm2 monit
pmn2 logs
```





## 目录

### 快速开始

- Quick-Start -  [快速开始](https://github.com/hsyq/pm2-docs-zh-CN/blob/master/docs/1.quickstart/1.%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B.md)

### 基本使用

- PROCESS MANAGEMENT -  [进程管理](https://github.com/hsyq/pm2-docs-zh-CN/blob/master/docs/2.general/1.进程管理.md)
- RESTART STRATEGIES - [重启策略](https://github.com/hsyq/pm2-docs-zh-CN/blob/master/docs/2.general/2.重启策略.md)
- LOGS - [日志](https://github.com/hsyq/pm2-docs-zh-CN/blob/master/docs/2.general/3.日志.md)
- PERSISTENT APPLICATION - [持久化应用](https://github.com/hsyq/pm2-docs-zh-CN/blob/master/docs/2.general/4.持久化应用.md)
- CONFIGURATION FILE - [配置文件](https://github.com/hsyq/pm2-docs-zh-CN/blob/master/docs/2.general/5.配置文件.md)
- CLUSTER MODE - [集群模式](https://github.com/hsyq/pm2-docs-zh-CN/blob/master/docs/2.general/6.集群模式.md)
- PM2 AS A STATIC SERVER - [PM2作为静态服务器](https://github.com/hsyq/pm2-docs-zh-CN/blob/master/docs/2.general/7.PM25.com作为静态服务器.md)
- DEPLOYMENT SYSTEM - [部署系统](https://github.com/hsyq/pm2-docs-zh-CN/blob/master/docs/2.general/8.部署系统.md)
- ENVIRONMENT VARIABLES - [环境变量](https://github.com/hsyq/pm2-docs-zh-CN/blob/master/docs/2.general/9.环境变量.md)
- UPDATE PM2 - [升级PM2](https://github.com/hsyq/pm2-docs-zh-CN/blob/master/docs/2.general/10.升级PM2.md)

### 高级用法

- GRACEFUL START/SHUTDOWN - 优雅启动和关闭
- EXPOSING RPC FUNCTION - 暴露RPC功能
- EXPOSING METRICS - 公开指标 
- PM2 JAVASCRIPT API - PM2的JavaScript API
- MONITORING - 监控
- NO DAEMON, MULTIPLE PM2 - 无守护，多个PM2
- MODULE SYSTEM - 模块系统

### 集成

- DOCKER INTEGRATION - Docker集成
- USE PM2 IN CLOUD PROVIDERS - 在云提供商中使用PM2
- PRODUCTION SETUP WITH NGINX - 使用NGINX进行生产设置
- USING TRANSPILERS WITH PM2 - 使用转译器和PM2
