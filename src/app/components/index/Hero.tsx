import React from 'react';
import bannerImg from "@/assets/banner.png"
import Image from 'next/image';

const Hero = () => {
    return (
        <section className='container mx-auto flex flex-col justify-center my-8'>
            <section className='rounded-xl bg-primary p-10
            flex flex-col justify-between lg:flex-row space-y-5'>
                <div className='w-full text-center lg:text-left lg:w-[40%] space-y-5 flex flex-col justify-center'>
                    <p className='text-accent font-bold'>WORKOUT LIBRARY</p>
                    <h1 className='text-4xl font-bold'>TRAIN WITH INTENT. <br /> LOG
                        EVERY SET.</h1>
                    <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.</p>
                    <a href={"#library"} className="btn btn-accent w-full lg:w-1/2">BROWSE WORKOUTS</a>

                </div>
                <Image className=' lg:w-[25%]' src={bannerImg} alt="banner image"></Image>
            </section>
        </section>
    );
};

export default Hero;