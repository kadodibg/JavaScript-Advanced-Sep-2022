function processOddPositions(array){
    let result = array
    .filter((n, i) => i % 2 != 0)
    .map(n => n * 2)
    .reverse()
    .join(' ');
    console.log(result);
}
processOddPositions([10,15,20,25]);

//Variant 2 
// function processOddPositions(array){
//     const odd = array.filter((x, i) => i % 2);
//     const doubled = odd.map(x => x *2);
//     doubled.reverse();
//     console.log(doubled.join(' '));
// }
// processOddPositions([10,15,20,25]);
