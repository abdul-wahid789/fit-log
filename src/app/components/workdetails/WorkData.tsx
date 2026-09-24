import React from 'react';

const WorkData = ({ name, value }) => {
    return (
        <div className='flex justify-between border-b p-5'>
            <h3>{name}</h3>
            <p className='text-white font-light'>{value}</p>
        </div>
    );
};

export default WorkData;