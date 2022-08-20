// Изменение размера шрифта 

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

// Изменение цвета текста

let colorText = Array.from(document.querySelectorAll(".book__control_color .color"));


for (let elem of colorText) {
    elem.addEventListener("click", changeColorText);
}

function changeColorText (event) {
   event.preventDefault();

   let currentEl = colorText.find((element) => element.classList.contains("color_active"));

   currentEl.classList.remove("color_active");
   event.target.classList.add("color_active");

  if (event.target.classList.contains("text_color_gray")) {
       book.classList.add("book_color-gray");
    } else {
       book.classList.remove("book_color-gray");
   }

  if (event.target.classList.contains("text_color_whitesmoke")) {
       book.classList.add("book_color-whitesmoke");
   } else {
       book.classList.remove("book_color-whitesmoke");
   }
}

// Изменеие цвета фона

let colorBg = Array.from(document.querySelectorAll(".book__control_background .color"));

for (let ele of colorBg) {
    ele.addEventListener("click", changeColorBg);
}

function changeColorBg (event) {
    event.preventDefault();

    let currentElem = colorBg.find((element) => element.classList.contains("color_active"));

    currentElem.classList.remove("color_active");
    event.target.classList.add("color_active");

    if (event.target.classList.contains("bg_color_black")) {
       book.classList.add("bg_color_black");
     } else {
       book.classList.remove("bg_color_black");
   }

     if (event.target.classList.contains("bg_color_gray")) {
      book.classList.add("bg_color_gray");
    } else {
      book.classList.remove("bg_color_gray");
   }
}




