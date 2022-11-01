import React from "react";
import Head from "next/head";
import LayoutWebinars from "../../components/layouts/LayoutWebinars";

function webinars(props) {
  return (
    <div className="">
      <Head>
        <title>Webinars | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <LayoutWebinars />
    </div>
  );
}

export default webinars;
