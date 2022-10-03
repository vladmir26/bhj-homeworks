const chat = document.querySelector(".chat-widget");

const ROBOT_MESSAGES = ['Добрый день', 'Все операторы заняты', 'Скоро вернусь', 'Немного подождите', 'Спасибо за вопрос'];

chat.addEventListener("click", openingChat);

function openingChat () {
  chat.classList.add("chat-widget_active"); 
}

const input = document.querySelector(".chat-widget__input");
const messageClient = document.querySelector(".chat-widget__messages");


input.addEventListener("keydown", sendingMessageUser);

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours} : ${minutes}`;

    return time;
}

function sendingMessageUser (event) {
    if (event.key === "Enter") {
       const currentTime = getTime();
       messageClient.innerHTML += `<div class="message_client">
           <div class="message__time">${currentTime}</div>
           <div class="message__text">${input.value}</div>
        </div>`;
        input.value = '';
        sendingMessageRobot();
    }
} 

function sendingMessageRobot () {
    const randomIndex = Math.floor(Math.random()*ROBOT_MESSAGES.length);
    const currentTime = getTime();
    messageClient.innerHTML += `<div class="message">
    <div class="message__time">${currentTime}</div>
    <div class="message__text">${ROBOT_MESSAGES[randomIndex]}</div>
</div>`;
}

