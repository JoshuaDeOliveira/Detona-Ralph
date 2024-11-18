const state = {
    visual:{
        janelas: document.querySelectorAll('.janela'),
        inimigo: document.querySelector(".Inimigo"),
        Temporizador: document.querySelector("#Minutos"),
        Pontuação: document.querySelector("#Pontos"),
        Final: document.getElementById("Pinal")
    },
    valores:{
        tempo: null,
        Tempo: 5,
        Velocidade: 1000,
        Tempo1: setInterval(Tempo, 1000),
        Posição: 0,
        resultado: 0,
        TempoFinal: null
    }
}

function Over(){
    state.visual.Final.innerHTML = state.valores.resultado
}

function Tempo(){
    state.valores.Tempo--
    state.visual.Temporizador.textContent = state.valores.Tempo
    if (state.valores.Tempo <= 0){
        window.location.href = "GamerOver.html"
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
Over()