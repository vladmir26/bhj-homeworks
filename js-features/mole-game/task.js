let holes = document.querySelectorAll(".hole");
let hasMole = document.querySelector(".hole_has-mole");
let dead = document.querySelector("#dead");
let lost = document.querySelector("#lost");


for (let hole of holes) {
    hole.addEventListener("click", mole)
}



function mole () {
if (holes) {
 let c = Number(dead.textContent) + 1;
 dead.textContent = c;
}
else  {
    let d = Number(lost.textContent) + 1;
    lost.textContent = d;
   }
}
