import Link from 'next/link';
import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';

const Navbar = () => {
    const links = <>
        <li><Link href={`/`}>Workouts</Link></li>
        <li><Link href={`/my-plan`}>My Plan</Link></li>

    </>
    return (
        <nav className='border-b border-base-300'>

            <div className="container mx-auto navbar shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link href={`/`} className="btn btn-ghost text-xl ">
                        <Image src={logo} alt="logo"></Image>
                        <h1>FITLOG</h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <Link href={`/my-plan`} className="">Plan
                    <span className='ml-1 bg-accent text-base-100 rounded-full px-1'>0</span>

                    </Link>


                    <Link href={`/my-plan`} className="">Saved
                    <span className='ml-1 bg-accent text-base-100 rounded-full px-1'>0</span>

                    </Link>

                </div>
            </div>

        </nav>
    );
};

export default Navbar;