import React, { useEffect } from 'react';
import {} from 'umi';
import { connect } from 'dva';
import { Table, Tag, Space } from 'antd';
import './index.scss';
// 文章列表

const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'id',
    render: (text: any) => {
      return <a>{text}</a>;
    },
  },
  {
    title: '简介',
    dataIndex: 'profile',
    key: 'id',
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'id',
  },
  {
    title: '操作',
    key: 'id',
    render: () => (
      <Space size="middle">
        <a>Invite {}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

function ArticleList(props: any) {
  const { dispatch, articleList } = props;
  useEffect(() => {
    dispatch({
      type: 'admin/articleList',
    });
  }, []);

  function initRequset() {
    dispatch({
      type: 'admin/articleList',
    });
  }

  return (
    <div className="page-article-list">
      <Table columns={columns} rowKey={'id'} dataSource={articleList} />
    </div>
  );
}

export default connect(({ admin: { articleList } }: any) => ({
  articleList,
}))(ArticleList);
