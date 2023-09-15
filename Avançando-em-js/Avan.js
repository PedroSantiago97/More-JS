// Avançando em JavaScript

// Manipulação de Arrays

let numer = "Oi, eu sou o goku!";
let qtdnum = numer.split(" "); // Separa o array por determinado elemento apresentado entre parenteses
console.log(numer);
console.log(qtdnum);

// Mostra a quantidade de caracteres do Array
console.log(qtdnum.length); 


// Trabalhando com os valores finais do Array
let numeros = ["Maçã", "Laranja"];
console.log(numeros);

// Coloca um termo no *final* do Array
numeros.push("Acerola"); 
console.log(numeros);

// Tira o *ultimo* termo do Array
numeros.pop();
console.log(numeros);

// Trabalhando com os valores iniciais do Array
let frutas = ["Maçã", "Laranja"];
console.log(frutas);

// Adiciona o objeto posto nos () ao *inicio* do Array
frutas.unshift("Acerola");
console.log(frutas);

// Remove o *Primeiro* objeto do Array
frutas.shift();
console.log(frutas);

// map, filter, reduce -> arrow function
const nums = [1, 2, 3, 4, 5, 6];

// find => retorna o primeiro elemento do critério
const numeroPar = nums.find((num) => num % 2 === 0);
console.log(numeroPar);

// filter => retorna os elementos que correspondem ao criterio
const numerosPares = nums.filter((num) => num % 2 === 0);
console.log(numerosPares);

// trim => Remove os espaços nas laterais da string
const frase = " Olá, Mundo!   ";
const palavras = frase.trim();

console.log(frase);
console.log(palavras);


const frase2 = "JavaScript é incrível!";
// startWith => Exibe valores booleanos para verificar os objetos *iniciais* da String 
console.log(frase2.startsWith("Java"));

// startWith => Exibe valores booleanos para verificar os objetos *finais* da String 
console.log(frase2.endsWith("!"));

// try e Catch => captura um erro no codigo executando um comando e nao permitindo sua parada.
try {
    const idade = 15;
    if (idade < 18) {
        throw new Error ("Você deve ter pelo menos 18 anos!")
      }
}   catch (error){
    console.log(error.message);
}

console.log("continuando o programa")

//Callback => função dentro da chamada
function cumprimentar(nome, callback){
    console.log("Olá, " + nome);
    callback()
}

function mostrarSaudacao(){
    console.log("Como você está?");
}

// Declarar callback sem (), se não ele fica na frente
cumprimentar("Matheus", mostrarSaudacao);
// Consigo declarar uma função dentro de outra ao inves de chamar por fora
cumprimentar("Maria", function () {
    console.log("Ta tudo bem?")
})






















