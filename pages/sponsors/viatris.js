import React from "react";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";

import Header from "../../components/Header";
import VirtualBooth from "../../components/VirtualBooth";
import SponsorCloud from "../../components/SponsorCloud";

function viatris(props) {
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="bg-fem-200 lg:min-h-[calc(100vh-18rem)] min-h-[calc(100vh-10rem)] shadow-inner flex items-center justify-center">
        <section className="max-w-[1000px] my-20 p-4 flex flex-col items-center justify-center">
          <VirtualBooth />
          {/* TAKE NOTE THIS IS A DIVIDER!!! */}
          <div className="w-full h-[0.05rem] bg-fem-600/10 mx-40 my-8"></div>
          <SponsorCloud />
        </section>
      </main>
      <Footer />
      <Navbar />
    </div>
  );
}

viatris.propTypes = {};

export default viatris;
