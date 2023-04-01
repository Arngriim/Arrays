const notas = [10, 7, 6.5, 7.5, 8.5]

let somaDasNotas = 0
   
  //CallBack
notas.forEach( notas => {
    somaDasNotas += notas
})

let media = somaDasNotas/notas.length

console.log(media)