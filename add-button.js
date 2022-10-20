const toDoButton = document.querySelector('.toDoButton');
const toDoInput = document.querySelector('.toDoInput')
const toDoList = document.querySelector('.toDoList')
//const editBtn = document.querySelector('.toDoList')
const filter=document.querySelector(".toDoFilter")
const form = document.querySelector('.form')
const submit = document.querySelector('.submit')
let todos = [];

// Done button
const doneBtnCreator = (e) => {

    //  if(e.target.style.textDecorationLine === "line-through" ) {
    //     console.log('inside done'+e);
    //     e.target.style.opacity = '0%';
    //     e.target.style.textDecorationLine = "none";

    //  }

    const doneBtn = document.createElement('button');
    doneBtn.innerHTML = '<i class="fa ">&#xf00c;</i>';
     doneBtn.className="done-btn";
    doneBtn.addEventListener('click', (e) => {
        const doneItem = e.target.parentElement.parentElement;
        doneItem.classList.toggle="done";
        doneItem.style.opacity = '40%';
        doneItem.style.textDecorationLine = "line-through";
        
    });
    return doneBtn;
}


// Edit Button 
// const editBtnCreator = () => {
//     const editBtn = document.createElement('button');
//     editBtn.innerHTML = "<i class='fas fa-pen edit-btn '></i>"

//     // here comes the logic for edit 

//     editBtn.addEventListener("dblclick", function () {
//         toDoList.contentEditable = true;
//     });


//     editBtn.addEventListener("click", function () {
//         toDoList.contentEditable = false;
//     });
//     return editBtn;
// }



//Delete Button
const deleteBtnCreator = () => {
    const deleteBtn = document.createElement('button');
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = '<i  class="fa " >&#xf014;</i>';
    console.log(deleteBtn);

    deleteBtn.addEventListener('click', (e) => {
        const deletedItem = e.target.parentElement.parentElement;
        toDoList.removeChild(deletedItem);
    });
    return deleteBtn;
}


toDoButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (!toDoInput.value) {
        alert("Enter Something !");
        return;
    }
    const div = document.createElement("div");
    const li = document.createElement("li");
    let newToDo=toDoInput.value;

    div.className = "todo";
    li.className = "todo-item";
    li.innerHTML = newToDo;
    localStorage.setItem('todos', newToDo);
console.log(newToDo);

    div.appendChild(li);
    div.appendChild(doneBtnCreator(e));
    div.appendChild(editBtnCreator());
    div.appendChild(deleteBtnCreator());
    toDoList.appendChild(div);

    console.log(div);

    const handleLoad = () => {
        localStorage.getItem('toDoInput') ? li.innerHTML = localStorage.getItem('toDoInput') : li.innerHTML = ''
    }

    toDoInput.value = '';
    handleLoad();
})

// toDoButton.addEventListener("click", (e) => {

//     div.appendChild(li);
//     div.appendChild(doneBtnCreator(e));
//     div.appendChild(editBtnCreator());
//     div.appendChild(deleteBtnCreator());
//     toDoList.appendChild(div);
//     localStorage.setItem("todos", toDoInput.value)

//     const handleLoad = () => {
//         localStorage.getItem('todos') ? li.innerHTML = localStorage.getItem('todos') : toDoList.innerHTML = ''
//     }

//     handleLoad();
//     toDoInput.value = '';
// })

form.addEventListener('click', toDoButton)
// toDoButton.addEventListener("click", (e) => {
//     e.preventDefault();

//     if (!toDoInput.value) {
//         alert("Enter Something !");
//         return;
//     }
//     const div = document.createElement("div");
//     const li = document.createElement("li")
//     div.className = "todo";
//     li.className = "todo-item";
//     let newToDo = toDoInput.value;
//     //todos.push(newToDo)
//     //localStorage.setItem('todos',JSON.stringify(todos));
//     localStorage.setItem(newToDo)
//     div.appendChild(li);
//     div.appendChild(doneBtnCreator(e));
//     div.appendChild(editBtnCreator());
//     div.appendChild(deleteBtnCreator());
//     toDoList.appendChild(div);

//     let getValue=localStorage.getItem('newToDo');
//     li.innerHTML = getValue;
//     console.log(div);
//     toDoInput.value = '';
// })


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


// const handleLoad = (e) => {
//     localStorage.getItem('input') ? li.innerHTML = localStorage.getItem('input') : li.innerHTML = ''
// }
// handleLoad()
