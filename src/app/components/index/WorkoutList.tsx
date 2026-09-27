import React from 'react';
import WorkoutCard from '../shared/WorkoutCard';
import { getWorkouts } from '@/lib/workout';
import SearchInput from './WorkoutFilter';
import { WorkoutContext } from '@/context/WorkoutContext';
import { revalidatePath } from 'next/cache';
import RetryButton from './RetryButton';
import WorkoutFilter from './WorkoutFilter';


const WorkoutList = async () => {

    const { workouts, error } = await getWorkouts();


    return (
        < >

            {
                !error ?
                    <WorkoutFilter workouts={workouts} />
                    :
                    <div className="bg-error/15 border-error/40 text-error p-5 rounded-lg w-fit space-y-3 mx-auto flex flex-col items-center mt-10">
                        <p className='text-center'>Something went wrong! Could not load workouts.</p>
                        <RetryButton />
                    </div>
            }

        </>
    );
};

export default WorkoutList;