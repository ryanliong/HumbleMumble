import React from "react";
import { Container, Box, Card, CardContent } from "@material-ui/core";
import { Form, Input, Button, Row, Col } from "antd";
import NavBar from "../NavBar/NavBar";
import CenteredModal from "../MediaComponents/CenteredModal";

function Test() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Container maxWidth="lg" style={{ marginTop: 150 }}>
        <Box>
          <Card>
            <CardContent>
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={[10, 10]}>
                  <Col span={12}>
                    <Form.Item
                      label="First name"
                      name="firstName"
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
                    <Form.Item
                      label="Last name"
                      name="lastName"
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
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form>
              <CenteredModal></CenteredModal>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export default Test;
