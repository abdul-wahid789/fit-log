"use client"

import { IWorkout } from '@/app/types/workout';
import { WorkoutContext } from '@/context/WorkoutContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import React, { useContext } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { showSuccessToast, showWarnToast } from '../shared/toast/Toast';

const SaveButton = ({ workout }: { workout: IWorkout }) => {

    const { saveWorkouts, setSaveWorkouts } = useContext(WorkoutContext)
    const [, setSaveLocalData] = useLocalStorage('saveWorkouts')

    const handelSaveClick = () => {

        if (saveWorkouts.some(saveWorkout => saveWorkout.id === workout.id)) {

            showWarnToast(`${workout.name} Already Saved`)


        }
        else {

            const newWorkouts = [...saveWorkouts, workout]
            setSaveWorkouts(newWorkouts)
            setSaveLocalData(newWorkouts)

            showSuccessToast(`${workout.name} Add to Save`)

        }
    }

    return (
        <button className='btn btn-outline' onClick={handelSaveClick}><CiBookmark />Save for later</button>
    );
};

export default SaveButton;