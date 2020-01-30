import React from 'react';
import './App.css';
import {TaskContextProvider} from './contexts/taskContext'
import {ErrorContextProvider} from './contexts/errorContext';
import {ConfimationContextProvider} from './contexts/confimationContext';
import TaskEditComponent from './components/taskEditComponent';
import TasksListComponent from './components/tasksListComponent';
import ErrorAlert from './components/errorAlert';
import ConfimationComponent from './components/confimationComponent';

function App() {
    return (
        <div className="App">
            <ConfimationContextProvider>
                <ErrorContextProvider>
                    <TaskContextProvider>
                        <ConfimationComponent/>
                        <ErrorAlert/>
                        <TaskEditComponent/>
                        <TasksListComponent/>
                    </TaskContextProvider>
                </ErrorContextProvider>
            </ConfimationContextProvider>
        </div>
    );
}

export default App;
