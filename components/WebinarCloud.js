import React from "react";
import Image from "next/image";
import Link from "next/link";

import WebinarCloudItem from "./WebinarCloudItem";

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

import webinar01 from "/public/webinar thumbnails/webinar01.png";
import webinar02 from "/public/webinar thumbnails/webinar02.png";
import webinar03 from "/public/webinar thumbnails/webinar03.png";
import webinar04 from "/public/webinar thumbnails/webinar04.png";
import webinar05 from "/public/webinar thumbnails/webinar05.png";
import webinar06 from "/public/webinar thumbnails/webinar06.png";
import webinar07 from "/public/webinar thumbnails/webinar07.png";
import webinar08 from "/public/webinar thumbnails/webinar08.png";
import webinar09 from "/public/webinar thumbnails/webinar09.png";
import webinar10 from "/public/webinar thumbnails/webinar10.png";
import webinar11 from "/public/webinar thumbnails/webinar11.png";
import webinar12 from "/public/webinar thumbnails/webinar12.png";
import webinar13 from "/public/webinar thumbnails/webinar13.png";

import circles from "/public/circles.png";
// import logoUnilab from "XXX";

function WebinarCloud() {
  return (
    <div className="">
      <h2 className="w-full portrait:text-4xl text-5xl font-semibold text-center uppercase">
        Recorded Webinars
      </h2>
      {/* <h3 className=" py-1 px-2 w-full portrait:text-lg text-xl text-center max-w-fit mx-auto">
        October 29, 2022
      </h3> */}
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
        <WebinarCloudItem
          logo={webinar01}
          title="Cardiac Considerations for Return to Sports and Exercise after COVID 19"
          link="/webinars/01"
        />
        <WebinarCloudItem
          logo={webinar02}
          title="Return to Play After Long COVID"
          link="/webinars/02"
        />
        <WebinarCloudItem
          logo={webinar03}
          title="Learning and Experience From Bubble Set-Up"
          link="/webinars/03"
        />
        <WebinarCloudItem
          logo={webinar04}
          title="Psychological Wellbeing of Athletes Transitioning for the COVID 19 Pandemic"
          link="/webinars/04"
        />
        <WebinarCloudItem
          logo={webinar05}
          title="Head & Neck Cancer Pain Management"
          link="/webinars/05"
        />
        <WebinarCloudItem
          logo={webinar06}
          title="Rehabilitation Issues in Head and Neck Cancer"
          link="/webinars/06"
        />
        <WebinarCloudItem
          logo={webinar07}
          title="Feeding and Speech Therapy in Oral Cancer"
          link="/webinars/07"
        />
        <WebinarCloudItem
          logo={webinar08}
          title="Lymphedema Management"
          link="/webinars/08"
        />
        <WebinarCloudItem
          logo={webinar09}
          title="Frailty and Sarcopenia Screening, Diagnosis, and Management"
          link="/webinars/09"
        />
        <WebinarCloudItem
          logo={webinar10}
          title="Interventional Procedures for the Elderly"
          link="/webinars/10"
        />
        <WebinarCloudItem
          logo={webinar11}
          title="Reflections on Nursing Home Care for Older People"
          link="/webinars/11"
        />
        <WebinarCloudItem
          logo={webinar12}
          title="Fall Risk Assessment and Management in the Elderly"
          link="/webinars/12"
        />
        <WebinarCloudItem
          logo={webinar13}
          title="The PGH OT Experience: Frailty & FLS"
          link="/webinars/13"
        />
      </section>
    </div>
  );
}

export default WebinarCloud;
