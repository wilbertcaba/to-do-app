import React from 'react';
import './Filters.css';

export const Filters =() => {
    return (
        <div className='btn-group'>
            <button className='active'>All Tasks</button>
            <button>Resolved</button>
            <button>Unresolved</button>
        </div>
    )
};
