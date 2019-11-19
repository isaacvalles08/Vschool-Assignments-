

const list = document.getElementById('list')
const todoList = []

function getTodos(){
  axios.get('https://api.vschool.io/isaac/todo/').then((response) => {
    todoList.push(...response.data)
    for(i = 0; i < todoList.length; i++){
      makeTodo(todoList[i])
    }
  })
}

getTodos()

list.addEventListener('submit', (e) => {
  e.preventDefault()
  const newTodo = {
    title: add.title.value,
    description: add.description.value,
    price: add.price.value,
    imgUrl: add.image.value
  }
  axios.post("https://api.vschool.io/isaac/todo/", newTodo).then(response => {
    makeTodo(response.data)
  })
})

function makeTodo(todo){
    const container = document.createElement('div')
    const h1 = document.createElement('h1') 
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const img = document.createElement('img')
    const checkBox = document.createElement('input')
    const deletBtn = document.createElement('button')
    h1.textContent = todo.title
    h2.textContent = todo.description
    p.textContent = '$' + todo.price
    img.src = todo.imgUrl
    deletBtn.textContent = 'Delete'
    deletBtn.style.borderRadius = '10px'
    checkBox.type = 'checkbox'
    if(todo.completed === true){
      h1.style.textDecoration = 'line-through'
      checkBox.checked = true
    }
    deletBtn.addEventListener('click', function(){
      axios.delete(`https://api.vschool.io/isaac/todo/${todo._id}`).then(response => {
        list.removeChild(container)
    
      })
    })
    checkBox.addEventListener('change', function(e){
      axios.put(`https://api.vschool.io/isaac/todo/${todo._id}`, {completed : !todo.completed}).then(response => {
        todoList.map(toDo => toDo._id === todo._id ? Object.assign(toDo, response.data) : toDo)
        if(response.data.completed){
            h1.style.textDecoration = 'line-through'
        }else{
          h1.style.textDecoration = 'none'
        }
      })
    })
    list.appendChild(container)
    container.appendChild(h1)
    container.appendChild(h2)
    container.appendChild(p)
    container.appendChild(img)
    container.appendChild(checkBox)
    container.appendChild(deletBtn)


}

