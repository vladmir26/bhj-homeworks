const hasTootlip = Array.from(document.querySelectorAll(".has-tooltip"));

for (let el of hasTootlip) {
    el.addEventListener('click', promptAppearance);
}

function promptAppearance (event) {
    event.preventDefault();

    const link = event.target;
    const tooltipText = link.getAttribute('title');

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerText = tooltipText;

    link.after(tooltip);


}    