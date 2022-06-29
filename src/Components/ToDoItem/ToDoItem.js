import React, { useState, useEffect } from 'react';
import './ToDoItem.css';

export const ToDoItem = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const removeTask = () => {
        props.onRemove(props.id);
    }

    let resolved = {
        backgroundColor: '#737373',
        textDecoration: 'line-through'
    };

    let unresolved;

    const taskResolved = ({ target }) => {
        const checked = target.checked;
        console.log(target.checked);
        if (checked) {
            setIsChecked(() => true);
        } else {
            setIsChecked(() => false);
        }
    }

    useEffect(() => {
        console.log(isChecked);
    }, [isChecked]);

    return (
        <div id={props.id} className='to-do-item' style={isChecked ? resolved : unresolved}>
            {/* {console.log(resolved)} */}
            <div className='to-do-item-status'>
                <input type='checkbox' onChange={taskResolved} />
                <p>{props.taskName}</p>
            </div>
            <button type='button' onClick={removeTask}>&#x2715;</button>
        </div>
    );
}