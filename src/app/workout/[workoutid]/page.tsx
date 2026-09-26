
import PlanButton from '@/app/components/workoutdetails/PlanButton';
import SaveButton from '@/app/components/workoutdetails/SaveButton';
import WorkData from '@/app/components/workoutdetails/WorkData';

import { getWorkoutDetails } from '@/lib/workout';
import Image from 'next/image';
import Link from 'next/link';

import { IoMdArrowRoundBack } from 'react-icons/io';

type WorkOutDetailsProps = {
    params: Promise<{ workoutid: string }>;
};

const WorkOutDetails = async ({ params }: WorkOutDetailsProps) => {

    const { workoutid } = await params
    const { workout } = await getWorkoutDetails(workoutid)

    return (
        <div className='w-[90%] md:container mx-auto'>
            <Link href={"/"}><button className='btn btn-accent items-center my-5'><IoMdArrowRoundBack />Workout Libray</button></Link>
            {workout && (
                <div className='flex gap-10 flex-col md:flex-row'>

                    <div className='w-full h-80 md:h-auto md:w-1/2 rounded-2xl overflow-hidden relative'>
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
                        <div className='bg-base-300 rounded-lg border my-5 overflow-hidden divide-y'>

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

                        <div className='flex gap-2 justify-around md:justify-start'>
                            <PlanButton workout={workout} />
                            <SaveButton workout={workout} />
                        </div>

                    </div>
                </div>
            )
            }

        </div>

    )
};

export default WorkOutDetails;