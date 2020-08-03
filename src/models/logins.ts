import { message } from 'antd';
import { history } from 'umi';
import cookie from 'react-cookies';
import StorageHelper from '@/utils/storage';
import * as LoginApi from '@/services/login';

export default {
  namespace: 'login',
  state: {
    loginInfo: StorageHelper.get('info'),
    loginToken: cookie.load('token'),
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
            loginInfo: response.data,
            loginToken: response.data,
          },
        });
        let inFifteenMinutes = new Date(
          new Date().getTime() + 24 * 3600 * 1000,
        ); //一天
        cookie.save('token', response.token, { expires: inFifteenMinutes });
        StorageHelper.set('info', response.data);
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
        cookie.remove('token');
        yield put({
          type: 'handle',
          payload: {
            loginInfo: {},
            loginToken: '',
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
