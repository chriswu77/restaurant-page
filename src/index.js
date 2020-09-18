import {createHeader} from './header';
import {renderHomePage} from './home-tab';
import {renderMenuPage} from './menu-tab';
import {renderContactPage} from './contact-tab';
import {contentDOM} from './base';

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

const changeTab = tab => {
    if (currentPage === tab) return;
    currentPage = tab;
    contentDOM.classList.add('fade-in');
    currentPage === 'home' ? renderHomePage() : currentPage === 'menu' ? renderMenuPage() : renderContactPage();
    setActiveTab(tab);
    setTimeout(() => {
        contentDOM.classList.remove('fade-in');
    }, 500);
};

window.addEventListener('load', changeTab('home'));

tabsDOM.home.addEventListener('click', () => {
    changeTab('home');
});

tabsDOM.menu.addEventListener('click', () => {
    changeTab('menu');
});

tabsDOM.contact.addEventListener('click', () => {
    changeTab('contact');
});