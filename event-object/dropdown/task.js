let dropdownList = document.querySelector(".dropdown__list");
let dropdownValue = document.querySelector(".dropdown__value");
let dropdownLink = document.querySelectorAll(".dropdown__link");

dropdownValue.addEventListener("click", openList);

function openList () {
    dropdownList.classList.toggle("dropdown__list_active");
}

for (let link of dropdownLink) {
    link.addEventListener("click", choose);
}

function choose (event) {
    event.preventDefault();
    dropdownValue.textContent = event.target.textContent;
    dropdownList.classList.remove("dropdown__list_active");
}

