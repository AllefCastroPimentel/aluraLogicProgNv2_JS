let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
}

function telaInicial(){

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}
telaInicial();
let tentativa = 1;


function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
    let acertou = tentativa > 1 ? 'tentativas':'tentativa'
    exibirTextoNaTela('p',`Você acertou com ${tentativa} ${acertou}`);
    novoJogo()
    }else{
        if(numeroSecreto > chute){
            exibirTextoNaTela('p','O número secreto é maior');
        }else{
            exibirTextoNaTela('p','O número secreto é menor'); 
        }
        tentativa++;
        
        limparCampo()
        
    }
}

function limparCampo(){

    let limpo = document.querySelector('input');
    limpo.value ='' ;

    // exibirTextoNaTela('input','');
    // console.log('teste');

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function novoJogo(){

    document.getElementById('reiniciar').removeAttribute('disabled');
   

}

function jogarNovamente(){

    numeroSecreto =gerarNumeroAleatorio();
    telaInicial();
    limparCampo();
    tentativa = 1;
    console.log('teste');
    document.geteElementById('reiniciar').setAttribute('disabled',true);

}// Teste de mesa

function calcularMedia(nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    return parseInt(media);
  }

console.log(calcularMedia(7, 6, 5, 3));

  function verificarAprovacao(media) {
    return media >= 5 ? "Aprovado" : "Reprovado";
}

console.log(verificarAprovacao(calcularMedia(7, 6, 5, 3)));




//1- Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.


let metros = prompt("Digite sua altura:");
let quilogramas = prompt("Digite seu peso:");



imc(metros,quilogramas);

function imc( alt, peso){
    console.log(`${alt} --------------------  ${peso}`)
   

    let saude = peso/(alt*alt);
    
    if(saude>40){

        return(alert("OBESIDADE GRAVE	III"));

    }else if(saude>30 && saude<39.9){

        return(alert("OBESIDADE	II"));

    }else if(saude>25 && saude<29.9){

        return(alert("SOBREPESO	I"));

    }else if(saude>18.5 && saude<24.9){

        return(alert("NORMAL	0"));

    }else{

        return(alert("MAGREZA	0"));

    }
}


//2- Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.


    function fatorial(numero){
     
        if(numero<0){

            alert('Resultado não existe');

        }else if(numero === 0 || numero === 1){

            alert('Resultado é 1');

        }else{
            let result = 1;
            
            for( let i = 2; i <= numero;i++){
              
                result *= i ;
                
                console.log(result);
            };
            return(result);
            
        }
        
        
    }
    
    let resultadoFinal = fatorial(10);

   
    console.log(`Resultado final foi ${resultadoFinal}`);


//3- Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.


let dinheiroReal = prompt("Digite aqui o valor que você gostaria de converter")
let teste = cotacao(dinheiroReal);
alert(`Você tem ${teste}`)
function cotacao (dinheiro){
    let dolar = 4.80
    let convercao = dinheiro / dolar;

    alert(`Uauuu a conversão de valor deu ${convercao.toFixed(2)}`);


    return convercao;
}





//4- Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
   

    function calculo(alt,lag){

        let perimetro = 2*(alt+lag);
        let area = alt*lag;

        alert(`Sala tem ${area}cm de área e ${perimetro}cm de perímetro`)
    
    }

    calculo(4,9);

//5- Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

    function calcularCircular(raio){

        perimetro = 2 * 3.14*raio;
        area = 3.14*(raio*raio);

        alert(`Perimetro ${perimetro} e a área ${area}`);

    }

    calcularCircular(10);
//6- Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.


    function tabuada(num){
        let result = 1;
        for(let i = 1; i <= num;i++){

             result = num * i
            console.log(`${num} * ${i} = ${result}`);

        }

    }
    tabuada(5);
 