import React from 'react';
import { getWorkouts } from '@/lib/workout';
import WorkoutCard from '../shared/WorkoutCard';

const Workouts = async () => {
    const { workouts, error } = await getWorkouts()
    return (
        <section className='container mx-auto' id="library">
            <div className='space-y-2'>
                <h1 className='text-2xl font-bold'>THE LIBRARY</h1>
                <p>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid grid-cols-3 grid-rows-4 gap-4 mt-10'>
                {
                    !error ? workouts.slice(0, 12).map(workout => <WorkoutCard key={workout.id}
                        workout={workout} />)
                        : <div role="alert" className="alert alert-error bg-error/15 border-error/40 text-error">
                            <span>Something went wrong! Could not load workouts.</span>
                        </div>
                }
            </div>
        </section>
    );
};

export default Workouts;