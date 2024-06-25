import './style.css';
import { addComponentToBody } from './loadPage';
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact';

document.addEventListener('DOMContentLoaded', () => {
    addComponentToBody();

    // Load initial Home content
    loadHome();

    // Add event listeners to the navigation buttons
    document.querySelector('nav').addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            switch (event.target.textContent) {
                case 'Home':
                    loadHome();
                    break;
                case 'Menu':
                    loadMenu();
                    break;
                case 'Contact':
                    loadContact();
                    break;
            }
        }
    });
});