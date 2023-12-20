import React from "react";
import { Col, Row } from "antd";

export const Speciality = () => {
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <div
          style={{
            height: "44vh",
            backgroundImage: "url('/inf_dark.jpg')",
            backgroundClip: "border-box",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 30%",
            backgroundSize: "cover",
            borderRadius: "8px",
          }}
        />
      </Col>
      <Col xs={20} sm={20} md={12} lg={12}>
        <h3>SPEZIALISIERUNG</h3>
        <p>
          Neben der Infanterie, wo du dich zwischen den Spezialisierungen Mörser
          und Schilde, Scuba und mechanisiert oder Airborne entscheiden kannst,
          gibt es außerdem die Möglichkeit bei uns als Pilot, Aufklärer
          (ARF-Trooper) zu spielen.
        </p>
        <p>
          In diesen Bereichen ist es natürlich möglich, weitere spezifische Aus-
          und Fortbildungen zu machen. Unterstütze dein Squad als Medic,
          zerstöre eintreffende Feinde als AT/AA Schütze, oder willst du doch
          lieber aus dem Hintergrund agieren? Dann schalte den Feind als
          Marksman aus der Distanz aus! Natürlich gibt es auch noch weitere
          Spezialisierungen, welche man sich aneignen kann, diese findest du in
          unserem Discord.
        </p>
        <p>
          Das Schlachtfeld ist nicht so deins und du baust lieber Missionen und
          zeust diese für deine Mitspieler? Kein Problem! Als Mitglied der Navy
          kannst du, nach einer kurzen Probezeit, Nebenmissionen und sogar
          Hauptmissionen bauen oder anderen Flottenmitgliedern bem Zeusen
          helfen.
        </p>
        <p>
          Noch nicht überzeugt? Dann schau doch bei uns auf dem{" "}
          <a href="https://discord.gg/205rb" target="_blank">
            Discord
          </a>{" "}
          vorbei, um weitere Informationen zu sammeln oder sprich uns einfach
          auf unserem{" "}
          <a href="ts3server://46.20.46.66:10189" target="_blank">
            TeamSpeak
          </a>{" "}
          an, wir werden dir gerne weiterhelfen.
        </p>
      </Col>
    </Row>
  );
};
