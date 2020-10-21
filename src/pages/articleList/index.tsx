import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import { connect } from 'dva';
import { Table, Space } from 'antd';
import './index.scss';
// 文章列表

const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    render: (text: any, record: any) => {
      // console.log(record)
      return (
        <a
          onClick={() =>
            history.push(`/admin/articleList/detail?id=${record.id}`)
          }
        >
          {text}
        </a>
      );
    },
  },
  {
    title: '简介',
    dataIndex: 'profile',
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
  },
  {
    title: '操作',
    render: () => (
      <Space size="middle">
        <a>Invite</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

function ArticleList(props: any) {
  const { dispatch } = props;
  const [articleList, SetArticleList] = useState([]);
  useEffect(() => {
    dispatch({
      type: 'admin/articleList',
    }).then((res: any) => {
      SetArticleList(res.data);
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

export default connect(({ admin: {} }: any) => ({}))(ArticleList);
