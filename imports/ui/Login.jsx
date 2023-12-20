import React from "react";
import { Card, Col, Row } from "antd";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Row justify="center">
          <Col style={{ marginTop: "2rem" }}>
            <img
              src="/205TH_3D_Logo.png"
              alt="logo"
              style={{ height: "30vh", margin: "0 auto" }}
            />
          </Col>
        </Row>
      </Col>
      <Col xs={20} lg={12}>
        <Card title="ANMELDUNGSFORMULAR">
          <LoginForm />
        </Card>
      </Col>
    </Row>
  );
};
