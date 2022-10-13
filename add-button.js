
const toDoButton = document.querySelector('.toDoButton');
const toDoInput =document.querySelector('.toDoInput')
const toDoList = document.querySelector('.toDoList')
toDoButton.addEventListener("click", (e) => {
    
    e.preventDefault();
    console.log(e)
    const li=document.createElement("li")
    li.innerHTML = toDoInput.value
// li.addEventListener('click', (e)=>{
//     e.target.style.color = black ? e.target.style.color = grey;
// })
toDoList.appendChild(li)
input.value = ''

})
