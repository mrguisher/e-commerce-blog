// TESTIMONIALS 
const sliderTogglePrevious = document.querySelector("#previous");
const sliderToggleNext = document.querySelector("#next");
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