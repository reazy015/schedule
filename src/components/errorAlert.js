import React, {useContext} from 'react';
import {ErrorContext} from '../contexts/errorContext';
import {Alert} from '@material-ui/lab';

const ErrorAlert = () => {
    const [errors] = useContext(ErrorContext);

    if(errors.length > 0) {
        console.log(errors);
        return (
            <div>
                {errors.map(error => (<Alert severity='error' className='error' key={error.id}>{error.message}</Alert>))}
            </div>
        );
    }

    return null;
};

export default ErrorAlert;