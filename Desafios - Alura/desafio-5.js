const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const listaDeCompras = {};

function adicionarItem() {
  rl.question('Deseja adicionar um item à lista de compras? (sim/não): ', (resposta) => {
    if (resposta.toLowerCase() === 'sim') {
      rl.question('Digite o nome do item: ', (item) => {
        rl.question('Em qual categoria esse item se encaixa? (frutas, laticínios, congelados, doces, etc.): ', (categoria) => {
          if (!listaDeCompras[categoria]) {
            listaDeCompras[categoria] = [];
          }
          listaDeCompras[categoria].push(item);
          adicionarItem();
        });
      });
    } else {
      exibirListaDeCompras();
      rl.close();
    }
  });
}

function exibirListaDeCompras() {
  console.log('Lista de Compras:');
  for (const categoria in listaDeCompras) {
    if (listaDeCompras[categoria].length > 0) {
      console.log(`    ${categoria}: ${listaDeCompras[categoria].join(', ')}`);
    }
  }
}

adicionarItem();
