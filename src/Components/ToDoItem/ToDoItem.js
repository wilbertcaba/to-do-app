import React from 'react';
import './ToDoItem.css';

export const ToDoItem = (props) => {
    return (
        <div id={props.id} className='to-do-item'>
            <p>{props.taskName}</p>
            <button type='button'>&#x2715;</button>
        </div>
    );
}