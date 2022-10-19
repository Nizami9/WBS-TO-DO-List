const editBtnCreator = () => {
    const editBtn = document.createElement('button');
    editBtn.innerHTML = "<i class='fas fa-pen  '></i>"
    editBtn.className="edit-btn";
    // here comes the logic for edit 

    editBtn.addEventListener("dblclick", function () {
        localStorage.setItem('todos', JSON.stringify(todos));

        toDoList.contentEditable = true;


    });


    editBtn.addEventListener("click", function () {
        toDoList.contentEditable = false;
        localStorage.setItem('todos', JSON.stringify(todos));

    });
    return editBtn;
}

