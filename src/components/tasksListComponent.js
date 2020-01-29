import React, { useContext } from 'react';
import {TaskContext} from '../contexts/taskContext';
import TaskItemComponent from './taskItemComponent';

const TasksListComponent = () => {
    const [tasks] = useContext(TaskContext);
    console.log(tasks);
    return (
        <div>
            {tasks.map(task => (<TaskItemComponent key={task.deadline} task={task} />))}
        </div>
    );
};

export default TasksListComponent;