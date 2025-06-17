function verificarRespostas() {
  const perguntas = document.querySelectorAll('.pergunta');
  let acertos = 0;

  perguntas.forEach(pergunta => {
    const correta = pergunta.getAttribute('data-resposta');
    const selecionada = pergunta.querySelector('input[type="radio"]:checked');
    if (selecionada && selecionada.value === correta) {
      acertos++;
    }
  });

  const resultado = document.getElementsByClassName('resultadoQuiz');
  window.alert(`Você acertou ${acertos} de ${perguntas.length} perguntas.`);
}
