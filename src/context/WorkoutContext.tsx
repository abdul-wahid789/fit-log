'use client'

import { IWorkout } from '@/app/types/workout';
import { IWorkoutContext } from '@/app/types/workoutContext';
import React, { ReactNode, useState, createContext } from 'react';



export const WorkoutContext = createContext<IWorkoutContext>({
    planWorkouts: [], setPlanWorkouts: () => { },
    saveWorkouts: [], setSaveWorkouts: () => { },
    doneWorkouts: [], setDoneWorkouts: () => { }
})


const WorkoutProvier = ({ children }: { children: ReactNode }) => {

    const [planWorkouts, setPlanWorkouts] = useState<IWorkout[]>([])
    const [saveWorkouts, setSaveWorkouts] = useState<IWorkout[]>([])
    const [doneWorkouts, setDoneWorkouts] = useState<IWorkout[]>([])

    const stateData = {
        planWorkouts, setPlanWorkouts,
        saveWorkouts, setSaveWorkouts,
        doneWorkouts, setDoneWorkouts
    }

    return (
        <WorkoutContext.Provider value={stateData}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvier;