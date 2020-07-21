const navUl = document.getElementById('navigation');

const comingData = [{ links: 'SECTION ONE', title: 'SECTION ONE', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae quasi beatae sit repellendus facilis rem blanditiis suscipit illo, nostrum molestias, dolor doloribus deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae quasi beatae sit repellendus facilis rem blanditiis suscipit illo, nostrum molestias, dolor doloribus deleniti.' }, { links: 'SECTION TOW', title: 'SECTION TWO', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae quasi beatae sit repellendus facilis rem blanditiis suscipit illo, nostrum molestias, dolor doloribus deleniti.' }, { links: 'SECTION THREE', title: 'SECTION THREE', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae' }, { links: 'SECTION FOUR', title: 'SECTION FOUR', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae quasi beatae sit repellendus facilis rem blanditiis suscipit illo, nostrum molestias, dolor doloribus deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae quasi beatae sit repellendus facilis rem blanditiis suscipit illo, nostrum molestias, dolor doloribus deleniti.' }, { links: 'SECTION FIVE', title: 'SECTION FIVE', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae quasi beatae sit repellendus facilis rem blanditiis suscipit illo, nostrum molestias, dolor doloribus deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est magni aspernatur iure architecto dolorem molestiae quasi beatae sit repellendus facilis rem blanditiis suscipit illo, nostrum molestias, dolor doloribus deleniti.' }];

for (let i = 0; i < comingData.length; i++) {
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

    const list = document.createElement('li');
    navUl.appendChild(list)
    const anchors = document.createElement('a');
    anchors.textContent = comingData[i].links;
    anchors.setAttribute('href', '#' + divContainer.getAttribute('id'));
    navUl.classList.add('navbar');
    anchors.classList.add('links')
    list.appendChild(anchors);

}
const footer = document.createElement('footer');
document.body.appendChild(footer);
const footerContainer = document.createElement('div');
footerContainer.setAttribute('class', 'footer');
footer.appendChild(footerContainer);
const para = document.createElement('p');
para.textContent = ' Udacity First Project';
footerContainer.appendChild(para);

const navLinks = document.querySelectorAll('.links');

navLinks.forEach(navLink => {
    navLink.addEventListener('click', function(e) {
        let destination = document.querySelector(this.hash);
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    })
})


navLinks.forEach(node => {
    node.addEventListener('click', handle)
})

function handle(e) {
    e.preventDefault();
    const current = document.querySelector('.active');
    if (current) {
        current.classList.remove('active')
    }
    this.classList.add('active')
}

window.addEventListener("scroll", (e) => {
    let scroll = this.scrollY;
    if (scroll) {
        navUl.style.visibility = 'visible'
    }
    setTimeout(function() {
            navUl.style.visibility = 'hidden'
        }, 3000)
        // }

});