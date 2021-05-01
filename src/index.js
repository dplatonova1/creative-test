import montserratbold from '../assets/fonts/Montserrat-Bold.ttf';
import montserratboldwoff from '../assets/fonts/Montserrat-Bold.woff';
import montserratboldwoff2 from '../assets/fonts/Montserrat-Bold.woff2';
import montserratregular from '../assets/fonts/Montserrat-Regular.ttf';
import montserratregularwoff from '../assets/fonts/Montserrat-Regular.woff';
import montserratregularwoff2 from '../assets/fonts/Montserrat-Regular.woff2';
import task_2 from './task-2';
import task_3 from './task-3';

import "./style.css"; 

const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const leadItems = document.querySelector('.lead__items');
const leadItemsArray = Array.from(leadItems.children);
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

header.addEventListener("click", (event) => {
  if ((event.target.closest(".header__button")) || (event.target.closest("span"))) {
    sidebar.classList.toggle("hidden");
    let spans = Array.from(event.target.children);

    spans.forEach((el) => {
      if (sidebar.classList.contains("hidden")) {
        el.setAttribute("style", "transform: none; opacity: 1");
      } else {
        el.removeAttribute('style', 'transform: none; opacity: 1')
      }
    });
  }
});


switches.addEventListener("change", (event) => {
  if(event.target.getAttribute('data-id')){
    toggleInput(event.target, leadItemsArray[event.target.getAttribute('data-id')-1])
  } else {
    inputsArray.forEach((el) => {
      el.checked = event.target.checked;
      toggleInput(el, leadItemsArray[el.getAttribute('data-id')-1]);
    });
  }
});


  
  