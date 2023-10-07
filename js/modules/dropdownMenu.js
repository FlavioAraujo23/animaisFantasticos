import outsideClick from './outside.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // define touchstart e click argumentos
    // padrão de events caso o usuário não defina
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }

    this.activeClass = 'active';

    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  // ativa o dropDownMenu e adiciona
  // a função que observa o clique fora dele
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  }

  // Adiciona os eventos ao dropDownMenu
  addDropDownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropDownMenuEvent();
    }
    return this;
  }
}
