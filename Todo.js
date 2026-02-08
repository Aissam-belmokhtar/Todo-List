
let tasks;
if(localStorage.TodoList != null){
   tasks = JSON.parse(localStorage.TodoList)
}else {
  tasks = [
      // {
  //   id: 1,
  //   text: "Learn JavaScript",
  //   completed: false,
  //   createdAt: "2024-01-15"
  // },
  ];
}

console.log(tasks)

document.addEventListener('DOMContentLoaded',printTasks())
//window.addEventListener('load', getAllTasks);
  const taskInput = document.getElementById("taskInput")
  const addBtns = document.getElementById("addBtn")
  addBtns.addEventListener('click', addTask)
  taskInput.addEventListener('keypress',(e) => {
    if(e.key === 'Enter') addTask();
  })
  
 const display_task = document.getElementById("taskList")

 function addTask(){

    if(taskInput.value === '') return;
    const dateNow =  new Date();
    const NewTasks = {
      id : tasks.length + 1,
      text : taskInput.value,
      completed : false,
      createdAt : dateNow.toLocaleDateString()
    };

    tasks.push(NewTasks);
  
   localStorage.setItem("TodoList", JSON.stringify(tasks))


   taskInput.value = '';
   printTasks()
   
 }  
 function printTasks(){
  // const List = document.getElementById('taskList')
  // const AllTasks = arr.map( Todo =>{
  //   return `
  //            <hr class="line">
  //           <li> 
  //                <input type="checkbox" class="checkBox" id="checkBox"> 
  //                <label id="checkboxLabel" contenteditable="true" class="Todo-line"> ${Todo.text}</label> 
  //           </li>
  //   `
  // })
  // List.insertAdjacentHTML('beforeend',AllTasks.join(''))
  const display_task = document.getElementById("taskList")
  let index = 0;
  let List = '';
    while(index < tasks.length)
    {
      if(index == 0 ){
         List += `
           
            <li> <input type="checkbox" class="checkBox" id="checkBox"> 
            <label id="checkboxLabel" contenteditable="true" class="Todo-line">${tasks[index].text} </label>  </li>
       `
      }else{
           List += `
            <hr class="line">
            <li> <input type="checkbox" class="checkBox" id="checkBox"> 
            <label id="checkboxLabel" contenteditable="true" class="Todo-line">${tasks[index].text} </label>  </li>
       `
      }
        index++;
    }
    display_task.innerHTML = List;
 }
 
 //printTasks(tasks);
// const ReloadBtn = document.getElementById("RelaodBtn");
// DeleteBtn.addEventListener('click',() => {
//   location.reload()
// })
// updateTask(id, changes)

function deleteTask(id)
{
  localStorage.removeItem(id)
  location.reload();
}       

// Delete
//tasks count
// search part

const search_input = document.getElementById("searchInput");
search_input.addEventListener("input", (e) => {
  console.log(e.target.value);
})