export function addComponentToBody() {
    const body = document.body;
    
    // Create a div with id "content"
    const content = document.createElement('div');
    content.id = 'content';
    body.appendChild(content);
}