import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
