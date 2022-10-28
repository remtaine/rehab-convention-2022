import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/Taisho.png";
import Head from "next/head";

function taisho(props) {
  return (
    <LayoutSponsors>
      <Head>
        <title>Taisho | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <VirtualBooth
        title="Taisho"
        boothImage={boothImage}
        link="https://docs.google.com/forms/d/e/1FAIpQLSdMMORObtR58JaQ4ZR42MNrg0O_hh3Iv51SJ0ZDPhKOEIqvuQ/viewform?usp=sharing"
        website="https://www.taisho.co.jp/global/our_products/"
      />
    </LayoutSponsors>
  );
}

export default taisho;
