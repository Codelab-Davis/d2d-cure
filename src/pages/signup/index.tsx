import React, { useContext } from 'react';
import "../../app/globals.css";
import NavBar from '@/components/NavBar';
import Link from 'next/link';

const SignUpPage = () => {
    return(
        <div>
            <NavBar />
            <div className="mt-8 text-center">
                <h1 className="text-2xl font-bold">New User Registration</h1>
                {/* <Link href = {{pathname: "signup/student", query: {data: "student"}}}>I am a faculty member</Link> */}
                <Link href = "signup/professor">I am a faculty member</Link>
                <br/>
                <Link href = "signup/student">I am a student</Link>

            </div>
        </div>
    );
}

export default SignUpPage;