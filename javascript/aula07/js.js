let titulo = document.getElementById("t1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "alterado"
console.log(titulo.textContent);
let user = document.getElementById("user");
console.log(user.value);

/*let p = document.getElementById("p1");
p.innerHTML = "<hr> paragrafo alterado"*/

let nomes = new Array();
function adcionarNome(){
    let input = document.getElementById("nomes");
    let vi = input.value;
    if(vi.trim() === "") {//evita enviar elemento vazio
        alert("VALOR INVÁLIDO");
        return;
    }
    nomes.push(vi); //adcionar aoo final 
    input.value = "";
    atualizar();
}

function atualizar(){
    let lista = document.getElementById("lista");
    lista.innerHTML = ""; //Limpa a lista de antes para rescrever a nova
    for(let i = 0; i <nomes.length; i++){
        lista.innerHTML += (i+1)+"° " +"nome: "+nomes[i]+"<br>";
        console.log(nomes);
    }
}

