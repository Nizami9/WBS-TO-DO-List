// const editBtnCreator = () => {
//     const editBtn = document.createElement('button');

//     editBtn.innerHTML = "<i class='fas fa-pen  '></i>"
//     editBtn.className="edit-btn";
//     // here comes the logic for edit 


//     editBtn.addEventListener("dblclick", function () {

//         toDoList.contentEditable = true;
//         lsArray.forEach(element => {
//             if(element.newToDo===lsArray[index].newToDo){
//                 console.log("editing "+lsArray[index].newToDo)
                
//                 localStorage.setItem('todos',JSON.stringify(lsArray));
//             }
            
//         })


//     });


//     editBtn.addEventListener("click", function () {
//         toDoList.contentEditable = false;
//     });
//     return editBtn;
// }

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