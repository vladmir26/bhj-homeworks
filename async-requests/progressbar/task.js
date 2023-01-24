const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.onload = () => {
        console.log(xhr.response);
    }
    

    xhr.upload.addEventListener('progress', (event) => {
        console.log(event);
        progress.value = "1";
    })
    xhr.send(formData);
})