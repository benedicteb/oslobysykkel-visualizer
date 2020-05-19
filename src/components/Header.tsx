import React from "react";

const Header = () => (
  <div style={{ backgroundColor: "#063258" }}>
    <div
      className={"center"}
      style={{
        width: "80%",
        margin: "auto",

        padding: "10px 0",
      }}
    >
      <h1>
        <a style={{ textDecoration: "none" }} href={"/"}>
          Ledig bysykkel?
        </a>
      </h1>

      <nav>
        <a href={"/"}>Søk</a>

        <a href={"/all-stations"}>Alle stasjoner</a>

        <a href={"/station-map"}>Kart</a>

        <a
          href={"https://github.com/benedicteb/oslobysykkel-visualizer"}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Kode
        </a>
      </nav>
    </div>
  </div>
);

export default Header;
