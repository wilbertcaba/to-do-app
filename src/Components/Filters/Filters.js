import React from 'react';
import './Filters.css';

export const Filters = (props) => {

    // Concept:
    // const handleFilterResolved = () => {
    //     props.onFilterResolved(props.status);
    // };

    return (
        <div className='btn-group'>
            <button className='active'>All Tasks</button>
            {/* <button onClick={handleFilterResolved}>Resolved</button> */}
            <button>Resolved</button>
            <button>Unresolved</button>
        </div>
    )
};
