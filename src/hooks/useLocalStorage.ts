import { IWorkout } from "@/app/types/workout";
import { getItem, setItem } from "@/lib/localStorage";

export const useLocalStorage = () => {

    const setValue = (key: string, value: IWorkout[]) => {
        setItem(key, JSON.stringify(value))
    }

    const getValues = (key: string): IWorkout[] => {
        const data = getItem(key)
        if (data !== null) {
            return JSON.parse(getItem(key))
        }
        return []



    }


    const getValue = (key: string): IWorkout[] => {
        const data = getItem(key);

        if (data) {
            try {
                return JSON.parse(data);
            } catch (e) {
                console.error(`Error parsing JSON for key "${key}"`, e);
                return []; 
            }
        }

        return []; // Fallback if data is empty or null
    }

    return [setValue, getValue] as const
}