import React, { useContext } from 'react';
import {TaskContext} from '../contexts/taskContext';
import TaskItemComponent from './taskItemComponent';

const TasksListComponent = () => {
    const [tasks] = useContext(TaskContext);

    return (
        <div>
            {tasks.map(task => (<TaskItemComponent key={task.id} task={task} />))}
        </div>
    );
};

export default TasksListComponent;