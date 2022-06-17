let modalMain = document.querySelector("#modal_main");
let modalClose = document.querySelectorAll(".modal__close");
let showSuccess = document.querySelector(".show-success");
let modalSuccess = document.querySelector("#modal_success");

modalMain.classList.add("modal_active");

for (let close of modalClose) {
    close.addEventListener("click", removeClass);
}

function removeClass () {
   modalMain.classList.remove("modal_active");
   modalSuccess.classList.remove("modal_active");
}


showSuccess.addEventListener("click", addClassSuccess);

function addClassSuccess () {
   modalSuccess.classList.add("modal_active");
} 
