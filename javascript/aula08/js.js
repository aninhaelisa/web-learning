let dados = new Array();
function add() {
    let inLista = document.getElementById("lista");
    let inNome = document.getElementById("nome");
    let inIdade = document.getElementById("idade");
    let inEmail = document.getElementById("email");

    if (inNome.value.trim() === "" || inEmail.value.trim() === "") {
        alert("VALOR INVÁLIDO! EMAIL E NOME SÃO OBRIGATORIOS");
        return;
    }

    let newDado = {
        nome: inNome.value,
        idade: parseInt(inIdade.value),
        email: inEmail.value
    };
    dados.push(newDado);
    inLista.innerHTML = "";
    dados.forEach(adc => {
        let li = document.createElement("li");
        li.textContent = `Nome: ${adc.nome} | Idade: ${adc.idade} | Email: ${adc.email || 'Não informado'}`;
        inLista.appendChild(li);
    });
    inNome.value = "";
    inIdade.value = "";
    inEmail.value = "";
}

function limpar(){
    dados = [];
    document.getElementById("lista").innerHTML = "";
}
