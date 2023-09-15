// Exercicios Fundamentos

//Exercicio 1: Olá, Mundo!
//Crie um script que imprima "Olá, Mundo!" no console

console.log("Olá, Mundo!");

//Exercicio 2: Conversão de tipos
// Dado o valor de uma string "1234" converta o numero e exiba o tipo de variavel no console

let strnumero = "1234"

let numero = Number(strnumero)

console.log(strnumero)
console.log(typeof numero)

//Exercicio 3: Dado uma string "Javascript é incrível!" escreva o codigo que conte quantos caracteres a string tem e quantas palavras existem na frase

const mstr = "Javascript é incrível!"

const qtc = mstr.length
const qtp = mstr.split(" ")

console.log(qtc)
console.log(qtp)

//Exercicio 5: Crie um array com 4 nomes e use um loop for para imprimir cada nome no console

let names = ["Felipe","Pablo","John","Eliseu", "Marcos"]

for (i=0;i<=4;i++){

    console.log(`Olá, ${names[i]}`)
}

//Exercicio 6: Criar uma função que converta as horas do formato de 24 hrs Ex: "14:30" pro formato de 12 hrs AM/PM Ex: "02:00 PM"

// Jeito feio e com função T.T
function converterhorario(hora) {
    const [horas, minutos] = hora.split(":")

    let hora12 = horas % 12 || 12;
    
     let periodo = "AM"

     if(horas > 12){
     periodo = "PM"  
     }

   

    console.log(`Agora são ${hora12}:${minutos} ${periodo}`);
}

converterhorario("12:16")

//Jeito sem função :D
const horap =  new Date();
let hora = horap.getHours();
const minuto = horap.getMinutes();

var periodo = "AM";

if (hora > 11) {
    var periodo = "PM";
}

console.log(`A hora atual é : ${hora}:${minuto} ${periodo} `)















