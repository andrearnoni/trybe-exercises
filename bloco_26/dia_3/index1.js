const fs = require('fs');

function handleText(nomeDoArquivo, conteudoDoArquivo) {
  fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, conteudoDoArquivo);

  return 'ok';
}

module.exports = handleText;