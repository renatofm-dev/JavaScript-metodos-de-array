function exibirOsLivroNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        // let disponibilidade = verificaDisponibilidadeLivro (livro);
        let = disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livros__imagens indisponivel'
        elementInsertLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    });
}

// function verificaDisponibilidadeLivro (livro) {
//   if (livro.quantidade > 0) {
//       return 'livro__imagens'
//   } else {
//       return 'livros__imagens indisponivel'

//   }
// }