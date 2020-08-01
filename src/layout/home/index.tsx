/*
 * @Author: 柒叶
 * @Date: 2020-04-05 11:41:31
 * @Last Modified by: 柒叶
 * @Last Modified time: 2020-05-13 19:51:34
 */

import React, { useEffect } from 'react';
import { Layout, Card } from 'antd';
import { connect } from 'dva';
import Header from '@/components/Header';
import SiderList from '@/components/SiderList';
import Tags from '@/components/Tags';
import './index.scss';

const { Content } = Layout;

const Home = (props: any) => {
  const {
    dispatch,
    hots,
    loading,
    children,
    location: { pathname },
  } = props;
  //   useEffect(() => {
  //     if (dispatch) {
  //       dispatch({ type: 'article/hot' })
  //     }
  //   }, [])
  return (
    <>
      <Header pathname={pathname} />
      <Content className="homeContainer">
        <div className="homeContainerWrapper">
          <div className="homeContainerList">{children}</div>
          <div className="homeContainerSiderlist">
            <Card
              size="small"
              loading={loading}
              bordered={false}
              title="热门文章"
            >
              <SiderList
                dataSource={hots}
                bordered={false}
                size="small"
                split={false}
              />
            </Card>
            <Tags />
            <div className="mt-10 ft-13 pl-10"></div>
          </div>
        </div>
      </Content>
    </>
  );
};

// export default connect(({ article: { hots }, loading }) => ({
//   hots,
//   loading: loading.effects['article/hot'],
// }))(Home)

export default Home;
