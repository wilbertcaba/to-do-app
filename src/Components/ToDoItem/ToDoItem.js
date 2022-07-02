import React, { useState, useEffect } from 'react';
import './ToDoItem.css';

export const ToDoItem = (props) => {
    // const [isResolved, setIsResolved] = useState(false);

    console.log(props);

    const removeTask = () => {
        props.onRemove(props.id);
    }

    let resolved = {
        boxShadow: 'none',
        textDecoration: 'line-through'
    };

    let unresolved;

    // const taskResolved = ({ target }) => {
    //     const checked = target.checked;
    //     console.log(target.checked);
    //     if (checked) {
    //         setIsResolved(() => true);
    //     } else {
    //         setIsResolved(() => false);
    //     }
    // }

    useEffect(() => {
        console.log(props.isResolved);
    }, [props.isResolved]);

    return (
        <div id={props.id} className='to-do-item' style={props.isResolved ? resolved : unresolved}>
            {/* {console.log(resolved)} */}
            <div className='to-do-item-status'>
                <input type='checkbox' onChange={props.onResolve} />
                <p>{props.taskName}</p>
            </div>
            <button type='button' onClick={removeTask}>&#x2715;</button>
        </div>
    );
}