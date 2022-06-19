let menuLink = document.querySelectorAll(".menu__link");
let menuSub = document.querySelectorAll(".menu_sub");




for (let m of menuLink) {
    m.addEventListener("click", openMenu,);
} 

function openMenu () {

   menuSub.classList.add(".menu_active");
   
   return false;
}