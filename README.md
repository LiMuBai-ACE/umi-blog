1.config：配置，config->router.fonfig为路由配置文件
2.src：页面内容文件，
src->component:相关组件
src-layouts:布局文件
src->models:model,并不是对象的相关属性定义，而是对象的相关操作，例如登陆，退出操作
src->pages:模块界面文件
src->services:接口文件，定义相关接口
src->utils：工具文件
src->utils->request:网络请求封装
3.defaultSettings.js: 默认配置文件，baseUrl便放在这里

```
dva history报错
https://blog.csdn.net/qq_36658051/article/details/104646994



```
如何访问到 store 或 dispatch 方法？
window.g_app._store
window.g_app._store.dispatch



```
配置多环境
安装cross-env：npm i cross-env --save-dev
添加config/config.dev.js文件

export default {
  define: {
    "process.env.apiUrl":'https://www.dev.com/'
  }
}
添加config/config.sit.js文件
export default {
  define: {
    "process.env.apiUrl":'https://www.sit.com/'
  }
}
添加config/config.prod.js文件
export default {
  define: {
    "process.env.apiUrl":'https://www.prod.com/'
  }
}
修改package.json文件
{
  "scripts": {
    "build:sit": "cross-env UMI_ENV=sit umi build",
    "build:prod": "cross-env UMI_ENV=prod umi build",
    "dev": "cross-env UMI_ENV=dev npm run start:dev",
  }
}
在页面中使用
console.log(process.env.apiUrl);