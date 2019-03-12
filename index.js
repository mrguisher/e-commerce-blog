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


