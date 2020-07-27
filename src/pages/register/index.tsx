import React, { useState } from 'react'
import { connect } from 'dva'
import { Form, Input, Button, Checkbox } from 'antd';
import { history, Link } from 'umi'
import './index.scss'



const Register: React.FC = () => {
    const [emil, setEmil] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const layout = {
        // 类似于栅格布局
        labelCol: { span: 6 },
        wrapperCol: { span: 60 },
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    // 校验规则
    const validateMessages = {
        types: {
            email: '请输入正确的${label}格式!',
            password: '请输入您的密码!',
            confirm: "${password}' must equal ${confirm}",
        },
    };

    return (
        <div className="login">
            <div className="modal">
                <div>注册</div>
                <Form
                    {...layout}
                    name="basic"
                    className="form"
                    initialValues={{
                        ['emil']: emil,
                        ['password']: password
                    }}
                    validateMessages={validateMessages}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="邮箱"
                        name="emil"
                        className="emil"
                        rules={[{ type: 'email', required: true }]}
                    >

                        <Input placeholder="请输入你的邮箱地址!" prefix={<i className="iconfont icon-youjian" style={{ color: 'blue' }} />} />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        className="password"
                        rules={[{ required: true, message: '请输入你的密码!' }]}
                    >

                        <Input.Password placeholder="请输入您的密码!" prefix={<i className="iconfont icon-mima" style={{ color: 'blue' }} />} />
                    </Form.Item>
                    <Form.Item
                        label="确认密码"
                        name="confirm"
                        className="password"
                        rules={[{ required: true, message: '请输入您的密码!' }]}
                    >
                        <Input.Password placeholder="请再次输入确认你的密码!" prefix={<i className="iconfont icon-mima" style={{ color: 'blue' }} />} />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            确认
                        </Button>
                    </Form.Item>
                    <Link to="/login">已有账号，去登陆~</Link>
                </Form>
            </div>

        </div>
    )
}

export default Register
