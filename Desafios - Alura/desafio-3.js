const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Bem-vindo ao Jogo de Escolhas! Vamos começar.');

rl.question('Você quer seguir para a área de Front-End ou Back-End? (Digite 1 para Front-End ou 2 para Back-End): ', (areaEscolhida) => {
  if (areaEscolhida === '1') {
    rl.question('Você quer aprender React ou Vue? (Digite 1 para React ou 2 para Vue): ', (frameworkEscolhido) => {
      if (frameworkEscolhido === '1') {
        console.log('Parabéns! Você escolheu Front-End com React.');
      } else if (frameworkEscolhido === '2') {
        console.log('Parabéns! Você escolheu Front-End com Vue.');
      } else {
        console.log('Opção inválida.');
      }
      escolherDestino();
    });
  } else if (areaEscolhida === '2') {
    rl.question('Você quer aprender C# ou Java? (Digite 1 para C# ou 2 para Java): ', (linguagemEscolhida) => {
      if (linguagemEscolhida === '1') {
        console.log('Parabéns! Você escolheu Back-End com C#.');
      } else if (linguagemEscolhida === '2') {
        console.log('Parabéns! Você escolheu Back-End com Java.');
      } else {
        console.log('Opção inválida.');
      }

      escolherDestino();
    });
  } else {
    console.log('Opção inválida.');
    rl.close();
  }
});

function escolherDestino() {
  rl.question('Você quer se especializar na área escolhida ou se tornar Fullstack? (Digite 1 para se especializar ou 2 para Fullstack): ', (opcao) => {
    if (opcao === '1') {
      console.log('Ótima escolha! Você está se especializando na área escolhida.');
    } else if (opcao === '2') {
      console.log('Incrível! Você está se desenvolvendo para se tornar Fullstack.');
    } else {
      console.log('Opção inválida.');
    }

    inserirTecnologias();
  });
}

function inserirTecnologias() {
  const tecnologias = [];

  function inserirProximaTecnologia() {
    rl.question('Digite o nome da tecnologia que você gostaria de aprender: ', (tecnologia) => {
      tecnologias.push(tecnologia);

      rl.question('Tem mais alguma tecnologia que você gostaria de aprender? (Digite "ok" para continuar ou "sair" para encerrar): ', (resposta) => {
        if (resposta.toLowerCase() === 'ok') {
          inserirProximaTecnologia();
        } else if (resposta.toLowerCase() === 'sair') {
          mostrarTecnologias();
        } else {
          console.log('Resposta inválida.');
          mostrarTecnologias();
        }
      });
    });
  }

  inserirProximaTecnologia();

  function mostrarTecnologias() {
    console.log('Você escolheu aprender as seguintes tecnologias:');
    tecnologias.forEach(tecnologia => {
      console.log(`- ${tecnologia}`);
    });

    console.log('Obrigado por jogar!');

    rl.close();
  }
}
