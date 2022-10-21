window.onload = loadTasks;


const toDoButton = document.querySelector('.toDoButton');
const toDoInput = document.querySelector('.toDoInput')
const toDoList = document.querySelector('.toDoList')
//const editBtn = document.querySelector('.toDoList')
const filter=document.querySelector(".toDoFilter")
const form = document.querySelector('.form')
const submit = document.querySelector('.submit')

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


const handleLoad = (e) => {
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
      div.appendChild(doneBtnCreator(e));
      div.appendChild(editBtnCreator());
      div.appendChild(deleteBtnCreator());
      toDoList.appendChild(div);
      
   }
 }
}



toDoButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (!toDoInput.value) {
        alert("Enter Something !");
        return;
    }
    const div = document.createElement("div");
    const li = document.createElement("li")
    div.className = "todo";
    li.className = "todo-item";
    li.innerHTML = toDoInput.value;
    
    div.appendChild(li);
    div.appendChild(doneBtnCreator(e));
    div.appendChild(editBtnCreator());
    div.appendChild(deleteBtnCreator());
    toDoList.appendChild(div);
    console.log(div);
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



localStorage.setItem('name', 'John');
localStorage.getItem('name');



    // On form submit add task
    document.querySelector("form").addEventListener("submit", e => {
      e.preventDefault();
      addTask();
    });

    function loadTasks() {
      // check if localStorage has any tasks
      // if not then return
      if (localStorage.getItem("tasks") == null) return;

      // Get the tasks from localStorage and convert it to an array
      let tasks = Array.from(JSON.parse(localStorage.getItem("li")));

      // Loop through the tasks and add them to the list
      tasks.forEach(task => {
        const list = document.querySelector("ul");
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? 'checked' : ''}>
          <input type="text" value="${task.task}" class="task ${task.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
          <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
        list.insertBefore(li, list.children[0]);
      });
    }

    function addTask() {
      const task = document.querySelector("form toDoInput");
      const list = document.querySelector("ul");
      // return if task is empty

      // add task to local storage
      localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: task.value, completed: false }]));
    }

    function taskComplete(event) {
      let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
      tasks.forEach(task => {
        if (task.task === event.nextElementSibling.value) {
          task.completed = !task.completed;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function removeTask(event) {
      let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
      tasks.forEach(task => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    var currentTask = null;
    function getCurrentTask(event) {
      currentTask = event.value;
    }

    // edit the task and update local storage
    function editTask(event) {
      let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
      tasks.forEach(task => {
        if (task.task === currentTask) {
          task.task = event.value;
        }
      });
      // update local storage
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }