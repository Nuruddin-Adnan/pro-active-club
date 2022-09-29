import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Exercise from '../Exercise/Exercise';
import User from '../User/User';
import QuestionAnswer from '../../QuestionAnswer/QuestionAnswer';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [exerciseTime, setExerciseTime] = useState(0);
    const [breakTime, setBreakTime] = useState(0);


    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    useEffect(() => {
        const storedBreakTime = localStorage.getItem('break-time');
        if (storedBreakTime) {
            setBreakTime(storedBreakTime);
        }
    }, [breakTime])

    const handleExerciseTime = time => setExerciseTime(exerciseTime + time);

    const handleBreakTime = (time) => {
        setBreakTime(time);
        localStorage.setItem('break-time', time);
    };


    // push notification 
    const notify = () => {
        toast.success('Activity Completed', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        });
    };

    return (
        <div className='bg-slate-50 min-h-screen'>
            <div className="grid xl:grid-cols-4 grid-cols-1">
                <div className="col-span-3 2xl:px-40 md:px-10 px-5 lg:py-24 py-5">
                    <div className="logo text-red-500 font-bold uppercase text-4xl"><FontAwesomeIcon icon={faDumbbell} /> PRO-Active-club</div>
                    <h3 className="text-3xl font-semibold mt-10 mb-5">Select today’s exercise</h3>
                    <div className="exercise-container grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        {exercises.map(exercise => <Exercise exercise={exercise} handleExerciseTime={handleExerciseTime} key={exercise.id}></Exercise>)}
                    </div>
                    <QuestionAnswer></QuestionAnswer>
                </div>
                <div className="xl:px-5 px-3 py-10 w-full bg-white">
                    <User></User>
                    <div className="sticky top-0">
                        <div className='add-a-break mt-10'>
                            <h3 className='text-xl font-medium'>Add A Break</h3>
                            <div className='bg-slate-100 rounded-xl p-4 mt-5 text-center grid grid-cols-5'>
                                <button onClick={() => handleBreakTime(10)} className='bg-white w-12 h-12 2xl:w-14 2xl:h-14 rounded-full font-medium mx-auto'>10s</button>
                                <button onClick={() => handleBreakTime(20)} className='bg-white w-12 h-12 2xl:w-14 2xl:h-14 rounded-full font-medium mx-auto'>20s</button>
                                <button onClick={() => handleBreakTime(30)} className='bg-white w-12 h-12 2xl:w-14 2xl:h-14 rounded-full font-medium mx-auto'>30s</button>
                                <button onClick={() => handleBreakTime(40)} className='bg-white w-12 h-12 2xl:w-14 2xl:h-14 rounded-full font-medium mx-auto'>40s</button>
                                <button onClick={() => handleBreakTime(50)} className='bg-white w-12 h-12 2xl:w-14 2xl:h-14 rounded-full font-medium mx-auto'>50s</button>
                            </div>
                        </div>
                        <div className='exercise-details mt-16'>
                            <h3 className='text-2xl font-medium'>Exercise Details</h3>
                            <div className='flex justify-between bg-slate-100 rounded-xl p-5 mt-5'>
                                <span className='text-xl font-medium'>Exercise time</span>
                                <span className='text-lg font-medium text-slate-500'><span className="text-red-500">{exerciseTime}</span> seconds</span>
                            </div>
                            <div className='flex justify-between bg-slate-100 rounded-xl p-5 mt-5'>
                                <span className='text-xl font-medium'>Break time</span>
                                <span className='text-lg font-medium text-slate-500'><span className="text-red-500">{breakTime}</span>  seconds</span>
                            </div>
                        </div>
                        <button onClick={notify} className='bg-red-500 hover:bg-red-600 text-white font-medium text-lg rounded-lg p-5 mt-16 w-full'>Activity Completed</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Home;