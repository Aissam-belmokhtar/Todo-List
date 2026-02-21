let NewNote = document.getElementById("new-box")
function NewNoteExpanded(){

    NewNote.classList.add("NewNoteExpanded")
}
// document.addEventListener('click', (event) => {

//   if(NewNote.classList.contains("NewNoteExpanded")){
//     if(event.target.closest(".TodoTasks")){    
//       resetNote()
//     }
//   }
// })

function resetNote(){

 //const NoteElement = document.getElementById("AllElement")
  NewNote.classList.remove("NewNoteExpanded")
}


const checkBoxs = document.querySelectorAll(".checkBox");
checkBoxs.forEach((checkbox,index) => {
  checkbox.addEventListener('change' , () => {
    const states = Array.from(checkBoxs).map( cb => cb.checked);
    localStorage.setItem('checkboxStates',JSON.stringify(states));
  });
});
const savedStates = JSON.parse(localStorage.getItem('checkboxStates'));
if(savedStates){
  checkBoxs.forEach((checkbox,index) => {
      checkbox.checked = savedStates[index];
  })
}
for(let i = 0;i < checkBoxs.length ; i++){
  if(checkBoxs[i].checked){
    tasks[i].completed = "true"
  }
}

// for (let index = 0;index < tasks.length; index++)
// {
//     if(tasks[index].completed === 'true')
//     {
        
//     }
 
// }

let checkboxLabels = document.querySelectorAll("label");
for(let i = 0 ; i < checkBoxs.length ; i++){
  checkBoxs[i].addEventListener('change', ()=> {

     if(checkBoxs[i].checked){
     // console.log("checked")
      tasks[i].completed = true;
      console.log(tasks)
      
      // checkboxLabels[i].classList.add('testing-line')

    }else{
      tasks[i].completed = false;

    }
  })
  }
// for(const key of checkBoxs){
//   checkBoxs[key].addEventListener('click', () => {
//     if(checkBoxs[key].checked){
//      // console.log("checked")
      
//       checkboxLabels[key].classList.add('testing-line')

//     }else{
//       checkboxLabels[key].classList.remove('testing-line')
//       //console.log("not checked")
//     }
//   })
// }
