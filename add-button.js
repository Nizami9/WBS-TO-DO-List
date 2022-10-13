
const toDoButton = document.querySelector('.toDoButton');
const toDoInput = document.querySelector('.toDoInput')
const toDoList = document.querySelector('.toDoList')



// Done button
const doneBtnCreator = () => {
    const doneBtn = document.createElement('button');
    //doneBtn.class="done-btn";
    doneBtn.innerHTML = '<i class="fa done-btn btn-flex">&#xf00c;</i>';

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
    //editBtn.className = "edit-btn";
    editBtn.innerHTML = "<i class='fas fa-pen edit-btn btn-flex'></i>"

    // here comes the logic for edit 


    return editBtn;
}



//Delete Button
const deleteBtnCreator = () => {
    const deleteBtn = document.createElement('button');
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = '<i  class="fa btn-flex " >&#xf014;</i>';
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
    div.appendChild(doneBtnCreator());
    div.appendChild(editBtnCreator());
    div.appendChild(deleteBtnCreator());
    toDoList.appendChild(div);
    console.log(div);
    toDoInput.value = '';

})
