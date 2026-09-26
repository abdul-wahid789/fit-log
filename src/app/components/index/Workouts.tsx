import React, { Suspense } from 'react';
import WorkoutList from './WorkoutList';
import WorkoutSuspense from '../loading/index/workouts';

const Workouts = async () => {
    return (
        <section className='container mx-auto' id="library">
            <div className='space-y-2 text-center lg:text-left'>
                <h1 className='text-2xl font-bold'>THE LIBRARY</h1>
                <p>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='w-[90%] lg:w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-4 mt-10'>
                <Suspense fallback={<WorkoutSuspense />}>
                    <WorkoutList />
                </Suspense>
            </div>

        </section>
    );
};

export default Workouts;