let rotatorCase = Array.from(document.querySelectorAll("rotator__case"));

for (let r of rotatorCase) {
r.setInterval(() => {
    let currentRotator = rotatorCase.findIndex((index) => {return index.classList.contains("rotator__case_active")});
    let nextRotator;

    if (r.setInterval()) {
      nextRotator = currentRotator + 1;
      if (nextRotator === rotatorCase.length) {
        nextRotator = 0;
      }
      if (nextRotator < 0) {
        nextRotator = rotatorCase.length - 1;
      }

}

rotatorCase[nextRotator].classList.add("rotator__case_active");
rotatorCase[currentRotator].classList.remove("rotator__case_active");

}, 1000)}