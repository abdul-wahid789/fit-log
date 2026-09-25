"use client"

import { IWorkout } from '@/app/types/workout';
import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { Bounce, toast } from 'react-toastify';

const SaveButton = ({ workout }: { workout: IWorkout }) => {

    const { saveWorkouts, setSaveWorkouts } = useContext(WorkoutContext)
    const handelSaveClick = () => {

        if (saveWorkouts.some(saveWorkout => saveWorkout.id === workout.id)) {
            toast.warn(`${workout.name} Already Saved`, {
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
            setSaveWorkouts([...saveWorkouts, workout])
            toast.success(`${workout.name} Add to Save`, {
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
        <button className='btn btn-outline' onClick={handelSaveClick}><CiBookmark />Save for later</button>
    );
};

export default SaveButton;