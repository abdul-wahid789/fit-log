"use client"

import { useContext, useState } from 'react';
import PlanCard from '../components/my-plan/PlanCard';
import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkoutContext } from '../types/workoutContext';
import Link from 'next/link';

const MyPlanPage = () => {
    const [sortValue, setSortValue] = useState<string>("Duration")
    const value = useContext<IWorkoutContext>(WorkoutContext)


    const handelTabClick = () => {
        value.setIsPlanActive(!value.isPlanActive)

    }

    const workouts = value.isPlanActive ? value.planWorkouts : value.saveWorkouts

    const handelSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortValue(e.target.value)
    }

    const sortedWorkouts = [...workouts].sort((a, b) => {
        if (sortValue === "duration") {
            return a.duration - b.duration;
        }
        if (sortValue === "caloriesBurned") {
            return a.caloriesBurned - b.caloriesBurned;
        }
        if (sortValue === "rating") {
            return a.rating - b.rating;
        }
        return 0;
    });

    return (
        <section className="container mx-auto">
            <h1 className='text-4xl font-bold'>MY PLAN</h1>
            <p>Cap of five lifts for today. Finish them, then load more.</p>
            <div className='bg-base-300 rounded-2xl overflow-hidden border p-5 mt-5 *:w-full divide-x text-center flex justify-between'>
                <div >
                    <h3>Exercise</h3>
                    <p className='text-accent text-4xl font-bold'>{sortedWorkouts.length}</p>
                </div>
                <div>
                    <h3>Minutes</h3>
                    <p className='text-primary-content text-4xl font-bold'>{sortedWorkouts.reduce((sum, planWorkout) => sum += planWorkout.duration, 0)}</p>
                </div>
                <div>
                    <h3>Calories</h3>
                    <p className='text-primary-content text-4xl font-bold'>{sortedWorkouts.reduce((sum, planWorkout) => sum += planWorkout.caloriesBurned, 0)}</p>
                </div>
            </div>


            {/* data short  */}

            <div className='flex items-center justify-between'>

                <div className='bg-base-300 w-fit flex gap-3 items-center text-primary-content rounded-2xl px-2 py-2 my-10 border-base-300 border'>
                    <button onClick={handelTabClick} className={value.isPlanActive ? "btn btn-accent border rounded-l-2xl transition duration-150" : "cursor-pointer"}>
                        Today&apos;s Plan
                    </button>
                    <button onClick={handelTabClick} className={value.isPlanActive ? "cursor-pointer" : "btn btn-accent border rounded-r-2xl transition duration-150"}>
                        Saved
                    </button>
                </div>


                <div className='flex items-center text-lg gap-3'>
                    <p className='shrink-0 text-primary-content'>Sort By</p>
                    <select  className="text-lg select select-accent w-25 text-accent"
                        onChange={handelSort}
                        value={sortValue}
                    >
                        <option value="duration" className='hover:bg-accent hover:text-base-100'>Duration</option>
                        <option value="caloriesBurned" className='hover:bg-accent hover:text-base-100'>Calories</option>
                        <option value="rating" className='hover:bg-accent hover:text-base-100'>Rating</option>
                    </select>
                </div>




            </div>

            {/* PlanList  */}

            <div className='space-y-3'>
                {
                    sortedWorkouts.length ? (
                        sortedWorkouts.map(workout => <PlanCard key={workout.id}
                            workout={workout} />)
                    ) :
                        <div className='bg-base-300 rounded-xl text-center w-fit p-5 space-y-4 mx-auto'>
                            <h1 className='text-2xl font-bold'>NOTHING HERE YET</h1>
                            <p>Browse the library and add a lift to get today moving</p>
                            <Link href="/">
                                <button className='btn btn-accent'>Go to workouts</button>
                            </Link>
                        </div>
                }
                {

                }
            </div>

        </section>
    );
};

export default MyPlanPage;