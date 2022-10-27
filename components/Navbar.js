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
    <div className="flex items-center justify-end landscape:justify-center z-50 fixed bottom-0 w-screen pointer-events-none">
      <div className="landscape:bg-fem-300  w-fit p-4 rounded-tl-lg rounded-tr-lg landscape:h-16 landscape:shadow-xl flex landscape:flex-row flex-col-reverse pointer-events-auto">
        <button
          className="landscape:hidden "
          onClick={() => {
            setMenuActivated(!isMenuActivated);
          }}
        >
          <div className="mb-1 mr-1 flex flex-col justify-center items-center h-fit w-fit">
            <div
              className={
                "w-16 h-16 flex items-center justify-center shadow-sm duration-300" +
                " " +
                (!isMenuActivated
                  ? "bg-fem-700 text-fem-600"
                  : "bg-fem-300 text-fem-200")
              }
            >
              <Bars3Icon className="h-10 w-10" />
            </div>
          </div>
        </button>
        <div
          className={
            "flex landscape:flex-row flex-col duration-500 overflow-hidden landscape:overflow-visible landscape:h-fit" +
            " " +
            (!isMenuActivated ? "h-0" : "h-[21.5rem]")
          }
        >
          <NavbarButton title="Home">
            <HomeIcon className="h-10 w-10" />
          </NavbarButton>
          <NavbarButton
            title="Webinars"
            link="https://up-edu.zoom.us/webinar/register/WN_U1lr1cATTrCfEpeRPdUPvg"
            target="_blank"
          >
            <VideoCameraIcon className="h-10 w-10" />
          </NavbarButton>
          <NavbarButton title="Tests" link="/tests">
            <PencilIcon className="h-10 w-10" />
          </NavbarButton>
          <NavbarButton title="Sponsors" link="/sponsors">
            <UserGroupIcon className="h-10 w-10" />
          </NavbarButton>
          <NavbarButton
            title="Program"
            link="https://drive.google.com/file/d/1tuwBQl7yD2AAw0pyVcnTyX_y4h_K6H6p/view?usp=sharing"
            target="_blank"
          >
            <NewspaperIcon className="h-10 w-10" />
          </NavbarButton>
          <NavbarButton title="Contacts" link="/contacts">
            <PhoneIcon className="h-10 w-10" />
          </NavbarButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
