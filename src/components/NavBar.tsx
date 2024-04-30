import React from 'react';
import Link from 'next/link';
import { useUser } from '@/components/UserProvider';

const NavBar = () => {
  const { user } = useUser();

  console.log(user);
  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center p-4">
      {/* Database Dropdown */}
      <div className="relative group">
        <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Database</button>
        <div className="absolute py-2 w-48 bg-white rounded-md shadow-xl z-20 hidden group-hover:block">
          <Link href="/data">
            <span className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">BglB Characterization</span>
          </Link>
          {/* Conditionally render "Analyze/Submit Data" */}
          {user?.status && (
            <Link href="/submit">
              <span className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Analyze/Submit Data</span>
            </Link>
          )}
          {/* Further conditionally render "Curate Data" if user.status is "professor" */}
          {(user?.status === "professor" || user?.status === "ADMIN") && (
            <Link href="/curate">
              <span className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Curate Data</span>
            </Link>
          )}
        </div>
      </div>

      {/* Resources Dropdown */}
      <div className="relative group">
        <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Resources</button>
        <div className="absolute py-2 w-48 bg-white rounded-md shadow-xl z-20 hidden group-hover:block">
          <Link href="/resources/structured_files">
            <span className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Structured Files</span>
          </Link>
          <Link href="/resources/oligosearch">
            <span className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Oligo Search</span>
          </Link>
          <Link href="/resources/publications">
            <span className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Publications</span>
          </Link>
        </div>
      </div>

      {/* About Button */}
      <Link href="#">
        <span className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">About</span>
      </Link>

      {/* Login Button */}
      <Link href="/login">
        <span className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Login</span>
      </Link>
    </nav>
  );
};

export default NavBar;