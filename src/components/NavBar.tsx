import React from "react";
import Link from 'next/link'; // Import Link from Next.js
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { ChevronDown, Lock } from "./Icons.jsx"; // Import only necessary icons


export default function App() {
  return (
    <Navbar maxWidth="full" className="h-24 bg-white">
      <NavbarBrand>    
        <a href="/" className="pl-16 flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/D2D_Logo.svg" className="h-19" alt="D2D Logo" />
        </a>
      </NavbarBrand>

      <NavbarContent className="flex-grow-2 hidden sm:flex gap-4 justify-st">
        {/* Database Dropdown */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-xl"
                endContent={<ChevronDown fill="currentColor" size={16} height={undefined} width={undefined} />} // Use ChevronDown icon
                radius="sm"
                variant="light"
              >
                Database
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Database Menu"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem >
              <Link href="/data">BglB Characterization</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/submit">Analyze/Submit Data</Link>
            </DropdownItem>
            {/* Further conditionally render "Curate Data" if user.status is "professor" */}
            <DropdownItem>
              <Link href="/curate">Curate Data</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Resources Dropdown */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="text-xl p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<ChevronDown fill="currentColor" size={16} height={undefined} width={undefined} />} // Use ChevronDown icon
                radius="sm"
                variant="light"
              >
                Resources
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Resources Menu"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem>
              <Link href="/resources/structured_files">Structured Files</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/resources/oligosearch">Oligo Search</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/resources/publications">Publications</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* About Button */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="text-xl p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<ChevronDown fill="currentColor" size={16} height={undefined} width={undefined} />} // Use ChevronDown icon
                radius="sm"
                variant="light"
              >
                About
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="About Menu"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem>About Us</DropdownItem>
            <DropdownItem>Contact Us</DropdownItem>
            {/* Add more About-related links here */}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarContent className="flex-grow pr-16" justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login" className="text-d2d">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button className="bg-d2d text-white rounded-xl" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
