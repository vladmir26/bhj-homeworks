let $fontSize = Array.from(document.querySelectorAll(".font-size"));
let $book = document.querySelectorAll(".book"); 

for (let el of $fontSize) {
    el.addEventListener("click", changeFont);
}

function changeFont (event) {
    let currentEl = $fontSize.find((element) => element.classList.contains("font-size_active"))
    if (event.target) {
       currentEl.classList.add("font-size_active");
       

    }
    
}
