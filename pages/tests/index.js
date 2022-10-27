import React from "react";
import LayoutBasic from "/components/layouts/LayoutBasic";
import Link from "next/link";
import Head from "next/head";

function tests() {
  return (
    <LayoutBasic>
      <Head>
        <title>Tests | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="h-fit max-w-[calc(100vw-2rem)] w-fit p-12 shadow bg-fem-300 rounded-xl">
        <h1 className="text-3xl font-bold mb-4 ">Tests</h1>

        <h2 className="text-xl font-bold my-2">October 29</h2>
        <ul className="flex flex-col gap-2">
          <li className="">
            <span className="font-bold">pre-test: </span>
            <Link href="https://forms.gle/L1kWJ71GVCYPHaUt9" className="">
              <a className="break-words hover:underline">
                https://forms.gle/L1kWJ71GVCYPHaUt9
              </a>
            </Link>
          </li>
          <li className="">
            <span className="font-bold">post-test: </span>
            <Link href="#" className="">
              <a className="break-words hover:underline">TBA</a>
            </Link>
          </li>
        </ul>

        <h2 className="text-xl mt-6 mb-2 font-bold">November 5</h2>
        <ul className="flex flex-col gap-2">
          <li className="">
            <span className="font-bold">pre-test: </span>
            <Link href="#" className="">
              <a className="break-words hover:underline">TBA</a>
            </Link>
          </li>
          <li className="">
            <span className="font-bold">pre-test: </span>
            <Link href="#" className="">
              <a className="break-words hover:underline">TBA</a>
            </Link>
          </li>
        </ul>
      </section>
    </LayoutBasic>
  );
}

export default tests;
