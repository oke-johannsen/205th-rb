import React from "react";
import { Col, Divider, Row } from "antd";

export const Start = () => {
  return (
    <Row gutter={[8, 8]} justify="center" align="middle">
      <Col span={24}>
        <div
          style={{
            height: "44vh",
            backgroundImage: "url('/ScytheScreenshotContest.jpg')",
            backgroundClip: "border-box",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 50%",
            backgroundSize: "cover",
            borderRadius: "8px",
          }}
        />
      </Col>
      <Col xs={20} sm={20} md={20} lg={8}>
        <a
          href="https://units.arma3.com/unit/205threconbattalion"
          target="_blank"
          style={{
            display: "block",
            height: "50vh",
            backgroundImage: "url('/205TH_3D_Logo.png')",
            backgroundClip: "border-box",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        >
          {" "}
        </a>
      </Col>
      <Col xs={20} sm={20} md={12} lg={8}>
        <h3>WANN SPIELEN WIR?</h3>
        <span style={{ textAlign: "justify", wordBreak: "break-word" }}>
          Unsere regulären Missionen finden <b>jeden Samstag um 16 Uhr</b>{" "}
          statt. Dabei spielen wir als die fiktive Klon-Einheit 205th Recon
          Battalion, während der Klonkriege. Allerdings werden auch regelmäßig
          Nebenmissionen veranstaltet, bei denen sich die Szenerie auch gerne
          mal ändert. Von Sturmtruppen bis Jedis ist hier alles dabei. Teilweise
          gibt es sogar Missionen aus anderen Universen, wie Warhammer40K, Halo
          oder ähnliches.
        </span>
      </Col>
      <Col xs={20} sm={20} md={20} lg={8}>
        <a
          href="https://discord.gg/205rb"
          target="_blank"
          className="hover"
          style={{
            display: "block",
            height: "15vh",
            backgroundImage: "url('/discord-mark-blue.png')",
            backgroundClip: "border-box",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            margin: isSmall() ? "5rem 0" : 0,
          }}
        />
      </Col>
      <Col span={24}>
        <Row gutter={[8, 8]} justify="end" align="middle">
          <Col>
            <a
              href="https://www.youtube.com/channel/UCwICJE1M55ZHJ2EaFPWrkNA"
              target="_blank"
            >
              YouTube
            </a>
          </Col>
          <Col>
            <Divider type="vertical" />
          </Col>
          <Col>
            <a
              href="https://steamcommunity.com/groups/205threconbattalion"
              target="_blank"
            >
              Steam Community
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
