const saveToStorage = (cellName, value) => {
    localStorage.setItem(cellName, JSON.stringify(value));
};

const getFromStorage = (cellName) => {
    return localStorage.getItem(cellName);
};

const removeFromStorage = (id) => {

};

export {saveToStorage, getFromStorage};