import React from "react";
import { Col, Row } from "antd";

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
