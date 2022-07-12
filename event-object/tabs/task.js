let tab = Array.from(document.querySelectorAll(".tab"));
let tabContent = Array.from(document.querySelectorAll(".tab__content"));

for (let t of tab) {
    t.addEventListener("click", operation);
}

function operation (event) {
  const currentActiveIndex = tab.findIndex((element) => element.classList.contains("tab_active"));
  tab[currentActiveIndex].classList.remove("tab_active");
  tabContent[currentActiveIndex].classList.remove("tab__content_active");

  const newActiveIndex = tab.indexOf(event.target);
  event.target.classList.add("tab_active");
  tabContent[newActiveIndex].classList.add("tab__content_active");

}

