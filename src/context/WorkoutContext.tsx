'use client'

import { IWorkout } from '@/app/types/workout';
import { IWorkoutContext } from '@/app/types/workoutContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import React, { ReactNode, useState, createContext, useEffect } from 'react';



export const WorkoutContext = createContext<IWorkoutContext>({
    planWorkouts: [], setPlanWorkouts: () => { },
    saveWorkouts: [], setSaveWorkouts: () => { },
    doneWorkouts: [], setDoneWorkouts: () => { },
    isPlanActive: true, setIsPlanActive: () => { },
    isLoaded: false
})


const WorkoutProvier = ({ children }: { children: ReactNode }) => {

    const [planWorkoutsLocal] = useLocalStorage('planWorkouts')
    const [saveWorkoutsLocal] = useLocalStorage('saveWorkouts')

    const [planWorkouts, setPlanWorkouts] = useState<IWorkout[]>([])
    const [saveWorkouts, setSaveWorkouts] = useState<IWorkout[]>([])
    const [doneWorkouts, setDoneWorkouts] = useState<IWorkout[]>([])
    const [isPlanActive, setIsPlanActive] = useState(true)

    const [isLoaded, setIsLoaded] = useState(false)

    const stateData = {
        planWorkouts, setPlanWorkouts,
        saveWorkouts, setSaveWorkouts,
        doneWorkouts, setDoneWorkouts,
        isPlanActive, setIsPlanActive,
        isLoaded
    }

    useEffect(() => {

        setTimeout(() => {
            setPlanWorkouts(planWorkoutsLocal)
            setSaveWorkouts(saveWorkoutsLocal)
            setIsLoaded(true)
        }, 0)

    }, [planWorkoutsLocal, saveWorkoutsLocal])

    return (
        <WorkoutContext.Provider value={stateData}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvier;