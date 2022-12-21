const input = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
const taskRemove = document.querySelector('.task__remove');
const task = document.querySelector('.task');

input.addEventListener("keydown", (event) => {

   if (event.key === "Enter")  {
    event.preventDefault();

    if(input.value != '') {
       tasksList.innerHTML += `<div class="task">
       <div class="task__title">
      ${input.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
      </div>`;
      input.value = '';
   }
}
})

taskRemove.addEventListener("click", () => {
    task.remove();
    
})
   
