const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');


let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.responseType = 'json';

xhr.onload = () => {

    console.log(xhr.response);

    for(let key in xhr.response.data.title) {

        console.log(xhr.response.data.title[key]);

        pollTitle.textContent += xhr.response.data.title[key];
    }

    for(let key in xhr.response.data.answers) {

        console.log(xhr.response.data.answers[key])

        pollAnswers.innerHTML += `
        <button class="poll__answer">
        ${xhr.response.data.answers[key]}
        </button>`

        const pollAnawer = Array.from(document.querySelectorAll('.poll__answer'));

        pollAnawer.forEach((answer) => {
            answer.addEventListener("click", () => {
                 alert("Спасибо, ваш голос засчитан!");
            })
        });
    }
    
}

xhr.send();
