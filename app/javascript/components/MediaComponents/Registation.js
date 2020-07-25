import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { Form, Input, Button, Row, Col, message } from "antd";
import axios from "axios";

function Registration(props) {
  const string_parameterize = (str1) => {
    return str1
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 -]/, "")
      .replace(/\s/g, "-");
  };

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

    message.success("Registration Successful");

    axios
      .get(`/api/a/accounts/${string_parameterize(values.username)}`)
      .then((resp) => {
        localStorage.setItem("username", values.username);
        localStorage.setItem("slug", string_parameterize(values.username));
        localStorage.setItem("signedIn", true);
        localStorage.setItem("imageUrl", resp.data.data.attributes.image_url);
        localStorage.setItem("bio", resp.data.data.attributes.bio);
        localStorage.setItem("id", resp.data.data.id);
      })
      .catch((resp) => console.log(resp));

    props.close();
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
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
