let rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));


setInterval(i, 1000);
  
  function i () {
    let currentRotator = rotatorCase.findIndex((index) => {return index.classList.contains("rotator__case_active")});
    let nextRotator;

    if (setInterval(i, 1000)) {
     nextRotator = currentRotator + 1;
      if (nextRotator === rotatorCase.length) {
         nextRotator = 0;
      }

}

rotatorCase[nextRotator].classList.add("rotator__case_active");
rotatorCase[currentRotator].classList.remove("rotator__case_active");

}

