import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/Tobie.png";

function tobie(props) {
  return (
    <LayoutSponsors>
      {/* TODO make props for virtual booth image */}
      <VirtualBooth
        title="Tobie"
        boothImage={boothImage}
        link="https://docs.google.com/forms/d/e/1FAIpQLSeR6vxJ6xsl6Ri1dNNjYAEnzPn70qZW7nCb9kvaGbiXTGAk0w/viewform?usp=sharing"
      />
    </LayoutSponsors>
  );
}

export default tobie;
