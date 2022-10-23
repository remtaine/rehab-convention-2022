import React from "react";
import Link from "next/link";
import Image from "next/image";

import headerImage from "/public/Header.png";
import rehabLogo from "/public/Header.jpg";

function Header() {
  return (
    <header id="top" className="w-full overflow-hidden relative z-20">
      <div className="h-20 xs:h-40 sm:h-50 md:h-60 lg:h-70 xl:h-80">
        <Image
          src={headerImage}
          alt="header"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      {/* <div className="lg:hidden h-12 bg-fem-700">
        <Image
      src={headerImage}
      alt="header"
      layout="fill"
      objectFit="cover"
      quality={100}
      className="lg:block hidden"
    />
      </div> */}
    </header>
  );
}

export default Header;
