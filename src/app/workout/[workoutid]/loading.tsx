import React from 'react';

const WorkoutDetailsLoading = () => {
    return (
     <div className='w-[90%] md:container mx-auto'>
            <div className='skeleton h-12 w-48 rounded-lg my-5'></div>

            <div className='flex gap-10 flex-col md:flex-row'>

                <div className='skeleton w-full h-80 md:min-h-125 md:w-1/2 rounded-2xl'></div>

                <div className='w-full md:w-1/2 space-y-2 mt-4 md:mt-0'>

                    <div className='skeleton h-10 w-3/4 rounded-lg mb-4'></div>

                    <div className='space-y-2 mb-5'>
                        <div className='skeleton h-4 w-full'></div>
                        <div className='skeleton h-4 w-5/6'></div>
                        <div className='skeleton h-4 w-4/6'></div>
                    </div>

                    <div className='flex gap-2 my-5'>
                        <div className='skeleton h-6 w-20 rounded-full'></div>
                        <div className='skeleton h-6 w-24 rounded-full'></div>
                    </div>

                    <div className='skeleton rounded-lg h-72 w-full my-5'></div>

                    <div className='my-10 space-y-3'>
                        <div className='skeleton h-6 w-40 rounded mb-4'></div>
                        <div className='skeleton h-4 w-full'></div>
                        <div className='skeleton h-4 w-full'></div>
                        <div className='skeleton h-4 w-11/12'></div>
                        <div className='skeleton h-4 w-3/4'></div>
                    </div>

                    <div className='flex gap-2 justify-around md:justify-start'>
                        <div className='skeleton h-12 w-32 rounded-lg'></div>
                        <div className='skeleton h-12 w-32 rounded-lg'></div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default WorkoutDetailsLoading;