export function createMenuPage(){
    const content = document.getElementById('content');

    const heading = document.createElement('div');
    const headingTitle = document.createElement('h1');
    const headingSubtitle = document.createElement('p');
    heading.classList.add('heading-content');
    headingTitle.textContent = "MENU";
    headingSubtitle.textContent = "The Rest-2-Rant Specialty";
    heading.appendChild(headingTitle)
    heading.appendChild(headingSubtitle);

    const menu1 = document.createElement('div');
    const dishName1 = document.createElement('h2');
    const description1 = document.createElement('p');
    const price1 = document.createElement('p');
    menu1.classList.add('menu');
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
    menu2.classList.add('menu');
    dishName2.textContent = "Menu 2";
    description2.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit.";
    price2.textContent = "$3.99";
    menu2.appendChild(dishName2);
    menu2.appendChild(description2);
    menu2.appendChild(price2);

    content.appendChild(heading);
    content.appendChild(menu1);
    content.appendChild(menu2);
}