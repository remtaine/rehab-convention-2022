import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/Tobie.png";
import Head from "next/head";

function tobie(props) {
  return (
    <LayoutSponsors>
      <Head>
        <title>Tobie | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <VirtualBooth
        title="Tobie"
        boothImage={boothImage}
        link="https://docs.google.com/forms/d/e/1FAIpQLSeR6vxJ6xsl6Ri1dNNjYAEnzPn70qZW7nCb9kvaGbiXTGAk0w/viewform?usp=sharing"
        website="https://www.facebook.com/tobiepharma"
      />
    </LayoutSponsors>
  );
}

export default tobie;
