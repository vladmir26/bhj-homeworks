let rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));

let currentRotator = rotatorCase.findIndex((index) => index.classList.contains("rotator__case_active"));
setTimeout(changeAdd, rotatorCase[currentRotator].dataset.speed);
  
function changeAdd () {
    currentRotator = rotatorCase.findIndex((index) => index.classList.contains("rotator__case_active"));
    let nextRotator = currentRotator + 1;
      
    if (nextRotator === rotatorCase.length) {
         nextRotator = 0;
    }

rotatorCase[nextRotator].style.color = rotatorCase[nextRotator].dataset.color;

rotatorCase[nextRotator].classList.add("rotator__case_active");
rotatorCase[currentRotator].classList.remove("rotator__case_active");

setTimeout(changeAdd, rotatorCase[nextRotator].dataset.speed);

}

