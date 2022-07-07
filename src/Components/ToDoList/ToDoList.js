import React, { useState } from 'react';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import './ToDoList.css';
import 'normalize.css';
import { Filters } from '../Filters/Filters';

export const ToDoList = (props) => {

    const [filter, setFilter] = useState('All');

    const filterMap = {
        All: () => true,
        Resolved: task => task.resolved,
        Unresolved: task => !task.resolved
    };

    const handleFilter = ({target}) => {
        const filterName = target.name;
        setFilter(() => {
            return filterName;
        });
    }

    return (
        <>
            <Filters
                filter={filter}
                onFilter={handleFilter}/>

            <div className='to-do-list'>
                {props.taskList.filter(filterMap[filter]).map((task) => {
                    return <ToDoItem
                        key={task.id}
                        id={task.id}
                        resolved={task.resolved}
                        taskName={task.task}
                        onRemove={props.onRemove}
                        onResolve={props.onResolve}/>
                })}
            </div>
        </>
    );
}