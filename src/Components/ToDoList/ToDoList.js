import React, { useState, useEffect } from  'react';
import { ToDoItem } from '../ToDoItem/ToDoItem';

export const ToDoList = () => {
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useState([]);

    const handleChange = ({target}) => {
        const {value} = target;
        setTaskName(value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!taskName) return;
        setTaskList((prev) => ([
            ...prev,
            taskName
        ]));
    }

    useEffect(() => {console.log(taskList)}, [taskList]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={taskName} onChange={handleChange}/>
                <input type='submit' placeholder='Add Task' />
            </form>
            <h1>To Do List</h1>
            <h2>{taskName}</h2>
            <ul>{taskList.map((task, index) => {
                return <li key={index}>{task}</li>
                // return <ToDoItem id={index} taskName={taskName} />
            })}</ul>
        </>
    );
}