'use client'

import { IWorkout } from '@/app/types/workout';
import { IWorkoutContext } from '@/app/types/workoutContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { setItem } from '@/lib/localStorage';
import React, { ReactNode, useState, createContext, useEffect } from 'react';



export const WorkoutContext = createContext<IWorkoutContext>({
    planWorkouts: [], setPlanWorkouts: () => { },
    saveWorkouts: [], setSaveWorkouts: () => { },
    doneWorkouts: [], setDoneWorkouts: () => { },
    isPlanActive: true, setIsPlanActive: () => { }
})


const WorkoutProvier = ({ children }: { children: ReactNode }) => {

    const [setValue, getValue] = useLocalStorage()


    const [planWorkouts, setPlanWorkouts] = useState<IWorkout[]>(getValue("planWorkouts"))
    const [saveWorkouts, setSaveWorkouts] = useState<IWorkout[]>(getValue("saveWorkouts"))
    const [doneWorkouts, setDoneWorkouts] = useState<IWorkout[]>(getValue("doneWorkouts"))
    const [isPlanActive, setIsPlanActive] = useState(true)


    const stateData = {
        planWorkouts, setPlanWorkouts,
        saveWorkouts, setSaveWorkouts,
        doneWorkouts, setDoneWorkouts,
        isPlanActive, setIsPlanActive
    }


    setItem("planWorkouts", JSON.stringify(planWorkouts))


    return (
        <WorkoutContext.Provider value={stateData}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvier;