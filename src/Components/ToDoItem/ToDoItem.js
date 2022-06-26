import React from 'react';

export const ToDoItem = (props) => {
    return (
        <li key={props.id} id={props.id} className='to-do-item'>
            {props.taskName}
        </li>
    );
}