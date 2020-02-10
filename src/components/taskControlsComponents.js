import React, {useEffect} from 'react';
import {Button} from 'devextreme-react';
import {TaskContext} from '../contexts/taskContext';

const TaskControlsComponents = (gridRef) => {
    // const [,,removeTask] = useContext(TaskContext);

    return () => {
        return (
            <div>
                <Button text='Delete' type='danger' onClick={() => console.log(gridRef)}/>
                <Button text='Info' type='success'/>
            </div>
        );
    }
};


export default TaskControlsComponents;