import React from "react";
import { Col, ConfigProvider, Row, theme } from "antd";
import { NavHeader } from "./NavHeader";

export const Home = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6a0f0f",
          colorInfo: "#6a0f0f",
          colorBgBase: "#191919",
          colorTextBase: "#fefefe",
          fontSize: 16,
          fontFamily: '"Geologica", sans-serif',
          borderRadius: 10,
          wireframe: false,
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Row style={{ padding: "0.5rem" }}>
        <Col
          span={24}
          style={{
            position: "fixed",
            zIndex: 1,
            width: "99%",
          }}
        >
          <NavHeader />
        </Col>
        <Col span={24}>{children}</Col>
      </Row>
    </ConfigProvider>
  );
};
