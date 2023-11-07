import React from "react";
import {
  Button,
  Card,
  Carousel,
  Col,
  ConfigProvider,
  Row,
  Tooltip,
  theme,
} from "antd";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

const App = ({}) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home children={<Start />} />,
      errorElement: <>error 404</>,
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
      path: "/roster",
      element: <Home children={<Start />} />,
    },
    {
      path: "/login",
      element: <Home children={<Start />} />,
    },
  ]);
  return <RouterProvider router={router} />;
};

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
        <Col span={24} style={{ height: "5vh" }}>
          <NavHeader />
        </Col>
        <Col
          span={24}
          className="scrollbar"
          style={{
            height: "93vh",
            paddingBlock: "0.5rem",
            overflow: "hidden auto",
          }}
        >
          {children}
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export const NavHeader = () => {
  const navigate = useNavigate();
  return (
    <Row justify="space-between" align="middle" gutter={[8, 8]}>
      <Col>
        <img
          src="https://tinyurl.com/2r9d9r97"
          alt="205TH RECON BATTALION"
          style={{ maxHeight: "5vh", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </Col>
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
            <Tooltip placement="bottom" title="Erscheint bald">
              <Button type="text" onClick={() => navigate("/roster")} disabled>
                UNIT ROSTER
              </Button>
            </Tooltip>
          </Col>
        </Row>
      </Col>
      <Col>
        <Button type="primary">ANMELDEN</Button>
      </Col>
    </Row>
  );
};

export const Start = () => {
  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <div
          style={{
            height: "39.3vh",
            backgroundImage: "url('https://tinyurl.com/6yct5yap')",
            backgroundClip: "border-box",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 70%",
            backgroundSize: "cover",
            borderRadius: "8px",
          }}
        />
      </Col>
      <Col md={24} lg={8}>
        <a
          href="https://units.arma3.com/unit/205threconbattalion"
          target="_blank"
          style={{
            display: "block",
            height: "50vh",
            backgroundImage: "url('https://tinyurl.com/2r9d9r97')",
            backgroundClip: "border-box",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />
      </Col>
      <Col md={24} lg={8}>
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
      <Col md={24} lg={8}>
        <a
          href="https://discord.gg/205rb"
          target="_blank"
          style={{
            display: "block",
            height: "15vh",
            backgroundImage: "url('/discord-mark-blue.png')",
            backgroundClip: "border-box",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
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
          <Col>|</Col>
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
            height: "40vh",
            backgroundImage: "url('https://tinyurl.com/4wjrpucc')",
            backgroundClip: "border-box",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 30%",
            backgroundSize: "cover",
            borderRadius: "8px",
          }}
        />
      </Col>
      <Col span={12}>
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
    <Row justify="center" align="middle">
      <Col span={24}>
        <Row gutter={[8, 8]} justify="space-between" align="middle">
          {images.map((link) => {
            return (
              <Col
                key={link}
                span={24}
                style={{
                  backgroundImage: `url(${link})`,
                  backgroundClip: "border-box",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  height: "88vh",
                }}
              />
            );
          })}
        </Row>
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
            height: "40vh",
            backgroundImage: "url('https://tinyurl.com/4ea4pyfc')",
            backgroundClip: "border-box",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 30%",
            backgroundSize: "cover",
            borderRadius: "8px",
          }}
        />
      </Col>
      <Col span={12}>
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

export default App;
