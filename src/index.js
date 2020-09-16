import {renderHomePage} from './home-tab';
import {createHeader} from './header';
import {renderMenuPage} from './menu-tab';

createHeader();
let currentPage;

const tabsDOM = {
    home: document.querySelector('#home-tab'),
    menu: document.querySelector('#menu-tab'),
    contact: document.querySelector('#contact-tab')
};

const setActiveTab = tab => {
    tabsDOM.home.classList.remove('tabs-active');
    tabsDOM.menu.classList.remove('tabs-active');
    tabsDOM.contact.classList.remove('tabs-active');

    let currentTab;
    tab === 'home' ? currentTab = tabsDOM.home : tab === 'menu' ? currentTab = tabsDOM.menu : currentTab = tabsDOM.contact;
    currentTab.classList.add('tabs-active');
};

const initialLoad = () => {
    currentPage = 'home';
    renderHomePage();
    setActiveTab('home');
};

window.addEventListener('load', initialLoad);

tabsDOM.home.addEventListener('click', () => {
    if (currentPage === 'home') return
    initialLoad();
});

tabsDOM.menu.addEventListener('click', () => {
    if (currentPage === 'menu') return
    currentPage = 'menu';
    renderMenuPage();
    setActiveTab('menu');
});