import React from 'react';

const WorkoutSuspense = () => {
    return (
        <>
            <div className='rounded-xl bg-base-300 overflow-hidden
                            border border-transparent
                            hover:ring-1 hover:ring-accent cursor-pointer
                            hover:transition hover:duration-150'
            >
                <div className="skeleton relative w-full h-44 overflow-hidden">
                </div>
                <div className='p-5 space-y-2 '>
                    <div className='flex gap-2  '>
                        <p className='skeleton h-4 w-8'> </p>
                    </div>
                    <h2 className='text-xl text-white skeleton h-8 w-28'></h2>
                    <p className='flex items-center font-light skeleton h-4 w-15'></p>
                    <div className='divider'></div>
                    <div className='text-sm flex space-x-3 font-light'>
                        <p className='flex items-center gap-1 skeleton h-4 w-10'></p>
                        <p className='flex items-center gap-1 skeleton h-4 w-10'></p>
                        <p className='flex items-center gap-1 skeleton h-4 w-10'></p>

                    </div>
                </div>
            </div>
            <div className='rounded-xl bg-base-300 overflow-hidden
                            border border-transparent
                            hover:ring-1 hover:ring-accent cursor-pointer
                            hover:transition hover:duration-150'
            >
                <div className="skeleton relative w-full h-44 overflow-hidden">
                </div>
                <div className='p-5 space-y-2 '>
                    <div className='flex gap-2  '>
                        <p className='skeleton h-4 w-8'> </p>
                    </div>
                    <h2 className='text-xl text-white skeleton h-8 w-28'></h2>
                    <p className='flex items-center font-light skeleton h-4 w-15'></p>
                    <div className='divider'></div>
                    <div className='text-sm flex space-x-3 font-light'>
                        <p className='flex items-center gap-1 skeleton h-4 w-10'></p>
                        <p className='flex items-center gap-1 skeleton h-4 w-10'></p>
                        <p className='flex items-center gap-1 skeleton h-4 w-10'></p>

                    </div>
                </div>
            </div>
            <div className='rounded-xl bg-base-300 overflow-hidden
                            border border-transparent
                            hover:ring-1 hover:ring-accent cursor-pointer
                            hover:transition hover:duration-150'
            >
                <div className="skeleton relative w-full h-44 overflow-hidden">
                </div>
                <div className='p-5 space-y-2 '>
                    <div className='flex gap-2  '>
                        <p className='skeleton h-4 w-8'> </p>
                    </div>
                    <h2 className='text-xl text-white skeleton h-8 w-28'></h2>
                    <p className='flex items-center font-light skeleton h-4 w-15'></p>
                    <div className='divider'></div>
                    <div className='text-sm flex space-x-3 font-light'>
                        <p className='flex items-center gap-1 skeleton h-4 w-10'></p>
                        <p className='flex items-center gap-1 skeleton h-4 w-10'></p>
                        <p className='flex items-center gap-1 skeleton h-4 w-10'></p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkoutSuspense;