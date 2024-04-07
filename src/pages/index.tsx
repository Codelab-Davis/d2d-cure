import React, { useContext } from 'react';
import "../app/globals.css"; 
import NavBar from '@/components/NavBar';
import { useUser } from '@/components/UserProvider';

export default function Home() {
  const { user } = useUser();

  return (
    <div>
    <NavBar />
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        {/* Conditionally render message */}
        {user?.user_name && (
          <p>Hello, {user?.user_name}</p>
        )}
      </div>
      </div>

  );
}