import React from "react";
import { useNavigate } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { Button, Col, Divider, Form, Input, Row } from "antd";

export const LoginForm = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    Meteor.loginWithPassword(
      { username: values.username },
      values.password,
      () => {
        navigate("/member");
      }
    );
  };
  return (
    <Form
      name="login"
      initialValues={{}}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        label="Benutzername"
        rules={[
          {
            required: true,
            message: "Bitte Benutzernamen eingeben!",
          },
        ]}
      >
        <Input placeholder="Commander.Spark" autoComplete="current-username" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Passwort"
        rules={[
          {
            required: true,
            message: "Bitte Passwort eingeben!",
          },
        ]}
      >
        <Input.Password
          placeholder="sicheresPasswort123*"
          autoComplete="current-password"
        />
      </Form.Item>

      <Row justify="end" align="middle" gutter={[8, 8]}>
        <Col>
          <a href="https://tinyurl.com/3tcnhfph" target="_blank">
            Jetzt Bewerben
          </a>
        </Col>
        <Col>
          <Divider type="vertical" />
        </Col>
        <Col>
          <Button type="primary" htmlType="submit">
            Anmelden
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
