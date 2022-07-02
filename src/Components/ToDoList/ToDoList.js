import React from 'react';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import './ToDoList.css';
import 'normalize.css';


export const ToDoList = (props) => {

    return (
        <>
            <div className='to-do-list'>
                {props.taskList.map((task) => {
                    return <ToDoItem
                        key={task.id}
                        id={task.id}
                        taskName={task.task}
                        isResolved={props.isResolved}
                        onRemove={props.onRemove}
                        onResolve={props.onResolve} />
                })}
            </div>
        </>
    );
}