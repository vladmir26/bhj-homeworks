const form = document.getElementById('signin__form');
const userId = document.getElementById('user_id');
const welcome = document.getElementById('welcome');

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

window.addEventListener("load", () => {
    if(id) {
       userId.textContent = id;
       welcome.classList.add('welcome_active');  
    }
   })

