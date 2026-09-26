import Image from 'next/image';
import React from 'react';
import logo from "@/assets/logo.png"
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='border-t border-base-300 py-10 mt-10'>
            <div className='flex flex-col lg:flex-row gap-3 justify-between items-center container mx-auto'>
                <Link href={`/`} className="btn btn-ghost text-xl ">
                    <Image src={logo} alt="logo"></Image>
                    <h1>FITLOG</h1>
                </Link>
                <div className='text-xs lg:text-base'>
                    <p className='text-center lg:text-right'>
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;