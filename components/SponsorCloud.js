import React from "react";
import Image from "next/image";
import drugs from "../public/drugs.jpg";

function SponsorCloud() {
  return (
    <div className="">
      <div className="mx-auto max-w-full py-12 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-xl font-semibold text-gray-600">
          Check out our other sponsors!
        </p>
        <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8">
          <a
            href="#"
            className="group shadow-sm rounded-md col-span-1 flex flex-col justify-center items-center bg-fem-700 px-4 pt-4"
          >
            <Image
              src={drugs}
              alt="drugs"
              className="group-hover:scale-110 duration-400"
            />
            <h2 className="my-1 mb-2 text-2xl group-hover:underline">Drugs</h2>
          </a>
          <a
            href="#"
            className="group shadow-sm rounded-md col-span-1 flex flex-col justify-center items-center bg-fem-700 px-4 pt-4"
          >
            <Image
              src={drugs}
              alt="drugs"
              className="group-hover:scale-110 duration-400"
            />
            <h2 className="my-1 mb-2 text-2xl group-hover:underline">Drugs</h2>
          </a>
          <a
            href="#"
            className="group shadow-sm rounded-md col-span-1 flex flex-col justify-center items-center bg-fem-700 px-4 pt-4"
          >
            <Image
              src={drugs}
              alt="drugs"
              className="group-hover:scale-110 duration-400"
            />
            <h2 className="my-1 mb-2 text-2xl group-hover:underline">Drugs</h2>
          </a>
          <a
            href="#"
            className="group shadow-sm rounded-md col-span-1 flex flex-col justify-center items-center bg-fem-700 px-4 pt-4"
          >
            <Image
              src={drugs}
              alt="drugs"
              className="group-hover:scale-110 duration-400"
            />
            <h2 className="my-1 mb-2 text-2xl group-hover:underline">Drugs</h2>
          </a>
          <a
            href="#"
            className="group shadow-sm rounded-md col-span-1 flex flex-col justify-center items-center bg-fem-700 px-4 pt-4"
          >
            <Image
              src={drugs}
              alt="drugs"
              className="group-hover:scale-110 duration-400"
            />
            <h2 className="my-1 mb-2 text-2xl group-hover:underline">Drugs</h2>
          </a>
          <a
            href="#"
            className="group shadow-sm rounded-md col-span-1 flex flex-col justify-center items-center bg-fem-700 px-4 pt-4"
          >
            <Image
              src={drugs}
              alt="drugs"
              className="group-hover:scale-110 duration-400"
            />
            <h2 className="my-1 mb-2 text-2xl group-hover:underline">Drugs</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SponsorCloud;
