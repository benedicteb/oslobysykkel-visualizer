import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <header />

    <main>{children}</main>

    <footer />
  </>
);

export default Layout;
