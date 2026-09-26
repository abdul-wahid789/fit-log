import React from 'react';

const WorkData = ({ name, value }:{name: string, value: string}) => {
    return (
        <div className='flex justify-between bosrder-b p-5'>
            <h3>{name}</h3>
            <p className='text-white font-light'>{value}</p>
        </div>
    );
};

export default WorkData;