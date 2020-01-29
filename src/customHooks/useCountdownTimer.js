import {useState, useEffect} from 'react';
import getTimeRemaining from '../utils/getTimeLeft';

const useCountdownTimer = (deadline) => {
    const [timeOff, setTimeOff] = useState(new Date(deadline));

    useEffect(() => {
        const countTime = () => {
            const time = getTimeRemaining(new Date(deadline));
            setTimeOff({...timeOff, time});
        };

        const timerID = setInterval(() => {
            countTime();
        }, 1000);

        return () => clearInterval(timerID);
    }, []);

    return timeOff;
};

export default useCountdownTimer;