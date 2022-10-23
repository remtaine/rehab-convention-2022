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
        <section className="max-w-[1000px] my-20 p-4 flex flex-col items-center justify-center">
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
            <a className="font-semibold duration-300 hover:underline font-medium text-xl mx-auto">
              Register for this booth
            </a>
          </Link>

          <div className="w-full h-[0.05rem] bg-fem-600/10 mx-40 my-8" />

          {/* TODO transfer component Sponsor Cloud */}

          <div className="grid portrait:grid-cols-1 grid-cols-3 gap-4">
            <h2 className="w-full portrait:text-3xl text-6xl font-light landscape:col-span-3 text-center">
              Our Sponsors
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
      <Footer />
      <Navbar />
    </div>
  );
}

viatris.propTypes = {};

export default viatris;
