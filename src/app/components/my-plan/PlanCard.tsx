import { IWorkout } from "@/app/types/workout";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { MdDone } from "react-icons/md";
import MarkDone from "./ButtonAction";
import ButtonAction from "./ButtonAction";

export interface PlanCardProps {
    workout: IWorkout
}

const PlanCard = ({ workout }: PlanCardProps) => {


    return (
        <div className="flex justify-between items-center gap-3 bg-base-300 p-3 rounded-lg">
            <div className="flex gap-4 items-stretch">
                <div className=" relative w-24 min-h-full  object-center object-cover rounded-lg overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={"workout.name"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="space-y-2">
                    <h1>{workout.name.toUpperCase()}</h1>
                    <p className="text-sm font-light">{workout.equipment}</p>

                    <div className='text-sm flex space-x-3 font-light '>
                        <p className='flex items-center gap-1'><FaClock className="text-accent" />{workout.duration} min</p>
                        <p className='flex items-center gap-1'><FaFire className="text-accent" />{workout.caloriesBurned} kcal</p>
                        <p className='flex items-center gap-1'><FaStar className="text-accent" />{workout.rating}</p>

                    </div>
                </div>
            </div>

            <ButtonAction workout={workout} />

        </div>
    )
}

export default PlanCard;