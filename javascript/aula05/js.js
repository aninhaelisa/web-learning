let adcionarNome = prompt("Nome a adcionar: ");
let nomes = ["Ana", "Elisa", "Mariana", "Marcos", "Lucas", "Lara"];
nomes[nomes.length] = adcionarNome;
document.write(nomes+"<br>");
document.write(nomes[0] +"<br>");
for(let i = 0; i<nomes.length; i++){
    document.write((i+1)+"° " + "nome: " + nomes[i] + "<br>");
}

let frutas = new Array("Maça", "Banana", "Kiwi", "Melancia", "Abacaxi");
document.write(frutas+"<br>");
document.write(frutas[0]+"<br>");
for(let i = 0; i<frutas.length; i++){
    document.write((i+1)+"° " + "frutas: " + frutas[i]+"<br>");
}

document.write("Tabuada:<br>");
let mutiplicar=parseInt(prompt("Qual tabuada você quer? "));
for(let i = 0; i<11; i++){ 
    document.write(mutiplicar + " x " + i + " = " + (mutiplicar*i) + "<br>");
}

