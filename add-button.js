const toDoButton = document.getElementsByClassName('.toDoButton');
toDoButton.addEventListener("click", (e) => {
    
    e.preventDefault();
    const li=document.createElement("li")
    li.innerHTML = input.value
// li.addEventListener('click', (e)=>{
//     e.target.style.color = black ? e.target.style.color = grey;
// })
ol.appendChild(li)
input.value = ''

})
