import React, {useContext, useState} from 'react';
import {TaskContext} from '../contexts/taskContext';
import {ErrorContext} from '../contexts/errorContext';
import {getLocalTimeString, getLocalISODateString} from '../utils/getLocalISOTimeString';
import uuid from 'uuid';

const TaskEditComponent = () => {
    const initialState = {
        title: '',
        text: '',
        date: getLocalISODateString(new Date()),
        time: '24:00'
    };
    const [,addNewTask] = useContext(TaskContext);
    const [,addError] = useContext(ErrorContext);
    const [task, setTask] = useState(initialState);

    const {title, text, date, time} = task;

    const submitHandle = (e) => {
        e.preventDefault();
        const id = uuid.v4();
        addNewTask({...task, id});
        refreshAllInputs();
    };

    const onChangeHandle = (e) => {
        console.log(e.target.value);
        if(e.target.name === 'date') {
            if(!e.target.value) {
                return addError('Please enter valid date');
            }

            if(new Date(e.target.value) < new Date(date)) {
                return addError('Date can no be earlier then todays date');
            }
        }

        setTask({...task, [e.target.name]: e.target.name === 'deadline' ? new Date(e.target.value) : e.target.value});
    };

    const refreshAllInputs = () => {
        setTask(initialState);
    };

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
                    <span>Task Deadline Date</span>
                    <input type="date" name='date' onChange={onChangeHandle} value={date} min={date} required/>
                </div>
                <div className="input-group">
                    <span>Task Deadline Time:</span>
                    <input type="time" name='time' onChange={onChangeHandle}/>
                </div>
                <button>Add Task</button>
            </form>
        </div>
    );
};

export default TaskEditComponent;