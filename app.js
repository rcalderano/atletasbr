function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("resultados-pesquisa").value

// se campoPesquisa for uma string sem resultado não mostrar nada
if (!campoPesquisa == ""){
  section.innerHTML = "<p> Nada foi encontrado. voce não digitou nenhuma palavra</p>"
  return
}

campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      //se titulo inclui campo pesquisa então faça a ação
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags(campoPesquisa)) {
      // Cria um novo elemento div para cada dado
      resultados += `
        <div class="item-resultado">
          <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <h3>
          <a class="descricao-esporte">${dado.esporte}</a>
          </h3>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Conheça o Atleta</a>
        </div>
      `;
      }
    }
  
    if (!resultados) { 
        resultados = "<p>Nada foi encontrado</p>"

    }

    // Atribui os resultados formatados à seção HTML
    section.innerHTML = resultados;
  }
//console.log(section)

//console.log (dado.titulo.includes(campoPesquisa))