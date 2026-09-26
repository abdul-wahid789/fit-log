import { IWorkout } from "@/app/types/workout";
import { getItem, setItem } from "@/lib/localStorage";
import { useEffect, useState } from "react";

export const useLocalStorage = (key: 'saveWorkouts' | 'planWorkouts', initialValue: IWorkout[] = []) => {

    const [localValue, setLocalValue] = useState<IWorkout[]>(initialValue);

    const saveData = (value: IWorkout[]) => {
        setLocalValue(value)
        setItem(key, JSON.stringify(value))
    }

    useEffect(() => {
        const data = getItem(key)
        if (data) {
            setLocalValue(JSON.parse(data))
        }
    }, [key])


    return [localValue, saveData] as const;
}