import { Dispatch, SetStateAction } from "react";
import { IWorkout } from "./workout";

export interface IWorkoutContext {
    planWorkouts: IWorkout[], setPlanWorkouts: Dispatch<SetStateAction<IWorkout[]>>,
    saveWorkouts: IWorkout[], setSaveWorkouts: Dispatch<SetStateAction<IWorkout[]>>,
    doneWorkouts: IWorkout[], setDoneWorkouts: Dispatch<SetStateAction<IWorkout[]>>,
    isPlanActive: boolean, setIsPlanActive: Dispatch<SetStateAction<boolean>>
}
