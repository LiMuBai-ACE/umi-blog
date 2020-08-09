import request from '@/utils/request';
// 代理需要在请求接口前 /api

// 写文章
export async function adminArticle(data: any) {
  return request('/admin/articles', {
    method: 'POST',
    data,
  });
}
// 文章列表
export async function ArticleList(data: any) {
  return request('/admin/articles/list', {
    method: 'GET',
    data,
  });
}
