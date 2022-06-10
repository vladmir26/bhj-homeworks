let timer = document.querySelector("#timer");

const interval = setInterval(competition, 1000);

 function competition () {
    let b = Number(timer.textContent) - 1;
    timer.textContent = b;
    
    if(b == 0) {
        alert("Вы победили в конкурсе!")
}
 }

 function Stop() {
clearInterval(interval); 
 }

 

 



