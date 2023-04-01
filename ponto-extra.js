const notas = [10, 7, 6.5, 7.5, 8.5]

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)