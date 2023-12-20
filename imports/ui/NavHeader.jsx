import React from "react";
import { Button, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { isSmall } from "./App";
import { Meteor } from "meteor/meteor";

export const NavHeader = () => {
  const navigate = useNavigate();
  return (
    <Row
      justify={isSmall() ? "center" : "space-between"}
      align="middle"
      gutter={[8, 8]}
      style={{ width: "100%" }}
    >
      {!isSmall() && (
        <Col>
          <img
            src="/205TH_3D_Logo.png"
            alt="205TH RECON BATTALION"
            style={{
              maxHeight: "4.89vh",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
        </Col>
      )}
      <Col>
        <Row justify="center" align="middle" gutter={[8, 8]}>
          <Col>
            <Button type="text" onClick={() => navigate("/start")}>
              START
            </Button>
          </Col>
          <Col>
            <Button type="text" onClick={() => navigate("/about")}>
              ÜBER UNS
            </Button>
          </Col>
          <Col>
            <Button type="text" onClick={() => navigate("/speciality")}>
              SPEZIALISIERUNG
            </Button>
          </Col>
          <Col>
            <Button type="text" onClick={() => navigate("/gallery")}>
              GALLERIE
            </Button>
          </Col>
          <Col>
            <Button type="text" onClick={() => navigate("/orbat")} disabled>
              ORBAT
            </Button>
          </Col>
        </Row>
      </Col>
      {!isSmall() && (
        <Col>
          <Button
            type="primary"
            ghost
            onClick={() => {
              if (Meteor.user()) {
                Meteor.logout();
              } else {
                navigate("/login");
              }
            }}
          >
            {Meteor.user() ? "ABMELDEN" : "ANMELDUNG"}
          </Button>
        </Col>
      )}
    </Row>
  );
};
