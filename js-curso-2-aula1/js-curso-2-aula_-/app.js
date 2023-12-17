// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';


let numeroSecreto = 5;

function mudaTexto(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

};

mudaTexto('h1', 'jogo do número secreto');
mudaTexto('p', 'Escolha um número entre 1 e 10');

function verificarChute(){

    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){

        alert('Você acertou!!!');

    }else{
        alert('Você errou')
    }
};


function gerarNumeroAleatorio() {

   return parseInt(Math.random() * 10 + 1 )
    
};


// 1- Criar uma função que exibe "Olá, mundo!" no console.

function texto(){

    console.log('Olá mundo');

};
texto();

// 2- Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function texto2(nome){

    console.log(`Olá, ${nome}`);
};

texto2('Allef');

// 3- Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.


function numDobro(num){

    console.log(num*2);

}

numDobro(10);


// 4- Criar uma função que recebe três números como parâmetros e retorna a média deles.

function numMedia(num1,num2,num3){

    console.log(parseInt((num1+num2+num3)/3));

}

numMedia(8,18,13);


// 5- Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function numMaior(num1,num2){

    if(num1>num2){
        console.log(num1)
    }else{
        console.log(num2)
    }

}

numMaior(6,2);

// 6- Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function numMulti(num1){

    console.log(num1*num1);

}

numMulti(6);