const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector('.modal__close');

modal.classList.add("modal_active");

let close;


modalClose.addEventListener("click", () => {
   close = modal.classList.remove("modal_active");
  modalClose.cookie = 'close=' + encodeURIComponent(`${close}`);
})

 


