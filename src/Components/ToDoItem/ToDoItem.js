import React from 'react';
import './ToDoItem.css';

export const ToDoItem = (props) => {

    const resolvedContainer = {
        boxShadow: 'none',
    }

    const resolved = {
        textDecoration: 'line-through',
        color: '#aaa'
    };

    const removeTask = () => {
        props.onRemove(props.id);
    }

    const taskResolved = () => {
        props.onResolve(props.id);
    }

    return (
        <div id={props.id} className='to-do-item' style={props.resolved ? resolvedContainer : null}>
            <div className='to-do-item-status'>
                <input type='checkbox' onChange={taskResolved} checked={props.resolved ? true : false}/>
                <p style={props.resolved ? resolved : null}>{props.taskName}</p>
            </div>
            <button type='button' onClick={removeTask}>&#x2715;</button>
        </div>
    );
}