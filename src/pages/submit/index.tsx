import React, { useState, useEffect } from 'react';
import "../../app/globals.css";
import { useUser } from '@/components/UserProvider';
import NavBar from '@/components/NavBar';
import { AuthChecker } from '@/components/AuthChecker';


const SubmitPage = () => {
    const { user, loading } = useUser();

    return (
        <div>
            <NavBar/>
            <AuthChecker minimumStatus={"student"}>
                <div>
                    <h1>Submit data</h1>
                </div>
            </AuthChecker>
        </div>
    )
}

export default SubmitPage;