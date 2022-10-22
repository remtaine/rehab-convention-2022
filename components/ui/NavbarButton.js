import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function NavbarButton(props) {
  return (
    <a className="" href={props.linker}>
      <div className=" lg:mx-2 lg:my-0 my-1 lg:-translate-y-[60%] flex flex-col justify-center items-center h-fit w-fit group">
        <div className="bg-fem-200 rounded-full w-16 h-12 lg:h-16 flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 duration-300">
          {props.children}
        </div>
        <h2 className="text-fem-600 text-lg font-medium font-int hidden lg:block">
          {props.title}
        </h2>
      </div>
    </a>
  );
}

NavbarButton.propTypes = { linker: PropTypes.string };
NavbarButton.defaultProps = { linker: "/" };

export default NavbarButton;
