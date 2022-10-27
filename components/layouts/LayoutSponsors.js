import React from "react";
import SponsorCloud from "../../components/SponsorCloud";
import LayoutBasic from "./LayoutBasic";
import Image from "next/image";
import sponsorPoster from "/public/Post Grad Program Poster.png";

function LayoutSponsors(props) {
  return (
    <LayoutBasic>
      {props.children}
      <SponsorCloud />
      <div className="my-8"></div>
      <Image
        src={sponsorPoster}
        alt={"Sponsors Poster"}
        layout="intrinsic"
        // objectFit="contain"
        quality={100}
      />
    </LayoutBasic>
  );
}

export default LayoutSponsors;
