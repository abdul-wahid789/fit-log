import React from 'react';
import bannerImg from "@/assets/banner.png"
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className='flex flex-col justify-center my-8'>

            <section className='rounded-xl bg-primary p-10
            flex justify-between container mx-auto'>
                <div className='w-[40%] space-y-5 flex flex-col justify-center'>
                    <p className='text-accent font-bold'>WORKOUT LIBRARY</p>
                    <h1 className='text-4xl font-bold'>TRAIN WITH INTENT. <br /> LOG
                        EVERY SET.</h1>
                    <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.</p>
                    <a href={"#library"} className="btn btn-accent w-1/2">BROWSE WORKOUTS</a>
                    
                </div>
                <Image className='w-[25%]' src={bannerImg} alt="banner image"></Image>
            </section>
        </section>
    );
};

export default Hero;