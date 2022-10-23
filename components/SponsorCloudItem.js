import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import logoBTL from "/public/BTL_TECHNICAL_small.png";

function SponsorCloudItem(props) {
  return (
    <Link href="/">
      <a className="group flex flex-col gap-4 bg-neutral-100 px-6 pt-6 pb-4 items-center justify-center rounded-lg shadow-md">
        <div className="max-w-screen overflow-hidden">
          <Image
            src={props.logo}
            alt={props.title}
            objectFit="cover"
            quality={100}
            className=""
          />
        </div>
        <h3 className="group-hover:underline duration-300 text-xl">
          {props.title}
        </h3>
      </a>
    </Link>
  );
}

SponsorCloudItem.defaultProps = { logo: logoBTL, title: "BTL" };

export default SponsorCloudItem;
