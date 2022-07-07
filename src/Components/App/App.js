// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import { ToDoList } from '../ToDoList/ToDoList';
import { Form } from '../Form/Form';
import { nanoid } from 'nanoid';

const App = () => {
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useState([]);

    useEffect(() => { console.log(taskList) }, [taskList]);

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

    const handleResolved = (taskId) => {
        const updateResolved = taskList.map(task => {
            if (task.id === taskId) {
                return {
                    ...task, resolved: !task.resolved
                }
            }
            return task;
        });
        setTaskList(updateResolved);
    }

    const filterResolved = (taskStatus) => {
        const resolved = taskList.filter(task => task.status !== taskStatus);
        console.log(resolved);
    };

    return (
        <div className='App'>
            <h1>To Do List</h1>

            <Form
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                taskName={taskName}/>

            <ToDoList
                taskList={taskList}
                onRemove={removeTask}
                onResolve={handleResolved}
                onFilterResolved={filterResolved}/>
        </div>
    );
}

export default App;
