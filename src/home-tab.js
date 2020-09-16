export {renderHomePage};

const renderHomePage = () => {
    const contentDOM = document.querySelector('#content');
    contentDOM.innerHTML = '';

    const homeContent = document.createElement('div');
    homeContent.classList.add('home-pg-style');

    const heading = document.createElement('h1');
    heading.textContent = 'Tsujita LA';

    const description = document.createElement('p');
    description.setAttribute('id', 'description');
    description.textContent = 'We have the best Tsukemen Ramen in Los Angeles!';

    homeContent.appendChild(heading);
    homeContent.appendChild(description);
    contentDOM.appendChild(homeContent);
};