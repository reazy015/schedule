export const getLocalTimeString = (date) => new Date(date).toLocaleString().slice(11,15);
export const getLocalISODateString = (date) => new Date(date).toISOString().slice(0,10);
