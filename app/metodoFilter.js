const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros () {
    elementInsertLivros.innerHTML = ''
    const elementBtn = document.getElementById(this.id);
    const categoria = elementBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filterDisponibilidade()
    : filterCategoria(categoria);
    exibirOsLivroNaTela(livrosFiltrados);
    if (categoria == 'disponivel') {
        const valotTotal = calcValorTotal(livrosFiltrados);
        exibirValorTotal(valotTotal)

    }
}

function filterCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filterDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotal(valotTotal) {
    elementValorTotalLivros.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valotTotal}</span></p>
  </div>
    `
}
