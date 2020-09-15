# nicoUI
文档: [nicoui.jibei66.com](http://nicoui.jibei66.com/)
## 项目介绍
+ 本项目是基于vue2的ui组件库，并附带文档网站
+ 涵盖了单选，多选，按钮，标签，上传，消息等常用组件
+ 欢迎学习封装组件的参考
+ 随缘更新
## 运行指南
本项目基于vuecli编写，可以直接导入vuecli ui运行或通过 npm run serve命令运行
## 项目结构
```
|-- nicoui
    |-- .browserslistrc
    |-- .gitignore
    |-- .npmignore
    |-- babel.config.js
    |-- package-lock.json
    |-- package.json
    |-- readme.md
    |-- vue.config.js
    |-- yarn.lock
    |-- examples                                    文档网站目录
    |   |-- App.vue
    |   |-- main.js
    |   |-- assets                                  文档网站资源
    |   |   |-- atom-one-dark.css                   文档网站代码样式
    |   |   |-- global.css                          文档网站全局样式
    |   |   |-- nico-ui-title.png                   文档网站logo
    |   |-- components                              文档网站所用组件
    |   |   |-- componentbox                        代码盒子组件
    |   |   |-- table                               表格组件
    |   |-- router                                  文档网站路由规则
    |   |-- store
    |   |-- views                                   文档网站页面
    |-- lib                                         打包后的组件源码
    |-- packages                                    组件源码目录
    |   |-- global.css                              全局样式
    |   |-- index.js                                入口文件
    |   |-- badage                                  标记组件
    |   |-- breadcrumbs                             面包屑组件
    |   |-- button                                  按钮组件
    |   |-- checkbox                                多选框组件
    |   |-- dialog                                  对话框组件
    |   |-- drawer                                  抽屉组件
    |   |-- input                                   输入框组件
    |   |-- link                                    文字链接组件
    |   |-- message                                 消息组件
    |   |-- messagebox                              消息弹框组件
    |   |-- nav                                     导航组件
    |   |-- numberinput                             计数器组件
    |   |-- prompt                                  提示组件
    |   |-- radio                                   单选框组件
    |   |-- select                                  选择器组件
    |   |-- swiper                                  轮播组件
    |   |-- switch                                  开关组件
    |   |-- tabs                                    标签页组件
    |   |-- tag                                     标签组件
    |   |-- upload                                  上传组件
    |-- public
```