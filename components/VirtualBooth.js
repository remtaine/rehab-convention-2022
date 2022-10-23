import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

import virtualBoothImage from "/public/virtual_booth_mockup.jpg";

function VirtualBooth(props) {
  return (
    <div className="flex flex-col items-center justify-center">
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
        <a className="font-semibold duration-300 hover:underline text-xl mx-auto">
          Register for this booth
        </a>
      </Link>
    </div>
  );
}

VirtualBooth.propTypes = {};

export default VirtualBooth;
