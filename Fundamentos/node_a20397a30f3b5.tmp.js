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

for(b=5;b<50;){


}










