"use client"

import { IWorkout } from '@/app/types/workout';
import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { MdAddTask } from 'react-icons/md';
import { Bounce, toast } from 'react-toastify';

const PlanButton = ({ workout }: {workout: IWorkout}) => {

    const { planWorkouts, setPlanWorkouts } = useContext(WorkoutContext)
    const handelPlanClick = () => {
        if (planWorkouts.some(planWorkout => planWorkout.id === workout.id)) {
            toast.warn(`${workout.name} Already in Plan`, {
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
        else {
            setPlanWorkouts([...planWorkouts, workout])
            toast.success(`${workout.name} Add to Plan`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    return (
        <button className='btn btn-accent' onClick={handelPlanClick}><MdAddTask />Add to today&apos;s plan</button>
    );
};

export default PlanButton;