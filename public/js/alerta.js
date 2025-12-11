var alertas = [];

function obterdados(idprateleiras) {
    fetch(`/medidas/tempo-real/${idprateleiras}`)
        .then(resposta => {
            if (resposta.status == 200) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idprateleiras);
                });
            } else {
                console.error(`Nenhum dado encontrado para o id ${idprateleiras} ou erro na API`);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do prateleiras p/ gráfico: ${error.message}`);
        });

}

function alertar(resposta, idprateleiras) {
    var temp = resposta[0].temperatura;

    var grauDeAviso = '';

    var limites = {
        muito_quente: 23,
        quente: 22,
        ideal: 20,
        frio: 10,
        muito_frio: 5
    };

    var classe_temperatura = 'cor-alerta';

    if (temp >= limites.muito_quente) {
        classe_temperatura = 'cor-alerta perigo-quente';
        grauDeAviso = 'perigo quente'
        grauDeAvisoCor = 'cor-alerta perigo-quente'
        exibirAlerta(temp, idprateleiras, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.muito_quente && temp >= limites.quente) {
        classe_temperatura = 'cor-alerta alerta-quente';
        grauDeAviso = 'alerta quente'
        grauDeAvisoCor = 'cor-alerta alerta-quente'
        exibirAlerta(temp, idprateleiras, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.quente && temp > limites.frio) {
        classe_temperatura = 'cor-alerta ideal';
        removerAlerta(idprateleiras);
    }
    else if (temp <= limites.frio && temp > limites.muito_frio) {
        classe_temperatura = 'cor-alerta alerta-frio';
        grauDeAviso = 'alerta frio'
        grauDeAvisoCor = 'cor-alerta alerta-frio'
        exibirAlerta(temp, idprateleiras, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp <= limites.muito_frio) {
        classe_temperatura = 'cor-alerta perigo-frio';
        grauDeAviso = 'perigo frio'
        grauDeAvisoCor = 'cor-alerta perigo-frio'
        exibirAlerta(temp, idprateleiras, grauDeAviso, grauDeAvisoCor)
    }

    var card;

    if (document.getElementById(`temp_prateleiras_${idprateleiras}`) != null) {
        document.getElementById(`temp_prateleiras_${idprateleiras}`).innerHTML = temp + "°C";
    }

    if (document.getElementById(`card_${idprateleiras}`)) {
        card = document.getElementById(`card_${idprateleiras}`)
        card.className = classe_temperatura;
    }
}

function exibirAlerta(temp, idprateleiras, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idprateleiras == idprateleiras);

    if (indice >= 0) {
        alertas[indice] = { idprateleiras, temp, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idprateleiras, temp, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();
}

function removerAlerta(idprateleiras) {
    alertas = alertas.filter(item => item.idprateleiras != idprateleiras);
    exibirCards();
}

function exibirCards() {
    alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

function transformarEmDiv({ idprateleiras, temp, grauDeAviso, grauDeAvisoCor }) {

    var descricao = JSON.parse(sessionStorage.prateleiras).find(item => item.id == idprateleiras).descricao;
    return `
    <div class="mensagem-alarme">
        <div class="informacao">
            <div class="${grauDeAvisoCor}">&#12644;</div> 
            <h3>${descricao} está em estado de ${grauDeAviso}!</h3>
            <small>Temperatura capturada: ${temp}°C.</small>   
        </div>
        <div class="alarme-sino"></div>
    </div>
    `;
}

function atualizacaoPeriodica() {
    JSON.parse(sessionStorage.prateleiras).forEach(item => {
        obterdados(item.id)
    });
    setTimeout(atualizacaoPeriodica, 5000);
}
