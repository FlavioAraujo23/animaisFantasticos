import AnimaNumeros from './animaNumeros.js';

export default function fetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch('https://animais-fantasticos-blush.vercel.app/js/api/animais.json');
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }
  criarAnimais();
}
