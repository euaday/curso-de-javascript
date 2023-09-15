let num = [5, 9, 2]
num[3] = 6  //cria mais um elemento 

num.push(1) //acrescenta valores em um array
num.sort() //coloca os elementos em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições` )
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2) //informa em qual posição está o valor
console.log(`O valor 2 está na posição ${pos}`)