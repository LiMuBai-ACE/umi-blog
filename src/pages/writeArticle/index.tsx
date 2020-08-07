import React, { useState } from 'react';
import {} from 'umi';
import BraftEditor from 'braft-editor';
import { Form, Input, Button, Checkbox } from 'antd';
import './index.scss';
import 'braft-editor/dist/index.css';
import { buildPreviewHtml } from './PreviewHtml';
import 'braft-extensions/dist/code-highlighter.css';
import CodeHighlighter from 'braft-extensions/dist/code-highlighter';
BraftEditor.use(
  CodeHighlighter({
    includeEditors: ['editor-with-code-highlighter'],
  }),
);

// 写文章
const controls: any = [
  'bold',
  'italic',
  'underline',
  'text-color',
  'separator',
  'link',
  'separator',
  'media',
];

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinish = (values: any) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const excludeControls: Array<any> = [
  'letter-spacing',
  'line-height',
  'clear',
  'headings',
  'list-ol',
  'list-ul',
  'remove-styles',
  'superscript',
  'subscript',
  'hr',
  'text-align',
];
// 预览按钮

function WriteArticle() {
  const [contnent, SetContent] = useState(null);

  // 打开新页面 预览
  const preview = () => {
    if (window.previewWindow) {
      window.previewWindow.close();
    }
    window.previewWindow = window.open();
    window.previewWindow.document.write(buildPreviewHtml(contnent));
    window.previewWindow.document.close();
  };

  // 预览按钮
  const extendControls: Array<any> = [
    {
      key: 'custom-button',
      type: 'button',
      text: '预览',
      onClick: preview,
    },
  ];

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
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <BraftEditor
          className="my-editor"
          onChange={(e) => SetContent(e)}
          excludeControls={excludeControls}
          extendControls={extendControls}
          // controls={controls}
          placeholder="请输入正文内容"
        />
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default WriteArticle;
