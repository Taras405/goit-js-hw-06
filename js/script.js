const textElem = document.getElementById('text');
const buttonElem = document.getElementById('button');

buttonElem.textContent = textElem.value;



const imageElem = document.querySelector('.image');
imageElem.src = 'https://tse4.mm.bing.net/th/id/OIP.KH4i3MP5tRbp5txikcU1HAHaEu?rs=1&pid=ImgDetMain&o=7&rm=3';



const linkElem = document.querySelector('.link');
linkElem.href = 'https://taras405.github.io/WebStudio/';

const addAltElem = document.querySelector('.img');
addAltElem.alt = 'змінений alt';



const firstElem = document.querySelector('.list-elements');
firstElem.firstElementChild.textContent = 'змінений елемент 1'

// const firstElem = document.getElementsByClassName('list-elements')[0];
// firstElem.textContent = 'змінений елемент 1';
