export const routers = [
  {
    path: '/admin',
    name: '首页',
    component: require('@/pages/home').default,
  },
  {
    path: '/',
    name: '文章管理',
    routes: [
      {
        path: '/writeArticle',
        name: '编写文章',
        component: require('@/pages/writeArticle').default,
      },
      {
        path: '/articleList',
        name: '文章列表',
        component: require('@/pages/articleList').default,
      },
      // {
      //     // exact: true,
      //     path: '/write/articleList/detail',
      //     name: '文章详情',
      //     component: require('@/pages/articleList/detail').default,
      // },
    ],
  },
  {
    path: '/accout',
    name: '个人中心',
    component: require('@/pages/accout').default,
  },
  {
    path: '/allRouter',
    name: '路由管理',
    component: require('@/pages/allRouter').default,
  },
];
