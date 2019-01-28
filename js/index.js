//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = document.createElement('nav');

element.style.width = '100%';
element.style.height= '20vh';

element.style.backgroundColor = '#1dadfc';

document.getElementById("main").appendChild(element);

var ul = document.createElement('ul');

ul.style.textDecoration = 'none';


for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML = "nav item";
  li.style.display = 'inline-block';
  li.style.padding = '20px';
}
 
element.appendChild(ul);