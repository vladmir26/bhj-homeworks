const input = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
const task = document.querySelector('.task');
const tasksControl = document.querySelector('.tasks__control');

const addTodo = () => {
   tasksList.innerHTML += `<div class="task">
    <div class="task__title">
   ${input.value}
   </div>
   <a href="#" class="task__remove">&times;</a>
   </div>`;
   input.value = '';
};

input.addEventListener("keydown", (event) => {

   if (event.key === "Enter")  {
    event.preventDefault();

    if(input.value != '') {
      addTodo();
     }
   }
})

tasksControl.addEventListener("submit", (event) => {
   event.preventDefault();
  
      if(input.value != '') {
        addTodo();
      }
   }
)

tasksList.addEventListener("click", (event) => {

    if (event.target.classList.contains('task__remove')) {
      event.target.parentNode.remove();
   }
})
   
