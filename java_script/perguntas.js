function verificarRespostas() {
    const perguntas = document.querySelectorAll('.pergunta');
    let acertos = 0;

    perguntas.forEach(pergunta => {
        const correta = pergunta.getAttribute('data-resposta');
        let selecionada = pergunta.querySelector('input[type="radio"]:checked');

        if (selecionada && selecionada.value === correta) {
            acertos++;
        }
    });

    const resultado = document.getElementsByClassName('resultadoQuiz');

    if (acertos !== perguntas.length) {
        window.alert(`Pontuação: ${acertos}/${perguntas.length}`)
        
        let continuar = window.confirm('Deseja tentar novamente? Suas respostas serão resetadas!');

        if (continuar) {
            location.reload()
        } else {
            perguntas.forEach(pergunta => {
                const correta = pergunta.getAttribute('data-resposta');

                let alternativas = pergunta.getElementsByTagName('ul')[0];
                alternativas.style.backgroundImage = 'linear-gradient(to right, #e23f3f 20%, #dbdbdb)';

                let certa = pergunta.getElementsByClassName(`${correta}`)[0];
                certa.style.backgroundImage = 'linear-gradient(to right, #3FE25A 20%, #dbdbdb)';
            });
        }

    } else {
        window.alert(`Parabéns, você acertou todas as perguntas !!!
            \nPontuação: ${acertos}/${perguntas.length}`)
        perguntas.forEach(pergunta => {
            const correta = pergunta.getAttribute('data-resposta');

            let alternativas = pergunta.getElementsByTagName('ul')[0];
            alternativas.style.backgroundImage = 'linear-gradient(to right, #e23f3f 20%, #dbdbdb)';

            let certa = pergunta.getElementsByClassName(`${correta}`)[0];
            certa.style.backgroundImage = 'linear-gradient(to right, #3FE25A 20%, #dbdbdb)';
        });
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}