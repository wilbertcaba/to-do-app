import React, { useState, useEffect } from  'react';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import './ToDoList.css';


export const ToDoList = (props) => {
    // console.log(props);

    return (
        <>
            <div className='to-do-list'>
                {props.taskList.map((task) => {
                    return <ToDoItem key={task.id} id={task.id} taskName={task.task} />
                })}
            </div>
        </>
    );
}