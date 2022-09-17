function timeToWalk(steps, footprint, speed) {
    let stepsNumber = Number(steps);
    let stepsMetersHr = Number(footprint);
    let studentSpeed = Number(speed);

    let distanceMeters = stepsNumber * stepsMetersHr;
    let speedMetersSec = studentSpeed / 3.6;
    let time = distanceMeters / speedMetersSec;
    let rest = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    //console.log(distanceMeters);
    //console.log(speedMetersSec);
    //console.log(time);
    //console.log(rest);

    console.log(
        (timeHr < 10 ? "0" : "") + timeHr + 
        ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + 
        ":" + (timeSec < 10 ? "0" : "") + timeSec);

}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);