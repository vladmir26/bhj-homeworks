const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');


let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.responseType = 'json';

xhr.onload = () => {


    for(let key in xhr.response.data.title) {

        console.log(xhr.response.data.title[key]);

        pollTitle.textContent += xhr.response.data.title[key];
    }

    for(let key in xhr.response.data.answers) {

        pollAnswers.innerHTML += `
        <button class="poll__answer">
        ${xhr.response.data.answers[key]}
        </button>`

        const pollAnawer = Array.from(document.querySelectorAll('.poll__answer'));

        pollAnawer.forEach((answer) => {
                 answer.addEventListener("click", (event) => sendPost(event, xhr.response))
            });
    }
    
}

xhr.send();
 
function sendPost(event, data) {

const btnText = event.target.textContent;
const answerIndex = data.data.answers.indexOf(btnText.trim());


const xhrPost = new XMLHttpRequest;
xhrPost.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
xhrPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );

xhrPost.onload = () => {
    const results = JSON.parse(xhrPost.response).stat;
    let sum = 0;
    let tempString = '';

    results.forEach((result) => {
        sum += result.votes;
    });

    results.forEach((result)=> {
        tempString += `<li>${result.answer}:${(result.votes / sum ) * 100}%</li>`;
    });

    pollAnswers.innerHTML += `
    <ul>
    ${tempString}
    </ul>
    `
}



xhrPost.send(`vote=${data.id}&answer=${answerIndex}`);

}


