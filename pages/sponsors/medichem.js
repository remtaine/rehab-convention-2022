import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/Medichem.png";
import Head from "next/head";

function medichem(props) {
  return (
    <LayoutSponsors>
      <Head>
        <title>Medichem | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <VirtualBooth title="Medichem" boothImage={boothImage} link="#" />
    </LayoutSponsors>
  );
}

export default medichem;
