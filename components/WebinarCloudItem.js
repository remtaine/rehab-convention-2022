import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import logoBTL from "/public/BTL_TECHNICAL_small.png";

function CloudItem(props) {
  return (
    <Link href={props.link}>
      <a className="">
        <div className="group shadow-md rounded-lg hover:shadow-lg duration-300">
          <Image
            src={props.logo}
            alt={props.title}
            // layout="intrinsic"
            objectFit="contain"
            quality={100}
            className=" group-hover:scale-110 duration-300 rounded-tl-lg rounded-tr-lg "
          />
          <h3 className="p-2 text-center group-hover:underline duration-300 text-2xl text-ellipsis whitespace-nowrap overflow-hidden">
            {props.title}
          </h3>
        </div>
      </a>
    </Link>
  );
}

CloudItem.defaultProps = { logo: logoBTL, title: "BTL", link: "/" };

export default CloudItem;
