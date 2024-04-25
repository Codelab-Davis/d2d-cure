import React, { useState, useEffect } from 'react';
import "../../app/globals.css";
import { useUser } from '@/components/UserProvider';
import { AuthChecker } from '@/components/AuthChecker';
import NavBar from '@/components/NavBar';


const CuratePage = () => {
    const { user, loading } = useUser();

    return (
        <div>
            <NavBar/>
            <AuthChecker minimumStatus={"professor"}>
                <div>
                    <h1>Curate data</h1>
                </div>
            </AuthChecker>
        </div>


    )
}

export default CuratePage;