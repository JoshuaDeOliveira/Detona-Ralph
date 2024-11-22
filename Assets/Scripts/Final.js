let Final = {
    Visual:{
        P1: document.querySelector('#PrimeiraVida'),
        P2: document.querySelector('#SegundaVida'),
        P3: document.querySelector('#TerceiraVida'),
    },
    Valor:{
        Final1: localStorage.getItem('resultado1'),
        Final2: localStorage.getItem('resultado2'),
        Final3: localStorage.getItem('resultado3'),
    }
}

Pontuação()

function Pontuação(){
    if(Final.Visual.P1){
        Final.Visual.P1.textContent = `1º Vida: ${Final.Valor.Final1}`
        Final.Visual.P2.textContent = `2ª Vida: ${Final.Valor.Final2}`
        Final.Visual.P3.textContent = `3º Vida: ${Final.Valor.Final3}`
    } else{
        console.log("ELEMENTO NÃO FOI ENCONTRADO")
    }
}
