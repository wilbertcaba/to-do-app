import React from 'react';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import './ToDoList.css';
import 'normalize.css';
import { Filters } from '../Filters/Filters';

export const ToDoList = (props) => {

    return (
        <>
            <Filters onFilterResolved={props.onFilterResolved}/>
            <div className='to-do-list'>
                {props.taskList.map((task) => {
                    return <ToDoItem
                        key={task.id}
                        id={task.id}
                        status={task.status}
                        taskName={task.task}
                        onRemove={props.onRemove} 
                        onResolve={props.onResolve}/>
                })}
            </div>
        </>
    );
}