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
    // {
    //     component: '@/layout/auth',
    //     routes: [
    {
      path: '/',
      component: '@/layout/admin/index/index',
      routes: [
        {
          path: '/admin',
          name: '首页',
          component: '@/pages/home',
        },
        {
          path: '/write',
          name: '文章管理',
          routes: [
            {
              path: '/write',
              redirect: '/write/writeArticle',
            },
            {
              path: '/write/writeArticle',
              name: '编写文章',
              component: '@/pages/writeArticle',
            },
            {
              path: '/write/articleList',
              name: '文章列表',
              component: '@/pages/articleList',
            },
            // {
            //     // exact: true,
            //     path: '/admin/articleList/detail',
            //     name: '文章详情',
            //     component: '@/pages/articleList/detail',
            // },
            {
              component: '@/layout/404',
            },
          ],
        },
        {
          path: '/accout',
          name: '个人中心',
          component: '@/pages/accout',
        },
        {
          component: '@/layout/404',
        },
      ],
    },
    //         {
    //             component: '@/layout/404',
    //         },
    //     ],
    // },
    {
      component: '@/layout/404',
    },
  ],
};
