const notas = [10, 7, 6.5, 7.5, 8.5]
notas.pop()   //pop tira o ultimo elemento
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(`A média é ${media}`)