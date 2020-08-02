import request from '@/utils/request';
// 代理需要在请求接口前 /api

// 用户注册
export async function userRegister(data: any) {
  return request('/login/register', {
    method: 'POST',
    data,
  });
}

// 用户登录
export async function userLogin(data: any) {
  return request('/login', {
    method: 'POST',
    data,
  });
}

// 用户推出登录
export async function logout() {
  return request('/api/login/logout', {
    method: 'POST',
    data: {},
  });
}
