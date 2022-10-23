import React from "react";
import Link from "next/link";
import Image from "next/image";

import headerImage from "/public/header.jpg";
import rehabLogo from "/public/header.jpg";

function Header() {
  return (
    <header id="top" className="w-full overflow-hidden relative z-20">
      <div className="lg:block hidden h-80 ">
        <Image
          src={headerImage}
          alt="header"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="lg:block hidden"
        />
      </div>
      <div className="lg:hidden h-12 bg-fem-700">
        {/* <Image
      src={headerImage}
      alt="header"
      layout="fill"
      objectFit="cover"
      quality={100}
      className="lg:block hidden"
    /> */}
      </div>
    </header>
  );
}

export default Header;
