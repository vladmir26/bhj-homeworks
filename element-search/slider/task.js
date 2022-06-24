let arrows = document.querySelectorAll(".slider__arrow");
let sliderItem = Array.from(document.querySelectorAll(".slider__item"));

for (let ar of arrows) {
    ar.addEventListener("click", switching);
}



function switching (event) {
 
if (event.target.classList.contains("slider__arrow_next")) {
const currentSlider = sliderItem.findIndex((index) => {return index.classList.contains("slider__item_active")});
const nextSlider = currentSlider + 1;
}
if (event.target.classList.contains("slider__arrow_prev")) {
 const prevSlider = currentSlider - 1; 
}

if (nextSlider == sliderItem.length) {
   currentSlider ===  sliderItem[0];
}

if(prevSlider < 0) {
    currentSlider === sliderItem.length - 1;
}

nextSlider.classList.add('slider__item_active');
prevSlider.classList.remove('slider__item_active');
} 