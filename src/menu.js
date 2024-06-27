// This module creates and appends the respective content to the content div.

export function loadMenu() {
    const menuDiv = document.createElement('div');
    
    const heading1 = document.createElement('h1');
    heading1.textContent = 'Menu';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Here is our delicious menu!';
    
    menuDiv.appendChild(heading1);
    menuDiv.appendChild(paragraph);
    
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    content.appendChild(menuDiv);
}