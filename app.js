function music() {
    let audio = document.getElementById("myAudio");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  
function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    campoPesquisa = campoPesquisa.toLowerCase()
    
    if(campoPesquisa== "") {
       section.innerHTML = "Você precisa digitar o nome de um livro para ser pesquisado"
        return
    }
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let autor = "";
    let genero = "";
    let sinopse = "";

    // Itera sobre cada livro na lista de livros
    for (let livro of livros) {
      
        titulo = livro.titulo.toLowerCase();
        autor = livro.autor.toLowerCase();
        genero = livro.genero.toLowerCase();
        sinopse = livro.sinopse.toLowerCase();

        if(titulo.includes(campoPesquisa) || autor.includes(campoPesquisa) || genero.includes(campoPesquisa) || sinopse.includes(campoPesquisa)) {
             // Cria um novo elemento
        resultados += `
            <div class ="item-resultado">
                <h2> ${livro.titulo}</h2>
                <p class = "autor">${livro.autor}</p>
                <p class = "genero">${livro.genero}</p>
                <p class = "sinopse">${livro.sinopse}</p>
            </div>
        `;

        }  
    }
    
    if (!resultados) {
        resultados = "Não foi encontrado nenhum livro citado por Rory Gilmore pela sua busca"
    }
    
    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
    }

    