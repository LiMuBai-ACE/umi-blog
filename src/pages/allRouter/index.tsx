import React, { useState } from 'react';
import { Table, Tooltip, Form, Input, Button } from 'antd';
import AModal from './components/modal';
import './index.scss';
const columns = [
  {
    title: 'key',
    dataIndex: 'key',
    key: 'key',
    ellipsis: {
      showTitle: false,
    },
    render: (key: any) => (
      <Tooltip placement="topLeft" title={key}>
        {key}
      </Tooltip>
    ),
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    ellipsis: {
      showTitle: false,
    },
    render: (address: any) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: '类型',
    dataIndex: 'age',
    key: 'age',
    ellipsis: {
      showTitle: false,
    },
    render: (address: any) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: '路由',
    dataIndex: 'address',
    key: 'address',
    ellipsis: {
      showTitle: false,
    },
    render: (address: any) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: '排序',
    dataIndex: 'address',
    key: 'address',
    ellipsis: {
      showTitle: false,
    },
    render: (address: any) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: '图标',
    dataIndex: 'address',
    key: 'address',
    ellipsis: {
      showTitle: false,
    },
    render: (address: any) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: '状态',
    dataIndex: 'address',
    key: 'address',
    ellipsis: {
      showTitle: false,
    },
    render: (address: any) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: '操作',
    dataIndex: 'address',
    key: 'address',
    ellipsis: {
      showTitle: false,
    },
    render: (address: any) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    song: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];
const rowSelection = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows,
    );
  },
  onSelect: (record: any, selected: any, selectedRows: any) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
    console.log(selected, selectedRows, changeRows);
  },
};

function AllRoutes() {
  return (
    <>
      <AModal />
      <Table
        columns={columns}
        expandable={{ childrenColumnName: 'song', defaultExpandAllRows: true }}
        rowSelection={{ ...rowSelection, checkStrictly: false }}
        dataSource={data}
      />
    </>
  );
}

export default AllRoutes;
