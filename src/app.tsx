import { history } from 'umi';

// 所有routes 合集
export function patchRoutes({ routes }) {
    // console.log(routes)
    // routes.unshift({
    //   path: '/foo',
    //   exact: true,
    //   component: require('@/extraRoutes/foo').default,
    // });
}


// 监听路由变化 可以进行路由拦截
export function onRouteChange({ location, routes, action }) {
    // console.log(location, routes, action)
}
