var nomeEntrada = "Bulba";

// Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

function combinandoNomesPokemons(palavra){
  palavraPokemon = palavra + "saur"
  return palavraPokemon
}

// Exibindo a palavra gerada:
console.log(palavraGerada);