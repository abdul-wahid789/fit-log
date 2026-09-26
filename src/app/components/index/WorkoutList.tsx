import React from 'react';
import WorkoutCard from '../shared/WorkoutCard';
import { getWorkouts } from '@/lib/workout';

const WorkoutList = async () => {
    const { workouts, error } = await getWorkouts()

    return (
        < >
            {
                !error ? workouts.map(workout => <WorkoutCard key={workout.id}
                    workout={workout} />)
                    : <div className="bg-error/15 border-error/40 text-error py-3 rounded-lg">
                        <p className='text-center'>Something went wrong! Could not load workouts.</p>
                    </div>
            }

        </>
    );
};

export default WorkoutList;