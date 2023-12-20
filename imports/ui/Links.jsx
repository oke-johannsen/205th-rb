import React from "react";
import { Card, Col, Divider, Row } from "antd";

export const Links = () => {
  return (
    <Row justify="center" align="stretch" gutter={[16, 16]}>
      <Col span={24}>
        <Divider>ALLGEMEIN</Divider>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8}>
        <Card
          style={{ height: "100%" }}
          bodyStyle={{ height: "100%" }}
          title="Kalender"
          extra={
            <a
              href="https://calendar.google.com/calendar/u/1?cid=c3BhcmsyMDVyYkBnbWFpbC5jb20"
              target="_blank"
            >
              Link
            </a>
          }
        >
          Hier findet ihr unsere Events wie MainOPs, FunOPs, JointOPs, aber auch
          Trainings und Ausbildungen.
        </Card>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8}>
        <Card
          style={{ height: "100%" }}
          bodyStyle={{ height: "100%" }}
          title="Konzeptvorlage"
          extra={
            <a
              href="https://docs.google.com/document/d/1DC1gTTZRw9DHW4ZW_vsjf8POZSwGx0L4FeQnUZ-b-Hk"
              target="_blank"
            >
              Link
            </a>
          }
        >
          Für diejnigen die ein Squad erstellen möchten.
        </Card>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8}>
        <Card
          style={{ height: "100%" }}
          bodyStyle={{ height: "100%" }}
          title="Rekrutierungsformular"
          extra={
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf3i7xxllyLSVXMhZOfKozp9ppbR4sz23ta72BZXStARLAINw"
              target="_blank"
            >
              Link
            </a>
          }
        >
          Durch das Ausfüllen dieses Fragebogens meldet man sich zum
          Rekrutierungsprozess an.
        </Card>
      </Col>
      <Col span={24}>
        <Divider>ENTWICKLER-TEAM TRELLOS</Divider>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8}>
        <Card
          style={{ height: "100%" }}
          bodyStyle={{ height: "100%" }}
          title="Coding"
          extra={
            <a href="https://trello.com/b/SvbIfwUp/coding" target="_blank">
              Link
            </a>
          }
        >
          Aktuelles aus dem Coding-Team
        </Card>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8}>
        <Card
          style={{ height: "100%" }}
          bodyStyle={{ height: "100%" }}
          title="Graphics"
          extra={
            <a href="https://trello.com/b/ZTx3pdkv/graphics" target="_blank">
              Link
            </a>
          }
        >
          Aktuelles aus dem Grafik-Team
        </Card>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8}>
        <Card
          style={{ height: "100%" }}
          bodyStyle={{ height: "100%" }}
          title="Mission Making"
          extra={
            <a
              href="https://trello.com/b/X9Pip9LF/mission-making"
              target="_blank"
            >
              Link
            </a>
          }
        >
          Aktuelles aus dem Zeus-Team
        </Card>
      </Col>
      <Col span={24}>
        <Divider>LINKS DIE BERECHTIGUNGSZUGRIFF BENÖTIGEN</Divider>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8}>
        <Card
          style={{ height: "100%" }}
          bodyStyle={{ height: "100%" }}
          title="205th Roster"
          extra={
            <a
              href="https://docs.google.com/spreadsheets/d/14xBV00s0Sys3xdKdC14rv-sKc9mbJxR2x_Tuglu3yu0"
              target="_blank"
            >
              Link
            </a>
          }
        >
          Eine Datenbank in der die Mitglieder und deren Daten gespeichert
          werden.
        </Card>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8}>
        <Card
          style={{ height: "100%" }}
          bodyStyle={{ height: "100%" }}
          title="205th Google Drive"
          extra={
            <a
              href="https://drive.google.com/drive/folders/1p0lJ3VyqSKqLv4_g2-MNTGbRUW8zo9nf?pli=1"
              target="_blank"
            >
              Link
            </a>
          }
        >
          Eine Sammelstelle für alle Dokumente, wie z.B.
          Besprechungs-Protokolle.
        </Card>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8}>
        <Card
          style={{ height: "100%" }}
          bodyStyle={{ height: "100%" }}
          title="205th Graphics Drive"
          extra={
            <a
              href="https://drive.google.com/drive/folders/1-Su8Iu9uxfIORvtSASdqzCrmJp_PWhhQ?usp=share_link"
              target="_blank"
            >
              Link
            </a>
          }
        >
          Eine Sammelstelle für alle Dokumente, wie z.B.
          Besprechungs-Protokolle.
        </Card>
      </Col>
    </Row>
  );
};
