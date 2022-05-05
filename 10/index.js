const numeros = [7, 5, 12, 19, 21, 4, 9];
let maior = 0, menor = 0;
menor = numeros[0]
for (let numero of numeros) {
    if (numero > maior) {
        maior = numero;
    } else if (numero < menor) {
        menor = numero
    }
}
console.log(`O maior número foi ${maior}.`);
console.log(`O menor número foi ${menor}.`)