import React, {useState} from 'react';
import uuid from 'uuid';

const ErrorContext = React.createContext();

const ErrorContextProvider = (props) => {
    const [errors, setError] = useState([]);

    const addError = (message) => {
        const id = uuid.v4();
        const newError = {
            id: id,
            message
        };

        setError([...errors, newError]);
        setTimeout(() => {
            setError(errors => errors.filter(error => error.id !== id));
        }, 3000)
    };

    return (
        <ErrorContext.Provider value={[errors, addError]}>
            {props.children}
        </ErrorContext.Provider>
    );
};

export {ErrorContext, ErrorContextProvider};