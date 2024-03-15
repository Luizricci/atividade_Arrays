// nesse metodo irei usar o splice 
// ele modifica a Array adicionando algum dado 
// ou removendo um dado de alguma posição e adicionando outro qualquer
let meses = ['Janeiro', 'Marco', 'Abril', 'maio'];
// aqui eu estou dizendo que fevereiro ira ocupar a posição 1(Array começam do 0)
// e ele nao irá remover nada 
meses.splice(1, 0, 'Fevereiro');
console.log(meses);

let numeros = ['1', '7', '10', '13', '23']
// aqui eu estou dizendo que o numero 999 ira ocupar a posição 2 e irá remover apenas 1 elemento
numeros.splice(2, 1, '999')
console.log(numeros)