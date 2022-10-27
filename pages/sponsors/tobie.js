import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/Tobie.png";

function tobie(props) {
  return (
    <LayoutSponsors>
      {/* TODO make props for virtual booth image */}
      <VirtualBooth title="Tobie" boothImage={boothImage} />
    </LayoutSponsors>
  );
}

export default tobie;
