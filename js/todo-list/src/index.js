import css from './style.css'

let todolist = document.getElementById('todolist')
let addButton = document.getElementById('additem')
addButton.addEventListener("click", addNewItem)


function addNewItem()
{
    console.log('asdasd')
    let newItem = document.createElement("li")
    newItem.classList.add('item')

    let input = document.createElement("input")
    input.type = "text"
    newItem.appendChild(input)
    todolist.appendChild(newItem)
}