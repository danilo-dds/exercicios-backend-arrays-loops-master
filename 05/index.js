const original = [1, 4, 12, 21, 53, 88, 112, 10, 16];
const numerosPares = []
for (let numero of original) {
    if (numero % 2 == 0) {
        numerosPares.push(numero)
    }
}
console.log(numerosPares)