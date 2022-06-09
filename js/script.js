"use strict"

//our services

const handleClick = (event) => {
    document.querySelector('.our-services-menu-item.active').classList.remove('active');
    event.target.classList.add('active')

    const category = event.target.dataset.category;
    document.querySelector(`.our-services-information.active`).classList.remove('active');
    document.querySelector(`[data-set="${category}"]`).classList.add('active');
}

    const btnCollection = document.querySelectorAll('.our-services-menu li');
    btnCollection.forEach(btn => btn.addEventListener('click' , handleClick));


// Our amazing work

const products = [
    {
        category: 'graphicDesign',
        imgSrc: 'img/graphic design/graphic-design1.jpg',
    },
    {
        category: 'graphicDesign',
        imgSrc: 'img/graphic design/graphic-design2.jpg',
    },
    {
        category: 'graphicDesign',
        imgSrc: 'img/graphic design/graphic-design3.jpg',
    },
    {
        imgSrc: 'img/graphic design/graphic-design4.jpg',
    },
    {
        category: 'graphicDesign',
        imgSrc: 'img/graphic design/graphic-design5.jpg',
    },
    {
        category: 'graphicDesign',
        imgSrc: 'img/graphic design/graphic-design6.jpg',
    },
    {
        category: 'graphicDesign',
        imgSrc: 'img/graphic design/graphic-design7.jpg',
    },
    {
        category: 'graphicDesign',
        imgSrc: 'img/graphic design/graphic-design8.jpg',
    },
    {
        category: 'graphicDesign',
        imgSrc: 'img/graphic design/graphic-design9.jpg',
    },
    {
        category: 'graphicDesign',
        imgSrc: 'img/graphic design/graphic-design10.jpg',
    },
    {
        category: 'graphicDesign',
        imgSrc: 'img/graphic design/graphic-design11.jpg',
    },
    {
        category: 'graphicDesign',
        imgSrc: 'img/graphic design/graphic-design12.jpg',
    },
    {
        category: 'landingPage',
        imgSrc: '../img/landing page/landing-page1.jpg',
    },
    {
        category: 'landingPage',
        imgSrc: '../img/landing page/landing-page2.jpg',
    },
    {
        category: 'landingPage',
        imgSrc: '../img/landing page/landing-page3.jpg',
    },
    {
        category: 'landingPage',
        imgSrc: '../img/landing page/landing-page4.jpg',
    },
    {
        category: 'landingPage',
        imgSrc: '../img/landing page/landing-page5.jpg',
    },
    {
        category: 'landingPage',
        imgSrc: '../img/landing page/landing-page6.jpg',
    },
    {
        category: 'landingPage',
        imgSrc: '../img/landing page/landing-page7.jpg',
    },
    {
        category: 'webDesign',
        imgSrc: '../img/web design/web-design1.jpg',
    },
    {
        category: 'webDesign',
        imgSrc: '../img/web design/web-design2.jpg',
    },
    {
        category: 'webDesign',
        imgSrc: '../img/web design/web-design3.jpg',
    },
    {
        category: 'webDesign',
        imgSrc: '../img/web design/web-design4.jpg',
    },
    {
        category: 'webDesign',
        imgSrc: '../img/web design/web-design5.jpg',
    },
    {
        category: 'webDesign',
        imgSrc: '../img/web design/web-design6.jpg',
    },
    {
        category: 'webDesign',
        imgSrc: '../img/web design/web-design7.jpg',
    },
    {
        category: 'wordpress',
        imgSrc: '../img/wordpress/wordpress1.jpg',
    },
    {
        category: 'wordpress',
        imgSrc: '../img/wordpress/wordpress2.jpg',
    },
    {
        category: 'wordpress',
        imgSrc: '../img/wordpress/wordpress3.jpg',
    },
    {
        category: 'wordpress',
        imgSrc: '../img/wordpress/wordpress4.jpg',
    },
    {
        category: 'wordpress',
        imgSrc: '../img/wordpress/wordpress5.jpg',
    },
    {
        category: 'wordpress',
        imgSrc: '../img/wordpress/wordpress6.jpg',
    },
    {
        category: 'wordpress',
        imgSrc: '../img/wordpress/wordpress7.jpg',
    },
    {
        category: 'wordpress',
        imgSrc: '../img/wordpress/wordpress8.jpg',
    },
    {
        category: 'wordpress',
        imgSrc: '../img/wordpress/wordpress9.jpg',
    },
    {
        category: 'wordpress',
        imgSrc: '../img/wordpress/wordpress10.jpg',
    },


];


function displayProducts(products) {
    const productsContainer = document.querySelector('.amazing-work-content');

    products.forEach(product => {
        const iDiv = document.createElement('div');
        iDiv.id = product.id;
        iDiv.className = 'amazing-work-content';

        const img = document.createElement("img");
        img.src = product.imgSrc;
        iDiv.appendChild(img);

        productsContainer.appendChild(iDiv);
    })

}
let elementsOnPage = 12;
let firstItems = products.slice(0, elementsOnPage);

displayProducts(firstItems);

const showMoreBtn = document.querySelector('.our-amazing-work-button-load-more');

