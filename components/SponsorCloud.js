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
      <h2 className="w-full portrait:text-3xl text-6xl font-light landscape:col-span-3 text-center">
        Our Sponsors
      </h2>
      <SponsorCloudItem logo={logoBTL} title="BTL" link="btl" />
      <SponsorCloudItem logo={logoConjug8} title="Conjug8" link="conjug8" />
      <SponsorCloudItem logo={logoHiEsai} title="Hi Esai" link="hiesai" />
      <SponsorCloudItem logo={logoInova} title="Inova" link="inova" />
      <SponsorCloudItem logo={logoJCS} title="JCS" link="jcs" />
      <SponsorCloudItem logo={logoMedichem} title="Medichem" link="medichem" />
      <SponsorCloudItem logo={logoTaisho} title="Taisho" link="taisho" />
      <SponsorCloudItem logo={logoTobie} title="Tobie" link="tobie" />
      <SponsorCloudItem logo={logoUnilab} title="Unilab" link="unilab" />
      <SponsorCloudItem logo={logoViatris} title="Viatris" link="viatris" />
    </div>
  );
}

export default SponsorCloud;
