import WorkData from '@/app/components/workdetails/WorkData';
import { IWorkout } from '@/app/types/workout';
import { getWorkoutDetails } from '@/lib/workout';
import Image from 'next/image';
import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { MdAddTask } from 'react-icons/md';

const WorkOutDetails = async ({ params }) => {
    const { workoutid } = await params
    const { workout } = await getWorkoutDetails(workoutid)
    const workDatas = ["equipment", "difficulty", "sets", "reps", "duration", "caloriesBurned", "rating"]
    return (
        <div>
            {workout && (
                <div className='flex container mx-auto gap-10'>
                    <div className='w-1/2 rounded-2xl overflow-hidden relative'>
                        <Image src={workout.image} alt={workout.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-3xl font-bold'>{workout.name}</h1>
                        <p>{workout.description}</p>
                        <div className='flex gap-2 my-5'>
                            {(workout.muscleGroups).map((muscle, i) =>
                                <p className='px-5 badge-accent badge' key={i}>{muscle}</p>)}
                        </div>
                        <div className='bg-base-300 rounded-lg border my-5 overflow-hidden'>

                            <WorkData name="EQUIPMENT" value={`${workout.equipment}`} />
                            <WorkData name="DIFFICULTY" value={`${workout.difficulty}`} />
                            <WorkData name="SETS" value={`${workout.sets}`} />
                            <WorkData name="REPS" value={`${workout.reps}`} />
                            <WorkData name="DURATION" value={`${workout.duration} min`} />
                            <WorkData name="CALORIES" value={`${workout.caloriesBurned} kcal`} />
                            <WorkData name="RATING" value={`${workout.rating}`} />

                        </div>
                        <div className='my-10'>
                            <h1 className='text-xl'>INSTRUCTIONS</h1>
                            <ol className="list-decimal list-inside space-y-2 mt-2">
                                {
                                    workout.instructions.map((ins, i) => <li key={i}>{ins}</li>)
                                }
                            </ol>
                        </div>

                        <div className='flex gap-2'>
                            <button className='btn btn-accent'><MdAddTask />Add to today&apos;s plan</button>
                            <button className='btn btn-outline'><CiBookmark />Save for later</button>
                        </div>

                    </div>
                </div>
            )
            }
        </div>
    )
};

export default WorkOutDetails;