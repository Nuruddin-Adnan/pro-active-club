import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Exercise from '../Exercise/Exercise';
import User from '../User/User';

const Home = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div className='bg-slate-50 min-h-screen'>
            <div className="grid xl:grid-cols-4 grid-cols-1">
                <div className="col-span-3 2xl:px-40 md:px-10 px-5 lg:py-24 py-5">
                    <div className="logo text-red-500 font-bold uppercase text-4xl"><FontAwesomeIcon icon={faDumbbell} /> PRO-Active-club</div>
                    <h3 className="text-3xl font-semibold mt-10 mb-5">Select today’s exercise</h3>
                    <div className="exercise-container grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        {exercises.map(exercise => <Exercise exercise={exercise} key={exercise.id}></Exercise>)}
                    </div>
                </div>
                <div className="xl:px-5 px-3 py-10 w-full bg-white">
                    <User></User>

                    <div className='add-a-break mt-10'>
                        <h3 className='text-xl font-medium'>Add A Break</h3>
                        <div className='bg-slate-100 rounded-xl p-4 mt-5 text-center grid grid-cols-5'>
                            <button className='bg-white w-14 h-14 rounded-full font-medium mx-auto'>10s</button>
                            <button className='bg-white w-14 h-14 rounded-full font-medium mx-auto'>20s</button>
                            <button className='bg-white w-14 h-14 rounded-full font-medium mx-auto'>30s</button>
                            <button className='bg-white w-14 h-14 rounded-full font-medium mx-auto'>40s</button>
                            <button className='bg-white w-14 h-14 rounded-full font-medium mx-auto'>50s</button>
                        </div>
                    </div>

                    <div className='exercise-details mt-16'>
                        <h3 className='text-2xl font-medium'>Exercise Details</h3>
                        <div className='flex justify-between bg-slate-100 rounded-xl p-5 mt-5'>
                            <span className='text-xl font-medium'>Exercise time</span>
                            <span className='text-lg font-medium text-slate-500'>200 seconds</span>
                        </div>
                        <div className='flex justify-between bg-slate-100 rounded-xl p-5 mt-5'>
                            <span className='text-xl font-medium'>Break time</span>
                            <span className='text-lg font-medium text-slate-500'>15  seconds</span>
                        </div>
                    </div>

                    <button className='bg-red-500 hover:bg-red-600 text-white font-medium text-lg rounded-lg p-5 mt-16 w-full'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Home;