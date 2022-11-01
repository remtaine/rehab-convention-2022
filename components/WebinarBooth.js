import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

import virtualBoothImage from "/public/virtual_booth_mockup.jpg";

function WebinarBooth(props) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="mx-8 relative w-full">
        {props.children}
        <h1 className="mt-6 text-3xl font-semibold text-center">
          {props.title}
        </h1>
      </div>

      {/* TAKE NOTE THIS IS A DIVIDER!!! */}
      <div className="w-full h-[0.05rem] bg-fem-600/10 md:mx-40 my-8"></div>
    </div>
  );
}

WebinarBooth.PropTypes = {
  title: PropTypes.string,
};

WebinarBooth.defaultProps = {
  title: "Viatris",
};

export default WebinarBooth;
