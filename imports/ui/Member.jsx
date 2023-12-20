import React from "react";
import { Col, ConfigProvider, Row, theme } from "antd";
import { NavHeader } from "./NavHeader";
import { Start } from "./Start";
import { Links } from "./Links";
import { useTracker } from "meteor/react-meteor-data";

export const Member = () => {
  const { user } = useTracker(() => ({ user: Meteor.user() }), []);
  if (user) {
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
        <Row justify="center" style={{ padding: "0.5rem" }}>
          <Col span={24}>
            <NavHeader />
          </Col>
          <Col span={16}>
            <Links />
          </Col>
        </Row>
      </ConfigProvider>
    );
  } else {
    return <Start />;
  }
};
