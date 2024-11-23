import "./styles.css"
import restaurantImg from "/assets/restaurant.jpeg"
import { createHomePage } from "./home.js"

function handleBtnClick(event){
    const buttonId = event.target.id; 
    const content = document.getElementById('content');
    content.innerHTML = "";
    if (buttonId === "home") {
        createHomePage(restaurantImg);
    } else if (buttonId === "menu") {
        console.log("Menu page logic here"); 
    } else if (buttonId === "contact") {
        console.log("Contact page logic here"); 
    }
}

const buttons = document.querySelectorAll('.buttons');
buttons.forEach(btn =>{
    btn.addEventListener('click', handleBtnClick)
});






