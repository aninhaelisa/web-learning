//Array.from: criar um array a partir de algo iterável ou semelhante a um array
let letras = Array.from("Ana"); // ["A", "n", "a"]
console.log(letras);
let dobro = Array.from([1, 2, 3], n => n * 2);
console.log(dobro);
// [2, 4, 6]


//Array.of: criar um array com os valores informados
let numeros = Array.of(5);
console.log(numeros); // [5]

let numeros1 = Array.of(10, 20, 30);
console.log(numeros1);// [10, 20, 30]

/* DIFERENÇA ENTRE ARRAY E ARRAY.OF
Array(5) cria um array com 5 posições vazias.
Array.of(5) cria um array contendo o número 5.
*/

console.log("spread operator");
let copia = [...numeros]; 
console.log(copia); // [1, 2, 3] Se você modificar a cópia, o array original não será alterado.
let a = [1, 2];
let b = [3, 4];
let resultado = [...a, ...b];
console.log(resultado); // [1, 2, 3, 4] Juntando arrays

console.log("destructuring");
let frutas = ["maçã", "uva", "banana"];
let [primeira, segunda, terceira] = frutas; // a posição determina qual valor será atribuído a cada variável
console.log(primeira); // "maçã"
console.log(segunda);  // "uva"
console.log(terceira); // "banana"

console.log("for ... of"); // estrutura de repetição usada para percorrer os valores de um elemento iterável, como arrays e strings.
for (let fruta of frutas) {
    console.log(fruta);
}
let nome = "Ana";
for (let letra of nome) {
    console.log(letra);
}