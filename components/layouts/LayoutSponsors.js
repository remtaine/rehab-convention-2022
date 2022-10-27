import React from "react";
import SponsorCloud from "../../components/SponsorCloud";
import LayoutBasic from "./LayoutBasic";

function LayoutSponsors(props) {
  return (
    <LayoutBasic>
      {props.children}
      <SponsorCloud />
    </LayoutBasic>
  );
}

export default LayoutSponsors;
