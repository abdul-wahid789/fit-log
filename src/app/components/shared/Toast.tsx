import WorkoutProvier from '@/context/WorkoutContext';
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const Toast = ({ children }: { children: ReactNode }) => {
    return (
        <WorkoutProvier>
            <header>
                <Navbar></Navbar>
            </header>
            {children}
            <Footer />
            <Toaster/>
        </WorkoutProvier>
    );
};

export default Toast;