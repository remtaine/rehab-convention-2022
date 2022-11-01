import React from "react";
import Head from "next/head";
import LayoutWebinars from "/components/layouts/LayoutWebinars";
import WebinarBooth from "/components/WebinarBooth";

function Webinar(props) {
  return (
    <LayoutWebinars>
      <Head>
        <title>{props.title} | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <WebinarBooth title={props.title}>
        <iframe
          src={props.link}
          allow="autoplay"
          className="w-full aspect-video"
        ></iframe>
      </WebinarBooth>
    </LayoutWebinars>
  );
}

export default Webinar;
