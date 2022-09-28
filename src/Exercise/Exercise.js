import React from 'react';

const Exercise = ({ exercise }) => {
    const { id, img, activityName, description, ageLimit, time } = exercise;
    return (
        <div className='bg-white rounded-lg p-5 border'>
            <img src={img} alt="exercise pic" className='rounded' />
            <h3 className='text-2xl font-semibold py-4'>{activityName}</h3>
            <p className='text-base text-slate-500 font-normal'>{description}</p>
            <p className='text-xl'>For Age: <strong>{ageLimit}</strong></p>
            <p>Time required :  <span>{time}</span></p>
        </div>
    );
};

export default Exercise;