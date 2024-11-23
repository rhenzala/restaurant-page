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
    menu1.classList.add('menu', 'content-section');
    dishName1.textContent = "Menu 1";
    description1.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit.";
    price1.textContent = "$2.99";
    menu1.appendChild(dishName1);
    menu1.appendChild(description1);
    menu1.appendChild(price1);

    const menu2 = document.createElement('div');
    const dishName2 = document.createElement('h2');
    const description2 = document.createElement('p');
    const price2 = document.createElement('p');
    menu2.classList.add('menu', 'content-section');
    dishName2.textContent = "Menu 2";
    description2.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit.";
    price2.textContent = "$3.99";
    menu2.appendChild(dishName2);
    menu2.appendChild(description2);
    menu2.appendChild(price2);

    const menu3 = document.createElement('div');
    const dishName3 = document.createElement('h2');
    const description3 = document.createElement('p');
    const price3 = document.createElement('p');
    menu3.classList.add('menu', 'content-section');
    dishName3.textContent = "Menu 3";
    description3.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit.";
    price3.textContent = "$2.49";
    menu3.appendChild(dishName3);
    menu3.appendChild(description3);
    menu3.appendChild(price3);

    content.appendChild(heading);
    content.appendChild(menu1);
    content.appendChild(menu2);
    content.appendChild(menu3);
}