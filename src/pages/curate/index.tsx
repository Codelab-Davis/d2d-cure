import React, { useState, useEffect } from 'react';
import "../../app/globals.css";
import { useUser } from '@/components/UserProvider';


const CuratePage = () => {
    const { user, loading } = useUser();

    if (loading) {
        return <p>Loading</p>
    }

    if (!user?.status) {
        return (
            <div>
                <h1>Please login to gain access to this page.</h1>
            </div>
        )
    }

    if (user?.status !== "professor" && user?.status !== "ADMIN") {
        return (
            <div>
                <h1>You do not have permission to access this page.</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>Curate data</h1>
        </div>
    )
}

export default CuratePage;