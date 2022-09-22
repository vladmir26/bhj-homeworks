const chat = document.querySelector(".chat-widget");


chat.addEventListener("click", openingChat);

function openingChat (event) {
    if (event.target) {
       chat.classList.add("chat-widget_active"); 
    }
}

const input = document.querySelector(".chat-widget__input");
const messageClient = document.querySelector(".message_client");

input.addEventListener("keydown", sendingMessageUser);

function sendingMessageUser (event) {
    if (event.key === "Enter") {
     messageClient.innerHTML += `<div class="message_client">
     <div class="message__time">22:10</div>
     <div class="message__text">Добрый день!</div>
 </div>`;
    }
}