function squareOfStars(num){
    let n = Number(num); // Row column count 
    //define an empty string
    let string = "";

    for(let i = 0; i < n ; i++){ // external loop
        for(let j = 0; j < n; j++){ // internal loop
            string += '* ';
        }
        //new line after each row 
        string += "\n";
    }
    console.log(string);
}
squareOfStars(12)
console.log('-----');
squareOfStars(5)