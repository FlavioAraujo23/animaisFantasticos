export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number); // ao passar apenas o number em uma array que contem numeros em string, ele retorna uma nova array somente com numeros
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1; // se for diferente de -1 quer dizer que e verdadeiro
  
  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]

  if(semanaAberto && horarioAberto){
    funcionamento.classList.add('aberto')
  }

}