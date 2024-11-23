export function createHomePage(restaurantImg){
    const content = document.getElementById('content');


    const heading = document.createElement('div');
    const headingTitle = document.createElement('h1');
    const headingSubtitle = document.createElement('p');
    heading.classList.add('content-heading');
    headingTitle.textContent = "Rest-2-Rant";
    headingSubtitle.textContent = "Your go to one-stop Eat N' Yap";
    heading.appendChild(headingTitle)
    heading.appendChild(headingSubtitle);
    
    const image = document.createElement('img');
    image.src = restaurantImg;
    
    const opens = document.createElement('div');
    const openHrs = document.createElement('h1');
    const schedule = document.createElement('div');
    const days = [
        "Monday: 8 am - 5 pm",
        "Tuesday: 8 am - 5 pm",
        "Wednesday: 8 am - 5 pm",
        "Thursday: 9 am - 5 pm",
        "Friday: 9 am - 5 pm",
        "Saturday: 10 am - 6 pm",
        "Sunday: 10 am - 4 pm"
    ];
    opens.classList.add('open','content-section');
    schedule.classList.add('schedule');
    openHrs.textContent = "Open Hours";
    
    days.forEach(day => {
        const dayElement = document.createElement('p');
        dayElement.textContent = day;
        schedule.appendChild(dayElement);
    });
    opens.appendChild(openHrs);
    opens.appendChild(schedule);
    
    const location = document.createElement('div');
    const loc = document.createElement('h1');
    const address = document.createElement('p');
    location.classList.add('location', 'content-section');
    loc.textContent = "Location";
    address.textContent = "1234 Some Street, Anyplace, Somewhere";
    location.appendChild(loc);
    location.appendChild(address);
    
    
    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(opens);
    content.appendChild(location);
}