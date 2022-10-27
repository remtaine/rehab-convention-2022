import React from "react";
import LayoutBasic from "../components/layouts/LayoutBasic";
import Link from "next/link";

function tests() {
  return (
    <LayoutBasic>
      <section className="h-fit max-w-[calc(100vw-2rem)] w-fit p-12 shadow bg-fem-300 rounded-xl">
        <h1 className="text-3xl font-bold mb-4 ">Tests</h1>

        <h2 className="">Pre-test</h2>
        <ul className="flex flex-col gap-2">
          <li className="">
            <span className="font-bold">Oct 29: </span>
            <Link href="http://www.pghrehabmed.com" className="">
              <a className="break-words hover:underline">www.pghrehabmed.com</a>
            </Link>
          </li>
          <li className="">
            <span className="font-bold">November 5: </span>
            <Link href="#" className="">
              <a className="break-words hover:underline">
                pghdrm2.secretariat@gmail.com
              </a>
            </Link>
          </li>
        </ul>

        <h2 className="">Post-test</h2>
        <ul className="flex flex-col gap-2">
          <li className="">
            <span className="font-bold">Oct 29: </span>
            <Link href="#" className="">
              <a className="break-words hover:underline">www.pghrehabmed.com</a>
            </Link>
          </li>
          <li className="">
            <span className="font-bold">November 5: </span>
            <Link href="#" className="">
              <a className="break-words hover:underline">
                pghdrm2.secretariat@gmail.com
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </LayoutBasic>
  );
}

export default tests;
