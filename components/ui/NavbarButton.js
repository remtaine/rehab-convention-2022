import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function NavbarButton(props) {
  return (
    <Link href={props.link}>
      <a
        target={props.target}
        className="landscape:mx-2 landscape:my-0 my-1 landscape:-translate-y-[55%] flex flex-row-reverse landscape:flex-col justify-center items-center h-fit w-fit group portrait:gap-2"
      >
        <div className="bg-fem-200 rounded-full w-16 h-12 landscape:h-16 flex items-center justify-center border-solid border-fem-100/10 border-2 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 duration-300">
          {props.children}
        </div>
        <h2
          className={
            "text-fem-600 text-lg font-medium block portrait:bg-fem-300 portrait:rounded portrait:px-1 duration-200 delay-[350ms]" +
            " " +
            (props.isActivated ? "portrait:opacity-100" : "portrait:opacity-0")
          }
        >
          {props.title}
        </h2>
      </a>
    </Link>
  );
}

NavbarButton.propTypes = {
  link: PropTypes.string,
  isNewTab: PropTypes.bool,
  target: PropTypes.string,
  isActivated: PropTypes.bool,
};
NavbarButton.defaultProps = {
  link: "/",
  isNewTab: false,
  target: "_self",
  isActivated: true,
};

export default NavbarButton;
