import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/JCS.png";

function jcs(props) {
  return (
    <LayoutSponsors>
      {/* TODO make props for virtual booth image */}
      <VirtualBooth title="JCS" boothImage={boothImage} />
    </LayoutSponsors>
  );
}

export default jcs;
