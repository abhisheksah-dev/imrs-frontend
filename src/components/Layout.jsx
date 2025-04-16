// src/components/Layout.js
import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, setLoading }) => {
  return (
    <>
      <Header setLoading={setLoading} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
