import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import headerImage from "../../public/header.jpg";
import rehabLogo from "../../public/header.jpg";
import fbImage from "../../public/facebook-f.svg";
import { EnvelopeIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function viatris(props) {
  return (
    <div className="min-h-screen">
      <header id="top" className="w-full overflow-hidden relative z-20 ">
        <div className="lg:block hidden h-80 ">
          <Image
            src={headerImage}
            alt="header"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="lg:block hidden"
          />
        </div>
        <div className="lg:hidden h-12 bg-fem-700">
          {/* <Image
            src={headerImage}
            alt="header"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="lg:block hidden"
          /> */}
        </div>
      </header>
      <main className="bg-fem-200 lg:h-[calc(100vh-18rem)] h-[calc(100vh-10rem)] shadow-inner">
        Main
      </main>
      <footer className="bg-fem-100 h-28 shadow-xl z-20 p-4 flex items-center justify-between">
        <div className="">
          <p className="text-fem-600">&copy; 2022 PGH Rehab</p>
        </div>
        <button className="">
          <ChevronUpIcon className="w-10 h-10" />
        </button>
      </footer>
      {/* <Footer /> */}
      <Navbar />
    </div>
  );
}

viatris.propTypes = {};

export default viatris;
