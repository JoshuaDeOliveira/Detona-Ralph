//Primeira versão do codigo de todo o jogo
//Abaixo podem ser visto como foi criado a engine inicialmente em sua primeira versão

let state = {
    visual:{},
    valores:{},
    FinalVisual:{},
    FinalValor:{}
}

if(window.location.pathname.includes('index.html')){ //Codigo da Pagina Index

    state = { 
        visual:{ 
            janelas: document.querySelectorAll('.janela'),
            inimigo: document.querySelector(".Inimigo"),
            Temporizador: document.querySelector("#Minutos"),
            Pontuação: document.querySelector("#Pontos"),
            Vidas: document.querySelector("#Life")
    }, 
        valores:{
            tempo: null,
            Tempo: 5,
            Velocidade: 1000,
            Tempo1: setInterval(Tempo, 1000),
            Posição: 0,
            resultado: 0,
            TempoFinal: null,
            ContVida: 3
    }}

    //Variaveis sendo inseridas.

    function Tempo(){
        if(state.valores.Tempo == 0){
            debugger
            
            switch (state.valores.ContVida) { //Guardar o elemento do resultado baseado nas vidas
                case 3:
                    localStorage.setItem('resultado1', state.valores.resultado)
                    break;
                case 2:
                    localStorage.setItem('resultado2', state.valores.resultado)
                    break;
                case 1:
                    localStorage.setItem('resultado3', state.valores.resultado)
                    break;
                default:
                    console.log("NENHUMA É VERDADEIRA")
                    break;
            }

            state.valores.Tempo = 5
            state.valores.ContVida--
            state.visual.Vidas.textContent = state.valores.ContVida
            state.valores.resultado = 0

        } else if (state.valores.ContVida == 0 ){
            window.location.href = "GamerOver.html"
        }
        if (state.valores.ContVida >= 1){
            state.valores.Tempo--
            state.visual.Temporizador.textContent = state.valores.Tempo
        }
    }
    
    function JanelaAleatoria(){
        state.visual.janelas.forEach((janela) => {
            janela.classList.remove('Inimigo');
        });
    
        let Aleatorio = Math.floor(Math.random() * 9);
        let JanelasAleatorias = state.visual.janelas[Aleatorio];
        JanelasAleatorias.classList.add('Inimigo')
        state.valores.Posição = JanelasAleatorias.id;
    }
    
    function movimento(){
        state.valores.tempo = setInterval(JanelaAleatoria, state.valores.Velocidade)
    }
    
    function PlayAudio(Som){
        let audio = new Audio(`./Assets/Audios/${Som}.mp3`)
        audio.play();
    }
    
    function HitBox(){
        state.visual.janelas.forEach((janela) => {
            janela.addEventListener('click', () => {
                if (janela.id == state.valores.Posição){
                    state.valores.resultado++
                    state.visual.Pontuação.textContent = state.valores.resultado
                    state.valores.Posição;
                    PlayAudio('hit');
                }
            })
        });
    }
    
    function Inicializador(){
        Tempo()
        movimento()
        HitBox()
    }
    
    Inicializador()

} else if(window.location.pathname.includes('GamerOver.html')){ //Codigo da Pagina GameOver
    
    state = {
        FinalVisual:{
            P1: document.querySelector('#PrimeiraVida'),
            P2: document.querySelector('#SegundaVida'),
            P3: document.querySelector('#TerceiraVida'),
        },
        FinalValor:{
            Final1: localStorage.getItem('resultado1'),
            Final2: localStorage.getItem('resultado2'),
            Final3: localStorage.getItem('resultado3'),
        }
    }

    //Declarações de variaveis acima.

    Pontuação()

    function Pontuação(){
        if(state.FinalVisual.P1){
            state.FinalVisual.P1.textContent = `1º Vida: ${state.FinalValor.Final1}`
            state.FinalVisual.P2.textContent = `2ª Vida:  ${state.FinalValor.Final2}`
            state.FinalVisual.P3.textContent = `3º Vida: ${state.FinalValor.Final3}`
        } else{
            console.log("ELEMENTO NÃO FOI ENCONTRADO")
        }
    }

}





