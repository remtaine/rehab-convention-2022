import React from "react";
import Image from "next/image";
import Link from "next/link";

import CloudItem from "./CloudItem";

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

import circles from "/public/circles.png";
// import logoUnilab from "XXX";

function SponsorCloud() {
  return (
    <div className="">
      <h2 className="w-full portrait:text-4xl text-5xl font-semibold text-center uppercase">
        The Dream Team Sponsors
      </h2>
      <h3 className=" py-1 px-2 w-full portrait:text-lg text-xl text-center max-w-fit mx-auto">
        Thank you for helping us make this event a success!
      </h3>
      <div className="flex justify-center">
        <Image
          src={circles}
          alt={"Traffic lights"}
          layout="fixed"
          width="150px"
          height="90px"
          // objectFit="contain"
          quality={100}
          className="mx-auto"
        />
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
        <CloudItem
          logo={logoConjug8}
          title="Conjug8"
          link="/sponsors/conjug8"
        />

        <CloudItem logo={logoJCS} title="JCS" link="/sponsors/jcs" />
        <CloudItem logo={logoInova} title="Inova" link="/sponsors/inova" />
        <CloudItem logo={logoTobie} title="Tobie" link="/sponsors/tobie" />
        <CloudItem
          logo={logoViatris}
          title="Viatris"
          link="/sponsors/viatris"
        />
        <CloudItem logo={logoTaisho} title="Taisho" link="/sponsors/taisho" />
        <CloudItem
          logo={logoHiEsai}
          title="Hi Eisai"
          link="/sponsors/hieisai"
        />
        <CloudItem logo={logoBTL} title="BTL" link="/sponsors/btl" />
        <CloudItem
          logo={logoMedichem}
          title="Medichem"
          link="/sponsors/medichem"
        />
      </section>
      {/* <CloudItem
        logo={logoUnilab}
        title="Unilab"
        link="/sponsors/unilab"
      /> */}
    </div>
  );
}

export default SponsorCloud;
