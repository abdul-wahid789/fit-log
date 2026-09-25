"use client"
import React, { useState } from 'react';


const Toggle = () => {

    const [isPlanActive, setIsPlanActive] = useState(true)

    const handelClick = () => {
        console.log(isPlanActive)
        setIsPlanActive(!isPlanActive)
    }
    return (
        <div className='bg-base-300 w-fit flex gap-3 items-center text-primary-content rounded-2xl px-2 py-2 my-10 border-base-300 border'>
            <button  onClick={handelClick} className={isPlanActive ? "btn btn-accent border rounded-l-2xl transition duration-150" : "cursor-pointer"}>
                Today&apos;s Plan
            </button>
            <button onClick={handelClick} className={isPlanActive ? "cursor-pointer" : "btn btn-accent border rounded-r-2xl transition duration-150"}>
                Saved
            </button>
        </div>
    );
};

export default Toggle;