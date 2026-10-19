const numeros = [1, 3, 5, 88, 0, 1, -1];
let resul1 = numeros.every(n => n > 0); // todos os numeros atendem a condição?
console.log(resul1); // false, pq nem todos os numeros são maiores q zero

let resul2 = numeros.some(n => n > 0); // algum numero é maior que zero?
console.log(resul2); // true, pelo menos um numero é maior q zero

numeros.forEach(n => {
    console.log("numero: " + n); // lista de numeros completa
})

let resul3 = numeros.filter(n => n>4); // Quais numeros são maiores que 4?
console.log(resul3);// 5, 88

let resul4 = numeros.map(n => n * 2); // map cria uma nova lista, neste caso, lista com os numeros mutiplicados por 2
console.log(resul4);
