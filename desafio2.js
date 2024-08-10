
let partidasJogadas = 128
let partidasPerdidas = 63
let getPartidas = rank(partidasJogadas, partidasPerdidas);

function rank(play, defeat) {
  let win = play - defeat;
  let nivel = " ";
  if (win <= 10) {
    nivel = "Ferro";
  } else if (win >= 11 && win <= 20) {
    nivel = "Bronze";
  } else if (win >= 21 && win <= 50) {
    nivel = "Prata";
  } else if (win >= 51 && win <= 80) {
    nivel = "Ouro";
  } else if (win >= 81 && win <= 90) {
    nivel = "Diamante";
  } else if (win >= 91 && win <= 100) {
    nivel = "Lendário";
  } else if (win >= 101) {
    nivel = "Imortal";
  }
  return console.log("O Herói tem de vitórias " + win + " e está no nível " + nivel)
}
