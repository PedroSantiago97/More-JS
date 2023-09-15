//Exercicio de manipulação de array

//Exercicio 1
// Crie uma lista de comprar que é inicialmente vazia.
// Adicione 5 itens à lista usando push().
// Agora, remova o primeiro item da lista usando shift().
// Imprima a lista final no console

let lista = [];

lista.push("Alface") 
lista.push("Feijão")
lista.push("Arroz")
lista.push("Carne")
console.log(lista)

lista.shift()
console.log(lista)

// Exercicio 2
// Você tem um array de números: [3, 7, 14, 21, 29, 36, 42]
// Use a função find() para encontrar o primeiro número que é divisivel por 7 e maior que 10

const nums = [3, 7, 14, 21, 29, 36, 42];

const numex = nums.find((num) => (num > 10 && num % 7 === 0))
console.log(numex)

// Exercicio 2
// Você tem um array de números: [5, 10, 12, 15, 18, 20, 24, 25, 30, 36, 35]
// Use a função filter() para encontrar o primeiro número que é divisivel por 6 e maior que 10

const nums2 = [5, 10, 12, 15, 18, 20, 24, 25, 30, 36, 35];

const numex2 = nums2.filter((num)=>(num % 6 === 0))
console.log(numex2)

// Exercicio 3
// Dada a string: " Bom dia, mundo! ".
// Remova os espaços em branco no início e nofinal da string
// em seguida, divida a string em palavras.


let frase = "   Bom dia, mundo! ";
console.log(frase)

let fraseboa = frase.trim()
console.log(fraseboa)

let fraseboa1 = fraseboa.split(" ")
console.log(fraseboa1)

// Exercício de Manipulação de String - startsWith(), endsWith()

// Dada a string: "O rato roeu a roupa do rei de Roma".
// Verifique se a string começa com a palavra "O" e termina com a palavra "Roma".














