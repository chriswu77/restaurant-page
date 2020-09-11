import {initialHomeLoad, createHeader} from './home-tab';

// home page controller
window.addEventListener('load', () => {
    createHeader();
    initialHomeLoad();
});

