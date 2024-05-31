import React from "react";
import Link from 'next/link'; // Import Link from Next.js
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";

export default function App() {
  return (
<footer className="bg-white dark:bg-gray-900" style={{ maxWidth: 'full' }}>
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <img src="/resources/images/D2D_Logo.svg" className="h-20 me-3" alt="logo" />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-2">
                          <a href="#" className="hover:underline font-light">About us</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline font-light">Meet the team</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Databases</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-2">
                          <a href="#" className="hover:underline font-light">Single Variant Submission</a>
                      </li>
                      <li className="mb-2">
                          <a href="#" className="hover:underline font-light">Wildtype Submission</a>
                      </li>
                      <li className="mb-2">
                          <a href="#" className="hover:underline font-light">Gel Image Upload</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-2">
                          <a href="#" className="hover:underline font-light">Privacy Policy</a>
                      </li>
                      <li className="mb-2">
                          <a href="#" className="hover:underline font-light">Structure and Sequence Files</a>
                      </li>                      <li className="mb-2">
                          <a href="#" className="hover:underline font-light">Oligo Search</a>
                      </li>                      <li className="mb-2">
                          <a href="#" className="hover:underline font-light">Complete BgLb Sequence</a>
                      </li>                      <li className="mb-2 font-light">
                          <a href="#" className="hover:underline">How data is calculated</a>
                      </li>                      <li className="mb-2 font-light">
                          <a href="#" className="hover:underline">How to interpret data</a>
                      </li>                      <li className="mb-2 font-light">
                          <a href="#" className="hover:underline">Enzyme Rate Calculator</a>
                      </li>                      <li className="mb-2 font-light">
                          <a href="#" className="hover:underline">Publications</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">D2D CURE © 2018–2024 ~ The D2D CURE Program is supported by the National Science Foundation's Undergraduate Biology Education IUSE Program, award number 1827246. Website maintained by Jason William Labonte. </a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
          </div>
      </div>
    </div>
</footer>
  );
}