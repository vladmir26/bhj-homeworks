let menuLink = document.querySelectorAll(".menu__link");

for (let m of menuLink) {
    m.addEventListener("click", openMenu);
} 


function openMenu (event) {
 event.preventDefault();
 const parent = event.target.closest('.menu__item');

 const menu = parent.querySelector('.menu_sub');
 menu.classList.toggle('menu_active');

}