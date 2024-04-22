import React, { useState, useEffect, useContext } from 'react';
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence, signOut  } from "firebase/auth";
import { auth } from "../../../firebaseConfig"
import { useRouter } from 'next/router';
import { useUser } from '@/components/UserProvider';
import Link from 'next/link';

const Login = () => {

  const { user, setUser, loading } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = async (email: string, password: string) => {
    try {
      await setPersistence(auth, browserLocalPersistence); // ensures that the user remains logged in across page refreshes and browser sessions
      await signInWithEmailAndPassword(auth, email, password);

      router.push('/');
    } catch (error) {
      setError('Failed to sign in');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
      setUser(null);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSignIn(email, password);
  };

  if(loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div>
          <p>Hello, {user.status}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </form>
        <Link href="/signup" className="text-blue-600 underline hover:text-blue-800">Click here to sign up for an account</Link>
      </div>
    </div>
  );
};

export default Login;