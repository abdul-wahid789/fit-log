import { IWorkout } from "@/app/types/workout"

const BASE_URL = "https://api.abcz.workers.dev/api/fitlog"


export const getWorkouts = async (): Promise<{ workouts: IWorkout[]; error: string | null }> => {
    const url = BASE_URL
    try {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Something went wrong! Status: ${res.status}`);
        }

        const data = await res.json()
        return { workouts: data, error: null }

    }
    catch (error) {
        console.error("Error fetching workouts:", error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return { workouts: [], error: errorMessage };
    }

}

export const getWorkoutDetails = async (id: string): Promise<{ workout: IWorkout | null, error: string | null }> => {
    const url = `${BASE_URL}/${id}`

    try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`)
        const data = await res.json()
        return { workout: data, error: null }

    }
    catch (error) {

        console.error(`Error loading workout ${id}:`, error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return { workout: null, error: errorMessage };
    }
}