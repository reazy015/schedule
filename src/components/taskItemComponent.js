import React, {useContext} from 'react';
import TaskCountdownTimerComponent from './taskCountdownTimerComponent';
import {TaskContext} from '../contexts/taskContext';
import {ConfirmationContext} from '../contexts/confimationContext';
import {combineDateAndTime} from '../utils/getLocalISOTimeString';

const TaskItemComponent = ({task: {title, text, date, time, id}}) => {
    const deadline = combineDateAndTime(date, time);
    const [tasks, ,removeTask] = useContext(TaskContext);
    const [,callConfirmation,] = useContext(ConfirmationContext);

    const expired = (new Date() > new Date(deadline));

    const removeThisTask = () => {
        removeTask(id);
    };

    return (
        <div>
            <div className="title">{title}</div>
            <div className="text">{text}</div>
            {!expired ? (<TaskCountdownTimerComponent deadline={{date, time}} />) : (<div>Expired</div>)}
            <button onClick={() => callConfirmation('Are you sure?', removeThisTask, true)}>Close Task</button>
        </div>
    );
};

export default TaskItemComponent;