"use client"
import { IWorkout } from '@/app/types/workout';
import { IWorkoutContext } from '@/app/types/workoutContext';
import { WorkoutContext } from '@/context/WorkoutContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { MdDone } from 'react-icons/md';
import { Bounce, toast } from 'react-toastify';

const ButtonAction = ({ workout }: { workout: IWorkout }) => {
    const value = useContext<IWorkoutContext>(WorkoutContext)

    const handelMarkClick = () => {

        const workouts = value.planWorkouts.filter(planW => planW.id !== workout.id)
        value.setPlanWorkouts(workouts)

        toast.success(`${workout.name} Done`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }

    const handelRemove = () => {
        let workouts = []
        if (value.isPlanActive) {
            workouts = value.planWorkouts.filter(planW => planW.id !== workout.id)
            value.setPlanWorkouts(workouts)
        }
        else {
            workouts = value.saveWorkouts.filter(planW => planW.id !== workout.id)
            value.setSaveWorkouts(workouts)
        }

        toast.error(`${workout.name} Removed`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });

    }


    return (
        <div className="space-x-3 flex items-center">
            <Link href={`/workout/${workout.id}`}><button className="btn btn-outline rounded-full text-primary-content">View Details</button></Link>

            {value.isPlanActive && <button onClick={handelMarkClick} className="btn btn-accent rounded-full "><MdDone />Mark as Done</button>}
            <IoIosCloseCircle onClick={handelRemove} size="2rem" className="cursor-pointer hover:text-error/80 text-error" />

        </div>
    );
};

export default ButtonAction;