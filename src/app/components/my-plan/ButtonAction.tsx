"use client"
import { IWorkout } from '@/app/types/workout';
import { IWorkoutContext } from '@/app/types/workoutContext';
import { WorkoutContext } from '@/context/WorkoutContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Link from 'next/link';
import React, { useContext } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { MdDone } from 'react-icons/md';
import { showErrorToast, showSuccessToast } from '../shared/toast/Toast';

const ButtonAction = ({ workout }: { workout: IWorkout }) => {

    const value = useContext<IWorkoutContext>(WorkoutContext)
    const [, setPlanLocalData] = useLocalStorage('planWorkouts')
    const [, setSaveLocalData] = useLocalStorage('saveWorkouts')

    const handelMarkClick = () => {

        const workouts = value.planWorkouts.filter(planW => planW.id !== workout.id)
        value.setPlanWorkouts(workouts)
        setPlanLocalData(workouts)

        showSuccessToast(`${workout.name} Done`)


    }

    const handelRemove = () => {
        let workouts = []
        if (value.isPlanActive) {
            workouts = value.planWorkouts.filter(planW => planW.id !== workout.id)
            value.setPlanWorkouts(workouts)
            setPlanLocalData(workouts)
        }
        else {
            workouts = value.saveWorkouts.filter(planW => planW.id !== workout.id)
            value.setSaveWorkouts(workouts)
            setSaveLocalData(workouts)
        }

        showErrorToast(`${workout.name} Removed`)


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