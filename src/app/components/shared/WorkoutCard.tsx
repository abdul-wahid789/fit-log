import { IWorkout } from '@/app/types/workout';
import Image from 'next/image';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaClock, FaFire } from 'react-icons/fa';

interface props {
    workout: IWorkout
}

const WorkoutCard = ({ workout }: props) => {
    return (
        <div className='rounded-xl bg-base-300 overflow-hidden
        border border-transparent
        hover:ring-1 hover:ring-accent cursor-pointer
        hover:transition hover:duration-150'
    >

            <div className="relative w-full h-44 overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                />
            </div>
            <div className='p-5 space-y-2 '>
                <div className='flex gap-2'>
                    {(workout.muscleGroups).map((muscle, i) =>
                        <p className='badge-accent badge' key={i}>{muscle}</p>)}
                </div>
                <h2 className='text-xl text-white'>{workout.name}</h2>
                <p className='flex items-center font-light'>{workout.equipment}</p>
                <div className='divider'></div>
                <div className='text-sm flex space-x-3 font-light'>
                    <p className='flex items-center gap-1'><FaClock />{workout.duration} min</p>
                    <p className='flex items-center gap-1'><FaFire />{workout.caloriesBurned} min</p>
                    <p className='flex items-center gap-1'><CiStar />{workout.rating} min</p>

                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;