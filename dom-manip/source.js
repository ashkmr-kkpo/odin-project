const content = document.createElement('p');
content.classList.add('red');
content.style.color = "red"
content.textContent = 'hey i\'m red';
container.appendChild(content);

const blue = document.createElement('h3');
blue.classList.add('blue');
blue.style.color = "blue"
blue.textContent = 'i\'m a blue h3';
container.appendChild(blue);

const border = document.createElement('div');
border.classList.add('border');
border.style.border.color = "black"
border.style.backgroundColor = "pink"

const child1 = document.createElement('h1')
child1.textContent = "im in a div"
const child2 = document.createElement('p')
child2.textContent = "ME TOO!"
border.append(child1);
border.append(child2);

container.appendChild(border);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function (e) {
  console.log(e);
  alert("Hello World");
});