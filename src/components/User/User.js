import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const User = () => {
    return (
        <div className="user-info">
            <div className="flex items-center">
                <div className='mr-3 shrink-0'>
                    <img src="https://avatars.githubusercontent.com/u/100690235?s=400&u=79b042e6dd06572650f3de77d1492b9abcf7bad6&v=4" alt="user pic" className='w-16 h-16 rounded-2xl' />
                </div>
                <div>
                    <h3 className='text-xl font-medium text-truncate overflow-hidden '>Md. Adnan</h3>
                    <p className='text-slate-600'><FontAwesomeIcon icon={faLocationDot} /> Dhaka, Bangladesh</p>
                </div>
            </div>

            <div className='bg-slate-100 rounded-xl p-4 mt-8'>
                <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                        <h3 className='text-2xl font-bold'>75<sub className='text-slate-500 bottom-0 font-normal'>kg</sub></h3>
                        <h4 className='text-xl text-slate-500'>Weight</h4>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>6.5</h3>
                        <h4 className='text-xl text-slate-500'>Height</h4>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>25<sub className='text-slate-500 bottom-0 font-normal'>yrs</sub></h3>
                        <h4 className='text-xl text-slate-500'>Age</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;