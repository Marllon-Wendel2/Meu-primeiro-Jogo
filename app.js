let listaDeNumeros = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
numeroSecreto;
mensagemInicial();

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumertos = listaDeNumeros.length
    if(quantidadeDeNumertos == numeroLimite){
        listaDeNumeros = []
    }
    if(listaDeNumeros.includes(numeroEscolhido)){
       return gerarNumeroAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}

function mensagemInicial(){
    exibirTexto("h1", "Bem-vindo ao número secreto!");
    exibirTexto("p", "Escolha um número de 1 a 10!!");
}

function exibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}
 function verificarChute(){
    let chute = document.querySelector("input").value;
        if(chute == numeroSecreto){
            exibirTexto("h1","Você acertou!!");
            let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
            let mensagemTentativas = `Parabéns você acertou com ${tentativas} ${palavraTentativa}`
            exibirTexto("p",mensagemTentativas);
            document.getElementById("reiniciar").removeAttribute("disabled");
        } else {
            if(chute > numeroSecreto){
                exibirTexto("p", "O números secreto é menor")  
                } else {
                exibirTexto("p", "O número secreto é maior");
            }tentativas++
            limparCampo()
        }
        
 }


