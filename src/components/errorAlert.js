import React, {useContext} from 'react';
import {ErrorContext} from '../contexts/errorContext';

import Toast from 'devextreme-react/toast';

const ErrorAlert = () => {
    const [errors] = useContext(ErrorContext);

    if(errors.length > 0) {
        console.log(errors);
        return (
            <div>
                {errors.map(error => (<Toast type='error' key={error.id}>{error.message}</Toast>))}
            </div>
        );
    }

    return null;
};

export default ErrorAlert;