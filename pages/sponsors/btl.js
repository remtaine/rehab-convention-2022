import React from "react";
import Head from "next/head";
import LayoutSponsors from "/components/layouts/LayoutSponsors";
import VirtualBooth from "/components/VirtualBooth";
import boothImage from "/public/booths/BTL.png";

function btl(props) {
  return (
    <LayoutSponsors>
      <Head>
        <title>BTL | 22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <VirtualBooth
        title="BTL"
        boothImage={boothImage}
        link="https://docs.google.com/forms/d/e/1FAIpQLSdEK9AAWfCjrroVNAPLaNl8psdkzamMUl_zMrpblBYLD9bPRQ/viewform?usp=sharing"
      />
    </LayoutSponsors>
  );
}

export default btl;
