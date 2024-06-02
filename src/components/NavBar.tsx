import React from 'react';
import Link from 'next/link';
import { useUser } from '@/components/UserProvider';
import {Button} from "@nextui-org/react";

const NavBar = () => {
  const { user } = useUser();

  console.log(user);
  return (
    <nav className="bg-white text-white flex items-center border-b-1 border-gray-200 pt-8 gap-4 p-4 pb-7 pl-24">
      <a href="/" className="flex items-center">
        <img src="/resources/images/D2D_Logo.svg" className="h-12 me-3" alt="logo" />
      </a>
      {/* Database Dropdown */}
      <div className="relative group">
        <button className="px-3 py-2 rounded-md text-sm text-black font-medium hover:bg-gray-100">Database</button>
        <div className="absolute py-2 w-48 bg-white rounded-md shadow-xl z-20 hidden group-hover:block">
          <Link href="/data">
            <span className="block px-4 py-2 text-sm text-black hover:bg-gray-100">BglB Characterization</span>
          </Link>
          {/* Conditionally render "Analyze/Submit Data" */}
          {user?.status && (
            <Link href="/submit">
              <span className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Analyze/Submit Data</span>
            </Link>
          )}
          {/* Further conditionally render "Curate Data" if user.status is "professor" */}
          {(user?.status === "professor" || user?.status === "ADMIN") && (
            <Link href="/curate">
              <span className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Curate Data</span>
            </Link>
          )}
        </div>
      </div>

      {/* Resources Dropdown */}
      <div className="relative group">
        <button className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-gray-100">Resources</button>
        <div className="absolute py-2 w-48 bg-white rounded-md shadow-xl z-20 hidden group-hover:block">
          <Link href="/resources/structured_files">
            <span className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Structured Files</span>
          </Link>
          <Link href="/resources/oligosearch">
            <span className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Oligo Search</span>
          </Link>
          <Link href="/resources/publication">
            <span className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Publications</span>
          </Link>
          <Link href="/resources/resource">
            <span className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Resources home page</span>
          </Link>
        </div>
      </div>

      {/* About Button */}
      <Link href="#">
        <span className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-gray-100">About</span>
      </Link>

      {/* Login Button */}
      <div className="pr-20" style={{ marginLeft: 'auto' }}>
        <Button onPress={() => window.location.href = '/login'} style={{ height: '45px', fontWeight: 'semi-bold', backgroundColor: "#06B7DB", color: "white"}}>
          Login
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;