const tasks = [
  // {
  //   id: 1,
  //   text: "Learn JavaScript",
  //   completed: false,
  //   createdAt: "2024-01-15"
  // },
  // {
  //   id: 2, 
  //   text: "Build Calculator",
  //   completed: true,
  //   createdAt: "2024-01-14"
  // }
];


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
   localStorage.setItem(NewTasks.id, JSON.stringify(NewTasks))

    taskInput.value = '';
    display_task.innerHTML += `
            <hr class="line">
             <li> 
                <input type="checkbox" class="checkBox" id="checkBox"> 
                <label id="checkboxLabel" contenteditable="true" class="Todo-line"> ${NewTasks.text}</label> 
            </li>
    `
    console.log(display_task)
    getAllTasks();
 }          
function getAllTasks()
{
      let len = localStorage.length;
      //let lenOfTasks = tasks.length;
     // console.log(len);
      //console.log(lenOfTasks);
     // const display_task = document.getElementById("taskList")
      let index = 0;
    while(index < len)
    {
       const key = localStorage.key(index)
       const value =JSON.parse(localStorage.getItem(key)) ;
      console.log(key);
      console.log(value)
       display_task.innerHTML += `
            <hr class="line">
            <li> <input type="checkbox" class="checkBox" id="checkBox"> 
            <label id="checkboxLabel" contenteditable="true" class="Todo-line">${value.text} </label>  </li>
       `
        index++;
    }
}           // Read  
//getAllTasks();

// const ReloadBtn = document.getElementById("RelaodBtn");
// DeleteBtn.addEventListener('click',() => {
//   location.reload()
// })
// updateTask(id, changes) // Update
function deleteTask(id){
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