export function createContactPage(){
    const content = document.getElementById('content');

    const heading = document.createElement('div');
    const headingTitle = document.createElement('h1');
    const headingSubtitle = document.createElement('p');
    heading.classList.add('heading-content');
    headingTitle.textContent = "CONTACT";
    headingSubtitle.textContent = "For inquiries, message us!";
    heading.appendChild(headingTitle)
    heading.appendChild(headingSubtitle);

    const contact = document.createElement('div');
    const contactDetails = document.createElement('h2');
    const email = document.createElement('p');
    const phone = document.createElement('p');
    contact.classList.add('contact');
    contactDetails.textContent ="Contact Details";
    email.textContent = "E-Mail: rest2rant@email.com";
    phone.textContent = "Phone: 123 456 789";
    contact.appendChild(contactDetails);
    contact.appendChild(email);
    contact.appendChild(phone);

    content.appendChild(heading);
    content.appendChild(contact);
}