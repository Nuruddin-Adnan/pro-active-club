import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div>
            <h1>I am from home</h1>
            <FontAwesomeIcon icon={faCoffee} />
        </div>
    );
};

export default Home;