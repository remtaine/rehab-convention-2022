import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/Taisho.png";

function taisho(props) {
  return (
    <LayoutSponsors>
      {/* TODO make props for virtual booth image */}
      <VirtualBooth
        title="Taisho"
        boothImage={boothImage}
        link="https://docs.google.com/forms/d/e/1FAIpQLSdMMORObtR58JaQ4ZR42MNrg0O_hh3Iv51SJ0ZDPhKOEIqvuQ/viewform?usp=sharing"
      />
    </LayoutSponsors>
  );
}

export default taisho;
