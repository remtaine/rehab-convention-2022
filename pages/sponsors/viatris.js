import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/Viatris.png";
import Head from "next/head";

function viatris(props) {
  return (
    <LayoutSponsors>
      <Head>
        <title>Viatris | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <VirtualBooth
        title="Viatris"
        boothImage={boothImage}
        link="https://docs.google.com/forms/d/e/1FAIpQLScS9v-MDmnCS9atPpZpq4LITN3JKXSD2ML11aM_BYCaS2wS6Q/viewform?usp=sharing"
      />
    </LayoutSponsors>
  );
}

export default viatris;
