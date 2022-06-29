import React from 'react';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import './ToDoList.css';


export const ToDoList = (props) => {

    return (
        <>
            <div className='to-do-list'>
                {props.taskList.map((task) => {
                    return <ToDoItem
                        key={task.id}
                        id={task.id}
                        taskName={task.task}
                        onRemove={props.onRemove} />
                })}
            </div>
        </>
    );
}