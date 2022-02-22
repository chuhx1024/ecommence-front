import React from 'react'

import Layout from './Layout'
import { Form, Input, Button } from 'antd'
const Signup = () => {
  return (
    <Layout
        title="注册"
        subTitle=""
    >
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        >
            <Form.Item
                label="昵称"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="邮箱"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    注册
                </Button>
            </Form.Item>
        </Form>
    </Layout>
  )
}

export default Signup