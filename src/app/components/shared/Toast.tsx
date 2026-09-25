import WorkoutProvier from '@/context/WorkoutContext';
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';

const Toast = ({ children }: { children: ReactNode }) => {
    return (
        <WorkoutProvier>
            <header>
                <Navbar></Navbar>
            </header>
            {children}
            <Footer />
            <ToastContainer />
        </WorkoutProvier>
    );
};

export default Toast;