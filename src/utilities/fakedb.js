const addToDb = time => {
    let breakTime = {};

    breakTime['time'] = time;

    localStorage.setItem('break-time', JSON.stringify(breakTime));
}

const getStoredBreakTime = () =>{
    const storedBreakTime = localStorage.getItem("break-time");
    if(storedBreakTime){
        const breakTime = JSON.parse(storedBreakTime);
        return breakTime.time;
    }
    return 0;
}

export { addToDb, getStoredBreakTime };