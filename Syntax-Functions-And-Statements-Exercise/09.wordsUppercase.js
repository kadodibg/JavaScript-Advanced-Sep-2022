function wordsUppercase(words){
    let result = words.toUpperCase()
    .split(/[\W]+/)
    .filter(w => w.length > 0)
    .join(", ");
    console.log(result);
}
wordsUppercase('Hi, how are you?');

// Version 2

function wordsUppercases(words){
    let result = words.toUpperCase()
    .match(/\w+/g)
    .join(', ');
    console.log(result);
}
wordsUppercases('Hi, how are you?');