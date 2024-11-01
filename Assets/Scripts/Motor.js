let Pontuação = document.getElementById("Pontos")
let Temporizador = document.getElementById("Minutos")
let Vidas = document.getElementById("Life")

let First = document.getElementById("Painel1")

Score = 0

function MarcadorPontos(){
    if (First.className == "janela Inimigo") {
        Score += 1
        Pontuação.innerHTML = Score
    }
}