showMoreBtn.addEventListener('click', (btn) => {
    if (products.length > 12) {
        let newElements = [];

        for (let i = elementsOnPage; i < elementsOnPage + 12; i++) {
            if (products[i]) {
                newElements = [...newElements, products[i]];
            }
        }
        elementsOnPage += newElements.length;
        displayProducts(newElements);
    }

    if (elementsOnPage >= products.length) {
        btn.target.style.display = 'none';
    }
});

// Slider

const clients = [
    {
        id: 1,
        name: 'Conor McGregor',
        position: 'PR manager',
        imgSrc: 'img/peoples/1011_oooo.plus.png',
        description: 'ё Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa',
    },
    {
        id: 2,
        name: 'Hasan Ali',
        position: 'UX Designer',
        imgSrc: 'img/peoples/Layer 344.png',
        description: 'Integer dignissim, augue tempus ultricies luctus',
    },
    {
        id: 3,
        name: 'Will Smith',
        position: 'Backend Developer',
        imgSrc: 'img/peoples/962_oooo.plus.png',
        description: 'augue tempus ultricies luctus',
    },
    {
        id: 4,
        name: 'Volodymyr Zelensky',
        position: 'Frontend Developer',
        imgSrc: 'img/peoples/915_oooo.plus.png',
        description: 'Integer dignissim, augue tempus ultricies luctus. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus,',
    },
    {
        id: 5,
        name: 'Bendjamin Franklin',
        position: 'UX Designer',
        imgSrc: 'img/peoples/314_oooo.plus.png',
        description: 'augue tempus ultricies luctus',
    },
    {
        id: 6,
        name: 'Vin Diesel',
        position: 'Frontend Developer',
        imgSrc: 'img/peoples/233_oooo.plus.png',
        description: 'Integer dignissim, augue tempus ultricies luctus',
    },
]


const buttonLeft = document.querySelector('.left');
const buttonRight = document.querySelector('.right');
const clientsContainer = document.querySelector('.clients-container');


const mainClient = document.querySelector('.name-of-clients');


initClients();

buttonLeft.addEventListener('click', () => {
    scrollLeft();
})

buttonRight.addEventListener('click', () => {
    scrollRight();
})

function scrollLeft() {
    let currentImages = document.querySelectorAll('.choose-client');
    let activeImage;
    let activeImageIndex;
    let nextImage;

    for (let i = 0; i < currentImages.length; i++) {
        const elem = currentImages[i];
        if (elem.classList.contains('client-active')) {
            activeImage = elem;
            activeImageIndex = i;
        }
    }

    if (activeImage === currentImages[0]) {
        clientsContainer.removeChild(currentImages[3]);

        const firstImage = currentImages[0];
        let nextClient;

        if (firstImage.id === clients[0].id.toString()) {
            nextClient = clients[clients.length - 1];
        } else {
            nextClient = clients[firstImage.id - 2];
        }

        const newImg = createClient(nextClient);
        clientsContainer.insertBefore(newImg, activeImage);
        currentImages = document.querySelectorAll('.choose-client');
        nextImage = currentImages[0];
    } else {
        nextImage = currentImages[activeImageIndex - 1];
    }
    nextImage.classList.add('client-active');
    activeImage.classList.remove('client-active');

    const client = getClientById(nextImage.id);
    changeClient(client);
}


function scrollRight() {
    let currentImages = document.querySelectorAll('.choose-client');
    let activeImage;
    let activeImageIndex;
    let nextImage;

    for (let i = 0; i < currentImages.length; i++) {
        const elem = currentImages[i];
        if (elem.classList.contains('client-active')) {
            activeImage = elem;
            activeImageIndex = i;
        }
    }

    if (activeImage === currentImages[3]) {
        clientsContainer.removeChild(currentImages[0]);

        const lastImage = currentImages[currentImages.length - 1];
        let nextClient;

        if (lastImage.id === clients.length.toString()) {
            nextClient = clients[0];
        } else {
            nextClient = clients[lastImage.id];
        }
        const newImg = createClient(nextClient);
        clientsContainer.appendChild(newImg);
        currentImages = document.querySelectorAll('.choose-client');
        nextImage = currentImages[3];
    } else {
        nextImage = currentImages[activeImageIndex + 1];
    }
    nextImage.classList.add('client-active');
    activeImage.classList.remove('client-active');

    const client = getClientById(nextImage.id);
    changeClient(client);

}

function getClientById(id) {
    let result;
    clients.forEach(client => {
        if (client.id.toString() === id) {
            result = client;
        }
    })
    return result;
}

function initClients() {
    const firstClients = clients.slice(0, 4);

    firstClients.forEach(client => {
        const element = createClient(client);
        if (firstClients[0] === client) {
            element.classList.add('client-active');
            changeClient(client);
        }

        clientsContainer.appendChild(element);
    })
}

function changeClient(client) {
    mainClient.querySelector("h3").innerHTML = client.name;
    mainClient.querySelector("p").innerHTML = client.position;
    mainClient.querySelector("img").src = client.imgSrc;
    document.querySelector('.banner-comments-description').innerHTML = client.description;
}


function createClient(client) {
    const img = document.createElement('img');
    img.id = client.id;
    img.className = 'client-photo choose-client';
    img.src = client.imgSrc;

    img.addEventListener('click', () => {
        changeClient(client);
        const images = document.querySelectorAll('.choose-client');

        images.forEach(e => {
            e.classList.remove('client-active');
        })

        img.classList.add('client-active');
    })

    return img;

}



