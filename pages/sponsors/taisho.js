import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/Taisho.png";

function taisho(props) {
  return (
    <LayoutSponsors>
      {/* TODO make props for virtual booth image */}
      <VirtualBooth title="Taisho" boothImage={boothImage} />
    </LayoutSponsors>
  );
}

export default taisho;
