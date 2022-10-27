import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/Inova.png";
import Head from "next/head";

function inova(props) {
  return (
    <LayoutSponsors>
      <Head>
        <title>Inova | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <VirtualBooth
        title="Inova"
        boothImage={boothImage}
        link="https://docs.google.com/forms/d/e/1FAIpQLSdp1eqQD_Um9vRXeRqHZhWuY0MQoayT5XXZavh3YTsh_KUWdw/viewform?usp=sharing"
      />
    </LayoutSponsors>
  );
}

export default inova;
