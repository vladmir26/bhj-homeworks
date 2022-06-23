let arrows = document.querySelectorAll(".slider__arrow");
let sliderItem = document.querySelectorAll(".slider__item");

for (let ar of arrows) {
    ar.addEventListener("click", switching);
}

function switching (event) {
 
  for (let sl of sliderItem) {
    sl.classList.add("slider__item_active");

  }
    const par = event.target.closest(".slider__items");
    const slider = par.querySelector(".slider__item");
   
    slider.classList.remove("slider__item_active");


 
  
    
   
} 