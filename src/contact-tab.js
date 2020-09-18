import {contentDOM} from './base';
export {renderContactPage};

const renderContactPage = () => {
    contentDOM.innerHTML = markup;
};

const markup = `
<div id="contact-container">
    <div id="contact-info">
        <p class="contact-titles">Contact Us!</p>
        <p id="tel" class="contact-desc">Tel: (310) 231-7373</p>
        <p class="contact-desc">Email: tsujitala@gmail.com</p>
    </div>
    <div id="hours-container">
        <p id="hours-title">Hours</p>
        <p class="hours">Monday: 11AM-9:30PM</p>
        <p class="hours">Tuesday: 11AM-9:30PM</p>
        <p class="hours">Wednesday: 11AM-9:30PM</p>
        <p class="hours">Thursday: 11AM-9:30PM</p>
        <p class="hours">Friday: 11AM-10:30PM</p>
        <p class="hours">Saturday: 11AM-10:30PM</p>
        <p class="hours">Sunday: 11AM-9:30PM</p>
    </div>
</div> 
`;