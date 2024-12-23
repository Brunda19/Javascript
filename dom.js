//Accessing DOM elements-------------------------------------

// console.log(document.getElementById('heading'));
// let heading = document.getElementById('heading').innerText;
// console.log('heading');
// console.log(document.querySelector('ul'));
// console.log(document.querySelector('.list'));
// console.log(document.querySelector('li'));
// console.log(document.querySelectorAll('li'));
// console.log(document.getElementsByTagName('li'));

//-------------- Manipulating DOM elements-------------------

document.getElementById('heading').innerText = "Namskara";

document.querySelector('ul').firstElementChild.textContent = 'Java';

document.querySelector('ul').lastElementChild.innerHTML = '<h1> Javascript </h1>';