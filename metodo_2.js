// este metodo irá encontrar o primeiro numero que satsfaça a condição que seria neste caso >3
// ou seja o primeiro numero que seja maior que 3 ele exibirá
let numeros = ['1', '7', '10', '13', '23']
// aqui estou dizendo que o find irá procurar por elemento que seja > 3 
let encontrar = numeros.find((elemento) => elemento > 3 )
// aqui eu exibo o numero que o find me mostrar
console.log(encontrar)