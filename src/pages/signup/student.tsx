import React, { useState, useEffect, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence, signOut  } from "firebase/auth";
import { auth } from "../../../firebaseConfig"
import { useRouter } from 'next/router';
import { useUser } from '@/components/UserProvider';

const NewStudentForm = () => {
  const { user, setUser, loading } = useUser();
  const [username, setUsername] = useState('');
  const [givenName, setGivenName] = useState('');
  const [pi, setPi] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // useEffect(() => {
  //   const data = window.location.search // data is currently "?data=student"
  //   console.log(data)
  // }, [])


  const handleSignUp = async (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSignUp(email, password);
  };

  return(
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          New User Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="username"
          placeholder="New User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pi">
          Primary Investigator
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="pi"
          // placeholder="Primary Investigator"
          value={pi}
          onChange={(e) => setPi(e.target.value)}
        >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>

        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="given_name">
          Given Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="given_name"
          type="text"
          placeholder="Given Name"
          value={givenName}
          onChange={(e) => setGivenName(e.target.value)}
        />
      </div>
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
          Sign Up
        </button>
      </div>

      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </form>
  );
};

export default NewStudentForm;