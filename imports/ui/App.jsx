import React from "react";
import {
  Button,
  Card,
  Col,
  ConfigProvider,
  Divider,
  Form,
  Input,
  Result,
  Row,
  theme,
} from "antd";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

const App = ({}) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home children={<Start />} />,
      errorElement: (
        <Home
          children={
            <Result
              status={404}
              title="404"
              subTitle="Die Seite, die du versuchst aufzurufen, existiert leider nicht."
            />
          }
        />
      ),
    },
    {
      path: "/start",
      element: <Home children={<Start />} />,
    },
    {
      path: "/about",
      element: <Home children={<About />} />,
    },
    {
      path: "/speciality",
      element: <Home children={<Speciality />} />,
    },
    {
      path: "/gallery",
      element: <Home children={<Gallery />} />,
    },
    {
      path: "/orbat",
      element: <Home children={<Orbat />} />,
    },
    {
      path: "/login",
      element: <Home children={<Login />} />,
    },
    {
      path: "/member",
      element: <Member />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export const isSmall = () => !!(window.innerWidth < 980);

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

export const Gallery = () => {
  const URL_PREFIX = "https://tinyurl.com/";
  const images = [
    `${URL_PREFIX}yeez8nnh`,
    `${URL_PREFIX}yc72fcu6`,
    `${URL_PREFIX}j9mx7z2x`,
    `${URL_PREFIX}3p9muwrx`,
    `${URL_PREFIX}4h5wzvsv`,
    `${URL_PREFIX}5brvb35r`,
    `${URL_PREFIX}5bphwmdv`,
    `${URL_PREFIX}39numn4z`,
    `${URL_PREFIX}4vj4fd2u`,
    `${URL_PREFIX}4wjrpucc`,
    `${URL_PREFIX}2p95n5n7`,
    `${URL_PREFIX}6yct5yap`,
    `${URL_PREFIX}4ea4pyfc`,
    `${URL_PREFIX}3t6b5mjx`,
    `${URL_PREFIX}ycadtdep`,
    `${URL_PREFIX}4xkxy3ad`,
    `${URL_PREFIX}4pnsefcz`,
    `${URL_PREFIX}5ek75try`,
    `${URL_PREFIX}4ucs54sm`,
    `${URL_PREFIX}43vrbfr8`,
    `${URL_PREFIX}3wweyf4t`,
    `${URL_PREFIX}43e38s6m`,
    `${URL_PREFIX}yc24zrvz`,
    `${URL_PREFIX}yc422nnn`,
    `${URL_PREFIX}ahjsek7h`,
    `${URL_PREFIX}2p896f3n`,
    `${URL_PREFIX}74t6xjt2`,
    `${URL_PREFIX}4z9dmdyx`,
    `${URL_PREFIX}4h22ajt8`,
    `${URL_PREFIX}bd2njt2n`,
    `${URL_PREFIX}3jv78xct`,
    `${URL_PREFIX}edadash3`,
    `${URL_PREFIX}3fdxtrb8`,
    `${URL_PREFIX}y5n9pa6y`,
    `${URL_PREFIX}bdcnayhp`,
    `${URL_PREFIX}5xmfprkj`,
    `${URL_PREFIX}jsny3nkz`,
    `${URL_PREFIX}4sd7yvx7`,
    `${URL_PREFIX}5e82pdfw`,
    `${URL_PREFIX}4u4nruhm`,
    `${URL_PREFIX}2z62x7e8`,
    `${URL_PREFIX}44uarmy3`,
    `${URL_PREFIX}2p92npwk`,
    `${URL_PREFIX}mwhzrfcr`,
    `${URL_PREFIX}38unvt6d`,
    `${URL_PREFIX}59wpdb97`,
    `${URL_PREFIX}y3w4jkyh`,
    `${URL_PREFIX}mua99c48`,
    `${URL_PREFIX}y6jfty5s`,
    `${URL_PREFIX}yckr582k`,
    `${URL_PREFIX}3f4asjwn`,
    `${URL_PREFIX}6cjf598v`,
    `${URL_PREFIX}yckpdadb`,
    `${URL_PREFIX}kzm6p4sk`,
  ];
  return (
    <Row
      gutter={[16, 16]}
      justify="center"
      align="middle"
      style={{ marginTop: "5vh" }}
    >
      {images.map((link) => {
        return (
          <Col key={link} xs={20} sm={20} md={16}>
            <img
              src={link}
              alt={link}
              style={{
                borderRadius: 8,
                width: "100%",
              }}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export const Orbat = () => {
  return <Start />;
};

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
        <Row style={{ padding: "0.5rem" }}>
          <Col span={24}>
            <NavHeader />
          </Col>
          <Col span={24}>
            <Row justify="center" align="stretch" gutter={[16, 16]}>
              <Col span={24}>
                <Divider>ALLGEMEIN</Divider>
              </Col>
              <Col span={8}>
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
                  Hier findet ihr unsere Events wie MainOPs, FunOPs, JointOPs,
                  aber auch Trainings und Ausbildungen.
                </Card>
              </Col>
              <Col span={8}>
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
              <Col span={8}>
                <Card
                  style={{ height: "100%" }}
                  bodyStyle={{ height: "100%" }}
                  title="Rekrutierungsformular"
                  extra={
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf3i7xxllyLSVXMhZOfKozp9ppbR4sz23ta72BZXStARLAINw/viewform"
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
              <Col span={8}>
                <Card
                  style={{ height: "100%" }}
                  bodyStyle={{ height: "100%" }}
                  title="Coding"
                  extra={
                    <a
                      href="https://trello.com/b/SvbIfwUp/coding"
                      target="_blank"
                    >
                      Link
                    </a>
                  }
                >
                  Aktuelles aus dem Coding-Team
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  style={{ height: "100%" }}
                  bodyStyle={{ height: "100%" }}
                  title="Graphics"
                  extra={
                    <a
                      href="https://trello.com/b/ZTx3pdkv/graphics"
                      target="_blank"
                    >
                      Link
                    </a>
                  }
                >
                  Aktuelles aus dem Grafik-Team
                </Card>
              </Col>
              <Col span={8}>
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
              <Col span={8}>
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
                  Eine Datenbank in der die Mitglieder und deren Daten
                  gespeichert werden.
                </Card>
              </Col>
              <Col span={8}>
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
              <Col span={8}>
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
          </Col>
        </Row>
      </ConfigProvider>
    );
  } else {
    return <Start />;
  }
};

export default App;
