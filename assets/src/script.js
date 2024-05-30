let numeroAleatorio = Math.floor(Math.random() * 100) + 1;;
let tentativas = 0;
let palpitesAnteriores = [] //Armazena os palpites

//Função para que o jogador somente insira número de 1 a 100.
//Foi necessário validar essa função abaixo.
function validarPalpite(palpite) {
    if (isNaN(palpite) || palpite < 1 || palpite >100 ){
        alert("Digite um número válido entre 1 a 100!");
        return false;
    }
    return true;
}


function jogoDeAdivinhacao() {
    const palpiteDigitado = pegarPalpiteDigitado();
    
    if (!validarPalpite(palpiteDigitado)){
        alert("Digite um valor válido!!")
        // Verifica se o palpite é válido e permitido.
        return;
       
    }
    //Verificar se o palpite já foi dados anteriormente
    if (palpitesAnteriores.includes(palpiteDigitado)){
        alert("Você já tentou esse palpite, por favor informe outro número.");
        return;
    }
    //Adicionar o palpite aos palpites anteriores
    palpitesAnteriores.push(palpiteDigitado);

    if (palpiteDigitado === numeroAleatorio){
        //Se meu palpiteDigitado for igual ao numeroAleatorio a pessoa acertou
        alert ("Parabéns, você advinhou o número! :D")
        reiniciarJogo();
        return;
         //retur faz com que após o acerto nada mais seja lido
    }else if(palpiteDigitado > numeroAleatorio){
        tentativas++; 
        //caso o jogador erre irá perder uma tentativa
        atualizarFeedback("Esse número é muito alto, tente novamente.")
    }else{
        tentativas++;
        atualizarFeedback("O número é muito baixo, tente novamente.")
        //caso a pessoa erre será dado um "Feedback", função atualizar feedback já existe no meu arquivo index
    }
    const novaPontuacao = 100 - (tentativas *10);
    atualizarPontuacao(novaPontuacao);
    // a cada tentativa subtratir 10 pontos dos 100.

    const palpitesFalhos = pegarPalpitesFalhos();
    const novosPalpitesFalhos = palpitesFalhos + " " + palpiteDigitado;
    atualizarPalpitesFalhos(novosPalpitesFalhos);

    const pontuacaoAtual = pegarPontuacao();
    //condição para que o programa quando o jogador usar todos seus pontos.
    if (pontuacaoAtual === "Você tem 0 pontos") {
        alert("Perdeu! Você acabou com todoas suas tentativas :(")
        reiniciarJogo();
    }
 }


function reiniciarJogo() {
    const vaiReiniciar = confirm("Deseja jogar novamente?");

    if(vaiReiniciar){
    atualizarPalpitesFalhos("");
    atualizarPontuacao(100);
    atualizarFeedback("");
    limparPalpiteDigitado();
        
    }
}





