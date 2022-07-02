// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import { ToDoList } from '../ToDoList/ToDoList';
import { Form } from '../Form/Form';
import { Filters } from '../Filters/Filters';
import { nanoid } from 'nanoid';

const App = () => {
    // Convert this to task object instead of taskName string
    const [taskName, setTaskName] = useState('');

    const handleChange = ({ target }) => {
        const { value } = target;
        setTaskName(value);
    }

    const [taskList, setTaskList] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!taskName) return;

        setTaskList((prev) => ([
            ...prev,
            {
                task: taskName,
                id: nanoid(),
                isResolved: isResolved
            }
        ]));
        setTaskName('');
    }

    const removeTask = (taskId) => {
        setTaskList(() => taskList.filter( task => task.id !== taskId ));
    }

    const [isResolved, setIsResolved] = useState(false);

    const handleResolved = ({ target }) => {
        const checked = target.checked;
        console.log(target.checked);
        if (checked) {
            setIsResolved(() => true);
        } else {
            setIsResolved(() => false);
        }
    }

    // useEffect(() => { console.log(taskList) }, [taskList]);

    return (
        <div className='App'>
            <h1>To Do List</h1>

            <Form 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                taskName={taskName}/>

            <Filters />

            <ToDoList 
                taskName={taskName}
                taskList={taskList}
                isResolved={isResolved}
                onRemove={removeTask}
                onResolve={handleResolved}/>
        </div>
    );
}

export default App;
