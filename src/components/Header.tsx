import React from "react";

const Header = () => (
  <div style={{ backgroundColor: "#063258" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        width: "80%",
        margin: "auto",
      }}
    >
      <h1>
        <a style={{ textDecoration: "none" }} href={"/"}>
          oslobysykkel-viz
        </a>
      </h1>

      <nav>
        <a href={"/"}>Søk</a>

        <a href={"/all-stations"}>Alle stasjoner</a>

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
