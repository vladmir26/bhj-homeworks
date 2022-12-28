const items = document.getElementById('items');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.responseType = 'json';

xhr.onload = () => {
    console.log(xhr.response);
}


xhr.send();




