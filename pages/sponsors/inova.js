import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";
import boothImage from "/public/booths/Inova.png";

function inova(props) {
  return (
    <LayoutSponsors>
      {/* TODO make props for virtual booth image */}
      <VirtualBooth
        title="Inova"
        boothImage={boothImage}
        link="https://docs.google.com/forms/d/e/1FAIpQLSdp1eqQD_Um9vRXeRqHZhWuY0MQoayT5XXZavh3YTsh_KUWdw/viewform?usp=sharing"
      />
    </LayoutSponsors>
  );
}

export default inova;
