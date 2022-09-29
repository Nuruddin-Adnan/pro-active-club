import React from 'react';

const QuestionAnswer = () => {
    return (
        <div className="questionAnswerContainer">
            <h3 className="text-3xl font-semibold mt-10 mb-5">React question & Answer</h3>
            <div className='bg-white rounded-lg p-5 border mb-5'>
                <h3 className="font-bold text-xl mb-3 text-red-500">How does react work?</h3>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p>
            </div>
            <div className='bg-white rounded-lg p-5 border mb-5'>
                <h3 className="font-bold text-xl mb-3 text-red-500">Difference between props and state?</h3>
                <h3 className="font-bold text-lg mb-1">State</h3>
                <p className="mb-3">The state is a set of variables that determine the current condition of the component. The state of a component is internal, i.e., defined inside the component and changeable only within the component. Any change in state renders the component again.</p>
                <h3 className="font-bold text-lg mb-1">Props</h3>
                <p className="mb-3">Props is short for properties. It is the set of attributes that are passed from a parent component to a child component. These can be data variables or functions.
                    <br /><br />
                    Props are primarily used to communicate between parent and child components. Moreover, props cannot be altered inside the child component.</p>
            </div>
            <div className='bg-white rounded-lg p-5 border mb-5'>
                <h3 className="font-bold text-xl mb-3 text-red-500">Why using the useEffect Hook in React</h3>
                <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects</p>
            </div>
        </div>
    );
};

export default QuestionAnswer;