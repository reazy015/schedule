import React, {useEffect, useState} from 'react';
import useCountdownTimer from '../customHooks/useCountdownTimer';

const TaskCountdownTimerComponent = ({deadline}) => {
    const {time} = useCountdownTimer(deadline);

    if(time) {
        return (
            <div>
                <div>
                    <span>Days: </span><span>{time.days}</span>
                </div>
                <div>
                    <span>Hours: </span><span>{time.hours}</span>
                </div>
                <div>
                    <span>Minutes: </span><span>{time.minutes}</span>
                </div>
                <div>
                    <span>Seconds: </span><span>{time.seconds}</span>
                </div>
            </div>
        )
    }

    return <div>Calculating...</div>;
};

export default TaskCountdownTimerComponent;