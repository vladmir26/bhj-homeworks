const form = document.getElementById('signin__form');
const userId = document.getElementById('user_id');
const welcome = document.getElementById('welcome');
const btnClear = document.getElementById('clear__btn');
const login = document.getElementById('clear__login');
const password = document.getElementById('clear__password');

let id;



form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.onload = () => {
        if(xhr.response.user_id) {
          localStorage.setItem('id', xhr.response.user_id);
          id = localStorage.getItem('id');
          userId.textContent = id;
          welcome.classList.add('welcome_active');
        } else{
            welcome.textContent = 'Неверный логин/пароль';
            welcome.classList.add('welcome_active');
        }

    }
    xhr.send(formData);


})

window.addEventListener('load', () => {
    if(localStorage.getItem('id')) {
       userId.textContent = localStorage.getItem('id');
       welcome.classList.add('welcome_active');  
    }
   })

   btnClear.addEventListener('click', () => {
    login.value = '';
    password.value = '';
  })


