let custoProduto = 50;
let impostoCusto = custoProduto * 0.2;
let vendaProduto = 80;
let custoTotal = custoProduto + impostoCusto;
let lucro = vendaProduto - custoTotal;

if (custoProduto < 0 || impostoCusto < 0 || vendaProduto < 0) {
    console.log("Erro. Valor inserido inválido!")
} else {
    console.log(lucro * 1000);
}
