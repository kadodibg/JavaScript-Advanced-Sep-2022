function previousDay(year, month, day){
    //let format = `${year}/${month}/${day}`
    let myDate = new Date(year, month, day);
    myDate.setDate(myDate.getDate() - 1);
    console.log(`${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`);
}
previousDay(2016, 2, 1);
previousDay(2016, 10, 1);

// function previousDay(year, month, day){
//     let myDate = new Date(year, month-1, day-1);
//     //myDate.setDate(myDate.getDate() - 1);
//     console.log(`${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`);
// }
// previousDay(2016, 9, 30);
// previousDay(2016, 10, 1);

// function solve(){
//     let currDate = new Date();
//     console.log(currDate.getFullYear());
//     console.log(currDate.getMonth());
//     console.log(currDate.getDay()); //Vrushta denia ot sedmicata
//     console.log(currDate.getDate());
// }
// solve();

// function solve(){
//     let currDate = new Date(2016, 9, 1);
//     console.log(currDate);
    
//     console.log(currDate.getFullYear());
//     console.log(currDate.getMonth());
//     console.log(currDate.getDay()); //Vrushta denia ot sedmicata
//     console.log(currDate.getDate());
// }
// solve();