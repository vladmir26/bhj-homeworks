const editor = document.getElementById('editor');
const btn = document.querySelector('.btn');

editor.addEventListener("keyup", () => {
 localStorage.setItem("storage",editor.value);
})

let storage = localStorage.getItem("storage");

window.addEventListener("load", () => {
   if(storage) {
      editor.value = storage;
   }
})

btn.addEventListener("click", () => {
   editor.value = '';
   localStorage.removeItem("storage");
})


