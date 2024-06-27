// This module creates the initial "content" div and appends it to the body

export function addComponentToBody() {
    const body = document.body;
    const content = document.createElement('div');
    content.id = 'content';
    body.appendChild(content);
}