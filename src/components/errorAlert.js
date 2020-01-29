import React, {useContext} from 'react';
import {ErrorContext} from '../contexts/errorContext';

const ErrorAlert = () => {
    const [errors] = useContext(ErrorContext);

    if(errors.length > 0) {
        console.log(errors);
        return (
            <div>
                {errors.map(error => (<div className='error' key={error.id}>{error.message}</div>))}
            </div>
        );
    }

    return null;
};

export default ErrorAlert;