import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/Medichem.png";

function medichem(props) {
  return (
    <LayoutSponsors>
      {/* TODO make props for virtual booth image */}
      <VirtualBooth title="Medichem" boothImage={boothImage} />
    </LayoutSponsors>
  );
}

export default medichem;
