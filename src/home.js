// This module creates and appends the respective content to the content div.

import FoodImage from './assets/food.jpg';

export function loadHome() {
    const homeDiv = document.createElement('div');
    
    const heading1 = document.createElement('h1');
    heading1.textContent = 'This is the best restaurant in the world!';
    
    const heading3 = document.createElement('h3');
    heading3.textContent = 'Tasty food, comfy chairs, beautiful waitresses!';
    
    const heading4 = document.createElement('h4');
    heading4.textContent = 'Hours: Never';
    
    const myIcon = new Image();
    myIcon.src = FoodImage;
    
    homeDiv.appendChild(heading1);
    homeDiv.appendChild(heading3);
    homeDiv.appendChild(heading4);
    homeDiv.appendChild(myIcon);
    
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    content.appendChild(homeDiv);
}