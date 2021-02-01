import React, { Component } from 'react';

import './lead-form.scss';



import { Form, Input, Button, Checkbox } from 'antd';


import ReactDOM from 'react-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LeadForm = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Enter your email' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="From"
        name="from"
        rules={[{ required: true, message: 'Enter pick up place ' }]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="To"
        name="to"
        rules={[{ required: true, message: 'Enter destination address' }]}
      >
        <Input />
      </Form.Item>



      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
      
    </Form>
  );
};


export default LeadForm;
