import React, { createContext, useState } from 'react';
const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        { title: 'task title', text: 'lorem ipsum', deadline: new Date('31 January 2020') },
        { title: 'task title test', text: 'lorem ipsum test', deadline: new Date('30 January 2020') }
    ]);

    const addNewTask = (newTask) => {
        setTasks([...tasks, newTask]);
    }

    return (
        <TaskContext.Provider value={[tasks, addNewTask]}>
            {props.children}
        </TaskContext.Provider>
    );
};

export  {TaskContext, TaskContextProvider};