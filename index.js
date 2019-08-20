let mobileNavStatus = 1;
let dropdownMenuStatus = 0;

const body = document.querySelector('body');
const toggle = document.querySelector(".nav-bar__toggle");
const mobileHandler = document.querySelector(".nav-bar__nav-phone");
const mobileHandlerClose = document.querySelector(".nav-bar__nav-phone-crossed");
const mobileNavigation = document.querySelector(".navigation-phone");

// SWITCH ON/OFF MOBILE NAVIGATION
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

// CATEGORIES DROPDOWN MENU
const toggleDropdown = document.querySelector("#toggle-dropdown");
const toggleDropdownMobile = document.querySelector("#toggle-dropdown-mobile");

const dropdownList = document.querySelector("#dropdown-list");
const dropdownListMobile = document.querySelector("#dropdown-list-mobile");

toggleDropdown.addEventListener("click", function() {
    dropdownMenuStatus === 0 ? (dropdownList.style.display = 'flex', dropdownMenuStatus = 1) : (dropdownList.style.display = 'none', dropdownMenuStatus = 0)
});
toggleDropdownMobile.addEventListener("click", function() {
    dropdownMenuStatus === 0 ? (dropdownListMobile.style.display = 'flex', dropdownMenuStatus = 1) : (dropdownListMobile.style.display = 'none', dropdownMenuStatus = 0)
});