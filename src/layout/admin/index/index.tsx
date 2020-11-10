import React, { FC } from 'react';
import { Layout } from 'antd';
import { connect } from 'umi';
import HeaderBar from '../header';
import Sidebar from '../sidebar';
import './index.scss';

const { Content } = Layout;

const Index: FC = (props: any) => {
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
            {props.children}
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
