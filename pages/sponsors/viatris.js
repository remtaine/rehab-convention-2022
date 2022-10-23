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
    <div className="min-h-screen ">
      <header id="top" className="w-full overflow-hidden relative z-20">
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

      <main className="bg-fem-200 lg:h-[calc(100vh-18rem)] h-[calc(100vh-10rem)] shadow-inner flex items-center justify-center">
        <section className="max-w-[1000px]">
          Virtual Booth
          <div className="">
            Image by{" "}
            <a href="https://www.freepik.com/free-psd/exhibition-stand-mock-up-arrangement_15163698.htm#query=booth&position=44&from_view=author">
              Freepik{" "}
            </a>
          </div>
          <hr className="border-1 border-fem-300 my-20 mx-6" />
          Sponsor Cloud
        </section>
      </main>

      <footer className="bg-fem-100 h-28 shadow-xl z-20 py-4 flex items-center justify-between px-8">
        <div className="">
          <p className="text-fem-600">&copy; 2022 PGH Rehab</p>
          <Link href="/contacts">
            <a className="hover:underline">Contact Us</a>
          </Link>
        </div>
        <Link href="#top">
          <a className="bg-fem-700/50 rounded-md">
            <ChevronUpIcon className="w-12 h-12" />
          </a>
        </Link>
      </footer>
      {/* <Footer /> */}
      <Navbar />
    </div>
  );
}

viatris.propTypes = {};

export default viatris;
