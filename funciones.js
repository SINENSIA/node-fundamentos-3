function funcionPrincipal(miFuncion) {

    return miFuncion(1, 7);

}

function suma(a,b) { return a + b}

let result = funcionPrincipal(suma);

console.log(result);

let numbers = [1, 5, 7, 9, 23];
function mayoresDe5(number) {
    return number > 5;
}
let miNum = numbers.filter(mayoresDe5);

console.log(miNum); // [7, 9, 23]

// Callback con función anónima

let menoresDe9 = (number) => number < 9;

console.log(numbers.filter(menoresDe9));
console.log(numbers.filter((number) => number < 9));