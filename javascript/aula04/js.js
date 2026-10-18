let n1 = -1;
while(n1 != 0){
    n1 = parseInt(prompt("1 - entre 5:00 e 11:59\n2 - entre 12:00 e 18:59\n3 - entre 19:00 e 23:59\n4 - entre 00:00 e 4:59\n0-SAIR\nHora atual é:"));
    switch (n1) {
        case 1:
            alert("Bom dia");
            break;
        case 2:
            alert("Boa tarde");
            break;
        case 3:
            alert("Boa noite");
            break;
        case 4:
            alert("Boa madrugada");
            break;
        case 0:
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida! tente novamente");
            break;
    }
}

let n3 = parseInt(prompt("Quantos numeros deseja somar? "));
let soma = 0;
for(let i = 0; i<n3; i++){
    let n4 = parseInt(prompt("Digite o " + (i+1) + "° número: " ));
    soma += n4;
}
alert("A soma é: " + soma);