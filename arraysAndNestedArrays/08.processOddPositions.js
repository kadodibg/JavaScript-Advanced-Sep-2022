function processOddPositions(array){
    let result = array
    .filter((n, i) => i % 2 != 0)
    .map(n => n * 2)
    .reverse()
    .join(' ');
    console.log(result);
}
processOddPositions([10,15,20,25]);
