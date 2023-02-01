const editor = document.getElementById('editor');
const btn = document.querySelector('.btn');

editor.addEventListener("keyup", () => {

 localStorage.setItem("storage",editor.value);
 localStorage.getItem("storage");

})

window.addEventListener("load", () => {
   if(localStorage.getItem("storage")) {
      editor.value = localStorage.getItem("storage");
   }
})

btn.addEventListener("click", () => {
   editor.value = '';
})


