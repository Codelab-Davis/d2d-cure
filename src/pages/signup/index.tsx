import React, { useEffect, useState } from 'react';
import "../../app/globals.css";
import NavBar from '@/components/NavBar';
import Link from 'next/link';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { useRouter } from 'next/router';

const SignUpPage = () => {
  const [userType, setUserType] = useState("");
  const [username, setUsername] = useState('');
  const [givenName, setGivenName] = useState('');
  const [institution, setInstitution] = useState('');
  const [title, setTitle] = useState('');
  const [pi, setpi] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [institutions, setInstitutions] = useState<any[]>([]);
  const [professors, setProfessors] = useState<any[]>([]);

  const router = useRouter();

  useEffect(() => {
    const fetchInstitutions = async () => {
      const response = await fetch('/api/getInstitutions');
      const data = await response.json();
      const sortedData = data.sort((a:any, b:any) => a.fullname.localeCompare(b.fullname));
      setInstitutions(sortedData);
    };

    const fetchProfessors = async () => {
      const response = await fetch('api/getAllProfessors');
      const data = await response.json();
      const sortedData = data.sort((a:any, b:any) => a.institution.localeCompare(b.institution));
      setProfessors(sortedData);
    }

    fetchInstitutions();
    fetchProfessors();
  }, [])

  const handleSignUp = async (email: string, password: string) => {
    const newUser = {
      user_name: username,
      given_name: givenName,
      title: title,
      pi: pi,
      institution,
      status: userType,
      email,
      password
    }
    fetch(`/api/createUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    }).then((response) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Successfully created new user.")
          router.push('/')
        })
        // Might want to catch case where createUser succeeds but firebase fails
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSignUp(email, password);
  };

  if (userType === "") {
    return (
      <div>
        <NavBar />
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold">New User Registration</h1>
          <p onClick={() => setUserType("professor")} className="text-blue-600 underline hover:text-blue-800">
              I am a faculty member
          </p>
          <p onClick={() => setUserType("student")} className="text-blue-600 underline hover:text-blue-800">
              I am a student
          </p>

        </div>
      </div>
    );
  } else if (userType === "professor") {
    return (
      <div className="flex flex-col justify-center items-center h-full bg-gray-100">
        <p onClick={() => setUserType("professor")} className="mt-2 text-blue-600 underline hover:text-blue-800">
            I am a faculty member
        </p>
        <p onClick={() => setUserType("student")} className="text-blue-600 underline hover:text-blue-800">
            I am a student
        </p>
        <div className="w-1/2 max-w-s">
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
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pi">
                Institution
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="institution"
                // placeholder="Primary Investigator"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                required
              >
                <option value=""></option>
                {
                  institutions.map((institution) => {
                    return <option key={institution.id} value={institution.abbr}>{institution.fullname}</option>
                  })
                }
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
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="given_name">
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
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
                required
              />
            </div>
            <div className="mb-4">
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
                required
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
        </div>
      </div>
    );
  } else if (userType === "student") {
    return (
      <div className="flex flex-col justify-center items-center h-full bg-gray-100">
        <p onClick={() => setUserType("professor")} className="mt-2 text-blue-600 underline hover:text-blue-800">
            I am a faculty member
        </p>
        <p onClick={() => setUserType("student")} className="text-blue-600 underline hover:text-blue-800">
            I am a student
        </p>
        <div className="w-1/2 max-w-s">
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
                required
              />
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
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pi">
                Primary Investigator (your professor)
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pi"
                // placeholder="Primary Investigator"
                value={pi}
                onChange={(e) => {
                  setpi(e.target.value);
                  setInstitution(
                    professors
                      .find((professor) => professor.given_name === e.target.value)
                      .institution
                  );
                }}
                required
              >
                <option value=""></option>
                {
                  professors.map((professor) => {
                    return <option key={professor.id} value={professor.given_name}>{professor.given_name} ({professor.institution})</option>
                  })
                }
              </select>
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
                required
              />
            </div>
            <div className="mb-4">
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
                required
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
        </div>
      </div>
    );
  }
}

export default SignUpPage;