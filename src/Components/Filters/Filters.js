import React from 'react';
import './Filters.css';

export const Filters = (props) => {

    return (
        <div className='btn-group'>
            <button onClick={props.onFilter} name='All' className={props.filter === 'All' ? 'active' : null}>All Tasks</button>
            <button onClick={props.onFilter} name='Resolved' className={props.filter === 'Resolved' ? 'active' : null}>Resolved</button>
            <button onClick={props.onFilter} name='Unresolved' className={props.filter === 'Unresolved' ? 'active' : null}>Unresolved</button>
        </div>
    )
};
