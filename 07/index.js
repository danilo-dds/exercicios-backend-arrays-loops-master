const nomes = ["Ana", "Joana", "Carlos", "amanda", "Antonio"];
const nomesIniciadosComAa = []
for (let i of nomes) {
    if (i[0] === "a" || i[0] === "A")
        nomesIniciadosComAa.push(i)
}
console.log(nomesIniciadosComAa)
