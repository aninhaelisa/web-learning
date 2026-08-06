function criarTomate() {
    const tomate = document.createElement('img');
    tomate.src = 'img/logo.png';
    tomate.classList.add('tomate');

    tomate.style.left = Math.random() * 100 + 'vw';

    const tamanho = Math.random() * 30 + 20;
    tomate.style.width = tamanho + 'px';

    const duracao = Math.random() * 3 + 2;
    tomate.style.animationDuration = duracao + 's';

    document.body.appendChild(tomate);

    setTimeout(() => {
        tomate.remove();
    }, duracao * 1000);
}

setInterval(criarTomate, 300);

const imagem = document.getElementById('tmt');
const som = document.getElementById('som-hover');

imagem.addEventListener('mouseenter', () => {
    som.currentTime = 0;
    som.play().catch(error => {
        console.log("Reprodução bloqueada pelo navegador até haver interação prévia.");
    });
});

const sections = document.querySelectorAll(".reveal");


window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;


        if (position < screenHeight - 100) {

            section.classList.add("active");

        }

    });

});