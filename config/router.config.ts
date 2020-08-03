module.exports = {
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
          component: '@/pages/home',
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
          component: '@/pages/accout',
        },
      ],
    },
  ],
};
