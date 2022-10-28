import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/Conjug8.png";
import Head from "next/head";

function conjug8(props) {
  return (
    <LayoutSponsors>
      <Head>
        <title>Conjug8 | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <VirtualBooth
        title="Conjug8"
        boothImage={boothImage}
        link="https://docs.google.com/forms/d/e/1FAIpQLSeTxoqjpFRaW9Awjp4brUKbKM0qciRnKPN2qNs5uGBhmUBgLQ/viewform?usp=sharing"
        website="https://conjug8.ph/"
      />
    </LayoutSponsors>
  );
}

export default conjug8;
