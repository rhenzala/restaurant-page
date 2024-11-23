import "./styles.css"
import { createHomePage } from "./home.js"
import { createMenuPage } from "./menu.js"
import { createContactPage } from "./contact.js"

function handleBtnClick(event){
    const buttonId = event.target.id; 
    const content = document.getElementById('content');
    content.replaceChildren();
    if (buttonId === "home") {
        createHomePage();
    } else if (buttonId === "menu") {
        createMenuPage();
    } else if (buttonId === "contact") {
        createContactPage();
    }
}

const buttons = document.querySelectorAll('.buttons');
buttons.forEach(btn =>{
    btn.addEventListener('click', handleBtnClick)
});

document.addEventListener('DOMContentLoaded', () => {
    createHomePage();
});




