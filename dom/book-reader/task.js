let fontSize = Array.from(document.querySelectorAll(".font-size"));
let book = document.querySelector(".book");

for (let el of fontSize) {
    el.addEventListener("click", changeFont);
}

function changeFont (event) {
    event.preventDefault();
    
    let oldActiveEl = fontSize.find((element) => element.classList.contains("font-size_active"));
    
    oldActiveEl.classList.remove("font-size_active");
    event.target.classList.add("font-size_active");
    
    if (event.target.classList.contains("font-size_small")) {
       book.classList.add("book_fs-small");
    } else {
       book.classList.remove("book_fs-small");
    }

    if (event.target.classList.contains("font-size_big")) {
        book.classList.add("book_fs-big");
    } else {
        book.classList.remove("book_fs-big");
    }
}

let color = Array.from(document.querySelectorAll(".color"));

for (let elem of color) {
    elem.addEventListener("click", changeColor)
}

function changeColor (event) {
   event.preventDefault();

   let currentEl = color.find((element) => element.classList.contains("color_active"));

   currentEl.classList.remove("color_active");
   event.target.classList.add("color_active");

   book.style.background = currentEl.dataset.bgColor;

   if (event.target.classList.contains("text_color_gray")) {
       book.classList.add("book_color-gray");
       currentEl.dataset.bgColor;
   } else {
       book.classList.remove("book_color-gray");
   }

   if (event.target.classList.contains("text_color_whitesmoke")) {
       book.classList.add("book_color-whitesmoke");
       currentEl.dataset.bgColor;
   } else {
       book.classList.remove("book_color-whitesmoke");
   }


   book.style.color = currentEl.dataset.textColor;

   if (event.target.classList.contains("bg_color_black")) {
       book.classList.add("bg_color_black");
       currentEl.dataset.textColor;
    } else {
       book.classList.remove("bg_color_black");
   }

   if (event.target.classList.contains("bg_color_gray")) {
      book.classList.add("bg_color_gray");
      currentEl.dataset.textColor;
   } else {
      book.classList.remove("bg_color_gray");
   }
}




