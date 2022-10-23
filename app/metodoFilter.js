const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros () {
    elementInsertLivros.innerHTML = ''
    const elementBtn = document.getElementById(this.id);
    const categoria = elementBtn.value;
    let livrosFiltrados = livros.filter(livros => livros.categoria == categoria);
    exibirOsLivroNaTela(livrosFiltrados);
}