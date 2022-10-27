import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/Conjug8.png";

function conjug8(props) {
  return (
    <LayoutSponsors>
      {/* TODO make props for virtual booth image */}
      <VirtualBooth title="Conjug8" boothImage={boothImage} />
    </LayoutSponsors>
  );
}

export default conjug8;
