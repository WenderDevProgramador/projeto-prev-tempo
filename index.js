
const key = '0cc3e15ba2a0b66a17bdc8bf8b31e503'

function trocarImagem() {
    let msg = window.document.querySelector('div#msg')

    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = ``
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        msg.innerHTML = `Bom Dia!`
        document.body.style.backgroundImage = "url('./img/manha.jpg')";

    } else if (hora > 12 && hora < 18) {
        //Boa Tarde
        msg.innerHTML = `Boa tarde!`
        document.body.style.backgroundImage = "url('./img/Tarde.jpg')";

    } else {
        msg.innerHTML = `Boa Noite!`
        document.body.style.backgroundImage = "url('./img/Noite.jpg')";
    }
}

function colocarDadosTela(dados) {
    console.log(dados)
    document.getElementById('tela-cid').innerHTML = dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector('.previsão').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector('.img-previsão').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())


    colocarDadosTela(dados)

}

function cliqueiNoBotao() {
    let cidade = document.getElementById('cidade').value;
    buscarCidade(cidade)
}



