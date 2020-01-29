import React from 'react';
import TaskCountdownTimerComponent from './taskCountdownTimerComponent';

const TaskItemComponent = ({task: {title, text, deadline}}) => {
    const expired = (new Date() > new Date(deadline));

    return (
        <div>
            <div className="title">{title}</div>
            <div className="text">{text}</div>
            {!expired ? (<TaskCountdownTimerComponent deadline={deadline} />) : (<div>Expired</div>)}
        </div>
    );
};

export default TaskItemComponent;