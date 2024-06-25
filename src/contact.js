export function loadContact() {
    const contactDiv = document.createElement('div');
    
    const heading1 = document.createElement('h1');
    heading1.textContent = 'Contact Us';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Feel free to contact us at any time!';
    
    contactDiv.appendChild(heading1);
    contactDiv.appendChild(paragraph);
    
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    content.appendChild(contactDiv);
}