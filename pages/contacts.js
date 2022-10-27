import React from "react";
import LayoutBasic from "../components/layouts/LayoutBasic";
import Link from "next/link";
import Head from "next/head";

function contacts() {
  return (
    <LayoutBasic>
      <Head>
        <title>Contact Details | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="h-fit max-w-[calc(100vw-2rem)] w-fit p-12 shadow bg-fem-300 rounded-xl">
        <h1 className="text-3xl font-bold mb-4 ">Contact Details</h1>
        <ul className="flex flex-col gap-2">
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
            <Link href="facebook.com/PGHRehabMed" className="">
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
