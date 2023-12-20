import React from "react";
import { Col, Row } from "antd";

export const About = () => {
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <div
          style={{
            height: "44vh",
            backgroundImage: "url('/helios_holo.jpg')",
            backgroundClip: "border-box",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 27%",
            backgroundSize: "cover",
            borderRadius: "8px",
          }}
        />
      </Col>
      <Col xs={20} sm={20} md={12} lg={12}>
        <h3>ÜBER UNS</h3>
        <p style={{ textAlign: "justify", wordBreak: "break-word" }}>
          Das 205th Recon Battalion ist eine deutsche "StarSim"-Einheit. Als
          solche simulieren wir in dem Spiel Arma 3 eine fiktionale
          Klonkrieger-Einheit aus dem Star Wars Universum. Mit einer Spielerzahl
          von meistens 40 Personen oder mehr pro Haupt-Event, sind wir der
          aktuell größte deutschsprachige StarSim Clan.
        </p>
        <p style={{ textAlign: "justify", wordBreak: "break-word" }}>
          Der Fokus liegt dabei darauf, unsere Mitglieder mit einer Vielzahl von
          spaßigen und spannenden Missionen zu versorgen und auch außerhalb von
          diesen ein freundliches Umfeld zu schaffen, in denen sich andere
          Spieler wohlfühlen und miteinander Spaß haben können.
        </p>
        <p style={{ textAlign: "justify", wordBreak: "break-word" }}>
          Dieser spielerische Austausch findet dabei auch über die deutschen
          Grenzen hinaus statt, indem wir häufig Missionen (sog. „JointOPs“),
          bei denen verschiedene "StarSim" Einheiten, meist aus verschiedenen
          Ländern, zusammen spielen, organisieren oder an diesen teilnehmen.
        </p>
      </Col>
    </Row>
  );
};
