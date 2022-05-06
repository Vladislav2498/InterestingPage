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


