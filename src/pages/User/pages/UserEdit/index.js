import { useSearchParams } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'

import { getUserDetail, getUserList } from '@/apis/user'
import { useForm } from 'antd/es/form/Form'
const onFinish = values => {
  console.log('Success:', values)
}
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo)
}

const UserEdit = () => {
  const [searchParams] = useSearchParams()
  const [userdetail, setUserDetail] = useState({})
  const id = searchParams.get('id')
  //form
  const [form] = Form.useForm()
  useEffect(() => {
    ;(async () => {
      const res = await getUserDetail(id, 'GET')

      setUserDetail(res.data[0])

      form.setFieldsValue(userdetail)
    })()
  }, [])

  //finish action

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}>
      <Form.Item
        label="First Name"
        name="first_name"
        rules={[
          {
            required: true,
            message: 'Please input your first_name!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="last_name"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UserEdit
