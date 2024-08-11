const quantidadeGolpes = 4;


// Define os tipos de minerais
let minerais = ["Carvão", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%)
  // Subtrai 1 do i para que a contagem comece em 0 (índice 0 do array)
  let minaIndex = (i - 1) % minerais.length;
  
  // Exibe o número do golpe e o tipo de mineral correspondente
  console.log(i + ": " + minerais[minaIndex]);
}
