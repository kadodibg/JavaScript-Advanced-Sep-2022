function solve(input){
    input.sort((a, b) => a-b);
    return input.slice(input.length / 2 );
}
// В тази задача Джъдж не иска конзол лог, а ретърн !!!
// За да си видите резултата в VSC ползвайте следващите редове.

let result = solve([3,19,14,7,2,19,6]);
console.log(result);