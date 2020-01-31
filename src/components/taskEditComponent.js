import React, {useContext, useState} from 'react';
import {TaskContext} from '../contexts/taskContext';
import {ErrorContext} from '../contexts/errorContext';
import DatePicker from 'react-datepicker/es';

import "react-datepicker/dist/react-datepicker.css";
import uuid from 'uuid';

const TaskEditComponent = () => {
    const initialState = {
        title: '',
        text: '',
        date: new Date(),
        time: new Date(new Date().setHours(11,59))
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
        }

        setTask({...task, [e.target.name]: e.target.name === 'deadline' ? new Date(e.target.value) : e.target.value});
    };

    const onDatePickerChange = (selectedDate) => {
        console.log(selectedDate);
        if(new Date(selectedDate) < new Date()) {
            return addError('Date can not be earlier then todays date');
        }

        setTask({...task, date: selectedDate})
    };

    const onTimerPickerChange = (selectedTime) => {
        if(new Date(date).toDateString() === new Date().toDateString()) {
            if(new Date(selectedTime) < new Date()) {
                return addError('Time can not be earlier then current time');
            }
        }

        setTask({...task, time: selectedTime});
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
                {/*<div className="input-group">*/}
                {/*    <span>Task Deadline Date</span>*/}
                {/*    <input type="date" name='date' onChange={onChangeHandle} value={date} min={date} required/>*/}
                {/*</div>*/}
                <div className="input-group">
                    <DatePicker onChange={onDatePickerChange} selected={date} />
                </div>
                <div className="input-group">
                    <DatePicker
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={5}
                        onChange={onTimerPickerChange}
                        selected={time}
                        timeCaption='Time'
                        dateFormat='hh:mm a'
                    />
                </div>
                <button>Add Task</button>
            </form>
        </div>
    );
};

export default TaskEditComponent;