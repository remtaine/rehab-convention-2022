import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

import virtualBoothImage from "/public/virtual_booth_mockup.jpg";

function VirtualBooth(props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-screen mx-8 relative ">
        <h1 className="my-2 text-5xl font-semibold text-center">
          {props.title}
        </h1>
        <Image
          src={props.boothImage}
          alt="LOADING"
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
      <Link href={props.link}>
        <a
          target="_blank"
          className="font-semibold duration-300 text-xl mx-auto bg-fem-300 mt-2 p-2 shadow-md hover:shadow-lg hover:-translate-y-1 rounded"
        >
          Register for this booth
        </a>
      </Link>
      {/* TAKE NOTE THIS IS A DIVIDER!!! */}
      <div className="w-full h-[0.05rem] bg-fem-600/10 md:mx-40 my-8"></div>
    </div>
  );
}

VirtualBooth.defaultProps = {
  title: "Viatris",
  boothImage: virtualBoothImage,
  link: "#",
};

export default VirtualBooth;
