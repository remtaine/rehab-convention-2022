import React from "react";
import LayoutBasic from "../components/layouts/LayoutBasic";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import circles from "/public/circles.png";

function contacts() {
  return (
    <LayoutBasic>
      <Head>
        <title>Contact Details | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="w-full portrait:text-4xl text-5xl font-semibold text-center uppercase">
        Contact Details
      </h1>
      <div className="flex justify-center">
        <Image
          src={circles}
          alt={"Traffic lights"}
          layout="fixed"
          width="150px"
          height="90px"
          // objectFit="contain"
          quality={100}
          className="mx-auto"
        />
      </div>
      <section className="h-fit max-w-[calc(100vw-2rem)] w-fit px-12 py-6 shadow bg-fem-300 rounded-xl mt-6">
        <ul className="flex flex-col gap-1">
          <li className="">
            <span className="font-bold">Website: </span>
            <Link href="http://www.pghrehabmed.com" className="">
              <a className="break-words hover:underline">www.pghrehabmed.com</a>
            </Link>
          </li>
          <li className="">
            <span className="font-bold">Email: </span>
            <Link href="mailto:pghdrm2.secretariat@gmail.com" className="">
              <a className="break-words hover:underline">
                pghdrm2.secretariat@gmail.com
              </a>
            </Link>
          </li>
          <li className="">
            <span className="font-bold">Facebook: </span>
            <Link href="https://www.facebook.com/PGHRehabMed" className="">
              <a className="break-words hover:underline">
                facebook.com/PGHRehabMed
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </LayoutBasic>
  );
}

export default contacts;
