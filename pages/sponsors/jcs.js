import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/JCS.png";
import Head from "next/head";

function jcs(props) {
  return (
    <LayoutSponsors>
      <Head>
        <title>JCS | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <VirtualBooth
        title="JCS"
        boothImage={boothImage}
        link="https://docs.google.com/forms/d/e/1FAIpQLSejCbUznxyYeezaH-eoUs1iP8ro3UvYVBGwChOfv0H8Bd-FGg/viewform?usp=sharing"
        website="https://jcspharmaceuticals.com/"
      />
    </LayoutSponsors>
  );
}

export default jcs;
