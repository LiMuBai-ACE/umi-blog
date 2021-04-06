import React, { useState } from 'react';
import {
  Modal,
  Button,
  Form,
  Input,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
function AModal() {
  const [visible, setVisible] = useState(false);
  const [componentSize, setComponentSize] = useState<any>('default');
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };
  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        增加路由
      </Button>
      <Modal
        title="Basic Modal"
        visible={true}
        // onOk={() => { setVisible(false) }}
        // onCancel={() => setVisible(false)}
        footer={null}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{ size: componentSize }}
          size={componentSize}
          onFinish={onFinish}
        >
          <Form.Item
            label="菜单名称"
            name="name"
            rules={[
              {
                type: 'string',
                message: '请输入菜单名称',
              },
              {
                required: true,
                message: '请输入菜单名称',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="菜单类型"
            name="type"
            rules={[
              {
                type: 'string',
                message: '请选择菜单类型',
              },
              {
                required: true,
                message: '请选择菜单类型',
              },
            ]}
          >
            <Select>
              <Select.Option value="menu">菜单</Select.Option>
              <Select.Option value="default">默认路由</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="菜单路由">
            <Input />
          </Form.Item>
          <Form.Item label="菜单图标">
            <Input />
          </Form.Item>
          <Form.Item label="上级菜单" name="parent">
            <Select>
              <Select.Option value="menu">一级菜单</Select.Option>
              <Select.Option value="menu">首页</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="菜单排序">
            <InputNumber />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AModal;
