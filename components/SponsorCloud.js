import React from "react";
import Image from "next/image";
import Link from "next/link";

import SponsorCloudItem from "./SponsorCloudItem";

import logoBTL from "/public/BTL_TECHNICAL_small.png";
import logoConjug8 from "/public/Conjug8_MAJOR_Medium.png";
import logoHiEsai from "/public/Hi Eisai_TECHNICAL_small.png";
import logoInova from "/public/Inova_MINOR_small.png";
import logoJCS from "/public/JCS_MINOR_small.png";
import logoMedichem from "/public/Medichem_TECHNICAL_small.png";
import logoTaisho from "/public/Taisho_SCITECH_small.png";
import logoTobie from "/public/Tobie_MINOR_small.png";
import logoUnilab from "/public/Unilab_ExDeal_small.png";
import logoViatris from "/public/Viatris_Socials_small.png";

function SponsorCloud() {
  return (
    <div className="grid portrait:grid-cols-1 grid-cols-3 gap-4">
      <h2 className="w-full portrait:text-4xl text-5xl font-semibold landscape:col-span-3 text-center">
        Our Sponsors
      </h2>
      <SponsorCloudItem logo={logoBTL} title="BTL" link="/sponsors/btl" />
      <SponsorCloudItem
        logo={logoConjug8}
        title="Conjug8"
        link="/sponsors/conjug8"
      />
      <SponsorCloudItem
        logo={logoHiEsai}
        title="Hi Esai"
        link="/sponsors/hiesai"
      />
      <SponsorCloudItem logo={logoInova} title="Inova" link="/sponsors/inova" />
      <SponsorCloudItem logo={logoJCS} title="JCS" link="/sponsors/jcs" />
      <SponsorCloudItem
        logo={logoMedichem}
        title="Medichem"
        link="/sponsors/medichem"
      />
      <SponsorCloudItem
        logo={logoTaisho}
        title="Taisho"
        link="/sponsors/taisho"
      />
      <SponsorCloudItem logo={logoTobie} title="Tobie" link="/sponsors/tobie" />
      <SponsorCloudItem
        logo={logoUnilab}
        title="Unilab"
        link="/sponsors/unilab"
      />
      <SponsorCloudItem
        logo={logoViatris}
        title="Viatris"
        link="/sponsors/viatris"
      />
    </div>
  );
}

export default SponsorCloud;
