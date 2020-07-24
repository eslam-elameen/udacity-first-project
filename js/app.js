const navUl = document.getElementById('navigation');

// the coming data object 
const comingData = [{ links: 'SECTION ONE', title: 'SECTION ONE', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae quasi beatae sit repellendus facilis rem blanditiis suscipit illo, nostrum molestias, dolor doloribus deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae quasi beatae sit repellendus facilis rem blanditiis suscipit illo, nostrum molestias, dolor doloribus deleniti.' }, { links: 'SECTION TOW', title: 'SECTION TWO', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae quasi beatae sit repellendus facilis rem blanditiis suscipit illo, nostrum molestias, dolor doloribus deleniti.' }, { links: 'SECTION THREE', title: 'SECTION THREE', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae' }, { links: 'SECTION FOUR', title: 'SECTION FOUR', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae quasi beatae sit repellendus facilis rem blanditiis suscipit illo, nostrum molestias, dolor doloribus deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae quasi beatae sit repellendus facilis rem blanditiis suscipit illo, nostrum molestias, dolor doloribus deleniti.' }, { links: 'SECTION FIVE', title: 'SECTION FIVE', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae quasi beatae sit repellendus facilis rem blanditiis suscipit illo, nostrum molestias, dolor doloribus deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae quasi beatae sit repellendus facilis rem blanditiis suscipit illo, nostrum molestias, dolor doloribus deleniti.' }];


// creating html dom 
for (let i = 0; i < comingData.length; i++) {
    // creating sections 
    const sections = document.createElement('section');
    document.body.appendChild(sections);
    const divContainer = document.createElement('div');
    divContainer.setAttribute('id', 'section' + [i + 1]);
    divContainer.setAttribute('class', 'section');
    sections.appendChild(divContainer);
    const sectionHeaders = document.createElement('h1');
    sectionHeaders.textContent = comingData[i].title;
    const sectionBody = document.createElement('p');
    sectionBody.textContent = comingData[i].body;
    divContainer.appendChild(sectionHeaders);
    divContainer.appendChild(sectionBody);

    // creating nav links 
    const list = document.createElement('li');
    navUl.appendChild(list)
    const anchors = document.createElement('a');
    anchors.textContent = comingData[i].links;
    anchors.setAttribute('href', '#' + divContainer.getAttribute('id'));
    navUl.classList.add('navbar');
    anchors.classList.add('links')
    list.appendChild(anchors);
}

// creating footer 
const footer = document.createElement('footer');
document.body.appendChild(footer);
const footerContainer = document.createElement('div');
footerContainer.setAttribute('class', 'footer');
footer.appendChild(footerContainer);
const para = document.createElement('p');
para.textContent = ' Udacity First Project';
footerContainer.appendChild(para);

const navLinks = document.querySelectorAll('.links');

// making scroll smooth on click nav link to scroll to view  
navLinks.forEach(navLink => {
    navLink.addEventListener('click', function(e) {
        let destination = document.querySelector(this.hash);
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    })
})


// hide navbar when not scroll
window.addEventListener("scroll", (e) => {
    let scroll = this.scrollY;
    if (scroll) {
        navUl.style.visibility = 'visible'
    }
    setTimeout(function() {
        navUl.style.visibility = 'hidden'
    }, 7000);


    // highlight the section on scroll  
    navLinks.forEach(node => {
        let currentId = node.getAttribute('href');
        let currentSection = document.getElementById(currentId.replace('#', ''));
        let navHeight = navUl.getBoundingClientRect().height;

        if (currentSection.offsetTop - navHeight <= scroll && scroll < currentSection.getBoundingClientRect().height + currentSection.offsetTop) {
            for (let i = 1; i <= navLinks.length; i++) {
                let items = node.parentNode.parentNode.childNodes[i]
                items.firstChild.classList.remove('active')
            }
            node.classList.add('active');
        }
    })
});

// adding active style to clicked section 
navLinks.forEach(node => {
    node.addEventListener('click', handle);
})

function handle(e) {
    e.preventDefault();
    const current = document.querySelector('.active');
    if (current) {
        current.classList.remove('active')
    }
    this.classList.add('active');
}