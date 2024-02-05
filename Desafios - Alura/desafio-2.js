// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Olá, tudo bem? Irei lhe fazer algumas perguntas para te conhecer melhor!');

rl.question('Qual o seu nome? ', (nome) => {
  rl.question('Quantos anos você tem? ', (idade) => {
    rl.question('Qual linguagem de programação você está estudando? ', (linguagem) => {
      const msg = `Olá, ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
      console.log(msg);

      rl.question(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO. `, (resposta) => {
        if (resposta === '1') {
          console.log('Muito bom! Continue estudando e você terá muito sucesso.');
        } else if (resposta === '2') {
          console.log('Ahh que pena... Já tentou aprender outras linguagens?');
        } else {
          console.log('Resposta inválida. Por favor, responda com 1 para SIM ou 2 para NÃO.');
        }

        rl.close();
      });
    });
  });
});

