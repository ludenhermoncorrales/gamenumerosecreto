function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);//document.getElementById acessa o documento principal Index e selenciona o alemento com o Id que está entre parenteses e entre chaves simples 
    let de = parseInt(document.getElementById('de').value);//document.getElementById acessa o documento principal Index e selenciona o alemento com o Id que está entre parenteses e entre chaves simples 
    let ate = parseInt(document.getElementById('ate').value);//document.getElementById acessa o documento principal Index e selenciona o alemento com o Id que está entre parenteses e entre chaves simples -- a tag value value para recuperar o valor digitado no campo e a tag parseInt para setar que a variavel será um número

    /*alert (`Quantidade de números é: ${quantidade}`); //para concatenar string com váriavel utilizamos craze
    alert(`Do número: ${de}`);//para concatenar string com váriavel utilizamos craze
    alert (`até o número: ${ateNumero}`);//para concatenar string com váriavel utilizamos craze */
    /*
    let numero = obterNumeroAleatorio(de, ateNumero) //a variavel numero recebe os 
    valores da função obtetNumeroAleatorio*/

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) //i = 0 enquanto i < var(quantidade) então i+1 
    {
        numero = obterNumeroAleatorio(de, ate); // var (numero) recebe o osvalores informados campos com respectivos Id's, intervalo definido pelos parâmetros da var (de) (inclusivo) e var (ate) (exclusivo ou inclusivo, dependendo da implementação)

        while (sorteados.includes(numero)) {// enquanto já estiver o número sorteado no array continua sorteando, ou seja o método includes()determina se um array contém um elemento específico, retornando trueou false
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);//push()é um método integrado Array.prototypeque permite adicionar um ou mais elementos ao final de um array. Ele modifica o array original
    }

    obterNumeroAleatorio();


    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`// para concatenar a tag do HTML com a var(sorteados) colocamos a tag entre craze

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);//retorna um número aleatório entre os valores especificados Documentação: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
}

function alterarStatusBotao() {
    let btReiniciar = document.getElementById('btn-reiniciar');
    if (btReiniciar.classList.contains('container__botao-desabilitado')) {
        btReiniciar.classList.remove('container__botao-desabilitado');
        btReiniciar.classList.add('container__botao');
        
    } else {
        btReiniciar.classList.remove('container__botao');
        btReiniciar.classList.add('container__botao-desabilitado');
    }
}

