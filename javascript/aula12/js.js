//every(), some(), forEach(), filter() e map()----------------------------------------------------
const numeros = [1, 3, 5, 88, 0, 1, -1];
let resul1 = numeros.every(n => n > 0); // todos os numeros atendem a condição?
console.log(resul1); // false, pq nem todos os numeros são maiores q zero

let resul2 = numeros.some(n => n > 0); // algum numero é maior que zero?
console.log(resul2); // true, pelo menos um numero é maior q zero

numeros.forEach(n => {
    console.log("numero: " + n); // lista de numeros completa
})

let resul3 = numeros.filter(n => n > 4); // Quais numeros são maiores que 4?
console.log(resul3);// 5, 88

let resul4 = numeros.map(n => n * 2); // map cria uma nova lista, neste caso, lista com os numeros mutiplicados por 2
console.log(resul4);


//indexOf(), lastIndexOf(), includes(), find(), findIndex()---------------------------------------
console.log("-".repeat(30));
const n1 = [1, 44, 76, 67, 9, 99, 100, 122, 1];
console.log(n1);

console.log(n1.indexOf(76)); // retorna o indice da primeira ocorrencia de um valor
console.log(n1.indexOf(450)); // se não encontrar o valor, retorna -1

console.log(n1.lastIndexOf(1)); // retorna o indice da ultima ocorrencia de um valor
console.log(n1.lastIndexOf(450)); // se não encontrar o valor, retorna -1

console.log(n1.includes(122)); // inclui 122? true

console.log(n1.find(n => n> 67)); // retorna o primeiro valor que corresponde a condição. Se nenhum atender, retorna undefined

console.log(n1.findIndex(n => 67)) // retorna o primeiro valor que corresponde a condição. Se nenhum atender, retorna -1

//concat(), join(), toString() --------------------------------------------------------------------
console.log("-".repeat(30));
let frutas = ["maça", "uva", "banana", "melancia", "kiwi", "abacaxi"];
let verduras = ["alface", "couve", "repolho", "brocolis"];

console.log(frutas.concat(verduras)); // junta duas ou mais arrays

console.log(frutas.join(" - ")); // transforma os elementos do array em uma única string, usando um separador escolhido

console.log(verduras.toString()); // converte o Array para uma String

// push(), pop(), shift(), unshift(), slice(), splice()--------------------------------------------
let nomes = ["Ana", "João", "Mariana", "Marcelo"];
console.log(nomes);

nomes.push("Felipe"); // adiciona ao final da lista
console.log(nomes);

console.log(nomes.pop()); // remove o ultimo elemento do array
console.log(nomes);

console.log(nomes.shift()); // remove o primeiro elemento do array
console.log(nomes);

console.log(nomes.unshift("Katarina")); // adciona um ou mais elementos no começo do Array
console.log(nomes);

console.log(nomes.slice(1,3)); // slice(1, 3) começa no índice 1 e termina antes do índice 3 

nomes.splice(1,3, "Josue"); // adicionar, remover ou substituir elementos
console.log(nomes);

// reverse(), reduce() 
console.log("-".repeat(30));
let materias = ["ed.fisica", "matematica", "portugues", "artes"];
console.log(materias);

materias.reverse(); // inverte a ordem dos elementos do array original
console.log(materias);  

let num1 = [10, 20, 30, 40];
let soma = numeros.reduce((acumulador, numero) => { // reduce: Percorre os elementos do array e acumula um resultado. É muito usado para somar valores, calcular totais e agrupar dados.
    return acumulador + numero;
}, 0);
console.log(soma);