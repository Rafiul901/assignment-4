function  calculateSleepTime( times ) {
    for ( let i =0; i<times.length ; i++){
    if(typeof times[i] !== 'number'){
        return 'Invalid'
    }}



    let totalTime = 0;
    for ( let i =0; i<times.length ; i++){
        totalTime = totalTime+times[i]
    }
    let hourTime = Math.floor(totalTime / 3600);
    let minuteTime = Math.floor((totalTime % 3600) /60);
    let secondTime = Math.floor(totalTime % 3600% 60)

    return {
        hour:  hourTime,
        minute: minuteTime,
        second: secondTime
    }
}

