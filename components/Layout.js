import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

function Layout(props) {
  return (
    <div className="w-screen min-h-screen bg-fem-300 selection:bg-fem-600 selection:text-fem-700">
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </div>
  );
}

export default Layout;
