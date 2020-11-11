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
  return await request('/admin/articles/list', {
    method: 'GET',
    data,
  });
}
// 文章详情
export async function ArticleDetail(data: any) {
  return request('/admin/articles/detail', {
    method: 'POST',
    data,
  });
}
