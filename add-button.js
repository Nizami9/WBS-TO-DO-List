


const toDoButton = document.querySelector('.toDoButton');
const toDoInput = document.querySelector('.toDoInput')
const toDoList = document.querySelector('.toDoList')
let todos=[],lsArray=[];



// Done button
const doneBtnCreator = (e,index) => {
     

//const editBtn = document.querySelector('.toDoList')
const filter=document.querySelector(".toDoFilter")
const form = document.querySelector('.form')
const submit = document.querySelector('.submit')

// Done button

const doneBtnCreator = (e,index) => {
     

    //  if(e.target.style.textDecorationLine === "line-through" ) {
    //     console.log('inside done'+e);
    //     e.target.style.opacity = '0%';
    //     e.target.style.textDecorationLine = "none";
        
    //  }
    const doneBtn = document.createElement('button');

    doneBtn.innerHTML = '<i class="fa">&#xf00c;</i>';
    doneBtn.className='done-btn'
    const lsArray=JSON.parse(localStorage.getItem('todos'));
       
    doneBtn.addEventListener('click', (e) => {
        
        const doneItem = e.target.parentElement.parentElement;

        if(lsArray[index].done==='true'){
            doneItem.style.opacity = '40%';
            doneItem.style.textDecorationLine = "line-through";
            doneItem.className="done";
            

         }
        
        doneItem.style.opacity = '40%';
        doneItem.style.textDecorationLine = "line-through";
        doneItem.classList.toggle="done";
        lsArray.forEach(element => {
             if(element.newToDo===lsArray[index].newToDo) {
                lsArray[index].done=true;
                localStorage.setItem('todos',JSON.stringify(lsArray));
                doneItem.classList.toggle="done";
             }
        });
       


    });
    return doneBtn;
}


// // Edit Button 


// const editBtnCreator = () => {
//     const editBtn = document.createElement('button');
//     editBtn.innerHTML = "<i class='fas fa-pen edit-btn '></i>"

//     // here comes the logic for edit 





//     editBtn.addEventListener("click", function () {
//         toDoList.contentEditable = false;
//     });


//     return editBtn;
// }



//Delete Button
const deleteBtnCreator = (e,index) => {
    const deleteBtn = document.createElement('button');
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = '<i  class="fa " >&#xf014;</i>';
    console.log(deleteBtn);

    const lsArray=JSON.parse(localStorage.getItem('todos')); 
    
    console.log(lsArray)
    deleteBtn.addEventListener('click', (e) => {
        const deletedItem = e.target.parentElement.parentElement;
        toDoList.removeChild(deletedItem);
        
        lsArray.forEach(element => {
            if(element.newToDo===lsArray[index].newToDo){
                console.log("deleting "+lsArray[index].newToDo)
                lsArray.splice(lsArray[index], 1); 
                localStorage.setItem('todos',JSON.stringify(lsArray));
            }
            
        })

    });
    return deleteBtn;
}




const handleLoad = (e) => {
    
    // window.addEventListener("beforeunload", function(e){
    //     Storage.clear()
    //  }, false);

    if (!localStorage.getItem("todos") ) return;
    todos=localStorage.getItem('todos')

    // if(localStorage.getItem('todos')){
    //     todos=[]; 
    // }
    // else {
    //     todos=localStorage.getItem('todos')

        
    // }
 
    const lsArray=JSON.parse(localStorage.getItem('todos'));


    if(lsArray.length>0){
   for(let i=0;i<lsArray.length;i++) {
      const div = document.createElement("div");
      div.className = "todo";
      const li = document.createElement("li")
      li.className = "todo-item";
      let getNewToDo=lsArray[i].newToDo;
      li.innerHTML = getNewToDo;
      console.log(getNewToDo);
      div.appendChild(li);

      div.appendChild(doneBtnCreator(e,i));
      div.appendChild(editBtnCreator(e));
      div.appendChild(deleteBtnCreator(e,i));

      toDoList.appendChild(div);
      
   }
 }

//   if(window.closed===true) {
//     todos=[];
//      localStorage.clear();
//      }
}


toDoButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (!toDoInput.value) {
        alert("Enter Something !");
        return;


    }
    if (localStorage.getItem("todos")==null ) {
        todos=[];
        lsArray=[];
    }
     
    else
    {
    todos=localStorage.getItem('todos');
    lsArray=JSON.parse(todos);

    }
    if (localStorage.getItem("todos")==null ) 
     todos=[];
    else
    todos=localStorage.getItem('todos');

    const div = document.createElement("div");
    const li = document.createElement("li")
    div.className = "todo";
    li.className = "todo-item";
    li.innerHTML = toDoInput.value;
    
    const newEntry={
         newToDo:toDoInput.value,
         done:false
    }
   // todos.push(newEntry);

    //let lsArray=[];
   
    //lsArray= JSON.parse(todos);
    lsArray.push(newEntry);
    localStorage.setItem('todos',JSON.stringify(lsArray));
    

    div.appendChild(li);
    div.appendChild(doneBtnCreator(e));
    div.appendChild(editBtnCreator());
    div.appendChild(deleteBtnCreator());
    toDoList.appendChild(div);
    
    toDoInput.value = '';


})

// function for dropdown 
filter.addEventListener("click", (e) => {
     e.preventDefault();
     const todoItems= toDoList.childNodes;
     console.log(todoItems);

     todoItems.forEach(item => {
        console.log("inside forEach ,,,,")
        console.log(item.classList);
        console.log(item.classList.toggle);
           switch(e.target.value){
             case ('all') : item.style.display='flex';
                            break;
                     
             case ('done') : 
                if(item.classList.toggle === 'done'){
                    item.style.display='flex';
                    break;
                }
                else{
                    item.style.display='none';
                    break;
                }
            case ('inprogress'):   
                if(item.classList.toggle === 'done'){
                    item.style.display='none';
                    break;
            }
            else{
                    item.style.display='flex';
                    break;
            } 
                }

     })


})