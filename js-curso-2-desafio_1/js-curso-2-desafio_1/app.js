// 1 -Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
    let titulo = document.querySelector('h1');
    titulo.innerHTML ='Hora do Desafio';
   


// 2 -Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

    function consoleTeste(){

        console.log('Teste deu certo do console');


    };

// 3 -Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

    function alertTeste(){

        alert('Eu amo JS');

    };
// 4 -Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

    function promptTeste(){

        let resposta = prompt('Digite um nome de uma cidade do Brasil');
        alert(`Estive em ${resposta} e lembrei de você.`);

    };



// 5 -Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

    function somaTeste(){

    let numSoma1 = prompt('Digite o primeiro número: ');
    let numSoma2 = prompt('Digite o segundo número: ');
    resultado = parseInt(numSoma1) + parseInt(numSoma2); 

    alert(`${numSoma1} + ${numSoma2} = ${resultado}`);

    };
