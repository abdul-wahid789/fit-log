import Image from 'next/image';
import React from 'react';
import logo from "@/assets/logo.png"
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='border-t border-base-300 py-10 mt-10'>
            <div className='flex justify-between container mx-auto'>
                <Link href={`/`} className="btn btn-ghost text-xl ">
                    <Image src={logo} alt="logo"></Image>
                    <h1>FITLOG</h1>
                </Link>
                <div>
                    <p>
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;