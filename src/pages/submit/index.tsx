import React, { useState, useEffect } from 'react';
import "../../app/globals.css";
import { useUser } from '@/components/UserProvider';


const SubmitPage = () => {
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

    return (
        <div>
            <h1>Submit data</h1>
        </div>
    )
}

export default SubmitPage;