const editBtnCreator = () => {
    const editBtn = document.createElement('button');
    editBtn.innerHTML = "<i class='fas fa-pen edit-btn '></i>"

    // here comes the logic for edit 

    editBtn.addEventListener("dblclick", function () {

        toDoList.contentEditable = true;


    });


    editBtn.addEventListener("click", function () {
        toDoList.contentEditable = false;
    });
    return editBtn;
}

