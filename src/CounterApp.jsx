import { useState } from 'react';
import ProTypes, { string } from 'prop-types';

export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState( value );
    // Add
    const handleAdd = () => {
        // setCounter( counter + 1);
        setCounter((c) => c + 1);
    }
    // Sustract
    const handleSustract = () => {
        // setCounter( counter - 1);
        setCounter((c) => c - 1);
    }
    // Reset Value
    const handleReset = () => {
        // setCounter( counter = value);
        setCounter((c) => c = value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSustract }>-1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    )
}

CounterApp.ProTypes = {
    value: ProTypes.number.isRequired
}