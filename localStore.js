const li = document.querySelector('li')
console.log(todo)

const handleSubmit = (e) => {
    e.preventDefault()

    // CHANGE VALUE OF H1 
    input.innerHTML = input.value;

    // SAVE IN LOCAL STORAGE
    localStorage.setItem("input", input.value)
    console.log(li)
}

const handleLoad = () => {
    localStorage.getItem('input') ? input.innerHTML = localStorage.getItem('input') : input.innerHTML = ''
    localStorage.getItem('ul') ? ul.innerHTML = localStorage.getItem('ul') : ul.innerHTML = ''

}

handleLoad()

form.addEventListener('submit', handleSubmit)