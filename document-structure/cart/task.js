const productValue = Array.from(document.querySelectorAll('.product__quantity-value'));
const productDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const productInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));

const products = Array.from(document.querySelector('.product'));

let productsStore = [];

products.forEach((product) =>  {
   productsStore.push({
    id: product.dataset.id,
    amount: Number(product.textContent)
   }) 
});



productInc.forEach((element) => {
  element.addEventListener('click', (event) => {
    const plus = event.target;
    const product = plus.closest('.product');
    const amount = product.querySelector('.product__quantity-value');
    amount.textContent = Number(amount.textContent) + 1;
  }
)});

productDec.forEach((element) => {
  element.addEventListener('click', (event) => {
      const minus = event.target;
      const product = minus.closest('.product');
      const amount = product.querySelector('.product__quantity-value');
      
      if(Number(amount.textContent) > 0) {
        amount.textContent = Number(amount.textContent) - 1
      }
  })
});

const productAdd = Array.from(document.querySelectorAll('.product__add'));

productAdd.forEach((element) => {
  element.addEventListener('click', (event) => {
    const btn = event.target;
    const product = btn.closest('.product');

    const id = product.dataset.id;
    const img = product.querySelector('img');
    const src = img.src;
    const amount = product.querySelector('.product__quantity-value');
    const amountTextContent = amount.textContent;
    
    const cartProducts = document.querySelector('.cart__products');
    
    cartProducts.innerHTML += `<div class="cart__product" data-id="${id}">
    <img class="cart__product-image" src="${src}">
    <div class="cart__product-count">${amountTextContent}</div>
    </div>`;

    cartProducts.forEach((element) => {
      if(element.id) {
        element.amountTextContent = Number(amountTextContent) + 1;
      }
    })
  })
});

