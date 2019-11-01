const list = document.getElementById('list')

axios.get('https://api.vschool.io/isaac/todo/').then((response) => {
    const todos = response.data
    for(i = 0; i < todos.length; i++)
    makeTodo(todos[i])
})

list.addEventListener('submit', (e) =>{
    e.preventDefault()
    const newTodo = {
        title: add.title.value,
        description: add.description.value,
        price: add.price.value,
        image: add.image.value
    }
    axios.post("https://api.vschool.io/isaac/todo/", newTodo).then(response => {
    makeTodo(response.data)
    })
})
function makeTodo(todo){
  const container =  document.createElement("div")
  const h1 = document.createElement("h1")
  const p = document.createElement('p')
  const img = document.createElement('img')
  const h2 = document.createElement('h2')
  const checkBox = document.createElement('input')
  checkBox.type = "checkbox"
    if(todo.completed === true){
        h1.style.textDecoration = "line-through"
    }

  h2.textContent = todo.price
  h1.textContent = todo.title
  p.textContent = todo.description
  img.src = todo.imgUrl
  container.appendChild(h1)
  container.appendChild(p)
  container.appendChild(img)
  container.appendChild(h2)
  container.appendChild(checkBox)
  checkBox.addEventListener('change', (e) => {
    e.preventDefault()
    axios.put(`https://api.vschool.io/isaac/todo/${todo.id}`, {completed: true}).then(response => {
        response.style.textDecoration = 'line-through'
    })    
  })
  list.appendChild(container)

  

  
}
