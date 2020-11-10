module.exports = {
  routes: [
    {
      path: '/',
      redirect: '/home',
      exact: true,
    },
    {
      path: '/home',
      name: '首页',
      component: '@/layout/home',
      exact: true,
      routes: [
        {
          exact: true,
          path: '/home',
          name: '首页',
          component: '@/pages/home',
        },
        {
          component: '@/pages/404',
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
      name: '管理中心',
      component: '@/layout/admin/index',
      routes: [
        {
          // exact: true,
          path: '/admin',
          name: '首页',
          component: '@/pages/home',
        },
        {
          name: '文章管理',
          routes: [
            {
              // exact: true,
              path: '/admin/writeArticle',
              name: '编写文章',
              component: '@/pages/writeArticle',
            },
            {
              // exact: true,
              path: '/admin/articleList',
              name: '文章列表',
              component: '@/pages/articleList',
            },
            // {
            //     // exact: true,
            //     path: '/admin/articleList/detail',
            //     name: '文章详情',
            //     component: '@/pages/articleList/detail',
            // },
          ],
        },
        {
          exact: true,
          path: '/admin/accout',
          name: '个人中心',
          component: '@/pages/accout',
        },
      ],
    },
    {
      component: '@/pages/404',
    },
  ],
};
