export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
  })
  
  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox; 
    this.addEventListener('mousemove', onMouseMove)

    onMouseLeave.tooltipBox = tooltipBox; // passando o tooltipbox para o objeto onmouseleave
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave)
  }

  // objeto criado para passar uma funcao fora do escopo pode se perceber que a variavel tooltip box e passado para o objeto tambem, para isso funcionar e obrigatorio ter o metodo handleEvent(), caso seja outro nome nao irar funcionar
  const onMouseLeave =  {
    handleEvent() {
      this.tooltipBox.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave) // usado para tirar o event do inspecionar, precisa passar o memso event e obj usado na criacao do evento
      this.element.removeEventListener('mousemove', onMouseMove)
    }
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px' // o valor 20 e usado para a caixa ficar um pouco abaixo do mouse   
      // o valor que retorna de event.page é um numero entao e necesario somar com o valor de px para que funcione
      this.tooltipBox.style.left = event.pageX + 20 + 'px'
    }
  }

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox)
    return tooltipBox;
  }
}