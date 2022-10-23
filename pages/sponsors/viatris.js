import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Link from "next/link";

// TODO transfer to Header.js
import headerImage from "../../public/header.jpg";
import rehabLogo from "../../public/header.jpg";

// TODO transfer to VirtualBooth.js
import virtualBoothImage from "../../public/virtual_booth_mockup.jpg";

// TODO transfer to SponsorCloud.js
import logoBTL from "../../public/BTL_TECHNICAL_small.png";

// TODO transfer to Footer.js
import { ChevronUpIcon } from "@heroicons/react/24/outline";

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

      <main className="bg-fem-200 lg:min-h-[calc(100vh-18rem)] min-h-[calc(100vh-10rem)] shadow-inner flex items-center justify-center">
        <section className="test max-w-[1000px] my-20 p-4 flex flex-col items-center justify-center">
          {/* TODO transfer component virtual booth */}
          <div className="max-w-screen mx-8 relative ">
            <h1 className="my-2 text-5xl font-semibold text-center">Viatris</h1>
            <Image
              src={virtualBoothImage}
              alt="header"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="text-center text-[0.6rem] text-fem-600/70 my-1">
            Image from{" "}
            <a
              href="https://www.freepik.com/free-psd/exhibition-stand-mock-up-arrangement_15163698.htm#query=booth&position=44&from_view=author"
              className="hover:underline"
            >
              Freepik{" "}
            </a>
          </div>
          <Link href="/contacts">
            <a className="hover:font-semibold duration-300 underline font-medium text-xl mx-auto">
              Register for this booth
            </a>
          </Link>

          <div className="w-full h-[0.05rem] bg-fem-600/10 mx-40 my-8" />

          {/* TODO transfer component Sponsor Cloud */}

          <div className="grid portrait:grid-cols-1 grid-cols-3 gap-4">
            <h2 className="w-full text-6xl font-light col-span-3 text-center">
              Check out our sponsors!
            </h2>
            <Link href="/">
              <a className="group flex flex-col gap-4 bg-neutral-100 px-6 pt-6 pb-4 items-center justify-center rounded-lg shadow-md">
                <div className="max-w-screen overflow-hidden">
                  <Image
                    src={logoBTL}
                    alt="BTL"
                    objectFit="cover"
                    quality={100}
                    className=""
                  />
                </div>
                <h3 className="group-hover:underline duration-300 text-xl">
                  BTL
                </h3>
              </a>
            </Link>
            <Link href="/">
              <a className="group flex flex-col gap-4 bg-neutral-100 px-6 pt-6 pb-4 items-center justify-center rounded-lg shadow-md">
                <div className="max-w-screen overflow-hidden">
                  <Image
                    src={logoBTL}
                    alt="BTL"
                    objectFit="cover"
                    quality={100}
                    className=""
                  />
                </div>
                <h3 className="group-hover:underline duration-300 text-xl">
                  BTL
                </h3>
              </a>
            </Link>
            <Link href="/">
              <a className="group flex flex-col gap-4 bg-neutral-100 px-6 pt-6 pb-4 items-center justify-center rounded-lg shadow-md">
                <div className="max-w-screen overflow-hidden">
                  <Image
                    src={logoBTL}
                    alt="BTL"
                    objectFit="cover"
                    quality={100}
                    className=""
                  />
                </div>
                <h3 className="group-hover:underline duration-300 text-xl">
                  BTL
                </h3>
              </a>
            </Link>
            <Link href="/">
              <a className="group flex flex-col gap-4 bg-neutral-100 px-6 pt-6 pb-4 items-center justify-center rounded-lg shadow-md">
                <div className="max-w-screen overflow-hidden">
                  <Image
                    src={logoBTL}
                    alt="BTL"
                    objectFit="cover"
                    quality={100}
                    className=""
                  />
                </div>
                <h3 className="group-hover:underline duration-300 text-xl">
                  BTL
                </h3>
              </a>
            </Link>
            <Link href="/">
              <a className="group flex flex-col gap-4 bg-neutral-100 px-6 pt-6 pb-4 items-center justify-center rounded-lg shadow-md">
                <div className="max-w-screen overflow-hidden">
                  <Image
                    src={logoBTL}
                    alt="BTL"
                    objectFit="cover"
                    quality={100}
                    className=""
                  />
                </div>
                <h3 className="group-hover:underline duration-300 text-xl">
                  BTL
                </h3>
              </a>
            </Link>
            <Link href="/">
              <a className="group flex flex-col gap-4 bg-neutral-100 px-6 pt-6 pb-4 items-center justify-center rounded-lg shadow-md">
                <div className="max-w-screen overflow-hidden">
                  <Image
                    src={logoBTL}
                    alt="BTL"
                    objectFit="cover"
                    quality={100}
                    className=""
                  />
                </div>
                <h3 className="group-hover:underline duration-300 text-xl">
                  BTL
                </h3>
              </a>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-fem-100 h-28 shadow-xl z-20 py-4 flex items-center justify-between px-8">
        <div className="bg-fem-700/50 rounded-md p-4 flex flex-col items-center">
          <p className="text-fem-600">&copy; 2022 PGH Rehab</p>
          <Link href="/contacts">
            <a className="hover:underline font-medium">Contact Us</a>
          </Link>
        </div>
        {/* TODO make smooth scrolling */}
        <Link href="#top">
          <a className="bg-fem-700/50 rounded-md portrait:hidden">
            <ChevronUpIcon className="w-12 h-12" />
          </a>
        </Link>
      </footer>

      <Navbar />
    </div>
  );
}

viatris.propTypes = {};

export default viatris;
