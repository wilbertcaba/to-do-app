// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import { ToDoList } from '../ToDoList/ToDoList';
import { Form } from '../Form/Form';
import { nanoid } from 'nanoid';

const App = () => {
    // Convert this to task object instead of taskName string
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useState([]);

    const handleChange = ({ target }) => {
        const { value } = target;
        setTaskName(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!taskName) return;

        setTaskList((prev) => ([
            ...prev,
            {
                task: taskName,
                id: nanoid(),
                resolved: false
            }
        ]));
        setTaskName('');
    };

    const removeTask = (taskId) => {
        setTaskList(() => taskList.filter( task => task.id !== taskId ));
    };

    const handleResolved = (taskId, resolved) => {
        console.log(resolved);
        const index = taskList.findIndex(task => task.id == taskId);
        setTaskList((prev) =>
            [
                ...prev.slice(0, index),
                {...prev[index], resolved},
                ...prev.slice(index + 1)
            ]
        );
    }

    const filterResolved = (taskStatus) => {
        const resolved = taskList.filter(task => task.status !== taskStatus);
        console.log(resolved);
    };

    useEffect(() => { console.log(taskList) }, [taskList]);

    return (
        <div className='App'>
            <h1>To Do List</h1>

            <Form 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                taskName={taskName}/>

            <ToDoList 
                // taskName={taskName}
                taskList={taskList}
                // isResolved={isResolved}
                onRemove={removeTask}
                onResolve={handleResolved}
                onFilterResolved={filterResolved}/>
        </div>
    );
}

export default App;
