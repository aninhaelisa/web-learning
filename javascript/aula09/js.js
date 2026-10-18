
function errada() {
    output.print();
}

try {
    errada();

} catch (error) {
    console.error(error +  " ERRO NO CONSOLE!")
}