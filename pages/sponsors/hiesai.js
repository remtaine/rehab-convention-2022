import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/Hi_Eisai.png";

function hiEsai(props) {
  return (
    <LayoutSponsors>
      {/* TODO make props for virtual booth image */}
      <VirtualBooth title="Hi Esai" boothImage={boothImage} />
    </LayoutSponsors>
  );
}

export default hiEsai;
