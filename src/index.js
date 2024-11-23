import "./styles.css"
import restaurantImg from "/assets/restaurant.jpeg"


const content = document.getElementById('content');


const heading = document.createElement('div');
const headingTitle = document.createElement('h1');
const headingSubtitle = document.createElement('p');
heading.classList.add('heading-content');
headingTitle.textContent = "Rest-2-Rant";
headingSubtitle.textContent = "Your go to one-stop Eat N' Yap";
heading.appendChild(headingTitle)
heading.appendChild(headingSubtitle);

const image = document.createElement('img');
image.src = restaurantImg;

const opens = document.createElement('div');
const openHrs = document.createElement('h1');
const schedule = document.createElement('div');
const monday = document.createElement('p');
const tuesday = document.createElement('p');
const wednesday = document.createElement('p');
const thursday = document.createElement('p');
const friday = document.createElement('p');
const saturday = document.createElement('p');
const sunday = document.createElement('p');
opens.classList.add('open');
schedule.classList.add('schedule');
openHrs.textContent = "Open Hours";
monday.textContent = "Monday: 8 am - 5 pm";
tuesday.textContent = "Tuesday: 8 am - 5 pm";
wednesday.textContent = "Wednesday: 8 am - 5 pm";
thursday.textContent = "Thursday: 9 am - 5 pm";
friday.textContent = "Friday: 9 am - 5 pm";
saturday.textContent = "Saturday: 10 am - 6 pm";
sunday.textContent = "Sunday: 10 am - 4 pm";
schedule.appendChild(monday);
schedule.appendChild(tuesday);
schedule.appendChild(wednesday);
schedule.appendChild(thursday);
schedule.appendChild(friday);
schedule.appendChild(saturday);
schedule.appendChild(sunday);
opens.appendChild(openHrs);
opens.appendChild(schedule);

const location = document.createElement('div');
const loc = document.createElement('h1');
const address = document.createElement('p');
location.classList.add('location');
loc.textContent = "Location";
address.textContent = "1234 Some Street, Anyplace, Somewhere";
location.appendChild(loc);
location.appendChild(address);


content.appendChild(heading);
content.appendChild(image);
content.appendChild(opens);
content.appendChild(location);



