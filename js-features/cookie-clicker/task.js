"use srict"

let clicker = document.querySelector("#clicker__counter");
let cookie = document.querySelector("#cookie");
let isCookiBig = false;

function game () {
   let a = Number(clicker.textContent) + 1; 
   clicker.textContent = a;

   if(isCookiBig) {
       cookie.width = cookie.width - 50;
       cookie.height = cookie.height - 50;
       isCookiBig = false;
   } else {
    cookie.width = cookie.width + 50;
    cookie.height = cookie.height + 50;
    isCookiBig = true;
   }

 }

 cookie.addEventListener("click", game);











