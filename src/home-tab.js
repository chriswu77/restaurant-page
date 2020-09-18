import {contentDOM} from './base';
export {renderHomePage};

const renderHomePage = () => {
    contentDOM.innerHTML = '';

    const homeContent = document.createElement('div');
    homeContent.classList.add('home-pg-style');

    const heading = document.createElement('h1');
    heading.textContent = 'TSUJITA LA';

    const description = document.createElement('p');
    description.setAttribute('id', 'description');
    description.textContent = 'We have the best Tsukemen Ramen in Los Angeles!';

    const address = document.createElement('p');
    address.setAttribute('id','address');
    address.textContent = '2057 Sawtelle Blvd, Los Angeles, CA 90025';

    homeContent.appendChild(heading);
    homeContent.appendChild(description);
    homeContent.appendChild(address);
    contentDOM.appendChild(homeContent);
};