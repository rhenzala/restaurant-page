import "./styles.css"
import restaurantImg from "/assets/restaurant.jpeg"


const content = document.getElementById('content');
const heading = document.createElement('h1');
const para = document.createElement('p');
const image = document.createElement('img');

heading.textContent = "Welcome to Rest-2-Rant";
para.textContent = "Your go to one-stop Eat N' Yap";
image.src = restaurantImg;

content.appendChild(heading);
content.appendChild(para);
content.appendChild(image);

