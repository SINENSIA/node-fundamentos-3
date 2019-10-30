/*async function esPrimo(num1) {
    //let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            let max = Math.sqrt(num1);
            for (var i = 2; i <= max; i++) {
                if (num1 % i === 0)
                    return (false);
            }
           return (true);
        }, 2000);
    //});

    //let result = promise;

    //return result;

}
console.log(esPrimo(14));
esPrimo(14).then(console.log).then(() => console.log("Done"));

console.log("Esto se imprime antes");
*/
function getMyNumber() {
    return new Promise((resolve, reject) => 
    setTimeout(() => { resolve(1) },2000))
}
async function f() { 
    return await getMyNumber();
}

f().then(console.log);


function g() { 
    return new Promise((resolve,reject) => { 
        setTimeout(() => resolve(2),2100) 
    }) 
}

g().then(console.log);
