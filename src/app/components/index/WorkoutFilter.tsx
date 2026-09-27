"use client"

import { IWorkout } from '@/app/types/workout';
import React, { useState } from 'react';
import WorkoutCard from '../shared/WorkoutCard';

const WorkoutFilter = ({ workouts }: { workouts: IWorkout[] }) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const handelSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value.toLowerCase())
    }

    const filteredWorkouts = workouts.filter(workout => {
        const name = workout.name.toLowerCase().includes(searchValue)
        const muscle = workout.muscleGroups.join(", ").toLowerCase().includes(searchValue)
        return name || muscle
    })

    return (
        <div className='w-[90%] lg:w-full mx-auto '>
            <div className='flex mt-10 lg:-mt-10 items-center justify-end'>
                <label className="input text-accent border-accent/50">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input
                        value={searchValue}
                        onChange={handelSearch}
                        type="search" className="grow text-accent" placeholder="Name or Tag" />
                </label>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                {filteredWorkouts.slice(0, 12).map(workout => <WorkoutCard key={workout.id} workout={workout} />)}
            </div>
        </div>
    );
};

export default WorkoutFilter;