import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import Header from "../../components/Header";
import VirtualBooth from "../../components/VirtualBooth";
import SponsorCloud from "../../components/SponsorCloud";

function LayoutSponsors(props) {
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="bg-fem-200 lg:min-h-[calc(100vh-18rem)] min-h-[calc(100vh-10rem)] shadow-inner flex items-center justify-center">
        <section className="max-w-[1000px] my-6 md:my-20 p-4 flex flex-col items-center justify-center">
          {props.children}

          <SponsorCloud />
        </section>
      </main>
      <Footer />
      <Navbar />
    </div>
  );
}

export default LayoutSponsors;
