import { message } from 'antd';
import { history } from 'umi';
import API from '@/services/index';

export default {
  namespace: 'admin',
  state: {
    articleList: [],
  },
  effects: {
    // 上传文章
    *writeArticle({ payload }: any, { call, put }: any) {
      const response = yield call(API.adminArticle, payload);
      if (response.code === 200) {
        message.warn(response.msg);
        history.goBack();
      } else {
        message.warn(response.msg);
      }
    },
    // 文章列表
    *articleList({ payload }: any, { call, put }: any) {
      const response = yield call(API.ArticleList);
      if (response.code === 200) {
        yield put({
          type: 'handle',
          payload: {
            articleList: response.data,
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
  },
};
