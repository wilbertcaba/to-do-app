// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
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

        setTaskList((prev) => ([
            ...prev,
            {
                task: taskName,
                id: nanoid()
            }
        ]));
        setTaskName('');
    }

    const removeTask = (taskId) => {
        setTaskList(() => taskList.filter( task => task.id !== taskId ));
    }

    // useEffect(() => { console.log(taskList) }, [taskList]);

    return (
        <div className='App'>
            <h1>To Do List</h1>
            <form className='task-form' onSubmit={handleSubmit}>
                <input type='text' placeholder='New task' value={taskName} onChange={handleChange} />
                <input type='submit' value='Add Task' />
            </form>

            <div class="btn-group">
                <button>All Tasks</button>
                <button>Resolved</button>
                <button>Unresolved</button>
            </div>

            <ToDoList 
                taskName={taskName}
                taskList={taskList}
                onRemove={removeTask}/>
        </div>
    );
}

export default App;
