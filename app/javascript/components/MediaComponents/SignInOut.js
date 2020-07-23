import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Box, Typography } from "@material-ui/core";
import { Form, Input, Button, Row, Col } from "antd";

function SignInOut(props) {
  const string_parameterize = (str1) => {
    return str1
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 -]/, "")
      .replace(/\s/g, "-");
  };

  const onFinish = (values) => {
    const getUsers = async () => {
      let resp = await axios.get(
        `/api/a/accounts/${string_parameterize(values.username)}`
      );
      let { data } = resp.data;
      return data;
    };

    getUsers().then((data) => {
      const successLogin = () => {
        const { username, signedIn } = values;
        localStorage.setItem("username", values.username);
        localStorage.setItem("slug", string_parameterize(values.username));
        localStorage.setItem("signedIn", true);
        localStorage.setItem("imageUrl", data.attributes.image_url);
        localStorage.setItem("bio", data.attributes.bio);
        localStorage.setItem("id", data.id);
        console.log("log in successful");
      };

      data === null
        ? console.log("No account with that username:", values) //redirect error no account
        : data.attributes.password === values.password
        ? successLogin() // redirect to Account page or home page
        : console.log("Wrong password"); //redirect error wrong password
    });
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
            <Typography>Username</Typography>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
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
