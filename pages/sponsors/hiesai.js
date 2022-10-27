import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/Hi_Eisai.png";
import Head from "next/head";

function hiEsai(props) {
  return (
    <LayoutSponsors>
      {/* TODO make props for virtual booth image */}
      <Head>
        <title>Hi Eisai | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <VirtualBooth
        title="Hi Eisai"
        boothImage={boothImage}
        link="https://docs.google.com/forms/d/e/1FAIpQLSdCaU3JS2kjWhjw4TlicEsbxJ86OSVRetp7BITSnzMi-QrCjw/viewform?usp=sharing"
      />
    </LayoutSponsors>
  );
}

export default hiEsai;
