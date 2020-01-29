import React from 'react';
import './App.css';
import {TaskContextProvider} from './contexts/taskContext'
import {ErrorContextProvider} from './contexts/errorContext';
import TaskEditComponent from './components/taskEditComponent';
import TasksListComponent from './components/tasksListComponent';
import ErrorAlert from './components/errorAlert';

function App() {
    return (
        <div className="App">
            <ErrorContextProvider>
                <TaskContextProvider>
                    <ErrorAlert/>
                    <TaskEditComponent/>
                    <TasksListComponent/>
                </TaskContextProvider>
            </ErrorContextProvider>
        </div>
    );
}

export default App;
