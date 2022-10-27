import React from "react";
import Head from "next/head";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";

function sponsors(props) {
  return (
    <div className="">
      <Head>
        <title>Our Sponsors | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <LayoutSponsors />
    </div>
  );
}

export default sponsors;
