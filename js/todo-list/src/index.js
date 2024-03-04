import css from "./style.css";

let todolist = document.getElementById("todolist");
let addButton = document.getElementById("additem");
addButton.addEventListener("click", addNewItem);

function refreshList() {
  let keys = Object.keys(localStorage);
  for (let key of keys) {
    console.log(key);
    addNewItemInternal(localStorage[key], key);
  }
}

function addNewItemInternal(itemContent, keyValue) {
  let newItem = document.createElement("li");
  newItem.classList.add("item");
  let input = document.createElement("input");
  input.type = "text";
  if (keyValue == null) {
    input.id = (Math.random() + 1).toString(36).substring(7);
  } else {
    input.id = keyValue;
  }
  let save = document.createElement("button");
  save.textContent = "save";
  save.addEventListener("click", {
    handleEvent: function () {
      submitForm(input.id);
    },
  });
  input.value = itemContent;
  newItem.appendChild(input);
  newItem.appendChild(save);
  todolist.appendChild(newItem);
}

function addNewItem() {
  addNewItemInternal("", null);
}

function submitForm(id) {
  let inputNow = document.getElementById(id);
  localStorage.setItem(id, inputNow.value);
}

refreshList();
