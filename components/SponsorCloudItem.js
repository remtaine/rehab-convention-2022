import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import logoBTL from "/public/BTL_TECHNICAL_small.png";

function SponsorCloudItem(props) {
  return (
    <Link href={props.link}>
      <a className="">
        {/* <div className=""> */}
        <Image
          src={props.logo}
          alt={props.title}
          // layout="intrinsic"
          objectFit="contain"
          quality={100}
          className=" hover:scale-110 duration-300  "
        />
        {/* </div> */}
        {/* <h3 className="group-hover:underline duration-300 text-3xl">
          {props.title}
        </h3> */}
      </a>
    </Link>
  );
}

SponsorCloudItem.defaultProps = { logo: logoBTL, title: "BTL", link: "/" };

export default SponsorCloudItem;
