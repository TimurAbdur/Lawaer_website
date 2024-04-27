
document.querySelector('.header__burger-btn').addEventListener('click', ()=> {
    document.querySelector('.header__nav').classList.add('header__nav--active');
    document.body.style.overflowY = "hidden";
});

document.querySelector('.header__close-btn').addEventListener('click', ()=> {
    document.querySelector('.header__nav').classList.remove('header__nav--active');
    document.body.style.overflowY = "auto";
});