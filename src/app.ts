import { routers } from '@/routes/index';
export function patchRoutes({ routes }: any) {
  routes[routes.length - 2].routes.unshift(...routers);
  console.log(routes);
}
