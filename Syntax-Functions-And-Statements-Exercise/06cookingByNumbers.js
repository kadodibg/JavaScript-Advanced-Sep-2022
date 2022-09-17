function cookingByNumbers(inputNumber, ... command) {
    
    command.forEach( command =>{
        inputNumber = manipulator(inputNumber, command)
    });
    
    // for(let i = 0; i < command.length; i++){
    //     inputNumber = manipulator(inputNumber, command[i]);
    // }

    function manipulator(num, command) {
       // console.log(num);
        switch (command) {
            case 'chop':
                num /= 2;
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                num += 1
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                break;
            case 'fillet':
                num *= 0.80;
                console.log(num);
        }
        return num
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('-----------------------------------------------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

