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
      <VirtualBooth
        title="Medichem"
        boothImage={boothImage}
        link="https://docs.google.com/forms/d/e/1FAIpQLSfpmepdJxM5DKCGIEo5x5mvECNClH_xb0mv5VhkI_3YlVFBig/viewform?usp=sharing"
        website="https://www.unilab.com.ph/our-subsidiaries"
      />
    </LayoutSponsors>
  );
}

export default medichem;
