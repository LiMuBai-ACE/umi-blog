module.exports = {
  publicPath: '/',
  hash: true, // 开启哈希模式 生产文件后缀名带有哈希值 避免浏览器缓存
  history: { type: 'hash' },
  devtool: false, // devtool: 'source-map',//生成map文件 devtool: 'eval',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: '首页',
      component: '@/layout/home',
      // exact: true,
      routes: [
        {
          // exact: true,
          path: '/home',
          name: '首页',
          component: '@/pages/home/index',
        },
      ],
    },
    {
      path: '/login',
      name: '登录中心',
      component: '@/pages/login',
      exact: true,
    },
    {
      path: '/register',
      name: '注册中心',
      component: '@/pages/register',
      exact: true,
    },
    {
      path: '/admin',
      name: '管理中心',
      component: '@/layout/admin',
      exact: true,
      routes: [
        {
          // exact: true,
          path: '/admin',
          name: '模板页面',
          component: '@/pages/index',
        },
      ],
    },
  ],
};
