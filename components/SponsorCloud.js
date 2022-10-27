import React from "react";
import Image from "next/image";
import Link from "next/link";

import SponsorCloudItem from "./SponsorCloudItem";

// import logoBTL from "/public/BTL_TECHNICAL_small.png";
// import logoConjug8 from "/public/Conjug8_MAJOR_Medium.png";
// import logoHiEsai from "/public/Hi Eisai_TECHNICAL_small.png";
// import logoInova from "/public/Inova_MINOR_small.png";
// import logoJCS from "/public/JCS_MINOR_small.png";
// import logoMedichem from "/public/Medichem_TECHNICAL_small.png";
// import logoTaisho from "/public/Taisho_SCITECH_small.png";
// import logoTobie from "/public/Tobie_MINOR_small.png";
// import logoUnilab from "/public/Unilab_ExDeal_small.png";
// import logoViatris from "/public/Viatris_Socials_small.png";

import logoConjug8 from "/public/website sponsor logos/1_Conjug8.png";
import logoViatris from "/public/website sponsor logos/2_Viatris.png";
import logoJCS from "/public/website sponsor logos/3_JCS.png";
import logoInova from "/public/website sponsor logos/4_Inova.png";
import logoTobie from "/public/website sponsor logos/5_Tobie.png";
import logoTaisho from "/public/website sponsor logos/6_Taisho.png";
import logoHiEsai from "/public/website sponsor logos/7_Hi_Esai.png";
import logoBTL from "/public/website sponsor logos/8_BTL.png";
import logoMedichem from "/public/website sponsor logos/9_Medichem.png";
// import logoUnilab from "XXX";

function SponsorCloud() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <h2 className="w-full portrait:text-4xl text-5xl font-semibold col-span-1 sm:col-span-2 lg:col-span-3 text-center">
        Our Sponsors
      </h2>
      <SponsorCloudItem
        logo={logoConjug8}
        title="Conjug8"
        link="/sponsors/conjug8"
      />
      <SponsorCloudItem
        logo={logoViatris}
        title="Viatris"
        link="/sponsors/viatris"
      />
      <SponsorCloudItem logo={logoJCS} title="JCS" link="/sponsors/jcs" />
      <SponsorCloudItem logo={logoInova} title="Inova" link="/sponsors/inova" />
      <SponsorCloudItem logo={logoTobie} title="Tobie" link="/sponsors/tobie" />
      <SponsorCloudItem
        logo={logoTaisho}
        title="Taisho"
        link="/sponsors/taisho"
      />
      <SponsorCloudItem
        logo={logoHiEsai}
        title="Hi Esai"
        link="/sponsors/hiesai"
      />
      <SponsorCloudItem logo={logoBTL} title="BTL" link="/sponsors/btl" />
      <SponsorCloudItem
        logo={logoMedichem}
        title="Medichem"
        link="/sponsors/medichem"
      />
      {/* <SponsorCloudItem
        logo={logoUnilab}
        title="Unilab"
        link="/sponsors/unilab"
      /> */}
    </div>
  );
}

export default SponsorCloud;
