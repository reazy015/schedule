export const getLocalTimeString = (date) => new Date(date).toLocaleString().slice(11,15);
export const getLocalISODateString = (date) => new Date(date).toISOString().slice(0,10);
export const combineDateAndTime = (date, time) => {
    time = new Date(time);
    date = new Date(date);
    let timeString = time.getHours() + ':' + time.getMinutes() + ':00';
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let dateString = '' + year + '-' + month + '-' + day;
    return new Date(dateString + ' ' + timeString);
}