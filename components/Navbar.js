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
// import { HomeIcon, VideoCameraIcon } from "@heroicons/react/24/outline"; //outline
// import { BeakerIcon } from "@heroicons/react/24/solid"; //solid
// import { BeakerIcon } from "@heroicons/react/20/solid"; //mini
import Link from "next/link";

function Navbar() {
  const [menuActivated, setMenuActivated] = useState(false);
  return (
    <div className="lg:bg-fem-300 flex w-fit p-4 rounded-tl-lg rounded-tr-lg lg:h-10 lg:shadow-xl lg:flex-row flex-col-reverse">
      {/* <button
        className=""
        onClick={() => {
          alert("clicked");
          setMenuActivated(!menuActivated);
        }}
      >
        <div
          className={
            "rounded-full w-16 -translate-y-3/4 h-16 flex items-center justify-center group shadow-sm hover:shadow-lg duration-300 lg:hidden" +
            " " +
            menuActivated
              ? "bg-fem-200"
              : "rounded-full"
          }
        >
          <Bars3Icon className="h-10 w-10 duration-300" />
        </div>
      </button> */}
      <a href="#" className="lg:mx-2 lg:my-0 my-2">
        <div className="bg-fem-200 rounded-full w-16 -translate-y-3/4 h-16 flex items-center justify-center group shadow-sm hover:shadow-lg hover:-translate-y-[85%] duration-300">
          <HomeIcon className="h-10 w-10 duration-300" />
        </div>
      </a>
      <a href="" className="lg:mx-2 lg:my-0 my-2">
        <div className="bg-fem-200 rounded-full w-16 -translate-y-3/4 h-16 flex items-center justify-center group shadow-sm hover:shadow-lg hover:-translate-y-[85%] duration-300">
          <VideoCameraIcon className="h-10 w-10 duration-300" />
        </div>
      </a>
      <a href="" className="lg:mx-2 lg:my-0 my-2">
        <div className="bg-fem-200 rounded-full w-16 -translate-y-3/4 h-16 flex items-center justify-center group shadow-sm hover:shadow-lg hover:-translate-y-[85%] duration-300">
          <PencilIcon className="h-10 w-10 duration-300" />
        </div>
      </a>
      <a href="" className="lg:mx-2 lg:my-0 my-2">
        <div className="bg-fem-200 rounded-full w-16 -translate-y-3/4 h-16 flex items-center justify-center group shadow-sm hover:shadow-lg hover:-translate-y-[85%] duration-300">
          <UserGroupIcon className="h-10 w-10 duration-300" />
        </div>
      </a>
      <a href="" className="lg:mx-2 lg:my-0 my-2">
        <div className="bg-fem-200 rounded-full w-16 -translate-y-3/4 h-16 flex items-center justify-center group shadow-sm hover:shadow-lg hover:-translate-y-[85%] duration-300">
          <NewspaperIcon className="h-10 w-10 duration-300" />
        </div>
      </a>
      <a href="" className="lg:mx-2 lg:my-0 my-2">
        <div className="bg-fem-200 rounded-full w-16 -translate-y-3/4 h-16 flex items-center justify-center group shadow-sm hover:shadow-lg hover:-translate-y-[85%] duration-300">
          <PhoneIcon className="h-10 w-10 duration-300" />
        </div>
      </a>
    </div>
  );
}

export default Navbar;
