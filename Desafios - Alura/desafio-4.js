const readline = require('readline');

const numeroAdivinhar = Math.floor(Math.random() * 11);
let tentativasRestantes = 3;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Bem-vindo ao Jogo de Adivinhação! Tente adivinhar o número entre 0 e 10.');

function jogoAdivinhacao() {
  rl.question('Digite seu chute: ', (chuteUsuario) => {
    chuteUsuario = parseInt(chuteUsuario);

    if (chuteUsuario === numeroAdivinhar) {
      console.log('Parabéns! Você acertou!');
      rl.close();
    } else {
      tentativasRestantes--;

      if (tentativasRestantes > 0) {
        console.log(`Errado! Você tem mais ${tentativasRestantes} tentativas.`);
        jogoAdivinhacao();
      } else {
        console.log(`Suas tentativas acabaram. O número era ${numeroAdivinhar}.`);
        rl.close();
      }
    }
  });
}

jogoAdivinhacao();
