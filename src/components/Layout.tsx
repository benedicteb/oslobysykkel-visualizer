import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <header />

    <main style={{ width: "80%", margin: "auto" }}>{children}</main>

    <footer />
  </>
);

export default Layout;
