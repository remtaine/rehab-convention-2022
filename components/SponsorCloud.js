import React from "react";
import Image from "next/image";
import Link from "next/link";

import logoBTL from "/public/BTL_TECHNICAL_small.png";
import SponsorCloudItem from "./SponsorCloudItem";

function SponsorCloud() {
  return (
    <div className="grid portrait:grid-cols-1 grid-cols-3 gap-4">
      <h2 className="w-full portrait:text-3xl text-6xl font-light landscape:col-span-3 text-center">
        Our Sponsors
      </h2>
      <SponsorCloudItem />
      <SponsorCloudItem />
      <SponsorCloudItem />
      <SponsorCloudItem />
      <SponsorCloudItem />
      <SponsorCloudItem />
      <SponsorCloudItem />
      <SponsorCloudItem />
      <SponsorCloudItem />
      <SponsorCloudItem />
    </div>
  );
}

export default SponsorCloud;
