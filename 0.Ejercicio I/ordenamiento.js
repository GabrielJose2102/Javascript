const array = ['+1','+5','+68','+9','+7','+45','+12','+32','+94','+66','+33','+15'];
let contadori = 0;
let contadorj = 0;
let resultadoCorrecto = 0;
let a, b;

console.log(array);

for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
        a = parseInt(array[i]);
        b = parseInt(array[i+1]);
        
        if (a > b) {
            array[i] = '+' + b;
            array[i+1] = '+' + a;
        } else {
            resultadoCorrecto++;
        }
    };

    if (resultadoCorrecto == array.length) {
        break;
    }
    console.log(j)
    resultadoCorrecto = 0;
}

console.log(array);
