let mobileNavStatus = 1;
let dropdownMenuStatus = 0;

const body = document.querySelector('body');
const toggle = document.querySelector(".nav-bar__toggle");
const mobileHandler = document.querySelector(".nav-bar__nav-phone");
const mobileHandlerClose = document.querySelector(".nav-bar__nav-phone-crossed");
const mobileNavigation = document.querySelector(".navigation-phone");


    toggle.onclick = () => {

        if(mobileNavStatus == 1 ) {
            
            mobileHandler.style.opacity = 0;
            mobileHandlerClose.style.display = 'inline-block';
            mobileNavigation.style.left = 0;
            body.classList.add('lock-scroll');

            mobileNavStatus = 0;
        }
        else {
            mobileHandler.style.opacity = 1;
            mobileHandlerClose.style.display = 'none';
            mobileNavigation.style.left = '-100%';
            body.classList.remove('lock-scroll');
            
            mobileNavStatus = 1;
        }
    };

const toggleDropdown = document.querySelector(".nav-blog__toggle");
const toggleDropdownMobile = document.querySelector('body > header > nav > ul > li');
const listHandleMobile = document.querySelector(".navigation-phone__blog-box");
const listHandle = document.querySelector(".nav-bar__navigation-blog-list");

    
    toggleDropdown.onclick = () => {

        if (dropdownMenuStatus === 0) {
            listHandle.style.display = 'flex';
            dropdownMenuStatus = 1;
        }
        else {
            listHandle.style.display = 'none';
            dropdownMenuStatus = 0;
        }
    }
    toggleDropdownMobile.onclick = () => {

        if (dropdownMenuStatus === 0) {
            listHandleMobile.style.display = 'flex';
            dropdownMenuStatus = 1;
        }
        else {
            listHandleMobile.style.display = 'none';
            dropdownMenuStatus = 0;
        }
    }

// TESTIMONIALS 
const sliderTogglePrevious = document.querySelector("#previous");
const sliderToggleNext = document.querySelector("#next");
// const sliderBox = document.querySelector(".testimonials__review-box");
const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");
const slide3 = document.querySelector("#slide3");

const slides = [slide1, slide2, slide3];

let slideStatus = 1;

sliderToggleNext.onclick = () => {

    slides.map((slide) => slide.classList.remove('active'));

    switch (slideStatus) {
        case 1: 
            slide2.classList.add('active');
            slideStatus = 2;
        break;
        case 2: 
            slide3.classList.add('active');
            slideStatus = 3;
        break;
        case 3: 
            slide1.classList.add('active');
            slideStatus = 1;
        break;
        default: return 'error'
    }
}
sliderTogglePrevious.onclick = () => {

    slides.map((slide) => slide.classList.remove('active'));

    switch (slideStatus) {
        case 1: 
            slide3.classList.add('active');
            slideStatus = 3;
        break;
        case 2: 
            slide1.classList.add('active');
            slideStatus = 1;
        break;
        case 3: 
            slide2.classList.add('active');
            slideStatus = 2;
        break;
        default: return 'error'
    }
}