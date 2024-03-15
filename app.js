let listaNumerosSorteados = [];
let numeroMax = 50;
let numeroSecreto = gerarNumeroAleatorio();
let numTentativas = 1;
let palTentativa = numTentativas > 1 ? 'tentativas':'tentativa';

function exibirTextosNaTela(tag,texto){
    let campo= document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextosNaTela('h1','Jogo do número secreto');
    exibirTextosNaTela('p',`Escolha um número entre 1 e ${numeroMax}`);
}

exibirMensagemInicial();

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMax + 1);
    let qtdDeElementosNaLista = listaNumerosSorteados.length;
    if(qtdDeElementosNaLista == numeroMax){
        listaNumerosSorteados = []
    } 

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function verificarChute(){
    let chute=document.querySelector('input').value;
    if(chute==numeroSecreto){
        exibirTextosNaTela('h1','Acertou');
        exibirTextosNaTela('p',`Parabéns!! você acertou o número secreto em ${numTentativas} ${palTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(chute>numeroSecreto){
        exibirTextosNaTela('p','Menor');
    }else{
        exibirTextosNaTela('p','Maior');
    }
    numTentativas ++;
    limparCampo();
}

function limparCampo(){
    chute= document.querySelector('input');
    chute.value='';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    numTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}



