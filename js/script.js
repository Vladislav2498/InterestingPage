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

// категории

const amazingWorkBtnCollection = document.querySelectorAll('.amazing-work-menu li');
amazingWorkBtnCollection.forEach(btn => btn.addEventListener('click' , handleClick));

