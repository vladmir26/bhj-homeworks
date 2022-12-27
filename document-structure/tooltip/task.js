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

    const sizes = link.getBoundingClientRect();
    tooltip.style.display = 'block';
    tooltip.style.top = `${sizes.bottom}px`;

    link.after(tooltip);

    const tooltipSizes = tooltip.getBoundingClientRect();
    tooltip.style.left = sizes.left + (sizes.width /2) -(tooltipSizes.width /2) + 'px';
}   

document.addEventListener("scroll", () => {
  const allTooltipSibling = Array.from(document.querySelectorAll(".tooltip"));


  allTooltipSibling.forEach((element) => {
  
  let sizesLink = element.previousSibling.getBoundingClientRect();
   
  element.style.top = `${sizesLink.bottom}px`;

  element.style.left = sizesLink.left + (sizesLink.width /2) - (element.width /2) + 'px';
  })
  }
 )