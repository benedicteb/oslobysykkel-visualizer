import React, { ReactNode } from "react";
import Header from "./Header";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <header>
      <Header />
    </header>

    <main style={{ width: "80%", margin: "auto" }}>{children}</main>

    <footer />
  </>
);

export default Layout;
