import React, { useState } from "react";
import {
  HomeIcon,
  VideoCameraIcon,
  PencilIcon,
  UserGroupIcon,
  NewspaperIcon,
  PhoneIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline"; //outline

// import { BeakerIcon } from "@heroicons/react/24/outline"; //outline
// import { BeakerIcon } from "@heroicons/react/24/solid"; //solid
// import { BeakerIcon } from "@heroicons/react/20/solid"; //mini

import NavbarButton from "./ui/NavbarButton";

function Navbar() {
  const [isMenuActivated, setMenuActivated] = useState(false);
  return (
    <div className="lg:bg-fem-300  w-fit p-4 rounded-tl-lg rounded-tr-lg lg:h-16 lg:shadow-xl flex lg:flex-row flex-col-reverse">
      <button
        className="lg:hidden"
        onClick={() => {
          setMenuActivated(!isMenuActivated);
        }}
      >
        <div className="mb-1 mr-1 flex flex-col justify-center items-center h-fit w-fit group">
          <div
            className={
              "w-16 h-16 flex items-center justify-center shadow-sm duration-300" +
              " " +
              (!isMenuActivated
                ? "bg-fem-200 text-fem-600"
                : "bg-fem-300 text-fem-200")
            }
          >
            <Bars3Icon className="h-10 w-10" />
          </div>
        </div>
      </button>

      <div
        className={
          "flex lg:flex-row flex-col duration-500 overflow-hidden lg:overflow-visible lg:h-fit" +
          " " +
          (!isMenuActivated ? "h-0" : "h-[21.5rem]")
        }
      >
        <NavbarButton title="Home">
          <HomeIcon className="h-10 w-10" />
        </NavbarButton>
        <NavbarButton title="Webinars">
          <VideoCameraIcon className="h-10 w-10" />
        </NavbarButton>
        <NavbarButton title="Tests">
          <PencilIcon className="h-10 w-10" />
        </NavbarButton>
        <NavbarButton title="Sponsors">
          <UserGroupIcon className="h-10 w-10" />
        </NavbarButton>
        <NavbarButton title="Program">
          <NewspaperIcon className="h-10 w-10" />
        </NavbarButton>
        <NavbarButton title="Contacts">
          <PhoneIcon className="h-10 w-10" />
        </NavbarButton>
      </div>
    </div>
  );
}

export default Navbar;
