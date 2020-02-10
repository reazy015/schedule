import React, {useContext, useState} from 'react';
import {TaskContext} from '../contexts/taskContext';
import {ErrorContext} from '../contexts/errorContext';
import {
    Form,
    ButtonItem,
    GroupItem,
    SimpleItem,
    Label,
    CompareRule,
    EmailRule,
    PatternRule,
    RangeRule,
    RequiredRule,
    StringLengthRule,
    AsyncRule, CustomRule
} from 'devextreme-react/form';
import {Validator} from 'devextreme-react';
import 'react-datepicker/dist/react-datepicker.css';
import notify from 'devextreme/ui/notify'
import uuid from 'uuid';
import TextBox from 'devextreme-react/text-box';
import {Item} from 'devextreme-react/box';
import {DateBox, Button} from 'devextreme-react';

const TaskEditComponent = () => {
    const initialState = {
        title: '',
        description: '',
        date: new Date(),
        time: new Date(new Date().setHours(23, 59, 59, 999))
    };

    const [, addNewTask] = useContext(TaskContext);
    const [, addError] = useContext(ErrorContext);
    const [task, setTask] = useState(initialState);

    const {date} = task;

    const submitHandle = (e) => {
        console.log(e);
        e.preventDefault();
        const id = uuid.v4();
        addNewTask({...task, id});
        refreshAllInputs();
    };


    const refreshAllInputs = () => {
        setTask(initialState);
    };

    const fieldDataChangedHandler = (e) => {
        setTask({...task, [e.dataField]: e.value});
    };

    const timeValidationHandler = (e) => {
        if (new Date(date).toDateString() === new Date().toDateString()) {
            if (new Date(e.value) < new Date()) {
                notify({message: 'Invalid time, too late', type: 'error', displayTime: 1500, closeOnOutsideClick: true});
                return false;
            }
        }
        return true;
    };

    return (
        <div>
            <form onSubmit={(e) => submitHandle(e)}>
                <Form formData={task} onFieldDataChanged={e => fieldDataChangedHandler(e)} showValidationSummary={true}>
                    <GroupItem caption='Task Description'>
                        <SimpleItem dataField='title' editorType='dxTextBox' editorOptions={{placeholder: 'Enter task title'}}>
                            <RequiredRule message='Title is required'/>
                        </SimpleItem>
                        <SimpleItem dataField='description' editorType='dxTextArea' editorOptions={{placeholder: 'Enter task description'}}>
                            <RequiredRule message='Task description is required'/>
                        </SimpleItem>
                    </GroupItem>
                    <GroupItem caption='Task Due Date and Time'>
                        <SimpleItem dataField='date' editorType='dxDateBox' editorOptions={{min: new Date()}}>
                            <RequiredRule message='Date is required'/>
                        </SimpleItem>
                        <SimpleItem dataField='time' editorType='dxDateBox'
                                    editorOptions={{type: 'time', interval: 5, pickerType: 'rollers'}}>
                            <RequiredRule message='Time is required'/>
                            <CustomRule type='custom' message='Time must be earlier current moment'
                                        validationCallback={e => timeValidationHandler(e)}/>
                        </SimpleItem>
                    </GroupItem>
                    <ButtonItem buttonOptions={{text: 'Add Task', type: 'success', useSubmitBehavior: true}}
                                horizontalAlignment='left'/>
                </Form>
            </form>
        </div>
    );
};

export default TaskEditComponent;