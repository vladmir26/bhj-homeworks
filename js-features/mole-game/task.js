let holes = document.querySelectorAll("hole");
let hasMole = document.querySelector("hole_has-mole");
let dead = document.querySelector("#dead");
let lost = document.querySelector("#lost");

for(let hole of holes) {
    click(hole)
}

if (hasMole) {
 let c = Number(dead.textContent) + 1;
 dead.textContent = c;
}
else {
    let c = Number(lost.textContent) + 1;
    lost.textContent = c;
   }
