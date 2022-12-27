const productValue = Array.from(document.querySelectorAll('.product__quantity-value'));
const productDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const productInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));

let text;

productValue.forEach((element) =>  {
    
  text =  Number(element.textContent);
});



productInc.forEach((element) => {element.addEventListener('click', (event) => {

    productValue.textContent = text += 1;
}
)})

