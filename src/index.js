import "./style.css"; 

import montserratbold from './assets/fonts/Montserrat-Bold.ttf';
import montserratboldwoff from './assets/fonts/Montserrat-Bold.woff';
import montserratboldwoff2 from './assets/fonts/Montserrat-Bold.woff2';
import montserratregular from './assets/fonts/Montserrat-Regular.ttf';
import montserratregularwoff from './assets/fonts/Montserrat-Regular.woff';
import montserratregularwoff2 from './assets/fonts/Montserrat-Regular.woff2';
import task_2 from './task-2';
import task_3 from './task-3';



const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar')
const switches = document.querySelector('.switches');
const inputs = document.querySelectorAll('input[data-id]');
const inputsArray = Array.from(inputs);

function toggleInput(input, item) {
  if (input.checked) {
    item.classList.add('hidden')
  } else {
    item.classList.remove('hidden')
  }
}


header.addEventListener("change", () => {
    sidebar.classList.toggle("hidden");
});


switches.addEventListener("change", (event) => {
  if(event.target.getAttribute('data-id')){
    toggleInput(event.target, document.getElementById(event.target.getAttribute('data-id')))
  } else {
    inputsArray.forEach((el) => {
      el.checked = event.target.checked;
      toggleInput(el, document.getElementById(el.getAttribute('data-id')));
    });
  }
});


  
  