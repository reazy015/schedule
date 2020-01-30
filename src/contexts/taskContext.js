import React, {createContext, useEffect, useState} from 'react';
import {saveToStorage, getFromStorage} from '../utils/localStorageActions';

const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const initialState = JSON.parse(getFromStorage('tasks'));
    const [tasks, setTasks] = useState(initialState ? initialState : []);

    const addNewTask = (newTask) => {
        setTasks([...tasks, newTask]);
        saveToStorage('tasks', tasks);
    };

    useEffect(() => {
        console.log(tasks);
        saveToStorage('tasks', tasks);
    }, [tasks]);

    return (
        <TaskContext.Provider value={[tasks, addNewTask]}>
            {props.children}
        </TaskContext.Provider>
    );
};

export  {TaskContext, TaskContextProvider};