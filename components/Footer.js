import React from "react";
import Link from "next/link";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

function Footer() {
  return (
    <footer className="bg-fem-100 h-28 shadow-xl z-20 py-4 flex items-center justify-between px-8">
      <div className="bg-fem-700/50 rounded-md p-4 flex flex-col items-center">
        <p className="text-fem-600">&copy; 2022 PGH Rehab</p>
        <Link href="/contacts">
          <a className="hover:underline font-medium">Contact Us</a>
        </Link>
      </div>
      {/* TODO make smooth scrolling */}
      <Link href="#top">
        <a className="bg-fem-700/50 rounded-md portrait:hidden">
          <ChevronUpIcon className="w-12 h-12" />
        </a>
      </Link>
    </footer>
  );
}

export default Footer;
