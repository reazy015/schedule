import React, {useContext} from 'react';
import TaskCountdownTimerComponent from './taskCountdownTimerComponent';
import {TaskContext} from '../contexts/taskContext';
import {combineDateAndTime} from '../utils/getLocalISOTimeString';
import { confirm } from 'devextreme/ui/dialog';

const TaskItemComponent = ({task: {title, text, date, time, id}}) => {
    const deadline = combineDateAndTime(date, time);
    const [,,removeTask] = useContext(TaskContext);

    const expired = (new Date() > new Date(deadline));

    const confirmationPopup = () => {
        let result = confirm('<p>Are you sure?</p>', 'Close task');
        result.then(answer => answer ? removeTask(id) : false);
    };

    return (
        <div>
            <div className="title">{title}</div>
            <div className="text">{text}</div>
            {!expired ? (<TaskCountdownTimerComponent deadline={{date, time}} />) : (<div>Expired</div>)}
            <button onClick={() => confirmationPopup()}>Close Task</button>
        </div>
    );
};

export default TaskItemComponent;