"use client"

import { useRouter } from 'next/navigation';
import React from 'react';

const RetryButton = () => {

    const router = useRouter()

    return (
        <button onClick={() => router.refresh()} className='btn btn-accent'>Try Again</button>
    );
};

export default RetryButton;