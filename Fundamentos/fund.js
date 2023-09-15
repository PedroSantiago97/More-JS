// Fundamentos
//var nome = "valor"
var minhaVariavel = "Olá, mundo";

console.log(minhaVariavel)

// Comentários

/*
Isso 
é 
tudo
comentário
*/


// Variáveis e tipos de dados

var meuNumero = 10;

console.log(meuNumero);

console.log(meuNumero + 5)

console.log("10" + 5)

console.log(typeof meuNumero);

var booleano = true; //false

console.log(typeof booleano);

var meuObjeto = {};
var meuArray = [];
var meuNell = null;
var meuUndefined = undefined;

console.log(typeof meuObjeto)
console.log(typeof meuArray)
console.log(typeof meuNell)
console.log(typeof meuUndefined)

// let e const
// novas formas de delcarar variáveis

let x = 10;
const y = 5;

console.log(typeof x);

console.log(x, y);

// Operadores Logicos


console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

// Operadores de comparação

console.log(x == y);
console.log(x != y);

console.log("5" == 5)
console.log("5" === 5)


console.log(x >= y);
console.log(x <= y);

// Operadores lógicos
// AND &&
// OR ||

console.log(10 > 5 && 20 > 5)
console.log(10 > 5 && 20 < 5)
 
console.log(10 > 5 || 20 > 5)
console.log(10 > 5 || 20 < 5)
console.log(10 < 5 || 20 < 5)

// Conversão de tipos

const meuNumero2 = "123"

const meuNumeroConvertido = Number(meuNumero2)
console.log(meuNumeroConvertido)

// Estrutura de condição - if, else, else if

const idade = 20;

if(idade < 18){
    console.log("Criança");
} else {
    console.log("Adulto")
}

// switch
const fruta = "Banana"

switch (fruta) {
    case "Banana":
    console.log("Banana é a fruta");
    break;
    case "Maçã":
    console.log("Maçã é a fruta");
    break;
}

// Estrutruras de repetições
// 1, 2, 3, 4, 5, 6... => Dependendo de uma condição

// contador, condição de limite, incremento
for (let i = 0; i < 5; i++){
    console.log(`O valor de i é: ${i}`)

}

// while

let k = 0;

while (k < 5) {
    console.log("Ovalor de k: "+ k);
    k++;
}

// funções
// function nome(arg1, arg2) { corpo }

function cumprimentar(nome){ 
    console.log("Olá! "+nome)
}

// invocação 
cumprimentar("Kiko")

//escopo de variáveis
let cor = "azul"

function mostrarCor() {
    let cor = "verde"
    console.log(cor);
}
console.log(cor);
mostrarCor();

// hosting = içamento
testeHoisting()
function testeHoisting() {
    console.log("Deu Certo!")
}

// arrow function
const testeArrow = () => console.log("Isso tambem é função");
testeArrow()

// truthy e falsy
const minhaVariavel11 = ""; //falsy

if(minhaVariavel11){
    console.log("É verdadeiro!");
} else {
    console.log("É falso!");
}

// array, listas

const numeros = [1, 2, 3, 4, 5]

console.log(numeros);

console.log(numeros[0]);

console.log(numeros[4]);

numeros.push(12); // Coloca um termo no final do Array

console.log(numeros);

numeros.pop(); // Tira o ultimo termo do Array

console.log(numeros);

let numer = "Oi, eu sou o goku!"
let qtdnum = numer.split("i") // Separa o array por determinado elemento apresentado entre parenteses

console.log(qtdnum.length);



//strings
const minhaStringNova = "Olá, Mundo!"

// Concatenação
const minhaString3 = minhaStringNova + " Como você está ?"

console.log(minhaString3)

//Interpolação

const minhaString4 = `${minhaStringNova} Como você está ?`
console.log(minhaString4)

console.log(minhaString4.length) // mostra a qtd de caracteres 

console.log(minhaString4[7]) // mostra um caractere especifico

console.log(minhaString4.toUpperCase()) // Deixa tudo Maiúsculo

// Data e hora
const agora = Date()
console.log(agora);

const natal = new Date(2023, 11, 25)
console.log(natal)

// Math

console.log(Math.PI); // Numero pi

console.log(Math.round(3.9)); // Arredondamento

console.log(Math.sqrt(16)); // Raiz quadrada

console.log(Math.pow(2,3)); // Potenciação























