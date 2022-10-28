import React from "react";
import LayoutBasic from "/components/layouts/LayoutBasic";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import circles from "/public/circles.png";
function tests() {
  return (
    <LayoutBasic>
      <Head>
        <title>Tests | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-5xl font-bold uppercase ">Tests</h1>
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
        {/* <h2 className="text-xl font-bold my-2">October 29</h2> */}
        <ul className="flex flex-col gap-1">
          <li className="">
            <span className="font-bold">Pre-test: </span>
            <Link href="https://forms.gle/ExV5HAzntnbbAqRY9" className="">
              <a className="break-words hover:underline">
                https://forms.gle/L1kWJ71GVCYPHaUt9
              </a>
            </Link>
          </li>
          <li className="">
            <span className="font-bold">Post-test: </span>
            <Link href="#" className="">
              <a className="break-words hover:underline">TBA</a>
            </Link>
          </li>
        </ul>

        {/* <h2 className="text-xl mt-6 mb-2 font-bold">November 5</h2>
        <ul className="flex flex-col gap-1">
          <li className="">
            <span className="font-bold">Pre-test: </span>
            <Link href="#" className="">
              <a className="break-words hover:underline">TBA</a>
            </Link>
          </li>
          <li className="">
            <span className="font-bold">Post-test: </span>
            <Link href="#" className="">
              <a className="break-words hover:underline">TBA</a>
            </Link>
          </li>
        </ul> */}
      </section>
    </LayoutBasic>
  );
}

export default tests;
