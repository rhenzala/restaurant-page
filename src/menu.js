import pizza from "/assets/pizza.jpeg";
import shawarma from "/assets/shawarma.jpeg";
import kebab from "/assets/kebab.jpeg";

export function createMenuPage(){
    const content = document.getElementById('content');

    const heading = document.createElement('div');
    const headingTitle = document.createElement('h1');
    const headingSubtitle = document.createElement('p');
    heading.classList.add('content-heading');
    headingTitle.textContent = "MENU";
    headingSubtitle.textContent = "The Rest-2-Rant Specialty";
    heading.appendChild(headingTitle)
    heading.appendChild(headingSubtitle);

    const menu1 = document.createElement('div');
    const dishName1 = document.createElement('h2');
    const description1 = document.createElement('p');
    const price1 = document.createElement('p');
    const dishImage1 = document.createElement('img');
    menu1.classList.add('menu', 'content-section');
    dishName1.textContent = "Pizza";
    description1.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit.";
    price1.textContent = "$2.99";
    dishImage1.src = pizza;
    dishImage1.alt = "Image of pizza";
    dishImage1.classList.add('menu-image');
    menu1.appendChild(dishName1);
    menu1.appendChild(description1);
    menu1.appendChild(price1);
    menu1.appendChild(dishImage1);

    const menu2 = document.createElement('div');
    const dishName2 = document.createElement('h2');
    const description2 = document.createElement('p');
    const price2 = document.createElement('p');
    const dishImage2 = document.createElement('img');
    menu2.classList.add('menu', 'content-section');
    dishName2.textContent = "Shawarma";
    description2.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit.";
    price2.textContent = "$1.99";
    dishImage2.src = shawarma;
    dishImage2.alt = "Image of Shawarma";
    dishImage2.classList.add('menu-image');
    menu2.appendChild(dishName2);
    menu2.appendChild(description2);
    menu2.appendChild(price2);
    menu2.appendChild(dishImage2);

    const menu3 = document.createElement('div');
    const dishName3 = document.createElement('h2');
    const description3 = document.createElement('p');
    const price3 = document.createElement('p');
    const dishImage3 = document.createElement('img');
    menu3.classList.add('menu', 'content-section');
    dishName3.textContent = "Kebab";
    description3.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit.";
    price3.textContent = "$2.49";
    dishImage3.src = kebab;
    dishImage3.alt = "Image of Kebab";
    dishImage3.classList.add('menu-image');
    menu3.appendChild(dishName3);
    menu3.appendChild(description3);
    menu3.appendChild(price3);
    menu3.appendChild(dishImage3);

    content.appendChild(heading);
    content.appendChild(menu1);
    content.appendChild(menu2);
    content.appendChild(menu3);
}