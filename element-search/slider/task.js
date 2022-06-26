let arrows = document.querySelectorAll(".slider__arrow");
let sliderItem = Array.from(document.querySelectorAll(".slider__item"));

for (let ar of arrows) {
    ar.addEventListener("click", switching);
}

function switching (event) {
let currentSlider = sliderItem.findIndex((index) => {return index.classList.contains("slider__item_active")}); 

let nextSlider;

if (event.target.classList.contains("slider__arrow_next")) {
    nextSlider = currentSlider + 1;
    sliderItem[nextSlider].classList.add('slider__item_active');
}
if (event.target.classList.contains("slider__arrow_prev")) {
   nextSlider = currentSlider - 1; 
   sliderItem[nextSlider].classList.remove('slider__item_active');
} 
if (nextSlider == sliderItem.length) {
   currentSlider =  sliderItem[0];
}
if (nextSlider < 0) {
    currentSlider = sliderItem.length - 1;
}

}

