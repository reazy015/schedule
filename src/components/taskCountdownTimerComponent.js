import React from 'react';
import useCountdownTimer from '../customHooks/useCountdownTimer';
import {combineDateAndTime} from '../utils/getLocalISOTimeString';

const TaskCountdownTimerComponent = ({deadline: {date, time}}) => {
    const timeOff = useCountdownTimer(combineDateAndTime(date, time));

    if(timeOff.time) {
        return (
            <div>
                <div>
                    <span>Days: </span><span>{timeOff.time.days}</span>
                </div>
                <div>
                    <span>Hours: </span><span>{timeOff.time.hours}</span>
                </div>
                <div>
                    <span>Minutes: </span><span>{timeOff.time.minutes}</span>
                </div>
                <div>
                    <span>Seconds: </span><span>{timeOff.time.seconds}</span>
                </div>
            </div>
        )
    }

    return <div>Calculating...</div>;
};

export default TaskCountdownTimerComponent;