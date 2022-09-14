function roadRadar(speed, area) {

    let info = '';
    let speedLimit = 0;
    let diff = 0;
    let status = '';

    if (area === 'city') {
        speedLimit = 50;
    } else if (area === 'residential') {
        speedLimit = 20;
    } else if (area === 'interstate') {
        speedLimit = 90;
    } else if (area === 'motorway') {
        speedLimit = 130;
    }

    if (speed <= speedLimit && speed > 0) {
        info = `Driving ${speed} km/h in a ${speedLimit} zone`
    } else {
        diff = speed - speedLimit
        
        if (diff <= 20) {
            status = 'speeding';
        } else if (diff > 20 && diff <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        info = `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }
    console.log(info);
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(70, 'motorway');
roadRadar(90, 'city');


// function roadRadar(speed, area){
//     const currSpeed = Number(speed);
//     const currArea = area;
//     const speedLimitMotorway = 130;
//     const speedLimitInterstate = 90;
//     const speedLimitCity = 50;
//     const speedLimitResidental = 20;
//    // let diff = currSpeed - speedLimit;





//     switch (area){
//         case 'city':
//             let diff = currSpeed - speedLimitCity;
            
//             if(currSpeed < speedLimitCity){
//                 console.log(`Driving ${currSpeed} km/h in a ${speedLimitCity} zone`);
//             }
            
//             if (currSpeed > speedLimitCity){
                
//                 if(diff < 20 ){
                    
//                     console.log('tuk sum do 20');

//                 }else if(diff > 20 && diff < 40) {
                    
//                     console.log('tuk sum do 40');

//                 }else{
                    
//                     console.log('tuk sum nad 40');
//                 }

//             }
//         break;
//         case 'residential':
//             console.log('residential');
//         break;
//     }

// }
// roadRadar(40, 'city');
// roadRadar(51, 'city');
// roadRadar(71, 'city');
// roadRadar(91, 'city');

// roadRadar(21, 'residential');
// roadRadar(120, 'interstate');
// roadRadar(200, 'motorway');


// function solve(arg1, arg2) {
//     if (arg2 == 'city') {
//         if (arg1 > 50) {
//             let speeding = arg1 - 50;
//             logSpeeding(speeding);
//         }
//     } else if (arg2 == 'motorway') {
//         if (arg1 > 130) {
//             let speeding = arg1 - 130;
//             logSpeeding(speeding);
//         }
//     } else if (arg2 == 'interstate') {
//         if (arg1 > 90) {
//             let speeding = arg1 - 90;
//             logSpeeding(speeding);
//         }
//     } else if (arg2 == 'residential') {
//         if (arg1 > 20) {
//             let speeding = arg1 - 20;
//             logSpeeding(speeding);
//         }
//     }

//     function logSpeeding(speeding) {
//         if (speeding <= 20) {
//             console.log('speeding');
//         } else if (speeding <= 40) {
//             console.log('excessive speeding');
//         } else {
//             console.log('reckless driving');
//         }
//     }
// }

// solve(40, 'city')
