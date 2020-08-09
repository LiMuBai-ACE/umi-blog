import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import './index.scss';
const index = (props: any) => {
  return (
    <Layout style={{ height: '100%' }}>
      <Sider
        // style={{ height: '100%' }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken, '111');
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type, '2222');
        }}
      >
        <div className="logo">
          <img src={require('@/assets/images/logo.jpg')} />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/home">首页</Link>
          </Menu.Item>
          <SubMenu key="sub2" title="文章管理">
            <Menu.Item key="2">
              <Link to="/admin/articleList">文章列表</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/admin/writeArticle">编写文章</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="5">
            <Link to="/admin/analysis">数据分析</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          height
        </Header>
        <Content style={{ padding: 30 }}>
          <div
            className="site-layout-background"
            // style={{ padding: 24, minHeight: 360 }}
          >
            {props.children}
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Zcc博客后台管理中心</Footer> */}
      </Layout>
    </Layout>
  );
};

export default index;
