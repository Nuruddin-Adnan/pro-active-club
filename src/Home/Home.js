import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Exercise from '../Exercise/Exercise';

const Home = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div className='bg-slate-50 min-h-screen'>
            <div className="grid lg:grid-cols-4 lg:gap-0 gap-10">
                <div className="col-span-3 2xl:px-40 md:px-10 px-5 lg:py-24 py-5">
                    <div className="logo text-red-500 font-bold uppercase text-4xl"><FontAwesomeIcon icon={faDumbbell} /> PRO-Active-club</div>
                    <h3 className="text-3xl font-semibold mt-10 mb-5">Select today’s exercise</h3>
                    <div className="exercise-container grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        {exercises.map(exercise => <Exercise exercise={exercise} id={exercise.id}></Exercise>)}
                    </div>
                </div>
                <div className="col-span-1 md:px-10 px-5 py-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quisquam dolorum illum quos possimus quibusdam, ab animi nam ipsa perferendis quam totam ad obcaecati quo fugit quas, nulla natus corporis.
                </div>
            </div>
        </div>
    );
};

export default Home;