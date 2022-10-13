import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import rehabLogo from "../public/email.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure
      as="nav"
      className="bg-white fixed sm:absolute w-full z-20 shadow"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex justify-between w-full pr-2">
                <div className="flex flex-shrink-0 items-center">
                  {/* <Image
                    src={rehabLogo}
                    alt="Rehab Logo"
                    width="350px"
                    height="300px"
                    layout="responsive"
                  /> */}
                  <img
                    className="block h-10 w-auto"
                    src="https://cm.upm.edu.ph/static/images/uploads/departments/rehab/logo.jpg"
                    alt="PGH Rehab"
                  />
                  {/* <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  /> */}
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-fem-100 hover:text-gray-700" */}
                  <a
                    href="#"
                    className="inline-flex items-center border-b-4 border-fem-400 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-fem-100 hover:text-gray-700"
                  >
                    Webinar
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-fem-100 hover:text-gray-700"
                  >
                    Tests
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-fem-100 hover:text-gray-700"
                  >
                    Sponsors
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-fem-100 hover:text-gray-700"
                  >
                    Program
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-fem-100 hover:text-gray-700"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fem-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-fem-100 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-8 border-fem-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-fem-500"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-8 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-fem-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Webinar
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-8 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-fem-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Tests
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-8 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-fem-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Sponsors
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-8 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-fem-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Program
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-8 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-fem-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
