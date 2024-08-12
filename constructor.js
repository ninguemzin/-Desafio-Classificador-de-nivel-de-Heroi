
class Filme{
    constructor(titulo, ano, categoria, duracao){
      this.titulo = titulo
      this.ano = ano
      this.categoria = categoria
      this.duracao = duracao
    }
  }

  var filme = new Filme("Vingadores", 2014, "Ação", "2 horas")

  console.log(filme.titulo)
  console.log(filme.ano)
  console.log(filme.categoria)
  console.log(filme.duracao)