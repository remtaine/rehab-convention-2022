import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

import Header from "../Header";

function LayoutBasic(props) {
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="bg-fem-200 lg:min-h-[calc(100vh-18rem)] min-h-[calc(100vh-10rem)] shadow-inner flex items-center justify-center">
        <section className="max-w-[1000px] my-6 md:my-20 p-4 flex flex-col items-center justify-center">
          {props.children}
        </section>
      </main>
      <Footer />
      <Navbar />
    </div>
  );
}

export default LayoutBasic;
