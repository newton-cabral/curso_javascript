// função que adiciona tarefa

function addTask() {
  // titulo da tarefa
  const taskTitle = document.querySelector("#task-title").value;


  if (taskTitle) {
    const template = document.querySelector(".template");
    const newTask = template.cloneNode(true);
    // adiciona titulo
    newTask.querySelector(".task-title").textcontent = taskTitle;

    //remover as classes desnecessárias

    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    // adicionar a tarefa na lista

    const list = document.querySelector("#task-list");
    list.appendChild(newTask);

// limpa texto
document.querySelector("#task-title").value = "";


  }
}




// evento adiciona tarefa

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  addTask();
})