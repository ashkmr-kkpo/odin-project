const btn1 = document.querySelector('#btn1');
const textcont = document.querySelector('#item');
const list = document.querySelector('#list1');
textcont.focus();
btn1.addEventListener('click', appendListIem);


function appendListIem(event)
{
  const elem = document.createElement('li');
  const sp = document.createElement('span');
  sp.textContent = textcont.value;
  elem.appendChild(sp);

  const deleteb = document.createElement('button');
  deleteb.textContent = "Delete"
  deleteb.addEventListener('click', deleteItem);
  elem.appendChild(deleteb);

  list.appendChild(elem);
  textcont.focus();
  textcont.value = '';
}


function deleteItem(event)
{
  event.target.parentElement.remove();
}