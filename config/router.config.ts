module.exports = {
  routes: [
    {
      path: '/',
      redirect: '/home',
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
      path: '/home',
      component: '@/layout/home',
      routes: [
        {
          path: '/home',
          name: '首页',
          component: '@/pages/home',
        },
        {
          component: '@/layout/404',
        },
      ],
    },
    {
      path: '/',
      component: '@/layout/admin/index/index',
      routes: [
        {
          component: '@/layout/404',
        },
      ],
    },
    {
      component: '@/layout/404',
    },
  ],
};
