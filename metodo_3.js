// nesse metodo iremos mostrar se algum numero da Array é par 
let numeros = ['1', '7', '10', '13', '23']
// aqui estou dizendo que se o elemento dividido por 2 o resultado for 0 ele retornará true
let even = (Elemento) => Elemento % 2 == 0;
// aqui eu exibo o elemeto com o some 
console.log(numeros.some(even))



let numeros2 = ['10', '12', '20', '12', '23']
// neste exemplo eu estou verificando se tem algum numero impar nessa Array
let even2 = (Elemento) => Elemento % 2 !== 0;
console.log(numeros.some(even2))