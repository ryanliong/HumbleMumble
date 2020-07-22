import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { Form, Input, Button, Row, Col } from "antd";

function SignInOut(props) {
  const onFinish = (values) => {
    //object here for sign in
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Box>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={[8, 4]}>
          <Col span={24}>
            <Typography>Email</Typography>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[8, 4]}>
          <Col span={24}>
            <Typography>Password</Typography>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form>
    </Box>
  );
}

export default SignInOut;
