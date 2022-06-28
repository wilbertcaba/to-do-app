// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import '../App/App.css';
import { ToDoList } from '../ToDoList/ToDoList';
import { nanoid } from 'nanoid';

const App = () => {
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useState([]);

    const handleChange = ({ target }) => {
        const { value } = target;
        setTaskName(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!taskName) return;
        const taskItem  = {
            task: taskName,
            id: nanoid()
        };
        setTaskList((prev) => ([
            ...prev,
            {
                task: taskName,
                id: nanoid()
            }
        ]));
        setTaskName('');
    }

    useEffect(() => { console.log(taskList) }, [taskList]);

    return (
        <div className='App'>
            <h1>To Do List</h1>
            <form className='task-form' onSubmit={handleSubmit}>
                <input type='text' value={taskName} onChange={handleChange} />
                <input type='submit' value='Add Task' />
            </form>
            <ToDoList taskName={taskName} taskList={taskList} />
        </div>
    );
}

export default App;
