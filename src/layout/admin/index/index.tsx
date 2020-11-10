import React, { FC, useState, useEffect } from 'react';
import { Layout, message } from 'antd';
import { Redirect, connect } from 'umi';
import StorageHelper from '@/utils/storage';
import cookie from 'react-cookies';
const { Content } = Layout;
import HeaderBar from '../header';
import Sidebar from '../sidebar';
import './index.scss';
const Index: FC = (props: any) => {
  const { dispatch, history, location, loginInfo } = props;
  const [token, setToken] = useState(cookie.load('token'));
  useEffect(() => {
    if (!cookie.load('token') && loginInfo.user_id) {
      message.warn('登录已过期!');
      StorageHelper.clear();
      cookie.remove('token');
    }
    if (!cookie.load('token')) {
      message.warn('您还未登录');
      StorageHelper.clear();
      cookie.remove('token');
    }
  }, []);
  return (
    <Layout style={{ height: '100%' }}>
      <Sidebar {...props} />
      <Layout>
        <HeaderBar {...props} />
        <Content style={{ padding: 30 }}>
          <div
            className="site-layout-background"
            // style={{ padding: 24, minHeight: 360 }}
          >
            {token ? props.children : <Redirect to="/login" />}
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>博韬后台管理中心</Footer> */}
      </Layout>
    </Layout>
  );
};

export default connect(({ login: { loginInfo, loginToken } }: any) => ({
  loginInfo,
  loginToken,
}))(Index);
