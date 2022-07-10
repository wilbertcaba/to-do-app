import React, { useState, useEffect } from 'react';
import './ToDoItem.css';
import { X, Edit } from 'react-feather';

export const ToDoItem = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTaskName, setNewTaskName] = useState(props.taskName);

    const resolvedContainer = {
        boxShadow: 'none'
    };

    const resolved = {
        textDecoration: 'line-through',
        color: '#aaa'
    };

    const taskRemove = () => {
        props.onRemove(props.id);
    };

    const taskResolved = () => {
        props.onResolve(props.id);
    };

    const openTaskEdit = () => {
        setIsEditing(() => true);
    };

    const closeTaskEdit = () => {
        setIsEditing(() => false);
    };

    useEffect(() => {
        document.addEventListener('keydown', e => e.key === 'Escape' ? setIsEditing(() => false) : true);
        return () => document.removeEventListener('keydown', e => e.key === 'Escape');
    }, [isEditing]);

    const handleNewTaskName = ({target}) => {
        setNewTaskName(() => target.value);
    };

    const handleEditTask = (event) => {
        event.preventDefault();
        props.onEdit(props.id, newTaskName);
        setIsEditing(() => false);
    };

    const viewEditTask = (
        <form className='btn-input-absolute' onSubmit={handleEditTask}>
            <input id={props.id} type='text' placeholder={props.taskName} value={newTaskName} onChange={handleNewTaskName}/>
            <input type='submit' value='Edit Task' />
        </form>
    );

    const viewTask = (
        <div id={props.id} className='to-do-item' style={props.resolved ? resolvedContainer : null}>
            <div className='to-do-item-status'>
                <label className='checkbox-container'>
                    <input type='checkbox' onChange={taskResolved} checked={props.resolved ? true : false}/>
                    <span className='checkmark'></span>
                </label>
                <p style={props.resolved ? resolved : null}>{props.taskName}</p>
            </div>
            <div className='to-do-item-controls'>
                <button type='button' onClick={openTaskEdit}><Edit /></button>
                <button type='button' onClick={taskRemove}> <X /> </button>
            </div>
        </div>
    );

    return !isEditing ? viewTask : viewEditTask;
}