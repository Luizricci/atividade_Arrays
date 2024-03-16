let carro = ['Ford', 'Nissan', 'Honda', 'Chevrolet']
let interador = carro.entries()
// neste metodo ele imprime o objeto que está na Array e sua posiçaõ no index
console.log(interador.next().value);

let numeros = ['3', '4', '1', '2']
let interador2 = numeros.entries()
console.log(interador2.next().value);