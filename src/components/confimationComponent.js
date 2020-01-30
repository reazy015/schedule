import React, {useContext} from 'react';
import {ConfirmationContext} from '../contexts/confimationContext';

const ConfimationComponent = () => {
    const [state,,closeConfirmation] = useContext(ConfirmationContext);

    const confirmAndCallback = () => {
        state.callback();
        closeConfirmation();
    }

    if(state.message) {
        return (
            <div>
                <div>{state.message}</div>
                <button onClick={e => confirmAndCallback()}>Yes</button>
                <button onClick={e => {closeConfirmation()}}>No</button>
            </div>
        )
    }

    return null;
};

export default ConfimationComponent;