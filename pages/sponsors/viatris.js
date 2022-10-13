import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import pharmacy from "../../public/pharmacy.png";

import SponsorCloud from "../../components/SponsorCloud";

function viatris() {
  return (
    <Layout>
      <h1 className="text-center text-4xl font-bold my-6">Viatris</h1>
      <Image src={pharmacy} alt="Drugstore" />
      {/* <img
        className="block"
        src="https://cm.upm.edu.ph/static/images/uploads/departments/rehab/logo.jpg"
        alt="PGH Rehab"
      /> */}
      <hr className="mt-4 mb-2 border-fem-300 border-2" />
      <SponsorCloud />
    </Layout>
  );
}

export default viatris;
