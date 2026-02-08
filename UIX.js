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
let checkboxLabels = document.querySelectorAll("label");
for(let i = 0 ; i < checkBoxs.length ; i++){
  checkBoxs[i].addEventListener('change', ()=> {

     if(checkBoxs[i].checked){
     // console.log("checked")
      
      checkboxLabels[i].classList.add('testing-line')

    }else{
      checkboxLabels[i].classList.remove('testing-line')
      //console.log("not checked")
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