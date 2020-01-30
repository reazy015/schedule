import React, {useContext} from 'react';
import TaskCountdownTimerComponent from './taskCountdownTimerComponent';
import {TaskContext} from '../contexts/taskContext';
import {ConfirmationContext} from '../contexts/confimationContext';

const TaskItemComponent = ({task: {title, text, date, time, id}}) => {
    const [tasks, ,removeTask] = useContext(TaskContext);
    const [,callConfirmation,] = useContext(ConfirmationContext);
    const deadline = `${date} ${time}`;

    const expired = (new Date() > new Date(deadline));

    const removeThisTask = () => {
        removeTask(id);
    }

    console.log(id);
    return (
        <div>
            <div className="title">{title}</div>
            <div className="text">{text}</div>
            {!expired ? (<TaskCountdownTimerComponent deadline={deadline} />) : (<div>Expired</div>)}
            <button onClick={() => callConfirmation('Are you sure?', removeThisTask, true)}>Close Task</button>
        </div>
    );
};

export default TaskItemComponent;