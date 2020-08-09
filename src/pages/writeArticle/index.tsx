import React, { useState } from 'react';
import {} from 'umi';
import { connect } from 'dva';
import { Form, Input, Button, message } from 'antd';
import BraftEditor from '@/components/BraftEditor';
import myContext from '@/utils/createContext';
import './index.scss';

const layout = {
  // labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function WriteArticle(props: any) {
  const [content, SetContent] = useState(null);
  const { dispatch, history, location, loginInfo } = props;

  // 上传文章
  const onFinish = (values: any) => {
    dispatch({
      type: 'admin/writeArticle',
      payload: {
        ...values,
        content,
        user_id: loginInfo.user_id,
      },
    });
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="demo-container">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="标题"
          name="title"
          rules={[{ required: true, message: '请输入你的标题！' }]}
        >
          <Input placeholder="请输入你的标题！" />
        </Form.Item>

        <Form.Item
          label="介绍"
          name="profile"
          rules={[{ required: true, message: '请输入你的介绍！' }]}
        >
          <Input placeholder="请输入你的介绍！" />
        </Form.Item>
        <myContext.Provider value={{ content, SetContent }}>
          <BraftEditor />
        </myContext.Provider>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default connect(({ login: { loginInfo, loginToken } }: any) => ({
  loginInfo,
  loginToken,
}))(WriteArticle);
