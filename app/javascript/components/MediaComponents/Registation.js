import React from "react";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Form, Input, Button, Row, Col } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

function Registration(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Container maxWidth="sm" style={{ marginTop: 150 }}>
        <Box>
          <Card>
            <CardContent>
              <Row gutter={[8, 16]}>
                <Col span={22}>
                  <Typography variant="h5">
                    Registration for HumbleMumble
                  </Typography>
                </Col>
                <Col span={2}>
                  <Button
                    type="link"
                    icon={<CloseCircleOutlined />}
                    size={"medium"}
                    onClick={props.close}
                  />
                </Col>
              </Row>
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={[8, 0]}>
                  <Col span={12}>
                    <Typography>First Name</Typography>
                    <Form.Item
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
                    <Typography>Last Name</Typography>
                    <Form.Item
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
                <Row gutter={[8, 4]}>
                  <Col span={24}>
                    <Typography>Email</Typography>
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Please input your email!" },
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
                  Submit
                </Button>
              </Form>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export default Registration;
