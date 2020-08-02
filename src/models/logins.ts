import { message } from 'antd';
import { history } from 'umi';
import StorageHelper from '@/utils/storage';
import * as LoginApi from '@/services/login';

export default {
  namespace: 'login',
  state: {
    account: StorageHelper.get('loginInfo'),
  },
  effects: {
    // 注册
    *register({ payload }: any, { call }: any) {
      const response = yield call(LoginApi.userRegister, payload);
      if (response.code === 200) {
        message.success('注册成功');
        history.push({ pathname: '/login' });
      } else {
        message.warn(response.msg);
      }
    },
    // 登录
    *login({ payload }: any, { call, put }: any) {
      const response = yield call(LoginApi.userLogin, payload);
      if (response.code === 200) {
        message.warn(response.msg);
        // 登录成功后需要改变用户信息 不然无法立即获取
        yield put({
          type: 'setInfo',
          payload: {
            account: response.data,
          },
        });
        StorageHelper.set('loginInfo', response.data);
        history.push({ pathname: '/home' });
      } else {
        message.warn(response.msg);
      }
    },
    // 退出登录
    *logout({ payload }: any, { call, put }: any) {
      const response = yield call(LoginApi.logout, payload);
      if (response.code === 200) {
        message.warn(response.msg);
        StorageHelper.clear();
        yield put({
          type: 'handle',
          payload: {
            account: {},
          },
        });
      } else {
        message.warn(response.msg);
      }
    },
  },
  reducers: {
    handle(state: any, { payload }: any) {
      return { ...state, ...payload };
    },
    setInfo(state: any, { payload }: any) {
      return { ...state, ...payload };
    },
  },
};
