import React, {useContext, useState} from 'react';
import {TaskContext} from '../contexts/taskContext';
import {ErrorContext} from '../contexts/errorContext';
import uuid from 'uuid';

const TaskEditComponent = () => {
    const [tasks, addNewTask] = useContext(TaskContext);
    const [,addError] = useContext(ErrorContext);
    const [task, setTask] = useState({
        title: '',
        text: '',
        deadline: ''
    });

    const {title, text, deadline} = task;

    const submitHandle = (e) => {
        e.preventDefault();
        const id = uuid.v4();
        setTask({...task, id});
        addNewTask(task);
    }

    const onChangeHandle = (e) => {
        console.log('changing');
        if(e.target.name === 'deadline' && new Date(e.target.value) < new Date()) {
            e.target.value = '';
            return addError('Date can no be earlier then todays date');
        }
        setTask({...task, [e.target.name]: e.target.name === 'deadline' ? new Date(e.target.value) : e.target.value});
    }


    return (
        <div>
            <form onSubmit={(e) => submitHandle(e)}>
                <div className="input-group">
                    <span>Task Title</span>
                    <input type="text" name='title' onChange={(e) => onChangeHandle(e) } value={title}/>
                </div>
                <div className="input-group">
                    <span>Task decription</span>
                    <input type="text" name='text' onChange={onChangeHandle} value={text}/>
                </div>
                <div className="input-group">
                    <span>Task Deadline</span>
                    <input type="datetime" name='deadline' onChange={onChangeHandle} />
                </div>
                <button>Add Task</button>
            </form>
        </div>
    );
};

export default TaskEditComponent;