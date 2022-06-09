let timer = document.querySelector("#timer");

setInterval(function competition () {
    let b = Number(timer.textContent) - 1;
    timer.textContent = b;
    
    if(b == 0) {
        alert("Вы победили в конкурсе!")
}
 }, 1000);



 



