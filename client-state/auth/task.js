const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const userId = document.getElementById('user_id');
const welcome = document.getElementById('welcome');
const error = document.getElementById('error');
const btnClear = document.getElementById('clear__btn');
const btnSignout = document.getElementById('signout__btn');
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
          userId.textContent = xhr.response.user_id;
          signin.classList.remove('signin_active');
          welcome.classList.add('welcome_active');
          btnSignout.classList.add('signout-btn_active');
          error.classList.remove('error_active');
        }else {
           error.classList.add('error_active');
        }


    }
    xhr.send(formData);


})

window.addEventListener('load', () => {
    if(localStorage.getItem('id')) {
       userId.textContent = localStorage.getItem('id');
       welcome.classList.add('welcome_active'); 
       signin.classList.remove('signin_active');
       btnSignout.classList.add('signout-btn_active');
    }
})

btnClear.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.removeItem('id');
    login.value = '';
    password.value = '';
    welcome.classList.remove('welcome_active');
    error.classList.remove('error_active');
})

btnSignout.addEventListener('click', (event) => {
    welcome.classList.remove('welcome_active');
    btnSignout.classList.remove('signout-btn_active')
    signin.classList.add('signin_active');
    localStorage.removeItem('id');
    login.value = '';
    password.value = '';
})


