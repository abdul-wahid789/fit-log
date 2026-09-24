"use client"

import React from 'react';
import { Bounce, toast } from 'react-toastify';

const ErrorToast = ({ msg }) => {

    return (
        <>
            {toast.error(`${msg}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                
            })}
        </>
    );

};

export default ErrorToast;