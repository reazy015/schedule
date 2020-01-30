import React, {useState} from 'react';
const ConfirmationContext = React.createContext();

const ConfimationContextProvider = (props) => {
    const [state, setState] = useState({
        message: '',
        callback: () => {},
        display: false
    });

    const callConfirmation = (message, callback, display) => {
        setState({message, callback, display})
    };

    const closeConfirmation = () => {
        setState({
            message: '',
            callback: () => {},
            display: false
        })
    };

    console.log(state);
    return (
        <ConfirmationContext.Provider value={[state, callConfirmation, closeConfirmation]}>
            {props.children}
        </ConfirmationContext.Provider>
    );
};

export {ConfirmationContext, ConfimationContextProvider};