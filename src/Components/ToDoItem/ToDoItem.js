import React, { useState, useEffect } from 'react';
import './ToDoItem.css';

export const ToDoItem = (props) => {
    const [isResolved, setIsResolved] = useState(false);

    const removeTask = () => {
        props.onRemove(props.id);
    }

    let resolvedContainer = {
        boxShadow: 'none',
        // order: 2,
    }

    let resolved = {
        textDecoration: 'line-through'
    };

    const taskResolved = () => {
        setIsResolved((prev) => !prev);
    }

    // const taskResolved = ({ target }) => {
    //     const checked = target.checked;
    //     console.log(target.checked);
    //     if (checked) {
    //         setIsResolved(() => true);
    //         props.onResolve(props.id, isResolved);
    //     } else {
    //         setIsResolved(() => false);
    //         props.onResolve(props.id, isResolved);
    //     }
    // }

    useEffect(() => {
        props.onResolve(props.id, isResolved);
    }, [isResolved]);

    // useEffect(() => {console.log(isResolved);}, [isResolved]);

    return (
        <div id={props.id} className='to-do-item' style={isResolved ? resolvedContainer : null}>
            {/* {console.log(resolved)} */}
            <div className='to-do-item-status'>
                <input type='checkbox' onChange={taskResolved} />
                <p style={isResolved ? resolved : null}>{props.taskName}</p>
            </div>
            <button type='button' onClick={removeTask}>&#x2715;</button>
        </div>
    );
}