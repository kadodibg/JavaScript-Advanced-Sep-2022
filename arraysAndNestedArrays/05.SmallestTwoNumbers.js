function smallestTwoNumbers(input){
    input.sort((a, b) => a-b);
    let result = input.slice(0, 2);
    console.log(result.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);

//Version 2
// function smallestTwoNumbers(input){
//     input.sort((a, b) => a-b);
//     let result = input.slice(0, 2);
//     return result.join(' ');
// }
// smallestTwoNumbers([30, 15, 50, 5]);

// Version 3
// function smallestTwoNumbers(input){
//     let result = input.sort((a, b) => a-b);
//     console.log(result[0], result[1]);
// }
// smallestTwoNumbers([30, 15, 50, 5]);