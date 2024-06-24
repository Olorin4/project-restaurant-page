import './style.css';
import FoodImage from './assets/food.jpg';

console.log("Hi, I am a restaurant homepage!");

function component() {
    const element = document.createElement('div');
    
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = FoodImage;
    element.appendChild(myIcon);
    
    return element;
  }
  
  document.body.appendChild(component());