const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const listaDeCompras = [];

function adicionarItem() {
  rl.question('Deseja adicionar um item à lista de compras? (sim/não): ', (resposta) => {
    if (resposta.toLowerCase() === 'sim') {
      rl.question('Digite o nome do item: ', (item) => {
        rl.question('Em qual categoria esse item se encaixa? (frutas, laticínios, congelados, doces, etc.): ', (categoria) => {
          listaDeCompras.push({ item, categoria });

          console.log(`"${item}" adicionado à lista de compras na categoria "${categoria}".`);

          adicionarItem();
        });
      });
    } else if (resposta.toLowerCase() === 'não') {
      if (listaDeCompras.length > 0) {
        opcaoRemoverItem();
      } else {
        exibirListaDeCompras();
        rl.close();
      }
    } else {
      console.log('Opção inválida. Responda com "sim" ou "não".');
      adicionarItem();
    }
  });
}

function exibirListaDeCompras() {
  console.log('Lista de Compras:');
  listaDeCompras.forEach(({ item, categoria }) => {
    console.log(`    ${categoria}: ${item}`);
  });
}

function opcaoRemoverItem() {
  exibirListaDeCompras();

  rl.question('Qual item você deseja remover da lista? ', (itemRemover) => {
    const indexItemRemover = listaDeCompras.findIndex(({ item }) => item === itemRemover);

    if (indexItemRemover !== -1) {
      const { item, categoria } = listaDeCompras.splice(indexItemRemover, 1)[0];
      console.log(`"${item}" removido da lista de compras na categoria "${categoria}".`);
    } else {
      console.log('Não foi possível encontrar o item na lista.');
    }

    adicionarItem();
  });
}

adicionarItem();
