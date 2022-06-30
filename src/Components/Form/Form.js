import React from "react";
import './Form.css';

export const Form = (props) => {
    return (
        <form className='task-form' onSubmit={props.handleSubmit}>
            <input type='text' placeholder='New task' value={props.taskName} onChange={props.handleChange} />
            <input type='submit' value='Add Task' />
        </form>
    )
}