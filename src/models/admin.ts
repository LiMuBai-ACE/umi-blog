import { message } from 'antd';
import { history } from 'umi';
import API from '@/services/index';

export default {
  namespace: 'admin',
  state: {},
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
        return response;
      } else {
        message.warn(response.msg);
      }
    },
    // 文章详情
    *articleDetail({ payload }: any, { call }: any) {
      const response = yield call(API.ArticleDetail, payload);
      if (response.code === 200) {
        return response;
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
