
const toDoButton = document.querySelector('.toDoButton');
const toDoInput = document.querySelector('.toDoInput')
const toDoList = document.querySelector('.toDoList')



// Done button
const doneBtnCreator = (e) => {
   
    //  if(e.target.style.textDecorationLine === "line-through" ) {
    //     console.log('inside done'+e);
    //     e.target.style.opacity = '0%';
    //     e.target.style.textDecorationLine = "none";
        
    //  }

    const doneBtn = document.createElement('button');
    doneBtn.innerHTML = '<i class="fa done-btn ">&#xf00c;</i>';

    doneBtn.addEventListener('click', (e) => {
        const doneItem = e.target.parentElement.parentElement;
        doneItem.style.opacity = '40%';
        doneItem.style.textDecorationLine = "line-through";
    });
    return doneBtn;
}


// Edit Button 
const editBtnCreator = () => {
    const editBtn = document.createElement('button');
    editBtn.innerHTML = "<i class='fas fa-pen edit-btn '></i>"

    // here comes the logic for edit 


    return editBtn;
}



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
    const li = document.createElement("li")
    li.innerHTML = toDoInput.value;
    div.className = "todo";
    li.className = "todo-item"

    div.appendChild(li);
    div.appendChild(doneBtnCreator(e));
    div.appendChild(editBtnCreator());
    div.appendChild(deleteBtnCreator());
    toDoList.appendChild(div);
    console.log(div);
    toDoInput.value = '';

})
