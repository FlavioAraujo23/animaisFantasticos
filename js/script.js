import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-anima.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/activeTab.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdownMenu.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import FetchAnimais from './modules/animais-fetch.js';
import BitcoinFetch from './modules/fetch-bitcoin.js';
import { SlideNav } from './modules/slide.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const toolTip = new Tooltip('[data-tooltip]');
toolTip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const menuDropDown = new DropdownMenu('[data-dropdown]');
menuDropDown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

FetchAnimais();
BitcoinFetch();

const slide = new SlideNav('.slide', '.wrapper');
slide.init();
slide.addControl('.custom-controls');
