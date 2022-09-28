import React, { useState } from 'react';

const Exercise = ({ exercise, handleExerciseTime }) => {
    const [buttonAddedStatus, setButtonAddedStatus] = useState(false);

    const handleEvent = (time) => {
        handleExerciseTime(time);
        handleButtonAddedStatus();
    }

    const handleButtonAddedStatus = () => setButtonAddedStatus(true)

    const { img, activityName, description, ageLimit, time } = exercise;

    return (
        <div className='bg-white rounded-lg p-5 pb-24 border relative'>
            <img src={img} alt="exercise pic" className='rounded-lg w-full max-h-40 object-cover' />
            <h3 className='text-2xl font-semibold py-4'>{activityName}</h3>
            <p className='text-base text-slate-500 font-normal'>{description}</p>
            <p className='text-base pt-3 pb-1'>For Age: <span className='font-medium'>{ageLimit}</span></p>
            <p className='text-base'>Time required :  <span className='font-medium'>{time}</span></p>

            {
                buttonAddedStatus === false ?
                    <button onClick={() => handleEvent(time)} className='bg-red-500 hover:bg-red-600 text-white font-medium text-lg rounded-lg p-3 absolute bottom-5 left-2/4' style={{ transform: 'translateX(-50%)', width: 'calc(100% -  40px)' }}>Add to list</button>
                    :
                    <button onClick={() => handleEvent(time)} className='bg-green-500 hover:bg-green-600 text-white font-medium text-lg rounded-lg p-3 absolute bottom-5 left-2/4' style={{ transform: 'translateX(-50%)', width: 'calc(100% -  40px)' }}>Added</button>
            }


        </div>
    );
};

export default Exercise;