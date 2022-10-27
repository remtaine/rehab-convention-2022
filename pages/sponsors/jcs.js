import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/JCS.png";

function jcs(props) {
  return (
    <LayoutSponsors>
      {/* TODO make props for virtual booth image */}
      <VirtualBooth
        title="JCS"
        boothImage={boothImage}
        link="https://docs.google.com/forms/d/e/1FAIpQLSejCbUznxyYeezaH-eoUs1iP8ro3UvYVBGwChOfv0H8Bd-FGg/viewform?usp=sharing"
      />
    </LayoutSponsors>
  );
}

export default jcs;
