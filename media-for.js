const notas = [10, 7, 6.5, 7.5, 8.5]

let somaDasNotas = 0 

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

let media = somaDasNotas/notas.length

console.log(media)