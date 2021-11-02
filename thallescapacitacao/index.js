const elemGrupo = document.body.querySelector('#grupo');
if (elemGrupo) {
    elemGrupo.textContent = fraseGrupo();
}

const elemNumeroDicas = document.body.querySelector('#numero-dicas');
if (elemNumeroDicas) {
    elemNumeroDicas.textContent = fraseNumeroDicas();
}

function fraseGrupo() {
    const grupos = [
        'ave',
        'mamífero',
        'invertebrado',
        'mamífero',
        'réptil, anfíbio, ou peixe',
        'ave',
        'mamífero',
        'invertebrado',
        'mamífero',
        'réptil, anfíbio, ou peixe'
    ];
    const posicaoSorteada = Math.floor(Math.random() * grupos.length);
    const grupo = grupos[posicaoSorteada];
    let desinencia = 'e';
    if (grupo === 'ave') {
        desinencia = 'a';
    }
    return `Que ${grupo} é ess${desinencia}?`;
}

function fraseNumeroDicas() {
    const numeroDicas = Math.floor(Math.random() * 8) + 1;
    let desinencia = '';
    if (numeroDicas > 1) {
        desinencia = 's';
    }
    return `Você tem ${numeroDicas} dica${desinencia}`;
}