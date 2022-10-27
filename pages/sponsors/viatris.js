import React from "react";
import LayoutSponsors from "../../components/layouts/LayoutSponsors";
import VirtualBooth from "../../components/VirtualBooth";

function viatris(props) {
  return (
    <LayoutSponsors>
      {/* TODO make props for virtual booth image */}
      <VirtualBooth
        title="Viatris"
        link="https://docs.google.com/forms/d/e/1FAIpQLScS9v-MDmnCS9atPpZpq4LITN3JKXSD2ML11aM_BYCaS2wS6Q/viewform?usp=sharing"
      />
    </LayoutSponsors>
  );
}

export default viatris;
