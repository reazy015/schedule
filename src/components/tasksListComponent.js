import React, {useContext} from 'react';
import {TaskContext} from '../contexts/taskContext';
import DataGrid, {Column, Editing, Button, Popup} from 'devextreme-react/data-grid';
import { custom } from 'devextreme/ui/dialog';

const TasksListComponent = () => {
    const [tasks,,removeTask] = useContext(TaskContext);
    const onDetailsClickHandler = ({row: {data}}) => {
        // console.log(data);
        const taskInfoDialog = custom({
            title: data.title,
            message: data.description
        });

        taskInfoDialog.show();
    };

    const specifyEditingId = ({data: {id}}) => {
        removeTask(id);
    };

    return (
        <DataGrid dataSource={tasks} onRowRemoving={specifyEditingId}>
            <Editing mode='row' allowDeleting={true} texts={{confirmDeleteMessage: 'Do you really want to close this task?'}}>
                <Popup title='Delete popup' />
            </Editing>
            <Column dataField='title' caption='Task Title'/>
            <Column dataField='description' caption='Task Description'/>
            <Column dataField='date' caption='Due Date' dataType='datetime'/>
            <Column type='buttons'>
                <Button name='delete' text='Complete Task' />
                <Button text='View Details' onClick={e => onDetailsClickHandler(e)}/>
            </Column>
        </DataGrid>
    );
};

export default TasksListComponent;