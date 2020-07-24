import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { Form, Input, Button, Row, Col, message } from "antd";
import axios from "axios";

function Registration(props) {
  const onFinish = (values) => {
    axios({
      url: "/api/a/accounts",

      method: "POST",
      data: {
        name: values.username,
        password: values.password,
        image_url:
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        bio: "Hi there!",
      },
    }).catch((resp) => console.log(resp));

    console.log("Success:", values);
    message.success("Registration Successful");
    localStorage.setItem("username", values.username);
    props.close();
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
        <Row gutter={[8, 0]}>
          <Col span={12}>
            <Typography>Username</Typography>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Typography>Last Name</Typography>
            <Form.Item
              name="lastName" //remove this pls
              rules={[
                {
                  required: true,
                  message: "Please input your last name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
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
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export default Registration;
