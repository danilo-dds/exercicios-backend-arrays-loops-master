const numeros = [78, 19, 14, 87, 11, 284];
let resporta = -1;
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (numero === 10) {
        resporta = i
        break
    }
}
console.log(resporta)
