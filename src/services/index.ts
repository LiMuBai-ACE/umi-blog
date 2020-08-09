import * as adminApi from './admin';
import * as loginApi from './login';

export default {
  ...adminApi,
  ...loginApi,
};
