let listaDeNumerosSorteados = [];
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    //Math.random() gera um número aleatorio de 0 a 1 exemplo 0.0356564664
   let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
   let listaSorteioCheia = listaDeNumerosSorteados.length;
   // caso lista não consiga mais gerar número aleatório, zerar a lista
   if(listaSorteioCheia == numeroLimite){

    listaDeNumerosSorteados = [];

   }
   // includes verificar se o numero já está na lista, Se sim ele gera um novo numero aleatório
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){

    return gerarNumeroAleatorio();

    }else{
        // push - ele inseri na lista o numero que gerou
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}






// 1- Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = [];


// 2- Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagensDeProgramacao =['javaScript', 'C', 'C++', 'Kotlin', 'Python'];


// 3- Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

 linguagensDeProgramacao.push('java', 'Ruby', 'Golang');

 console.log(linguagensDeProgramacao);
// 4- Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let nomes =['Allef', 'Tu', 'Eu'];

console.log(nomes[1]);




// 5- Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

console.log(linguagensDeProgramacao[1]);



// 6- Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

let ultimoElemento = linguagensDeProgramacao.length -1;

console.log(linguagensDeProgramacao[ultimoElemento]);