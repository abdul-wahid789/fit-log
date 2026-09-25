"use client"
import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';

const PlanCount = () => {
    const {planWorkouts} = useContext(WorkoutContext)
    return (
        <span className='ml-1 bg-accent text-base-100 rounded-full px-1'>{planWorkouts.length}</span>
    );
};

export default PlanCount;