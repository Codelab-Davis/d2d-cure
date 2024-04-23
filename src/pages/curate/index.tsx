import React, { useState, useEffect } from 'react';
import "../../app/globals.css";
import { useUser } from '@/components/UserProvider';
import { Protect } from '@/components/Protect';
import NavBar from '@/components/NavBar';


const CuratePage = () => {
    const { user, loading } = useUser();

    return (
        <div>
            <NavBar/>
            <Protect minimumStatus={"professor"}>
                <div>
                    <h1>Curate data</h1>
                </div>
            </Protect>
        </div>


    )
}

export default CuratePage;