let nome = prompt("Qual o seu nome? ");
if(nome.charAt(0).toUpperCase() == "A"){
    alert("Seu nome começa com A");
}else{
    alert("Seu nome não começa com A");
}

let n1 = Number(prompt("numero 1: "));
let n2 = Number(prompt("numero 2: "));
if(n1 > n2 ){
    alert("NUMERO 1 É MAIOR QUE NUMERO 2!");
}else if(n1==n2){
    alert("NUMERO 1 == NUMERO 2!");
}else{
    alert("Numero 2 é maior que o numero 1");
}

let nomeA = prompt("Nome da primeira pessoa: ");
let nomeB = prompt("Nome da segunda pessoa: ");

if(nomeA.toUpperCase() == nomeB.toUpperCase()){
    alert("Nomes iguais");
}else{
    alert("Nomes diferentes");
}

if(nomeA.charAt(0).toUpperCase() == "A" && nomeB.charAt(0).toUpperCase() == "A"){
    alert("OS DOIS NOMES COMEÇA COM A LETRA A");
} else if(nomeA.charAt(0).toUpperCase() == "A" || nomeB.charAt(0).toUpperCase() == "A"){
    alert("Apenas um dos nomes começam com a letra A");
}else{
    alert("Nenhum dos nomes começam com a letra A");
}