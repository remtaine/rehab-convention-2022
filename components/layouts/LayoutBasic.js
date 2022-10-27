import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

import Header from "../Header";

function LayoutBasic(props) {
  return (
    <div className="min-h-screen ">
      <Header />
      {/* header heights are "h-20 xs:h-30 sm:h-40 md:h-50 lg:h-60 xl:h-70" */}
      <main className="bg-fem-200 min-h-[calc(100vh-12rem)] xs:min-h-[calc(100vh-15rem)] sm:min-h-[calc(100vh-17rem)] md:min-h-[calc(100vh-20rem)] lg:min-h-[calc(100vh-22rem)] xl:min-h-[calc(100vh-25rem)] shadow-inner flex items-center justify-center">
        <section className="max-w-[1000px] my-8 p-4 flex flex-col items-center justify-center">
          {props.children}
        </section>
      </main>
      <Footer />
      <Navbar />
    </div>
  );
}

export default LayoutBasic;
