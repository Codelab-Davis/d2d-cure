import React, { useState, useEffect } from 'react';
import "../../app/globals.css";
import { useUser } from '@/components/UserProvider';
import NavBar from '@/components/NavBar';
import { Protect } from '@/components/Protect';


const SubmitPage = () => {
    const { user, loading } = useUser();

    return (
        <div>
            <NavBar/>
            <Protect minimumStatus={"student"}>
                <div>
                    <h1>Submit data</h1>
                </div>
            </Protect>
        </div>
    )
}

export default SubmitPage;