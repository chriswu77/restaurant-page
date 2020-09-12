import {initialHomeLoad, createHeader} from './home-tab';

// home page controller
window.addEventListener('load', () => {
    createHeader();
    // initialHomeLoad();
    // setActiveTab('home');
});

// tabs controller
const setActiveTab = tab => {
    const tabsDOM = {
        home: document.querySelector('#home-tab'),
        menu: document.querySelector('#menu-tab'),
        contact: document.querySelector('#contact-tab')
    };

    let currentTab;
    tab === 'home' ? currentTab = tabsDOM.home : tab === 'menu' ? currentTab = tabsDOM.menu : currentTab = tabsDOM.contact;
    currentTab.classList.add('tabs-active');
};