const burger = document.querySelector('.burger');
aboutUsDropDown.onclick = function (){
    aboutUsDropDown__content.classList.toggle('dropdown__contentActive');
    aboutArrow.classList.toggle('aboutArrow__active')
}
HelpDropDown.onclick = function (){
    HelpDropDown__content.classList.toggle('dropdown__contentActive');
    getHelpArrow.classList.toggle('aboutArrow__active')
}
ContactsDropDown.onclick = function (){
    ContactsDropDown__content.classList.toggle('dropdown__contentActive');
    contactUsArrow.classList.toggle('aboutArrow__active')
}
document.querySelector('.burger__maskDisabled').onclick = function (){
    burgerDisable();
}
burger.onclick = function burgerActive(){
    document.querySelector('.burger__menu').classList.toggle('burger__active');
    document.querySelector('.burger__maskDisabled').classList.toggle('burger__activeMask');
    document.querySelector('.scrollOpen').classList.toggle('scrollLock');
    topRow.classList.toggle('burger__row__active');
    bottomRow.classList.toggle('burger__row__active__bottom');
    rowOff.classList.toggle('rowOff');
}
function burgerDisable(){
    document.querySelector('.burger__menu').classList.remove('burger__active');
    document.querySelector('.burger__maskDisabled').classList.remove('burger__activeMask');
    document.querySelector('.scrollOpen').classList.remove('scrollLock');
    topRow.classList.remove('burger__row__active');
    bottomRow.classList.remove('burger__row__active__bottom');
    rowOff.classList.remove('rowOff');
}
document.getElementById('deliveryScroll').onclick = function scrolltoHome(){
    burgerDisable();
    document.getElementById('homePage').scrollIntoView({
        behavior: 'smooth'
    });
}
document.getElementById('aboutScroll').onclick = function scrolltoAbout(){
    burgerDisable();
    document.getElementById('instagram').scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });
}
document.getElementById('RestaurantsScroll').onclick = function scrolltoAbout(){
    burgerDisable();
    document.getElementById('Restaurants').scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });
}
document.getElementById('SpecialitiesScroll').onclick = function scrolltoAbout(){
    burgerDisable();
    document.getElementById('specialities').scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });
}
document.querySelector('.language__dropDown').onclick = function(){
    document.querySelector('.language__dropDown-content__box').classList.toggle('language__dropDown-content__box-active');
    language__dropDownArrow.classList.toggle('LanguagueArrow')
}