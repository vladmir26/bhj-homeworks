let modalMain = document.querySelector("#modal_main");
let modalClose = document.querySelector(".modal__close");
let showSuccess = document.querySelector(".show-success");
let modalSuccess = document.querySelector("#modal_success");


modalMain.classList.add("modal_active");

modalClose.addEventListener("click", removeClassMain);

function removeClassMain () {
   modalMain.classList.remove("modal_active");
}

showSuccess.addEventListener("click", addClassSuccess);

function addClassSuccess () {
   modalSuccess.classList.add("modal_active");
} 

modalClose.addEventListener("click", removeClassSuccess);

function removeClassSuccess () {
    modalSuccess.classList.remove("modal_active");
}