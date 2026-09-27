"use client"

import { IWorkout } from '@/app/types/workout';
import { WorkoutContext } from '@/context/WorkoutContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import React, { useContext } from 'react';
import { MdAddTask } from 'react-icons/md';
import { showSuccessToast, showWarnToast } from '../shared/toast/Toast';

const PlanButton = ({ workout }: { workout: IWorkout }) => {

    const { planWorkouts, setPlanWorkouts } = useContext(WorkoutContext)
    const [, setPlanLocalData] = useLocalStorage('planWorkouts')

    const handelPlanClick = () => {
        if (planWorkouts.some(planWorkout => planWorkout.id === workout.id)) {

            showWarnToast(`${workout.name} Already in Plan`)
        }

        else if (planWorkouts.length >= 5) {

            showWarnToast(`Plan already contains 5 workouts`)
        }

        else {

            const newWorkouts = [...planWorkouts, workout]

            setPlanWorkouts(newWorkouts)

            setPlanLocalData(newWorkouts)

            showSuccessToast(`${workout.name} Add to Plan`)

        }
    }

    return (
        <button className={'btn btn-accent'}
            onClick={handelPlanClick}><MdAddTask />
            Add to today&apos;s plan
        </button>
    );
};

export default PlanButton;