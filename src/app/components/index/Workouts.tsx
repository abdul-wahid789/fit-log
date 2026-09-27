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

                <Suspense fallback={<WorkoutSuspense />}>
                    <WorkoutList />
                </Suspense>
            

        </section>
    );
};

export default Workouts;