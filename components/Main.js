import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import drugs from "../public/drugs.jpg";

function Main(props) {
  return (
    <main className=" bg-fem-200 h-full w-full flex flex-col justify-center items-center pt-12">
      <div className="bg-fem-200 min-w-0 max-w-[1000px] overflow-hidden shadow-none py-4 border-solid">
        {props.children}
      </div>
    </main>
  );
}

Main.propTypes = {};

export default Main;
